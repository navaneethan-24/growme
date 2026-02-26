"use client"

import { AppBar, Box, Container, Toolbar, Typography } from "@mui/material";
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import Image from "next/image";
import MenuIcon from "@mui/icons-material/Menu";
import { useGlobalStore } from "../controller/GolbalController";


export default function Header() {
    const { activePage, openMobileDrawer } = useGlobalStore();
    const togglePage = activePage === "contact" ? "Contacts" : "Groups";

    return (
        <AppBar
            sx={{
                background: `linear-gradient(172deg,rgba(23, 23, 23, 1) 0%, rgba(255, 101, 1, 1) 60%, rgba(202, 53, 0, 1) 100%)`,
                width: { xs: "100%", md: `calc(100% -  80px)` }, position: "fixed",
                boxShadow: "none", overflow: "hidden"
            }}
        >
            <Container maxWidth="xl">
            <Toolbar sx={{
                display: "flex", justifyContent: "space-between", alignItems: "center",
                px: { xs: 2, md: 3 }, position: "relative",
            }}>
                <Box sx={{ display: "flex", justifyContent: "flex-start", alignItems: "center", gap: 1 }}>
                    <Box onClick={openMobileDrawer} sx={{ display: { xs: "flex", md: "none" }, justifyContent: "center", alignItems: "center", gap: 1 }}>
                        <MenuIcon sx={{ fontSize: "18px" }} />
                    </Box>
                    <Box
                        sx={{
                            position: "absolute",
                            top: "50%",
                            left: "3%",
                            width: "80px",
                            height: "80px",
                            backgroundImage: `url('/hbx.svg')`,
                            backgroundSize: "contain",
                            backgroundRepeat: "no-repeat",
                            backgroundPosition: "center",
                            transform: "translate(-50%, -50%) rotate(5deg)",
                            zIndex: 0,

                        }}
                    />

                    <Box sx={{ display: "flex", justifyContent: "flex-start", alignItems: "center", gap: 1 }}>
                        <Typography sx={{ fontSize: { xs: "14px", md: "18px" }, fontWeight: 500, }}> ABC Restaurant</Typography>
                        <Image src="/leftarw.png" alt="arrow" width={10} height={10} style={{ objectFit: "contain" }} />
                        <Typography sx={{ fontSize: { xs: "14px", md: "18px" }, }}> {togglePage}</Typography>
                    </Box>
                </Box>

                <Box sx={{ display: "flex", alignItems: "center", gap: { xs: 2, md: 3 } }}>

                    <DarkModeOutlinedIcon sx={{
                        fontSize: { xs: "18px", md: "24px" },
                        filter: `drop-shadow(0 0 12px rgba(0,0,0,0.5)) drop-shadow(0 0 15px rgba(0,0,0,0.8))`
                    }} />


                    <NotificationsNoneOutlinedIcon sx={{
                        fontSize: { xs: "18px", md: "24px" },
                        filter: `drop-shadow(0 0 12px rgba(0,0,0,0.5)) drop-shadow(0 0 15px rgba(0,0,0,0.8))`
                    }} />
                </Box>

            </Toolbar>
            </Container>
        </AppBar >
    )
}