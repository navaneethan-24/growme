"use client";

import { Autocomplete, Box, Drawer, IconButton, TextField, Typography, Button, FormControl, MenuItem, Select, Chip } from "@mui/material";
import Image from "next/image";

import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

import { useContactStore } from "../controller/contactController";
import CancelIcon from '@mui/icons-material/Cancel';
import ToggleChipbtn from "../../custmux/ToggleChipbtn";


export default function Filter({ onClose }: { onClose: () => void }) {
  const {
    selectedCountry,
    selectedTag,
    selectedGroups,
    selectedOptInStatus,
    profession,
    gender,
    lastEngagement,
    day,
    month,
    year,
    setFilterValue,

    resetFilterState,
    filterDrawerOpen, closeFilterDrawer,
  } = useContactStore();



  return (
    <Box>
      {/* HEADER */}
      <Box sx={{
        px: { xs: 2, sm: 4 }, py: 2, borderBottom: "1px solid rgba(255, 101, 1, 0.5)",
        display: "flex", justifyContent: "space-between"
      }}>
        <Box>
          <Typography sx={{ fontSize: { xs: "18px", md: "22px" }, fontWeight: 600 }}>Filters</Typography>
          <Typography sx={{ display: { xs: "none", md: "block" }, fontSize: "15px", color: "#787878" }}>
            Filters help you see only what you want, so it’s easier to find things.
          </Typography>
        </Box>
        <IconButton sx={{ p: 0, ":hover": { backgroundColor: "transparent" } }} onClick={closeFilterDrawer}>
          <Image src="/clfltr.png" alt="close" width={22} height={22} />
        </IconButton>
      </Box>

      {/* BODY */}
      <Box sx={{ px: { xs: 2, sm: 4 }, py: 2 }}>

        {/* Country */}
        <Box sx={{ mb: 2 }}>
          <Typography sx={{ fontSize: { xs: "14px", sm: "16px" }, fontWeight: 500, fontStyle: "medium", mb: 2, color: "#1E1E1E", }}>Country</Typography>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1, }}>
            <Chip sx={{
              bgcolor: "#F4F4F4", py: 2.5, borderRadius: "8px",
              color: "#717579", fontSize: { xs: "12px", sm: "14px" }, fontWeight: 500,
            }}
              label="Opted-In"

              onDelete={(e) => e.preventDefault()}
              deleteIcon={<CancelIcon sx={{ fontSize: "18px", color: "#1E1E1E2E" }} />} />
            <ToggleChipbtn />
          </Box>
        </Box>

        {/* Tags */}
        <Box sx={{ mb: 2 }}>
          <Typography sx={{ fontSize: { xs: "14px", sm: "16px" }, fontWeight: 500, mb: 2, color: "#1E1E1E", }}>Tags</Typography>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1, }}>
            <Chip sx={{
              bgcolor: "#F4F4F4", py: 2.5, borderRadius: "8px",
              color: "#717579", fontSize: { xs: "12px", sm: "14px" }, fontWeight: 500,
            }}
              label="Opted-In"

              onDelete={(e) => e.preventDefault()}
              deleteIcon={<CancelIcon sx={{ fontSize: "18px", color: "#1E1E1E2E" }} />} />
            <ToggleChipbtn />
          </Box>
        </Box>

        {/* Groups */}
        <Box sx={{ mb: 2 }}>
          <Typography sx={{ fontSize: { xs: "14px", sm: "16px" }, fontWeight: 500, mb: 2, color: "#1E1E1E", }}>Groups</Typography>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1, }}>
            <Chip sx={{
              bgcolor: "#F4F4F4", py: 2.5, borderRadius: "8px",
              color: "#717579", fontSize: { xs: "12px", sm: "14px" }, fontWeight: 500,
            }}
              label="Opted-In"
              onDelete={(e) => e.preventDefault()}
              deleteIcon={<CancelIcon sx={{ fontSize: "18px", color: "#1E1E1E2E" }} />} />
            <ToggleChipbtn />
          </Box>
        </Box>

        {/* Opt-In Status */}
        <Box sx={{ mb: 2 }}>
          <Typography sx={{ fontSize: { xs: "14px", sm: "16px" }, fontWeight: 500, mb: 2, color: "#1E1E1E", }}>Opt-In Status</Typography>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1, }}>
            <Chip sx={{
              bgcolor: "#F4F4F4", py: 2.5, borderRadius: "8px",
              color: "#717579", fontSize: { xs: "12px", sm: "14px" }, fontWeight: 500,
            }}
              label="Opted-In"

              onDelete={(e) => e.preventDefault()}
              deleteIcon={<CancelIcon sx={{ fontSize: "18px", color: "#1E1E1E2E", }} />} />
          </Box>
        </Box>

        {/*Profession */}
        <Box sx={{ mb: 2 }}>
          <Typography sx={{ fontSize: { xs: "14px", sm: "16px" }, fontWeight: 500, mb: 2, color: "#1E1E1E", }}>Profession</Typography>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1, }}>
            <Chip sx={{
              bgcolor: "#F4F4F4", py: 2.5, borderRadius: "8px",
              color: "#717579", fontSize: { xs: "12px", sm: "14px" }, fontWeight: 500,
            }}
              label="Opted-In"

              onDelete={(e) => e.preventDefault()}
              deleteIcon={<CancelIcon sx={{ fontSize: "18px", color: "#1E1E1E2E", }} />} />
          </Box>
        </Box>

        {/* Gender */}
        <Box sx={{ mb: 2 }}>
          <Typography sx={{ fontSize: { xs: "14px", sm: "16px" }, fontWeight: 500, mb: 2, color: "#1E1E1E", }}>Gender</Typography>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1, }}>
            <Chip sx={{
              bgcolor: "#F4F4F4", py: 2.5, borderRadius: "8px",
              color: "#717579", fontSize: { xs: "12px", sm: "14px" }, fontWeight: 500,
            }}
              label="Opted-In"
              onDelete={(e) => e.preventDefault()}
              deleteIcon={<CancelIcon sx={{ fontSize: "18px", color: "#1E1E1E2E", }} />} />
          </Box>
        </Box>

        {/* Last Engagement */}
        <Box sx={{ mb: 2 }}>
          <Typography sx={{ fontSize: { xs: "14px", sm: "16px" }, fontWeight: 500, mb: 2, color: "#1E1E1E", }}>Last Engagement</Typography>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1, }}>
            <Chip sx={{
              bgcolor: "#F4F4F4", py: 2.5, borderRadius: "8px",
              color: "#717579", fontSize: { xs: "12px", sm: "14px" }, fontWeight: 500,
            }}
              label="Opted-In"
              onDelete={(e) => e.preventDefault()}
              deleteIcon={<CancelIcon sx={{ fontSize: "18px", color: "#1E1E1E2E", }} />} />
            <ToggleChipbtn />
          </Box>

        </Box>

        {/* DOB */}
        <Typography sx={{ mb: 1, fontSize: { xs: "14px", sm: "16px" }, fontWeight: 500, color: "#1E1E1E", }}>Date of Birth</Typography>
        <Box sx={{ display: "flex", flexDirection: { xs: "row", md: "row" }, gap: 1 }}>
          {[
            { placeholder: "DD", value: day, setter: (v: any) => setFilterValue("day", v), max: 31 },
            { placeholder: "MM", value: month, setter: (v: any) => setFilterValue("month", v), options: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"] },
            { placeholder: "YYYY", value: year, setter: (v: any) => setFilterValue("year", v), options: Array.from({ length: 80 }, (_, i) => 2025 - i) }
          ].map(({ placeholder, value, setter, max, options }, i) => (
            <FormControl key={i} size="small" sx={{
              width: 110, minWidth: 75,
            }}>
              <Select
                value={value}
                onChange={(e) => setter(e.target.value)}
                renderValue={(selected) => selected || placeholder}
                sx={{
                  borderRadius: "10px", height: 55,
                  fontSize: { xs: "12px", sm: "14px" },
                  "& .MuiOutlinedInput-notchedOutline": {
                    border: "1px solid #EFF0F6",
                  },
                  "&:hover .MuiOutlinedInput-notchedOutline": {
                    border: "1px solid #EFF0F6",
                  },
                  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                    border: "1px solid #EFF0F6",
                  },
                }}
                IconComponent={(props) => <KeyboardArrowDownIcon {...props} sx={{ fontSize: 22 }} />}
              >
                {max ? Array.from({ length: max }, (_, i) => i + 1).map((v) => <MenuItem key={v} value={v}>{v}</MenuItem>) : null}
                {options ? options.map((v, idx) => <MenuItem key={idx} value={v}>{v}</MenuItem>) : null}
              </Select>
            </FormControl>
          ))}
        </Box>

        {/* Footer Buttons */}
        <Box sx={{ display: 'flex', flexDirection: { xs: "column", sm: "row" }, justifyContent: "flex-end", alignContent: "center", mt: 3, gap: 2 }}>
          <Button sx={{
            color: "#1E1E1E", fontWeight: 600, textTransform: "none",
            px: { xs: 4, sm: 8 }, py: 1, border: "1px solid #1E1E1E20", borderRadius: "12px"
          }}
            onClick={resetFilterState}>
            Reset
          </Button>
          <Button sx={{
            color: "#FFFFFF", bgcolor: "#FF6501", fontWeight: 600, textTransform: "none",
            px: 8, py: 1, boxShadow: 1, borderRadius: "12px",
          }}>
            Apply
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
