"use client";

import { Autocomplete, Box, Drawer, IconButton, TextField, Typography, Button, FormControl, MenuItem, Select } from "@mui/material";
import Image from "next/image";
import SearchIcon from "@mui/icons-material/Search";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { useContactStore } from "./controller/contactController";

export default function ImportContact() {
  const {importDrawerOpen, openImportDrawer, closeImportDrawer} = useContactStore();

  return (
    <Drawer
      anchor="right"
      open={importDrawerOpen}
      onClose={closeImportDrawer}
      slotProps={{
        paper: {
          sx: { height: "calc(100vh - 64px)", width: { xs: "70vw", md: "50vw" }, mt: "74px", borderRadius: "22px 0px 0px 0px", border: "1px solid rgba(255, 101, 1, 0.5)", pb: 4 }
        }
      }}
    >
      {/* HEADER */}
      <Box sx={{
         px: { xs: 2, sm: 4 }, py: 2, borderBottom: "1px solid rgba(255, 101, 1, 0.5)",
        display: "flex", justifyContent: "space-between",
      }}>
        <Box>
          <Typography sx={{ fontSize:{ xs: "18px", md: "22px" }, fontWeight: 600, mb: 1 }}>Import Contacts</Typography>
          <Typography sx={{ fontSize: "12px", color: "#787878" }}>
            Uploading a file Excel.
          </Typography>
        </Box>
        <IconButton sx={{ p: 0,":hover":{ backgroundColor:"transparent"} }} onClick={closeImportDrawer}>
          <Image src="/clfltr.png" alt="close" width={22} height={22} />
        </IconButton>
      </Box>
      <Box sx={{ px: { xs: 2, sm: 4 }, py: 2 }}> 
        <Box sx={{ display: "flex", flexDirection: {xs: "column", md:"row" }, mb: 2 }}>
          <Typography sx={{ fontSize: {xs: "13px" , md:"15px"} , color: "#08080A", fontWeight: 500, mr: 2 }}>File Upload</Typography>
          <Typography sx={{ fontSize: {xs: "13px" , md:"15px"}, color: "#FF6501", fontWeight: 400,  }}>
             Click here to download a sample file</Typography>
        </Box>

        <Box sx={{
          display: "flex", width: "80%", border: "1px solid #FF65014D", borderRadius: "8px", gap: 1,
          overflow: "hidden", p: 2, mb: 4
        }}>
          <Image src="/imp.png" alt="import" width={20} height={20} />
          <Typography sx={{ fontSize: "12px", color: "#FF6501", fontWeight: 200 }}>File Upload </Typography>
        </Box>

        <Box sx={{ display: "flex", justifyContent: {xs: "center", md:"flex-end"},  mt: 3 }}>
          <Button sx={{
            color: "#FFFFFF", bgcolor: "#FF6501", fontWeight: 600, textTransform: "none",
            px: 8, py: 1, boxShadow: 1, borderRadius: "12px"
          }}>
            Sumbit
          </Button>
        </Box>
      </Box>


    </Drawer>
  );
}
