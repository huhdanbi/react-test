import React, { useState } from 'react';
import { useStore } from '@/store/store';

import { AppBar, Button } from '@mui/material';

import MenuIcon from '@mui/icons-material/Menu';

export default function Header() {
	const toggleNav = useStore((state) => state.toggleNav);

	return (
		<AppBar className="header" position="fixed" elevation={0}>
			<div className="inner-header">
				<div className="left-sec">
					TEST
					<Button onClick={toggleNav}>
						<MenuIcon />
					</Button>
				</div>

				<div className="right-sec">
					<Button>
						profile
					</Button>
				</div>
			</div>
		</AppBar>
	)
}
