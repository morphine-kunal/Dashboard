import { Box, useTheme, Typography } from "@mui/material";
import Header from "../../components/Header";
import Accordian from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { tokens } from "../../theme";

const FAQ = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m={"20px"}>
      <Header title={"FAQ"} subtitle="Frequently asked question page." />
      <Accordian defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} />
        <Typography variant="h5" color={colors.greenAccent[500]}>
          An Important Question
        </Typography>     
        <AccordionDetails>
          <Typography>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Repudiandae molestiae pariatur at temporibus officiis perferendis ab
            ex nam nesciunt sit?
          </Typography>
        </AccordionDetails>
      </Accordian>

      <Accordian defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} />
        <Typography variant="h5" color={colors.greenAccent[500]}>
          Another Important Question
        </Typography>      
        <AccordionDetails>
          <Typography>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Repudiandae molestiae pariatur at temporibus officiis perferendis ab
            ex nam nesciunt sit?
          </Typography>
        </AccordionDetails>
      </Accordian>

      <Accordian defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} />
        <Typography variant="h5" color={colors.greenAccent[500]}>
          Very Important Question
        </Typography>
        <AccordionDetails>
          <Typography>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Repudiandae molestiae pariatur at temporibus officiis perferendis ab
            ex nam nesciunt sit?
          </Typography>
        </AccordionDetails>
      </Accordian>

      <Accordian defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} />
        <Typography variant="h5" color={colors.greenAccent[500]}>
          Very very Important Question
        </Typography>
        <AccordionDetails>
          <Typography>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Repudiandae molestiae pariatur at temporibus officiis perferendis ab
            ex nam nesciunt sit?
          </Typography>
        </AccordionDetails>
      </Accordian>

      <Accordian defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} />
        <Typography variant="h5" color={colors.greenAccent[500]}>
          Most Important Question
        </Typography>
        <AccordionDetails>
          <Typography>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Repudiandae molestiae pariatur at temporibus officiis perferendis ab
            ex nam nesciunt sit?
          </Typography>
        </AccordionDetails>
      </Accordian>

      <Accordian defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} />
        <Typography variant="h5" color={colors.greenAccent[500]}>
          Best  Question
        </Typography>
        <AccordionDetails>
          <Typography>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Repudiandae molestiae pariatur at temporibus officiis perferendis ab
            ex nam nesciunt sit?
          </Typography>
        </AccordionDetails>
      </Accordian>
    </Box>
  );
};
export default FAQ;
