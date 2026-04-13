import * as React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";

import {
    Drawer,
    List,
    ListItem,
    ListItemButton,
    ListItemText,
    Toolbar,
    Typography,
    Box,
} from "@mui/material";

const drawerWidth = 240;

export default function Sidebar() {
    const menuItems = [
        "Dashboard",
        "Projects",
        "AI Models",
        "Settings",
        "Profile",
    ];

    return (
        <Drawer
            variant="permanent"
            sx={{
                width: drawerWidth,
                flexShrink: 0,

                "& .MuiDrawer-paper": {
                    width: drawerWidth,
                    boxSizing: "border-box",
                    backgroundColor: "#111827",
                    color: "white",
                },
            }}
        >
            <Toolbar>
                <Typography variant="h6">
                    <FontAwesomeIcon icon={faGraduationCap} />
                    &nbsp; PDEU
                </Typography>
            </Toolbar>

            <Box>
                <List>
                    {menuItems.map((text, index) => (
                        <ListItem key={index} disablePadding>
                            <ListItemButton>
                                <ListItemText primary={text} />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
            </Box>
        </Drawer>
    );
}
