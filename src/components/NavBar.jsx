import React from 'react';
import { AppBar, Toolbar, styled, Typography, Box, InputBase, Badge, Avatar, Menu, MenuItem, Button } from '@mui/material';
//import Pets from '@mui/icons-material';
import PetsIcon from '@mui/icons-material/Pets';
import { Mail, Notifications } from '@mui/icons-material';
import { deepOrange } from '@mui/material/colors';


const StyledToolbar = styled(Toolbar)({
    display:"flex",
    justifyContent:"space-between"
});

const Search = styled("div")(({theme}) => ({
    backgroundColor: "white",
    padding: "0 10px",
    borderRadius: theme.shape.borderRadius,
    width: "40%"
}));

const Icons = styled(Box)(({theme}) => ({
    //backgroundColor: "white"
    display: "flex",
    alignItems: "center",
    gap: "20px"//,
   // [theme.breakpoints.up("sm")]: {
     //   display: "none"
    //}
}));

/*const UserBox = styled(Box)(({theme}) => ({
    //backgroundColor: "white"
    display: "flex",
    alignItems: "center",
    gap: "10px"
}));
<UserBox>
    <Avatar sx={{bgcolor: deepOrange[400], width: 30, height: 30}} >B</Avatar>
    <Typography variant='h7' >Baby</Typography>
</UserBox>


*/

const Navbar = () => {

    const [anchorEl , setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    }

    return (
        <AppBar position="sticky">
            <StyledToolbar>
                <Typography variant="h6" sx={{display:{xs:"none",sm:"block"}}}>
                    PETS
                </Typography>
                <PetsIcon sx={{display:{xs:"block",sm:"none"}}}/>
                <Search><InputBase placeholder='search...'></InputBase></Search>
                <Icons>
                    <Badge badgeContent={4} color="error">
                        <Mail/>
                    </Badge>
                    <Badge badgeContent={1} color="error">
                        <Notifications/>
                    </Badge>
                    <Button>
                    <Avatar id="avatar-id" sx={{bgcolor: deepOrange[400], width: 30, height: 30}} onClick={handleClick} >B</Avatar>
                    </Button>
                </Icons>
               
            </StyledToolbar>
            <Menu
                id="demo-positioned-menu"
                aria-labelledby="avatar-id"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
            >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
                <MenuItem onClick={handleClose}>Logout</MenuItem>
            </Menu>
        </AppBar>
    );
}

export default Navbar;
