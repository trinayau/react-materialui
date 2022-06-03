import { Home } from "@mui/icons-material";
import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";

const Sidebar = () => {
    return ( 
    <Box flex={1} p={2} sx={{display:{xs:"none", sm:"block"}}}>
        Sidebar
        <List>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#home">
              <ListItemIcon>
              <Home/>
              </ListItemIcon>
              <ListItemText primary="Homepage" />
            </ListItemButton>
          </ListItem>
          </List>
    </Box> );
}
 
export default Sidebar;
