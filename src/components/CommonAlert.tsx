import React, { useEffect } from 'react';

import { Dialog, DialogTitle, DialogContent, DialogActions, Button } from '@mui/material';
import { useAlertStore } from '@/store/alertStore';

export default function CommonAlert() {
  const { ...props } = useAlertStore();

  return (
    <Dialog
      open={props.isAlertOpen}
    >
      <DialogTitle id="alert-dialog-title">
        {props.title}
      </DialogTitle>

      {
        (props?.msg && props?.msg.length > 0) &&
        <DialogContent>
          {props.msg}
        </DialogContent>
      }

      <DialogActions>
        {props.onConfirm && 
          <Button onClick={props.onConfirm}>확인</Button>}
        {props.onCancel && 
          <Button onClick={props.closeAlert}>취소</Button>}
      </DialogActions>
    </Dialog>
  )
}