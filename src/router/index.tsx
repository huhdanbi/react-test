import { useRoutes } from 'react-router-dom';

import Home from '@/pages/home/Home'

import Programs from '@/pages/programs/Programs';

import Users from '@/pages/users/Users';
import AddUser from '@/pages/users/AddUser';

import Profile from '@/pages/Profile/Profile';

import Page404 from '@/pages/error/Page404';

export default function AppRouter(){
	return useRoutes([
		{
			path: '/',
			element: <Home />,
		},
		{
			path: '/programs',
			element: <Programs />,
		},
		{
			path: '/users',
			children: [
				{
					index: true,
					element: <Users />,
				},
				{
					path: 'addUser',
					element: <AddUser />,
				}
			]
		},
		{
			path: '/profile',
			element: <Profile />
		},
		
		/* 404 */
		{
			path: '/*',
			element: <Page404 />
		}
	])
}