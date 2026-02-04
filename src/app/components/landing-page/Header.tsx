"use client"

import { AppBar, Box, IconButton, Toolbar, Typography } from "@mui/material"
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import { useContactStore } from "../controller/contactController";
import Image from "next/image";


export default function Header() {
    const { activePage } = useContactStore();
    const togglePage = activePage === "contact" ? "Contacts" : "Groups";

    return (
        <AppBar
            sx={{
                background: 'linear-gradient(to bottom right,  rgba(23,23,23, 1)  0%, rgba(255,101,1, 1) 50% , rgba(255,101,1, 1) 40% , rgba(202,53,0,1) 100% )',
                width: { xs: "100%", md: `calc(100% -  80px)` }, position:"fixed"
            }}
        >
            <Toolbar sx={{
                display: "flex", justifyContent: "space-between", alignItems: "center",
                px: { xs: 2, md: 3 }
            }}>
                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                    <Typography sx={{ fontSize: { xs: "14px", md: "18px" }, }}> ABC Restaurant</Typography>
                    <Image src="/leftarw.png" alt="arrow" width={10} height={10} style={{ objectFit: "contain" }} />
                    <Typography sx={{ fontSize: { xs: "14px", md: "18px" }, }}> {togglePage}</Typography>
                </Box>

                <Box sx={{ display: "flex", alignItems: "center", gap: { xs: 2, md: 3 } }}>
                    <DarkModeOutlinedIcon sx={{ fontSize:{ xs: "18px" , md: "24px" }}} />
                    <NotificationsNoneOutlinedIcon sx={{ fontSize:{ xs: "18px" , md: "24px" }}} />
                </Box>

            </Toolbar>
        </AppBar >
    )
}