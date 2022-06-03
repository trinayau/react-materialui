import { AppBar, Toolbar, styled, Typography, Box, InputBase, Badge, Avatar, Menu, MenuItem} from "@mui/material";
import PetsIcon from '@mui/icons-material/Pets';
import { Mail, Notifications } from "@mui/icons-material";
import { useState } from "react";

const StyledToolbar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between",
    backgroundColor: "#d6ccc2"
})

const Search = styled("div")(({theme})=>({
    backgroundColor: "white",
    padding:"0 10px",
    borderRadius: theme.shape.borderRadius,
    width: "40%"
}))

const Icons = styled(Box)(({theme})=>({
    display: "none",
    gap:"20px",
    alignItems: "center",
    // if small or bigger than small:
    [theme.breakpoints.up("sm")]: {
        display:"flex"
    }

}))

const UserBox = styled(Box)(({theme})=>({
    display: "flex",
    gap:"10px",
    alignItems: "center",
    [theme.breakpoints.up("sm")]: {
        display:"none"
    }

}));

const Navbar = () => {

    const [open, setOpen] = useState(false);

    return (
    <AppBar position="sticky">
        <StyledToolbar>
        <Typography variant="h6" sx={{display:{xs:"none", sm:"block"}}}>Trina.io</Typography>
        <PetsIcon sx={{display:{xs:"block",sm:"none"}}}/>
        <Search>
        <InputBase placeholder="Search"/></Search>
        <Icons>
            <Badge badgeContent={4} color="primary">
            <Mail />
            </Badge>
            <Badge badgeContent={2} color="primary">
            <Notifications />
            </Badge>
            <Avatar sx={{width:30, height:30}}src="https://images.pexels.com/photos/732425/pexels-photo-732425.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                onClick={(e) =>setOpen(true)}
            />
        </Icons>
        <UserBox onClick={(e) =>setOpen(true)}>
        <Avatar sx={{width:30, height:30}}src="https://images.pexels.com/photos/732425/pexels-photo-732425.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        />
        <Typography variant="span">Trina</Typography>
        </UserBox>
        </StyledToolbar>
        <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={(e) =>setOpen(false)}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuItem >Profile</MenuItem>
        <MenuItem >My account</MenuItem>
        <MenuItem >Logout</MenuItem>
      </Menu>
    </AppBar> );
}
 
export default Navbar;
