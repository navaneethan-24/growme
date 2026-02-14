"use client"
import { Box, Button, Container, Drawer, IconButton, TextField, Typography } from "@mui/material";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Image from "next/image";
import AddIcon from '@mui/icons-material/Add';
import ContactTable from "./ContactTable";
import Filter from "./Filter";
import { useContactStore } from "../controller/contactController";
import AddContact from "../contact/AddContact";
import EditContact from "../contact/EditContact";
import DeleteContact from "../contact/DeleteContact";
import ImportFile from "./ImportFile";

const rows = Array.from({ length: 50 }, (_, i) => ({
    id: i + 1,
    name: `User ${i + 1}`,
    mobile: `+91 9${Math.floor(100000000 + Math.random() * 900000000)}`,
    groups: i % 2 === 0 ? ['Customers'] : ['Leads'],
    tags: i % 3 === 0 ? ['Premium'] : ['Active'],
    lastEngagement: `${i + 1} days ago`,
}));


const drawerSx = {
    height: "calc(100vh - 64px)",
    width: { xs: "95vw", md: "50vw" },
    mt: "74px",
    borderRadius: "22px 0px 0px 0px",
    border: "1px solid rgba(255, 101, 1, 0.5)",
    pb: 4,
    overflowY: "auto",
    scrollbarWidth: "none",
    "&::-webkit-scrollbar": { display: "none" },
};


