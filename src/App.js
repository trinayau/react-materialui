import { Box, Stack } from '@mui/material';
import {Feed, Sidebar, Rightbar, Navbar} from './components';

function App() {
  return (
    <Box>
    <Navbar/>
    <Stack direction="row" spacing={2} justifyContent="space-between">
    <Sidebar/>
    <Feed/>
    <Rightbar/>
  </Stack>
    </Box>
  );
}

export default App;
