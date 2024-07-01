import { Link } from 'react-router-dom';
import { useCommonStore } from '@/store/commonStore';

import { AppBar, Button } from '@mui/material';

import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';

export default function Header() {
	const { toggleNav } = useCommonStore();
	const [isNavOpen, setIsNavOpen] = useState<boolean>(false);

	const onGnb = () => {
		setIsNavOpen(!isNavOpen);
		toggleNav( isNavOpen );
	}

	return (
		<AppBar className="header" position="fixed" elevation={0}>
			<div className="inner-header">
				<div className="left-sec">
					TEST
					<Button onClick={onGnb}>
						<MenuIcon />
					</Button>
				</div>

				<div className="right-sec">
					<Button variant="contained" component={Link} to={'/profile'} >
						profile
					</Button>
				</div>
			</div>
		</AppBar>
	)
}
