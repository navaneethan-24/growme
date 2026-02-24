"use client";
import { Box, Drawer, ListItemButton, ListItemText, Typography } from "@mui/material";
import { useContactStore } from "../controller/contactController";
import Image from "next/image";
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import { useEffect } from "react";
import { useHeaderStore } from "../controller/HeaderController";


export default function SlideNav() {
    const {
        SlideNavOpen,
        toggleSlideNav,
        isMobileDrawerOpen,
        closeMobileDrawer,
    } = useContactStore();

    const { navItemsList, getNavItemsList } = useHeaderStore();

    useEffect(() => {
        getNavItemsList();
    }, []);

    return (
        <Box>
            <Drawer variant="permanent" anchor="left"
                slotProps={{
                    paper: {
                        sx: {
                            width: SlideNavOpen ? 220 : 80,
                            transition: "width 0.5s ease-in-out",
                            overflowX: "hidden",
                            display: { xs: "none", md: "flex" },

                        }
                    },
                }}  >
                <Box sx={{ py: 1, px: 2, }}>
                    {/* Head */}
                    <Box sx={{ mb: 2, mt: 2 }}>
                        <Box sx={{ display: "flex", justifyContent: SlideNavOpen ? "flex-start" : "center", mb: 3 }}>
                            <Image src="/nav/heroIcon.png" alt="heroIcon" width={28} height={28} style={{ objectFit: "contain" }} />
                            <Box sx={{ display: SlideNavOpen ? "flex" : "none", }}>
                                <Typography sx={{ fontSize: "22px", fontWeight: "800", color: " #1E1E1E" }}>row</Typography>
                                <Typography sx={{ fontSize: "22px", fontWeight: "400", color: "#1E1E1E" }}>me</Typography>
                            </Box>
                        </Box>

                        <Box sx={{ display: "flex", justifyContent: SlideNavOpen ? "flex-start" : "center", alignItems: "center", }}>
                            <Box  >
                                <Image src="/nav/user1.svg" alt="heroIcon" width={35} height={35} style={{ objectFit: "contain" }} />
                            </Box>

                            <Box sx={{ display: SlideNavOpen ? "flex" : "none", flexDirection: "column", ml: 2 }}>
                                <Typography sx={{ fontSize: { xs: "12px", md: "14px" }, fontWeight: "600", color: "#1E1E1E" }}>Ahed-AI</Typography>
                                <Box sx={{
                                    display: "flex", flexDirection: "row", alignItems: "center",
                                    bgcolor: "#FF65010D", border: "1px solid #FF6501 ", borderRadius: "5px", px: 0.5
                                }}>
                                    <LocalPhoneOutlinedIcon sx={{ fontSize: "8px", color: "#1E1E1E" }} />
                                    <Typography sx={{ fontSize: "8px", fontWeight: "400", color: "#1E1E1E" }}>(91)990189979</Typography>
                                </Box>
                            </Box>
                        </Box>
                    </Box>

                    {/* Nav */}
                    <Box sx={{
                        display: "flex", flexDirection: "column",
                        justifyContent: "center", alignItems: SlideNavOpen ? "flex-start" : "center",
                    }}>
                        {navItemsList?.map((item: any) => (
                            <ListItemButton key={item.label}
                                sx={{ mb: 1, p: 1 }}>
                                <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", }}>
                                    <Image src={`/nav/${item.icon}`} alt={item.label} width={18} height={18} />
                                </Box>
                                {SlideNavOpen && (
                                    <ListItemText
                                        primary={item.label}
                                        sx={{ flex: "0 0 auto", ml: 2 }}
                                        slotProps={{
                                            primary: {
                                                fontSize: { xs: 12, md: 14 },
                                                fontWeight: 600,
                                                color: "#717579",
                                                noWrap: true,
                                            }
                                        }}

                                    >
                                    </ListItemText>
                                )}
                            </ListItemButton>

                        ))}
                    </Box>

                    {/* Slider */}
                    <Box onClick={toggleSlideNav}
                        sx={{
                            display: "flex", justifyContent: SlideNavOpen ? "flex-start" : "center", alignItems: "center",
                            filter: SlideNavOpen
                                ? "invert(46%) sepia(89%) saturate(748%) hue-rotate(356deg)"
                                : "none",
                            transition: "filter 0.3s ease", mt: 1, p: 1
                        }} >
                        <Box >
                            <Image src="/nav/sildeopen.png" alt="settings" width={18} height={18} style={{ objectFit: "contain" }} />
                        </Box>
                    </Box>
                </Box>
            </Drawer>

            {/* mbv view */}
            <Drawer anchor="left"
                open={isMobileDrawerOpen}
                onClose={closeMobileDrawer}
                slotProps={{
                    paper: {
                        sx: {
                            width: { xs: "60%", sm: "30%" },
                            transition: "width 0.5s ease-in-out",
                            overflowX: "hidden",
                            display: { xs: "block", md: "none" }
                        }
                    }
                }}>
                <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", py: 3, px: 1 }}>
                    <Box sx={{
                        display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center",
                        width: "100%", gap: 2, mb: 2, ml: 2
                    }}>
                        <Box sx={{ display: "flex", width: "100%" }}>
                            <Image src="/nav/heroIcon.png" alt="heroIcon" width={28} height={28} style={{ objectFit: "contain" }} />
                            <Box sx={{ display: "flex", }}>
                                <Typography sx={{ fontSize: "22px", fontWeight: "800", color: "#1E1E1E" }}>row</Typography>
                                <Typography sx={{ fontSize: "22px", fontWeight: "400", color: "#1E1E1E" }}>me</Typography>
                            </Box>
                        </Box>
                        <Box sx={{ display: "flex", width: "100%" }}>
                            <Image src="/nav/user1.svg" alt="heroIcon" width={35} height={35} style={{ objectFit: "contain" }} />
                            <Box sx={{ ml: 1 }}>
                                <Typography sx={{ fontSize: "12px", fontWeight: "600", color: "#1E1E1E" }}>Ahmed-AI</Typography>
                                <Box sx={{ display: "flex", alignItems: "center", border: "1px solid #FF6501 ", borderRadius: "5px", px: 0.5 }}>
                                    <LocalPhoneOutlinedIcon sx={{ fontSize: "8px", color: "#1E1E1E" }} />
                                    <Typography sx={{ fontSize: "8px", fontWeight: "400", color: "#1E1E1E" }}>(91)990189979</Typography>
                                </Box>
                            </Box>
                        </Box>
                    </Box>

                    <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", }}>
                        {navItemsList?.map((item: any) => (
                            <ListItemButton key={item.label}
                                sx={{
                                    width: "100%",
                                    display: "flex", justifyContent: "flex-start", alignItems: "center",
                                }}>

                                <Image src={`/nav/${item.icon}`} alt={item.label} width={18} height={18} />
                                <ListItemText
                                    primary={item.label}
                                    slotProps={{
                                        primary: {
                                            fontSize: { xs: 12, md: 14 },
                                            fontWeight: 600,
                                            color: "#717579",
                                            noWrap: true, ml: 1
                                        }
                                    }}
                                    sx={{ ml: 1 }}
                                >
                                </ListItemText>
                            </ListItemButton>

                        ))}
                    </Box>
                </Box>
            </Drawer>
        </Box>
    )
}   