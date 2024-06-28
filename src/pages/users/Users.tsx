import React, { useEffect, useState } from 'react';

import { fetchUsers } from '@/api/users';

import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Pagination } from '@mui/material';

const Loading = React.lazy(() => import('@/components/Loading'));

const headers = [
	{ title: 'id' },
	{ title: 'name' },
	{ title: 'age' },
	{ title: 'gender' },
	{ title: 'phone number' },
	{ title: 'role' },
]

export default function Users() {
	const limit:number = 10;
	const [skip, setSkip] = useState<number>(0);
	const [page, setPage] = useState<number>(1);
	const [userList, setUserList] = useState<any[]>([]);
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const [pageCount, setPageCount] = useState<number | null>(null);

	const getPageCount = (total:number, limit:number) => {
		setPageCount(Math.ceil(total/limit));
	}

	useEffect(() => {
		const getUsers = async () => {
			setIsLoading(true);
			
			try {
				await fetchUsers({ limit, skip }).then((res) => {
					getPageCount(res.total, limit);
					setUserList(res.users);
				})
			} catch (error) {
				console.log(error);
			}

			setIsLoading(false);
		}

		getUsers();

	}, [page])

	const onChangePage = (num: any, val: number) => {
		setPage(val);
		setSkip((val - 1) * limit);
	}

	return (
		<>
			{isLoading ? <Loading /> :
				<TableContainer component={Paper}>
					<Table aria-label="simple table">
						<TableHead>
							<TableRow>
								{headers.map((e, i) => (
									<TableCell align="center" key={i}>{e.title}</TableCell>
								))}
							</TableRow>
						</TableHead>
						<TableBody>
							{userList.map((e: any, i: number) => (
								<TableRow
									key={i}
								>
									<TableCell component="th" scope="row" align="center">
										{e.id}
									</TableCell>
									<TableCell align="center">{e.username}</TableCell>
									<TableCell align="center">{e.age}</TableCell>
									<TableCell align="center">{e.gender}</TableCell>
									<TableCell align="center">{e.phone}</TableCell>
									<TableCell align="center">{e.role}</TableCell>
								</TableRow>
							))}
						</TableBody>
					</Table>

					{	pageCount &&
						<Pagination className="list-pagination" count={pageCount} page={page} onChange={(e, v) => onChangePage(e, v)} />
					}
				</TableContainer>
			}
		</>
	)
}