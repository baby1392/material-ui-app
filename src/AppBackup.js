
import { useState } from 'react';
import Button from '@mui/material/Button';
import {Search, Send, ScheduleSend, Delete} from '@mui/icons-material';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import { yellow } from '@mui/material/colors';
/*import { ImgBtn } from './ImgBtn';*/
import Fn1 from './Fncomp1';
import Typography from '@mui/material/Typography';



const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(yellow[500]),
  backgroundColor: yellow[500],
  '&:hover': {
    backgroundColor: yellow[600],
  },
}));




function App() {

  return (
    <div>
      <br/>
      <Button variant="contained" size="small" startIcon={<Search/>} ></Button>
      <br/><br/>
      <Button variant="contained" color="success" size="medium" startIcon={<ScheduleSend/>}> Add</Button>
      <br/><br/>
      <Button variant="contained" color="error" startIcon={<Delete/>} onClick={() => {
        alert("Removed");
      }} size="medium" > Remove</Button>
      <br/><br/>
      <Stack direction="row"  alignItems="center" spacing={1} >
        <IconButton aria-label="delete" size="small" >
          <Delete fontSize="inherit" ></Delete>
        </IconButton>
        <IconButton aria-label="delete" size="medium" >
          <Delete fontSize="inherit" ></Delete>
        </IconButton>
        <IconButton aria-label="delete" size="large" >
          <Delete fontSize="inherit" ></Delete>
        </IconButton>
      </Stack>
      <br/><br/>
      <ColorButton variant="contained" size="small" > Update </ColorButton>
      <Button variant="contained" sx={{
        backgroundColor: "black",
        color: "white",
        "&:hover":{
          backgroundColor: "#5F5E5E"
        }
      }} size="medium"> Test Button</Button>
      <br/><br/>
      <Fn1></Fn1>
      <Typography variant="h2"  component="p">
        Click Photo
      </Typography>
    </div>
  );
}

export default App;
