import { Box } from "@mui/material";
import Header from "../../components/Header";
import LineChart from "../../components/LineChart";

const Line = () =>{
    return (
    <Box m='20px'>
        <Header title='pH' subtitle='A pH range of 6.5 to 8.5 is considered suitable for drinking.'/>

        <Box height='60vh' width='75vw'>
            <LineChart/>
        </Box>
    </Box>
    )
}
export default Line;