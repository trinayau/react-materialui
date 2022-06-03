import { Box, Stack } from '@mui/material';
import {Feed, Sidebar, Rightbar, Navbar} from './components';

function App() {
  return (
    <Box>
    <Navbar/>
    <Stack direction="row" spacing={10} justifyContent="space-evenly">
    <Sidebar/>
    <Feed/>
    <Rightbar/>
  </Stack>
    </Box>
  );
}

export default App;
