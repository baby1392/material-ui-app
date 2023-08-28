import Sidebar from "./components/Sidebar";
import Feed from "./components/Feed";
import Rightbar from "./components/Rightbar";
import { Stack, Box } from "@mui/material";
import Navbar from "./components/NavBar";

function App() {
    return (
        <Box>
            <Navbar></Navbar>
            <Stack direction="row" spacing={1} justifyContent="space-between"  >
                <Sidebar></Sidebar>
                <Feed></Feed>
                <Rightbar></Rightbar>
            </Stack>
        </Box>
    );
}

export default App;