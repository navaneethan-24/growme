"use client";
import { Box, Button, Drawer, IconButton, ListItemButton, ListItemText, Typography } from "@mui/material";
import { useContactStore } from "../controller/contactController";
import Image from "next/image";
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';

const navItems = [
    { label: "Dashboard", icon: "Dashboard.png" },
    { label: "Contacts", icon: "conatcts.png" },
    { label: "Campaign", icon: "campaign.png" },
    { label: "Inbox", icon: "Chat.png" },
    { label: "Leads", icon: "status.png" },
    { label: "Automation", icon: "review.png" },
    { label: "Chatbots", icon: "chatAI.png" },
    { label: "Reports", icon: "status.png" },
    { label: "Commuite", icon: "cart.png" },
    { label: "Delivery", icon: "transport.png" },
    { label: "Payments", icon: "bill.png" },
    { label: "Settings", icon: "settings.png" },
];

export default function SlideNav() {
    const { SlideNavOpen, toggleSlideNav, isMobileDrawerOpen, closeMobileDrawer } = useContactStore();
    return (
        <Box>
            <Drawer variant="permanent" anchor="left"
                slotProps={{
                    paper: {
                        sx: {
                            width: SlideNavOpen ? 250 : 80,
                            transition: "width 0.5s ease-in-out",
                            overflowX: "hidden",
                            display: { xs: "none", md: "block" }
                        }
                    },
                }}  >
                <Box sx={{
                    display: "flex", flexDirection: "column",
                    justifyContent: "center", alignItems: "flex-start", pt: 3, pb: 2, px: 1,
                }}>
                    {/* Head */}
                    <Box sx={{ display: "flex", flexDirection: "column", mb: 1 }}>
                        <Box sx={{ display: "flex", justifyContent: "center", mb: 0.5 }}>
                            <Image src="/nav/heroIcon.png" alt="heroIcon" width={28} height={28} style={{ objectFit: "contain" }} />
                            <Box sx={{ display: SlideNavOpen ? "flex" : "none", }}>
                                <Typography sx={{ fontSize: "22px", fontWeight: "800", color: " #1E1E1E" }}>row</Typography>
                                <Typography sx={{ fontSize: "22px", fontWeight: "400", color: "#1E1E1E" }}>me</Typography>
                            </Box>
                        </Box>

                        <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", }}>
                            <Box sx={{ display: "flex", justifyContent: "center", }}>
                                <Image src="/nav/user.png" alt="heroIcon" width={60} height={60} style={{ objectFit: "contain" }} />
                            </Box>
                            <Box sx={{
                                display: SlideNavOpen ? "flex" : "none", flexDirection: "column",
                                ml: 0.5, p: 0
                            }}>
                                <Typography sx={{ fontSize: "12px", fontWeight: "600", color: "#1E1E1E" }}>Ahmed-AI</Typography>
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
                    <Box sx={{ display: "flex", flexDirection: "column", }}>
                        {navItems.map((item) => (
                            <ListItemButton key={item.label}
                                sx={{ width: "100%", mb: 0.5, p: 1 }}>
                                <Box sx={{ width: 32, height: 20, display: "flex", justifyContent: "center", alignItems: "center", mr: 1 }}>
                                    <Image src={`/nav/${item.icon}`} alt={item.label} width={18} height={18} />
                                </Box>
                                {SlideNavOpen && (
                                    <ListItemText
                                        primary={item.label}
                                        slotProps={{
                                            primary: {
                                                fontSize: { xs: 12, md: 14 },
                                                fontWeight: 600,
                                                color: "#717579",
                                                noWrap: true,
                                            }
                                        }}
                                        sx={{ ml: 1 }}
                                    >
                                    </ListItemText>
                                )}
                            </ListItemButton>

                        ))}
                    </Box>

                    {/* Slider */}
                    <Box onClick={toggleSlideNav}
                        sx={{                            
                            display: "flex", mt: 2,
                            filter: SlideNavOpen
                                ? "invert(46%) sepia(89%) saturate(748%) hue-rotate(356deg)"
                                : "none",
                            transition: "filter 0.3s ease",
                        }} >
                        <Box sx={{ display: "flex", justifyContent: "center", ml: 2 }}>
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
                            width: { xs: "50%", sm: "30%" },
                            transition: "width 0.5s ease-in-out",
                            overflowX: "hidden",
                            display: { xs: "block", md: "none" }
                        }
                    }
                }}>
                <Box sx={{ py: 2, height: "100%", px: 1 }}>
                    {/* Head */}
                    <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", gap: 0.5 }}>
                        <Button sx={{ width: "100%", }}>
                            <Image src="/nav/heroIcon.png" alt="heroIcon" width={28} height={28} style={{ objectFit: "contain" }} />
                            <Box sx={{ display: SlideNavOpen ? "flex" : "none", }}>
                                <Typography sx={{ fontSize: "22px", fontWeight: "800", color: "#1E1E1E" }}>row</Typography>
                                <Typography sx={{ fontSize: "22px", fontWeight: "400", color: "#1E1E1E" }}>me</Typography>
                            </Box>
                        </Button>
                        <Button sx={{ width: "100%", }}>

                            <Image src="/nav/user.png" alt="heroIcon" width={60} height={60} style={{ objectFit: "contain" }} />

                            <Box sx={{ display: SlideNavOpen ? "block" : "none", ml: 1 }}>
                                <Typography sx={{ fontSize: "12px", fontWeight: "600", color: "#1E1E1E" }}>Ahmed-AI</Typography>
                                <Box sx={{ display: "flex", flexDirection: "row", alignItems: "center", border: "1px solid #FF6501 ", borderRadius: "5px", px: 0.5 }}>
                                    <LocalPhoneOutlinedIcon sx={{ fontSize: "8px", color: "#1E1E1E" }} />
                                    <Typography sx={{ fontSize: "8px", fontWeight: "400", color: "#1E1E1E" }}>(91)990189979</Typography>
                                </Box>
                            </Box>
                        </Button>
                    </Box>

                    <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "center", }}>
                        {navItems.map((item) => (
                            <ListItemButton key={item.label}
                                sx={{ width: "100%", mb: 0.5, }}>
                                <Box sx={{ width: 32, height: 20, display: "flex", justifyContent: "flex-start", mr: 1 }}>
                                    <Image src={`/nav/${item.icon}`} alt={item.label} width={18} height={18} />
                                </Box>
                                <ListItemText
                                    primary={item.label}
                                    slotProps={{
                                        primary: {
                                            fontSize: { xs: 12, md: 14 },
                                            fontWeight: 600,
                                            color: "#717579",
                                            noWrap: true,
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