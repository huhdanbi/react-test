import { useRoutes } from 'react-router-dom';

import Home from '@/pages/home/Home'
import Programs from '@/pages/programs/Programs';
import Users from '@/pages/users/Users';

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
			element: <Users />,
		}
	])
}