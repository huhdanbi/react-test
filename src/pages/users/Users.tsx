import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLoadingStore } from '@/store/commonStore';

import { fetchUsers } from '@/api/users';
import SearchBox from '@/components/layouts/SearchBox';

import { Table, TableBody, TableCell, TableHead, TableRow, Pagination, Button } from '@mui/material';

const headers = [
	{ title: 'id' },
	{ title: 'name' },
	{ title: 'age' },
	{ title: 'gender' },
	{ title: 'phone number' },
	{ title: 'role' },
]

export default function Users() {
	const limit: number = 10;
	const [skip, setSkip] = useState<number>(0);
	const [page, setPage] = useState<number>(1);
	const [userList, setUserList] = useState<any[]>([]);
	const [pageCount, setPageCount] = useState<number | null>(null);
	const [q, setQ] = useState<any>('');

	const { useLoading } = useLoadingStore();

	const navigator = useNavigate();

	const getPageCount = (total: number, limit: number) => {
		setPageCount(Math.ceil(total / limit));
	}

	useEffect(() => {
		const getUsers = async () => {
			useLoading(true);

			try {
				await fetchUsers({ limit, skip, q }).then((res) => {
					getPageCount(res.total, limit);
					setUserList(res.users);
				})
			} catch (error) {
				console.log(error);
			}

			useLoading(false);

		}

		getUsers();

	}, [page, q])

	const onChangePage = (num: any, val: number) => {
		setPage(val);
		setSkip((val - 1) * limit);
	}

	const onSearch = (params: object) => {
		setQ((params as any).searchKeyword);
	}

	const onAddUser = () => {
		navigator('addUser')
	}

	return (
		<>
			{
				<>
					<SearchBox onSearch={onSearch} />
					<div className="box-contents">
						<Button onClick={onAddUser} sx={{ mb: '10px'}} variant='contained' >Add User</Button>

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
										<TableCell align="center">{e.lastName}</TableCell>
										<TableCell align="center">{e.age}</TableCell>
										<TableCell align="center">{e.gender}</TableCell>
										<TableCell align="center">{e.phone}</TableCell>
										<TableCell align="center">{e.role}</TableCell>
									</TableRow>
								))}
							</TableBody>
						</Table>

						{pageCount &&
							<Pagination className="list-pagination" count={pageCount} page={page} onChange={(e, v) => onChangePage(e, v)} />
						}
					</div>
				</>
			}
		</>
	)
}