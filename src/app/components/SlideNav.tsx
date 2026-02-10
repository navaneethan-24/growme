"use client";
import { Box, Drawer, IconButton, Typography } from "@mui/material";
import { useContactStore } from "./controller/contactController";
import Image from "next/image";
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';

export default function SlideNav() {
    const { SlideNavOpen, toggleSlideNav, isMobileDrawerOpen, openMobileDrawer, closeMobileDrawer } = useContactStore();
    return (
        <Box>
            <Drawer variant="permanent" anchor="left"
                slotProps={{
                    paper: {
                        sx: {
                            width: SlideNavOpen ? 180 : 80,
                            transition: "width 0.5s ease-in-out",
                            overflowX: "hidden",
                            display: { xs: "none", md: "block" }
                        }
                    },
                }}  >
                <Box sx={{
                    display: "flex", flexDirection: "column", justifyContent: "space-between",
                    alignItems: "", py: 2, px: 1, 
                }}>
                    {/* Head */}
                    <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", gap: 1 }}>
                        <IconButton sx={{ width: "100%", justifyContent: "flex-start" }}>
                            <Image src="/nav/heroIcon.png" alt="heroIcon" width={28} height={28} style={{ objectFit: "contain" }} />
                            <Box sx={{ display: SlideNavOpen ? "flex" : "none", }}>
                                <Typography sx={{ fontSize: "22px", fontWeight: "800", color: "#1E1E1E" }}>row</Typography>
                                <Typography sx={{ fontSize: "22px", fontWeight: "400", color: "#1E1E1E" }}>me</Typography>
                            </Box>
                        </IconButton>
                        <IconButton sx={{ width: "100%", justifyContent: "flex-start" }}>
                            <Box sx={{ width: 32, minWidth: 32, display: "flex", justifyContent: "center", }}>
                                <Image src="/nav/user.png" alt="heroIcon" width={60} height={60} style={{ objectFit: "contain" }} />
                            </Box>
                            <Box sx={{ display: SlideNavOpen ? "block" : "none", ml: 1 }}>
                                <Typography sx={{ fontSize: "12px", fontWeight: "600", color: "#1E1E1E" }}>Ahmed-AI</Typography>
                                <Box sx={{ display: "flex", flexDirection: "row", alignItems: "center", border: "1px solid #FF6501 ", borderRadius: "5px", px: 0.5 }}>
                                    <LocalPhoneOutlinedIcon sx={{ fontSize: "8px", color: "#1E1E1E" }} />
                                    <Typography sx={{ fontSize: "8px", fontWeight: "400", color: "#1E1E1E" }}>(91)990189979</Typography>
                                </Box>
                            </Box>
                        </IconButton>
                    </Box>

                    {/* Nav */}
                    <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", }}>
                        <IconButton sx={{ width: "100%", justifyContent: "flex-start", mb: 1 }}>
                            <Box sx={{ width: 32, minWidth: 32, display: "flex", justifyContent: "center", }}>
                                <Image src="/nav/Dashboard.png" alt="Dashboard" width={18} height={18} />
                            </Box>
                            <Box sx={{ display: SlideNavOpen ? "block" : "none" }}>
                                <Typography sx={{ fontSize: "12px", fontWeight: "600", }}>Dashboard</Typography>
                            </Box>
                        </IconButton>

                        <IconButton sx={{ width: "100%", justifyContent: "flex-start", mb: 0.5 }}>
                            <Box sx={{ width: 32, minWidth: 32, display: "flex", justifyContent: "center" }}>
                                <Image src="/nav/conatcts.png" alt="Dashboard" width={18} height={18} />
                            </Box>
                            <Box sx={{ display: SlideNavOpen ? "block" : "none" }}>
                                <Typography sx={{ fontSize: "12px", fontWeight: "600", }}>Contacts</Typography>
                            </Box>
                        </IconButton>
                        <IconButton sx={{ width: "100%", justifyContent: "flex-start", mb: 0.5 }}>
                            <Box sx={{ width: 32, minWidth: 32, display: "flex", justifyContent: "center" }}>
                                <Image src="/nav/campaign.png" alt="Dashboard" width={18} height={18} />
                            </Box>
                            <Box sx={{ display: SlideNavOpen ? "block" : "none" }}>
                                <Typography sx={{ fontSize: "12px", fontWeight: "600", }}>Campaign</Typography>
                            </Box>
                        </IconButton>
                        <IconButton sx={{ width: "100%", justifyContent: "flex-start", mb: 0.5 }}>
                            <Box sx={{ width: 32, minWidth: 32, display: "flex", justifyContent: "center" }}>
                                <Image src="/nav/Chat.png" alt="Dashboard" width={18} height={18} />
                            </Box>
                            <Box sx={{ display: SlideNavOpen ? "block" : "none" }}>
                                <Typography sx={{ fontSize: "12px", fontWeight: "600", }}>Inbox</Typography>
                            </Box>
                        </IconButton>

                        <IconButton sx={{ width: "100%", justifyContent: "flex-start", mb: 0.5 }}>
                            <Box sx={{ width: 32, minWidth: 32, display: "flex", justifyContent: "center" }}>
                                <Image src="/nav/status.png" alt="Dashboard" width={18} height={18} />
                            </Box>
                            <Box sx={{ display: SlideNavOpen ? "block" : "none" }}>
                                <Typography sx={{ fontSize: "12px", fontWeight: "600", }}>Leads</Typography>
                            </Box>
                        </IconButton>
                        <IconButton sx={{ width: "100%", justifyContent: "flex-start", mb: 0.5 }}>
                            <Box sx={{ width: 32, minWidth: 32, display: "flex", justifyContent: "center" }}>
                                <Image src="/nav/review.png" alt="Dashboard" width={18} height={18} />
                            </Box>
                            <Box sx={{ display: SlideNavOpen ? "block" : "none" }}>
                                <Typography sx={{ fontSize: "12px", fontWeight: "600", }}>Automation</Typography>
                            </Box>
                        </IconButton>
                        <IconButton sx={{ width: "100%", justifyContent: "flex-start", mb: 0.5 }}>
                            <Box sx={{ width: 32, minWidth: 32, display: "flex", justifyContent: "center" }}>
                                <Image src="/nav/chatAI.png" alt="Dashboard" width={18} height={18} />
                            </Box>
                            <Box sx={{ display: SlideNavOpen ? "block" : "none" }}>
                                <Typography sx={{ fontSize: "12px", fontWeight: "600", }}>Chatbots</Typography>
                            </Box>
                        </IconButton>
                        <IconButton sx={{ width: "100%", justifyContent: "flex-start", mb: 0.5 }}>
                            <Box sx={{ width: 32, minWidth: 32, display: "flex", justifyContent: "center" }}>
                                <Image src="/nav/status.png" alt="Dashboard" width={18} height={18} />
                            </Box>
                            <Box sx={{ display: SlideNavOpen ? "block" : "none" }}>
                                <Typography sx={{ fontSize: "12px", fontWeight: "600", }}>Reports</Typography>
                            </Box>
                        </IconButton>
                        <IconButton sx={{ width: "100%", justifyContent: "flex-start", mb: 0.5 }}>
                            <Box sx={{ width: 32, minWidth: 32, display: "flex", justifyContent: "center" }}>
                                <Image src="/nav/cart.png" alt="Dashboard" width={18} height={18} />
                            </Box>
                            <Box sx={{ display: SlideNavOpen ? "block" : "none" }}>
                                <Typography sx={{ fontSize: "12px", fontWeight: "600", }}>Commuite</Typography>
                            </Box>
                        </IconButton>
                        <IconButton sx={{ width: "100%", justifyContent: "flex-start", mb: 0.5 }}>
                            <Box sx={{ width: 32, minWidth: 32, display: "flex", justifyContent: "center" }}>
                                <Image src="/nav/transport.png" alt="Dashboard" width={18} height={18} />
                            </Box>
                            <Box sx={{ display: SlideNavOpen ? "block" : "none" }}>
                                <Typography sx={{ fontSize: "12px", fontWeight: "600", }}>Delivery</Typography>
                            </Box>
                        </IconButton>
                        <IconButton sx={{ width: "100%", justifyContent: "flex-start", mb: 0.5 }}>
                            <Box sx={{ width: 32, minWidth: 32, display: "flex", justifyContent: "center" }}>
                                <Image src="/nav/bill.png" alt="Dashboard" width={18} height={18} />
                            </Box>
                            <Box sx={{ display: SlideNavOpen ? "block" : "none" }}>
                                <Typography sx={{ fontSize: "12px", fontWeight: "600", }}>Payments</Typography>
                            </Box>
                        </IconButton>
                        <IconButton sx={{ width: "100%", justifyContent: "flex-start", mb: 0.5 }}>
                            <Box sx={{ width: 32, minWidth: 32, display: "flex", justifyContent: "center" }}>
                                <Image src="/nav/settings.png" alt="Dashboard" width={18} height={18} />
                            </Box>
                            <Box sx={{ display: SlideNavOpen ? "block" : "none" }}>
                                <Typography sx={{ fontSize: "12px", fontWeight: "600", }}>Settings</Typography>
                            </Box>
                        </IconButton>



                    </Box>

                    {/* Slider */}
                    <Box sx={{ mt: 3, display: "flex", justifyContent: "flex-start", alignItems: "center" }}>
                        <IconButton onClick={toggleSlideNav} sx={{
                            filter: SlideNavOpen
                                ? "invert(46%) sepia(89%) saturate(748%) hue-rotate(356deg)"
                                : "none",
                            transition: "filter 0.3s ease",
                        }} >
                            <Image src="/nav/sildeopen.png" alt="settings" width={18} height={18} style={{ objectFit: "contain" }} />
                        </IconButton>
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
                <Box sx={{py: 2, height: "100%", px: 1}}>
                    {/* Head */}
                    <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", }}>
                        <IconButton sx={{ width: "100%", justifyContent: "flex-start" }}>
                            <Image src="/nav/heroIcon.png" alt="heroIcon" width={28} height={28} style={{ objectFit: "contain" }} />
                            <Box sx={{ display: "flex" }}>
                                <Typography sx={{ fontSize: "22px", fontWeight: "800", color: "#1E1E1E" }}>row</Typography>
                                <Typography sx={{ fontSize: "22px", fontWeight: "400", color: "#1E1E1E" }}>me</Typography>
                            </Box>
                        </IconButton>
                        <IconButton sx={{ width: "100%", justifyContent: "flex-start" }}>
                            <Box sx={{ width: 32, minWidth: 32, display: "flex", justifyContent: "center", }}>
                                <Image src="/nav/user.png" alt="heroIcon" width={60} height={60} style={{ objectFit: "contain" }} />
                            </Box>
                            <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "flex-start", ml: 1 }}>
                                <Typography sx={{ fontSize: "12px", fontWeight: "600", color: "#1E1E1E" }}>Ahmed-AI</Typography>
                                <Box sx={{ display: "flex", flexDirection: "row", alignItems: "center", border: "1px solid #FF6501 ", borderRadius: "5px", px: 0.5 }}>
                                    <LocalPhoneOutlinedIcon sx={{ fontSize: "8px", color: "#1E1E1E" }} />
                                    <Typography sx={{ fontSize: "8px", fontWeight: "400", color: "#1E1E1E" }}>(91)990189979</Typography>
                                </Box>
                            </Box>

                        </IconButton>
                    </Box>

                    {/* Nav */}
                    <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", }}>
                        <IconButton sx={{ width: "100%", justifyContent: "flex-start", mb: 0.5 }}>
                            <Box sx={{ width: 32, minWidth: 32, display: "flex", justifyContent: "center", }}>
                                <Image src="/nav/Dashboard.png" alt="Dashboard" width={18} height={18} />
                            </Box>
                            <Box sx={{ display: "flex" }}>
                                <Typography sx={{ fontSize: "12px", fontWeight: "600", }}>Dashboard</Typography>
                            </Box>
                        </IconButton>

                        <IconButton sx={{ width: "100%", justifyContent: "flex-start", mb: 0.5 }}>
                            <Box sx={{ width: 32, minWidth: 32, display: "flex", justifyContent: "center" }}>
                                <Image src="/nav/conatcts.png" alt="Dashboard" width={18} height={18} />
                            </Box>
                            <Box sx={{ display: "flex" }}>
                                <Typography sx={{ fontSize: "12px", fontWeight: "600", }}>Contacts</Typography>
                            </Box>

                        </IconButton>

                        <IconButton sx={{ width: "100%", justifyContent: "flex-start", mb: 0.5 }}>
                            <Box sx={{ width: 32, minWidth: 32, display: "flex", justifyContent: "center" }}>
                                <Image src="/nav/campaign.png" alt="Dashboard" width={18} height={18} />
                            </Box>
                            <Box sx={{ display: "flex" }}>
                                <Typography sx={{ fontSize: "12px", fontWeight: "600", }}>Campaign</Typography>
                            </Box>
                        </IconButton>

                        <IconButton sx={{ width: "100%", justifyContent: "flex-start", mb: 0.5 }}>
                            <Box sx={{ width: 32, minWidth: 32, display: "flex", justifyContent: "center" }}>
                                <Image src="/nav/Chat.png" alt="Dashboard" width={18} height={18} />
                            </Box>
                            <Box sx={{ display: "flex" }}>
                                <Typography sx={{ fontSize: "12px", fontWeight: "600", }}>Inbox</Typography>
                            </Box>
                        </IconButton>

                        <IconButton sx={{ width: "100%", justifyContent: "flex-start", mb: 0.5 }}>
                            <Box sx={{ width: 32, minWidth: 32, display: "flex", justifyContent: "center" }}>
                                <Image src="/nav/status.png" alt="Dashboard" width={18} height={18} />
                            </Box>
                            <Box sx={{ display: "flex" }}>
                                <Typography sx={{ fontSize: "12px", fontWeight: "600", }}>Leads</Typography>
                            </Box>
                        </IconButton>

                        <IconButton sx={{ width: "100%", justifyContent: "flex-start", mb: 0.5 }}>
                            <Box sx={{ width: 32, minWidth: 32, display: "flex", justifyContent: "center" }}>
                                <Image src="/nav/review.png" alt="Dashboard" width={18} height={18} />
                            </Box>
                            <Box sx={{ display: "flex" }}>
                                <Typography sx={{ fontSize: "12px", fontWeight: "600", }}>Automation</Typography>
                            </Box>
                        </IconButton>

                        <IconButton sx={{ width: "100%", justifyContent: "flex-start", mb: 0.5 }}>
                            <Box sx={{ width: 32, minWidth: 32, display: "flex", justifyContent: "center" }}>
                                <Image src="/nav/chatAI.png" alt="Dashboard" width={18} height={18} />
                            </Box>
                            <Box sx={{ display: "flex" }}>
                                <Typography sx={{ fontSize: "12px", fontWeight: "600", }}>Chatbots</Typography>
                            </Box>
                        </IconButton>
                        <IconButton sx={{ width: "100%", justifyContent: "flex-start", mb: 0.5 }}>
                            <Box sx={{ width: 32, minWidth: 32, display: "flex", justifyContent: "center" }}>
                                <Image src="/nav/status.png" alt="Dashboard" width={18} height={18} />
                            </Box>
                            <Box sx={{ display: "flex" }}>
                                <Typography sx={{ fontSize: "12px", fontWeight: "600", }}>Reports</Typography>
                            </Box>
                        </IconButton>
                        <IconButton sx={{ width: "100%", justifyContent: "flex-start", mb: 0.5 }}>
                            <Box sx={{ width: 32, minWidth: 32, display: "flex", justifyContent: "center" }}>
                                <Image src="/nav/cart.png" alt="Dashboard" width={18} height={18} />
                            </Box>
                            <Box sx={{ display: "flex" }}>
                                <Typography sx={{ fontSize: "12px", fontWeight: "600", }}>Commuite</Typography>
                            </Box>
                        </IconButton>
                        <IconButton sx={{ width: "100%", justifyContent: "flex-start", mb: 0.5 }}>
                            <Box sx={{ width: 32, minWidth: 32, display: "flex", justifyContent: "center" }}>
                                <Image src="/nav/transport.png" alt="Dashboard" width={18} height={18} />
                            </Box>
                            <Box sx={{ display: "flex" }}>
                                <Typography sx={{ fontSize: "12px", fontWeight: "600", }}>Delivery</Typography>
                            </Box>
                        </IconButton>
                        <IconButton sx={{ width: "100%", justifyContent: "flex-start", mb: 0.5 }}>
                            <Box sx={{ width: 32, minWidth: 32, display: "flex", justifyContent: "center" }}>
                                <Image src="/nav/bill.png" alt="Dashboard" width={18} height={18} />
                            </Box>
                            <Box sx={{ display: "flex" }}>
                                <Typography sx={{ fontSize: "12px", fontWeight: "600", }}>Payments</Typography>
                            </Box>
                        </IconButton>
                        <IconButton sx={{ width: "100%", justifyContent: "flex-start", mb: 0.5 }}>
                            <Box sx={{ width: 32, minWidth: 32, display: "flex", justifyContent: "center" }}>
                                <Image src="/nav/settings.png" alt="Dashboard" width={18} height={18} />
                            </Box>
                            <Box sx={{ display: "flex" }}>
                                <Typography sx={{ fontSize: "12px", fontWeight: "600", }}>Settings</Typography>
                            </Box>
                        </IconButton>
                    </Box>
                </Box>


            </Drawer>

        </Box>


    )
}   