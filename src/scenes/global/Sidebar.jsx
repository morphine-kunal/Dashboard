import { useState } from "react";
import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import { tokens } from "../../theme";
import HomeOutlined from "@mui/icons-material/HomeOutlined";
import PeopleOutlined from "@mui/icons-material/PeopleOutlined";
import ContactsOutlined from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlined from "@mui/icons-material/ReceiptOutlined";
import PersonOutlined from "@mui/icons-material/PersonOutlined";
import CalendarTodayOutlined from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlined from "@mui/icons-material/HelpOutlined";
import BarChartOutlined from "@mui/icons-material/BarChartOutlined";
import PieChartOutlinedOutlined from "@mui/icons-material/PieChartOutlineOutlined";
import TimelineOutlined from "@mui/icons-material/TimelineOutlined";
import MenuOutlined from "@mui/icons-material/MenuOutlined";
import MapOutlined from "@mui/icons-material/MapOutlined";

const Sidebar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isCollapsed, setIsCollapsed] = useState("false");
  const [selected, setSelected] = useState("Dashboard");

  return (
    <Box
      sx={{
        "& .pro-sidebar-inner": {
          background: `${colors.primary[400]} !important`,
        },
        "& .pro-icon-wrapper": {
          backgroundColor: "transparent !important",
        },
        "& .pro-inner-item": {
          padding: "5px 35px 5px 20px !important",
        },
        "& .pro-inner-item:hover": {
          color: "#868dfb !important",
        },
        "& .pro-menu-item:active": {
          color: "6870fa !important",
        },
      }}
    >
      <ProSidebar collapsed={isCollapsed}>
        <Menu iconShape="square">
          {/* Logo and Menu icon  */}
          <MenuItem
            onClick={() => setIsCollapsed(!isCollapsed)}
            icon={isCollapsed ? <MenuOutlined /> : undefined}
            style={{
              margin: "10px 0 10px 0",
              color: colors.grey[100],
            }}
          >
            {!isCollapsed && (
              <Box
                display={"flex"}
                justifyContent="space-between"
                alignItems={"center"}
                ml="15px"
              >
                <Typography varient='h3' color={colors.grey[100]}>MORPHINE</Typography>
                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                  <MenuOutlined />
                </IconButton>
              </Box>
            )}
          </MenuItem>
            {/* user */}
            {!isCollapsed && (
                <Box mb={'25px'}>
                    <Box display={'flex'} justifyContent='center' alignItems={'center'}>
                        <img alt="user-dp"
                        width={'100px'}
                        height='100px'
                        src="../../assets/user.jpg"
                        style={{cursor: 'pointer', borderRadius: '50%'}}
                        />
                    </Box>
                    <Box textAlign={'center'}>
                        <Typography varient='h2' color={colors.grey[100]} fontWeight='bold' sx={{m: '10px 0 0 0'}}>Kunal Kishore</Typography>
                        <Typography varient='h3' color={colors.greenAccent[300]}>Admin</Typography>
                    </Box>
                </Box>
            )}

            

        </Menu>
      </ProSidebar>
    </Box>
  );
};

export default Sidebar;
