"use client"

import { Box, Button, Container, Drawer, IconButton, TextField, Typography } from "@mui/material";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Image from "next/image";
import AddIcon from '@mui/icons-material/Add';
import ContactTable from "../components/ContactTable";
import Filter from "../components/Filter";
import { useContactStore } from "../components/controller/contactController";
import ImportContact from "../components/ImportContact";
import AddContact from "../components/AddContact";
import EditContact from "../components/EditContact";
import DeleteContact from "../components/DeleteContact";

const rows = Array.from({ length: 50 }, (_, i) => ({
    id: i + 1,
    name: `User ${i + 1}`,
    mobile: `+91 9${Math.floor(100000000 + Math.random() * 900000000)}`,
    groups: i % 2 === 0 ? ['Customers'] : ['Leads'],
    tags: i % 3 === 0 ? ['Premium'] : ['Active'],
    lastEngagement: `${i + 1} days ago`,
}));

export default function Contact() {
    const {
        openFilterDrawer,
        openImportDrawer,
        openAddContactDrawer,
        activePage,
        setContactPage,
        setGroupPage,
    } = useContactStore();

    const isContact = activePage === "contact";
    const isGroup = activePage === "group";


    return (    
        <Box>
            <Container maxWidth="xl" sx={{ pt: {xs: 10 , md: 12}, px:{xs: 2 , md: 12} }}>
                <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", gap: 2, mb: 4 }}>
                    <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 2 }}>
                        <Box onClick={() => setContactPage()} sx={{
                            border: isContact ? "1px solid #FF6501" : "none", borderRadius: "8px", px: 2, py: 1, cursor: "pointer",
                        }}>
                            <Typography variant="h6" sx={{ color: isContact ? "#FF6501" : "#1E1E1E", fontWeight: 600, fontSize: "15px" }}>
                                Contacts
                            </Typography>
                        </Box>
                        <Box onClick={() => setGroupPage()} sx={{
                            border: isGroup ? "1px solid #FF6501" : "none", borderRadius: "8px", px: 2, py: 1, cursor: "pointer",
                        }}>
                            <Typography variant="h6" sx={{ color: isGroup ? "#FF6501" : "#1E1E1E", fontWeight: 600, fontSize: "15px" }}>
                                Groups
                            </Typography>
                        </Box>
                    </Box>

                    <Box sx={{ display: "flex", justifyContent: "center", alignContent: 'center', gap: 2, }}>
                        {/* SearchIcon */}
                        <Box sx={{
                            display: "flex", justifyContent: "flex-start", alignItems: "center", backgroundColor: "#FFFFFF",
                            border: "1px solid #EFF0F6", borderRadius: "8px", width: "300px", height: "50px", px: 1
                        }}>
                            <IconButton>
                                <Image src="/srch.png" alt="srch" width={15} height={15} style={{ objectFit: "contain" }} />
                            </IconButton>
                            <TextField placeholder="Search..." variant="standard"
                                slotProps={{ input: { disableUnderline: true } }}
                                sx={{ "& input": { fontSize: "14px", fontWeight: "500", color: "#1E1E1E" } }}
                            />
                        </Box>


                        {/* Filter */}
                        <Box onClick={openFilterDrawer} sx={{ cursor: "pointer" }}>
                            <Box sx={{
                                display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center",
                                backgroundColor: "#FFFFFF", border: "1px solid #EFF0F6", borderRadius: "8px",
                                width: "70px", height: "50px", gap: 1
                            }}>
                                <Image src="/filter.png" alt="filter" width={12} height={12} />

                                <Typography sx={{ fontSize: { xs: "10px", md: "15px" }, fontWeight: "500" }}> Filter </Typography>
                            </Box>
                        </Box>

                        {/* Import Contact */}
                        <Box onClick={openImportDrawer} sx={{
                            display: "flex", justifyContent: "center", alignItems: "center", gap: 1, cursor: "pointer",
                            backgroundColor: "#FFFFFF", borderRadius: "8px", width: "200px", height: "50px"
                        }}>

                            <Typography sx={{ fontSize: { xs: "10px", md: "15px" }, fontWeight: "400", color: "#FF6501" }}> Import Contacts </Typography>
                            <Box sx={{ width: "2px", height: "30px", backgroundColor: "#7175791A" }} />
                            <KeyboardArrowDownIcon sx={{ color: "#FF6501" }} />

                        </Box>
                        {/* Add Contact */}
                        <Box onClick={openAddContactDrawer} sx={{
                            display: "flex", justifyContent: "center", alignItems: "center",
                            backgroundColor: "#FF6501", borderRadius: "12px", width: "150px", height: "50px"
                        }}>
                            <AddIcon sx={{ color: "#FFFFFF", mr: 1 }} />
                            <Typography sx={{ fontSize: { xs: "10px", md: "15px" }, fontWeight: "500", color: "white" }}> Add Contact </Typography>

                        </Box>



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
                <Filter />
                <ImportContact />
                <AddContact />
                <EditContact />
                <DeleteContact />
            </Container>
        </Box >

    );
}