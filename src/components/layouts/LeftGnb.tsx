import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useStore } from '@/store/store';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Button from '@mui/material/Button';

import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import StyleRoundedIcon from '@mui/icons-material/StyleRounded';

const routeList = [
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
	const isNavOpend = useStore((state) => state.isNavOpend);
	
	const location = useLocation();
	const { pathname } = location;

	return (
		<>
			{ isNavOpend && 
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