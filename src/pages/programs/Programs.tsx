import React, { useState } from 'react';
import { useAlertStore } from '@/store/alertStore';

import { Button } from '@mui/material';

import Popup from '@/components/Popup';
import TestPage from './TestPage';

export default function Programs() {
	const [isOpen, setIsOpen] = useState<boolean>(false);
	const { openAlert } = useAlertStore();

	const onPopup = () => {
		setIsOpen(true);
	}

	const onAlert = () => {
		openAlert({
			title: 'title',
			msg: 'msg',
			onConfirm: () => {
				console.log('confirm');
			},
			onCancel: () => {
				console.log('cancel');
				
			}
		})
	}

	const onClose = () => {
		setIsOpen(false);
	}

	return (
		<div>
			<Button onClick={onPopup} sx={{ mb: '10px' }} variant='contained' >popup test</Button>
			<Button onClick={onAlert} sx={{ mb: '10px' }} variant='contained' >alert test</Button>

			<TestPage title={'타이틀'} number={1111} />

			<Popup isOpen={isOpen} onClose={onClose}>
				<div>
					TEST POPUP
				</div>
			</Popup>
		</div>
	)
}