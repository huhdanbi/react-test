import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useCommonStore } from '@/store/commonStore';

import { List, ListItem, Button } from '@mui/material';

import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import StyleRoundedIcon from '@mui/icons-material/StyleRounded';

interface RouteList {
	name: string,
	path: string,
	icon: any,
	children?: RouteList[],
}

const routeList:RouteList[] = [
	{
		name: 'Home',
		path: '/',
		icon: <HomeRoundedIcon />
	}, {
		name: 'Users',
		path: '/users',
		icon: <PersonRoundedIcon />
	}, {
		name: 'Programs',
		path: '/programs',
		icon: <StyleRoundedIcon />
	},
]

export default function LeftGnb() {
	const isNavOpen = useCommonStore((state) => state.isNavOpen);

	const location = useLocation();
	const { pathname } = location;

	return (
		<>
			{isNavOpen &&
				<div className="left-gnb">
					<List className="list-gnb">
						{
							routeList.map((e, i) => (
								<ListItem key={i}>
									<Button component={Link} to={e.path} className={`link-gnb ${pathname === e.path && "active"}`}>
										{e.icon}
										{e.name}
									</Button>
								</ListItem>
							))
						}
					</List>
				</div>
			}
		</>
	)
}