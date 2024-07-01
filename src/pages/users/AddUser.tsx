import React from 'react';

import { styled, Grid, TextField, Button, InputLabel, RadioGroup, FormControlLabel, Radio } from '@mui/material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1,
});

export default function AddUser() {

  return (
    <div className="box-contents">
      <form>
        <Grid mb={2}>
          <InputLabel htmlFor="name">name</InputLabel>
          <TextField id="name" variant="outlined" fullWidth />
        </Grid>
        <Grid container spacing={2} mb={2}>
          <Grid item xs={6}>
            <InputLabel htmlFor="gender">gender</InputLabel>
            <RadioGroup defaultValue={0} row > 
              <FormControlLabel value={0} control={<Radio />} label="남" />
              <FormControlLabel value={1} control={<Radio />} label="여" />
            </RadioGroup>
          </Grid>
          <Grid item xs={6}>
            <InputLabel htmlFor="number">number</InputLabel>
            <TextField id="number" variant="outlined" fullWidth />
          </Grid>
        </Grid>
        <Grid container spacing={2} >
          <Grid item xs={6}>
            <InputLabel htmlFor="age">age</InputLabel>
            <TextField id="age" variant="outlined" fullWidth />
          </Grid>
          <Grid item xs={6}>
            <InputLabel htmlFor="role">role</InputLabel>
            <TextField id="role" variant="outlined" fullWidth />
          </Grid>
        </Grid>

        <div>
          <Button
            component="label"
            variant="outlined"
            tabIndex={-1}
            startIcon={<CloudUploadIcon />}
          >
            Upload file
            <VisuallyHiddenInput type="file" />
          </Button>
        </div>

        <Button variant="contained">저장</Button>
      </form>
    </div>

  )
}