import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';

import Button from '@mui/material/Button';

export default function Header() {

	const [ isOpend, setIsOpend ] = useState(false);

	const toggleGnb = () => {
		setIsOpend(!isOpend)
	}

	return (
		<AppBar className="header" position="fixed" elevation={0}>
			<div className="inner-header">
				<div className="left-sec">
					TEST
					<Button onClick={() => toggleGnb()}>
						<span>menu</span>
					</Button>
				</div>

				<div className="right-sec">
					<Button>
						qf
					</Button>
				</div>
			</div>
		</AppBar>
	)
}