export default function ContactList() {
    const {
        openFilterDrawer,
        openImportDrawer,
        openAddContactDrawer,
        activePage,
        setContactPage,
        setGroupPage,
        filterDrawerOpen,
        closeFilterDrawer,
        importDrawerOpen,
        closeImportDrawer,
        addDrawerOpen,
        closeAddContactDrawer,
        editDrawerOpen,
        closeEditContactDrawer,

    } = useContactStore();

    const isContact = activePage === "contact";
    const isGroup = activePage === "group";


    return (
        <Box sx={{ width: { xs: "100%", md: `calc(100% -  80px)` }, minHeight: "100vh", bgcolor: "#F6F6F6" }}>
            <Container maxWidth={false} sx={{
                pt: { xs: 10, sm: 11, md: 12 },
                pl: { xs: 2, sm: 3, md: 8 },
                pb: 4,
                ml: { md: "50px" },
                mx: "auto"

            }}>
                <Box sx={{
                    display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center",
                    gap: { xs: 1, md: 2 }, mb: { xs: 2, md: 4 }
                }}>
                    <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: { xs: 0.5, md: 2 } }}>
                        <Box onClick={() => setContactPage()} sx={{
                            border: isContact ? "1px solid #FF6501" : "none", borderRadius: "8px", px: 2, py: 1, cursor: "pointer",
                        }}>
                            <Typography variant="h6" sx={{ color: isContact ? "#FF6501" : "#1E1E1E", fontWeight: 600, fontSize: { xs: "12px", md: "15px" } }}>
                                Contacts
                            </Typography>
                        </Box>
                        <Box onClick={() => setGroupPage()} sx={{
                            border: isGroup ? "1px solid #FF6501" : "none", borderRadius: "8px", px: 2, py: 1, cursor: "pointer",
                        }}>
                            <Typography variant="h6" sx={{ color: isGroup ? "#FF6501" : "#1E1E1E", fontWeight: 600, fontSize: { xs: "12px", md: "15px" } }}>
                                Groups
                            </Typography>
                        </Box>
                    </Box>
                    <Box sx={{ display: "flex", justifyContent: "center", alignContent: 'center', gap: { xs: 1, md: 2 } }}>
                        {/* SearchIcon */}
                        <Box sx={{
                            display: { xs: "none", md: "flex" }, alignItems: "center",
                            bgcolor: "#FFFFFF", border: "1px solid #E2E8F0", borderRadius: "8px", minWidth: "120px",
                            width: "300px", height: "50px", px: 1.5
                        }}>
                            <Image src="/srch.png" alt="srch" width={13} height={13} style={{ objectFit: "contain" }} />


                            <TextField placeholder="Search..." variant="standard" fullWidth
                                slotProps={{ input: { disableUnderline: true } }}
                                sx={{ "& input": { fontSize: "14px", fontWeight: "500", color: "#1E1E1E", ml: 1 } }}
                            />

                        </Box>


                        {/* Filter */}
                        <Box onClick={openFilterDrawer} sx={{ cursor: "pointer" }}>
                            <Box sx={{
                                display: { xs: "none", sm: "flex", }, flexDirection: "row", justifyContent: "center", alignItems: "center",
                                backgroundColor: "#FFFFFF", border: "1px solid #E2E8F0", borderRadius: "8px",
                                width: "70px", height: "50px", gap: 1
                            }}>
                                <Image src="/filter.png" alt="filter" width={12} height={12} />

                                <Typography sx={{ fontSize: { xs: "10px", md: "15px" }, fontWeight: "400" }}> Filter </Typography>
                            </Box>
                        </Box>



                        {/* Import Contact */}
                        <Box onClick={openImportDrawer} sx={{
                            display: { xs: "none", sm: "flex" }, justifyContent: "center", alignItems: "center", gap: 1,
                            cursor: "pointer",
                            backgroundColor: "#FFFFFF", borderRadius: "8px", p: 2,
                            maxWidth: "200px", height: "50px"
                        }}>
                            <Typography sx={{ fontSize: { xs: "10px", md: "15px" }, fontWeight: "600", color: "#FF6501", textWrap: "nowrap" }}>
                                Import Contacts
                            </Typography>
                            <Box sx={{ width: "2px", height: "30px", backgroundColor: "#7175791A" }} />
                            <KeyboardArrowDownIcon sx={{ color: "#FF6501" }} />
                        </Box>

                        {/* mv */}
                        <Box onClick={openImportDrawer} sx={{
                            display: { xs: "flex", sm: "none" }, justifyContent: "center", alignItems: "center",
                            backgroundColor: "#FFFFFF", border: "1px solid #EFF0F6", borderRadius: "8px",
                            width: "40px", height: "40px",
                        }}>
                            <KeyboardArrowDownIcon sx={{ color: "#FF6501" }} />
                        </Box>

                        {/* Add Contact */}
                        <Box onClick={openAddContactDrawer} sx={{
                            display: { xs: "none", sm: "flex" }, justifyContent: "center", alignItems: "center", cursor: "pointer",
                            backgroundColor: "#FF6501", borderRadius: "8px", width: "150px", height: "50px"
                        }}>
                            <AddIcon sx={{ color: "#FFFFFF", mr: 1 }} />
                            <Typography sx={{ fontSize: { xs: "10px", md: "15px" }, fontWeight: "500", color: "white" }}> Add Contact </Typography>

                        </Box>


                        {/* mv */}
                        <Box onClick={openAddContactDrawer} sx={{
                            display: { xs: "flex", sm: "none" }, justifyContent: "center", alignItems: "center",
                            backgroundColor: "#FF6501", border: "1px solid #EFF0F6", borderRadius: "12px",
                            width: "40px", height: "40px",
                        }}>
                            <AddIcon sx={{ color: "#FFFFFF", }} />
                        </Box>
                    </Box>
                </Box>
                {/* mbv searchbar */}
                <Box sx={{ display: "flex", width: "100%", gap: 1 }}>
                    <Box sx={{
                        display: { xs: "flex", md: "none" }, justifyContent: "flex-start", alignItems: "center",
                        width: "100%", height: "40px", minWidth: "200px", backgroundColor: "#FFFFFF",
                        border: "1px solid #EFF0F6", borderRadius: "8px", px: 1, mb: 2.
                    }}>
                        <IconButton>
                            <Image src="/srch.png" alt="srch" width={15} height={15} style={{ objectFit: "contain" }} />
                        </IconButton>

                        <TextField placeholder="Search..." variant="standard" fullWidth
                            slotProps={{ input: { disableUnderline: true } }}
                            sx={{ "& input": { fontSize: "14px", fontWeight: "500", color: "#1E1E1E", width: "100%" } }}
                        />

                    </Box>

                    {/* mv */}
                    <Box onClick={openFilterDrawer} sx={{
                        display: { xs: "flex", sm: "none" }, justifyContent: "center", alignItems: "center",
                        backgroundColor: "#FFFFFF", border: "1px solid #EFF0F6", borderRadius: "8px",
                        width: "40px", height: "40px",
                    }}>
                        <Image src="/filter.png" alt="filter" width={15} height={15} />
                    </Box>
                </Box>

                {/* Filter */}
                {/* <Box sx={{ display: "flex", justifyContent: "flex-end", alignContent: "center", mb: 2, borderRadius: "12px" }}>
                        <Box sx={{ display: "flex", justifyContent: "flex-start", alignItems: "center", gap: 1 }}>
                            <Typography sx={{ fontSize: { xs: "10px", md: "15px" }, fontWeight: "500", color: "#717579", mr: 2 }}>
                                Applied Filters :
                            </Typography>
                        </Box>

                        <Box sx={{
                            display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", gap: 5, 
                            bgcolor: "#1E1E1E0F",p: 2, borderRadius: "12px" }}>
                            <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                                <Typography sx={{ color: "#000000", fontSize: "14px", fontWeight: 400 }}>Groups:</Typography>
                                <Typography sx={{ color: "#000000", fontSize: "14px", fontWeight: 400 }}>VIP Group,+1</Typography>
                            </Box>
                            <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                                <Typography sx={{ color: "#000000", fontSize: "14px", fontWeight: 400 }}>Tags:</Typography>
                                <Typography sx={{ color: "#000000", fontSize: "14px", fontWeight: 400 }}>Bulk Orders,+2</Typography>
                            </Box>
                            <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                                <Typography sx={{ color: "#000000", fontSize: "14px", fontWeight: 400 }}>Opt-In: </Typography>
                                <Typography sx={{ color: "#000000", fontSize: "14px", fontWeight: 400 }}>Yes</Typography>
                            </Box>
                            <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                                <Typography sx={{ color: "#000000", fontSize: "14px", fontWeight: 400 }}>Gender: </Typography>
                                <Typography sx={{ color: "#000000", fontSize: "14px", fontWeight: 400 }}>Male</Typography>
                            </Box>
                            <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                                <Typography sx={{ color: "#000000", fontSize: "14px", fontWeight: 400 }}>Profession:</Typography>
                                <Typography sx={{ color: "#000000", fontSize: "14px", fontWeight: 400 }}>Doctor</Typography>
                            </Box>
                        </Box>

                        
                    </Box> */}



                <ContactTable rows={rows} />

                <Drawer anchor="right"
                    open={filterDrawerOpen}
                    onClose={closeFilterDrawer}
                    slotProps={{
                        paper: {
                            sx: drawerSx
                        }
                    }}>
                    <Filter onClose={closeFilterDrawer} />
                </Drawer>

                <Drawer anchor="right"
                    open={importDrawerOpen}
                    onClose={closeImportDrawer}
                    slotProps={{
                        paper: {
                            sx: drawerSx
                        }
                    }}>
                    <ImportFile onClose={closeImportDrawer} />
                </Drawer>

                <Drawer
                    anchor="right"
                    open={addDrawerOpen}
                    onClose={closeAddContactDrawer}
                    slotProps={{
                        paper: {
                            sx: drawerSx

                        }
                    }}>
                    <AddContact onClose={closeAddContactDrawer} />
                </Drawer>

                <Drawer
                    anchor="right"
                    open={editDrawerOpen}
                    onClose={closeEditContactDrawer}
                    slotProps={{
                        paper: {
                            sx: drawerSx

                        }
                    }}>
                    <EditContact onClose={closeAddContactDrawer} />
                </Drawer>

                <DeleteContact />
            </Container>
        </Box >

    );
}