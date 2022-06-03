import { Box, Container, Stack } from '@mui/material';
import {Feed, Sidebar, Rightbar} from './components';

function App() {
  return (
    <Box>
    {/* navbar */}
    <Stack direction="row" spacing={10} justifyContent="space-evenly">
    <Sidebar/>
    <Feed/>
    <Rightbar/>
  </Stack>
    </Box>
  );
}

export default App;
