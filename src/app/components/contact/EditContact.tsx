"use client";

import { Autocomplete, Box, Drawer, IconButton, TextField, Typography, Button, FormControl, MenuItem, Select, Chip } from "@mui/material";
import Image from "next/image";

import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { useContactStore } from "../controller/contactController";
import CancelIcon from '@mui/icons-material/Cancel';
import ToggleChipbtn from "../../custmUx/ToggleChipbtn";


const genders = ["Male", "Female", "Other"];
const profession = ["Developer", "Designer", "Manager", "Student", "Business"];
const groups = ["VIP Group", "Main Group", "Family", "Friends", "Work", "Clients", "Leads", "Blocked", "Archived"]
const tags = ["Food", "Sweet", "Offers", "Tech", "Gym", "Beauty"]

export default function EditContact({onClose}: {onClose: () => void}) {

  const { editDrawerOpen, day, month, year } = useContactStore();
  const addContactGender = useContactStore((state) => state.addContactGender);
  const addContactProfession = useContactStore((state) => state.addContactProfession);
  const addContactGroups = useContactStore((state) => state.addContactGroups); // 
  const setFilterValue = useContactStore((state) => state.setFilterValue);
  const closeEditContactDrawer = useContactStore((state) => state.closeEditContactDrawer);


  return (
    <Box>
      {/* HEADER */}
      <Box sx={{ px: { xs: 2, sm: 4 }, py: 2, borderBottom: "1px solid rgba(255, 101, 1, 0.5)", display: "flex", justifyContent: "space-between" }}>
        <Box>
          <Typography sx={{ fontSize: { xs: "18px", md: "22px" }, fontWeight: 600, mb: 1 }}>Edit Contact</Typography>
          <Typography sx={{
            fontSize: "13px", color: "#787878",
            display: { xs: "none", md: "block" },
          }}>
            Edit lets you change or update information.
          </Typography>
        </Box>

        <IconButton sx={{ p: 0, ":hover": { backgroundColor: "transparent" } }} onClick={closeEditContactDrawer}>
          <Image src="/clfltr.png" alt="close" width={22} height={22} />
        </IconButton>
      </Box>

      <Box component="form" sx={{ px: { xs: 2, sm: 4 }, sm: 4, py: 2, }}>
        <Box sx={{ display: "flex", flexDirection: { xs: "column", md: "row" }, gap: 5 }}>
          <Box sx={{ width: { xs: "100%", sm: "50%" } }}>
            {/* Name */}
            <Box sx={{ mb: 2 }}>
              <Typography sx={{ fontSize: { xs: "14px", sm: "16px" }, fontWeight: 500, mb: 1, color: "#1E1E1E", }}>
                Name*
              </Typography>
              <Box sx={{ display: "flex", gap: 1, border: "1px solid #EFF0F6", p: 2, borderRadius: "8px", }}>
                <Image src="/addcontact.png" alt="icon" width={18} height={18} objectFit="contain" />
                <Box component="input" type="text" placeholder="John peter"
                  sx={{
                    width: "100%", border: "none", outline: "none",
                    fontSize: { xs: "12px", sm: "14px" }, background: "transparent",
                  }}
                />
              </Box>
            </Box>

            {/* Gender */}
            <Box sx={{ mb: 2 }}>
              <Typography sx={{ fontSize: { xs: "14px", sm: "16px" }, fontWeight: 500, mb: 2, color: "#1E1E1E", }}>Gender</Typography>
              <Box sx={{ display: "flex", gap: 1, border: " 1px solid #EFF0F6", p: 2, borderRadius: "8px", }}>
                <Select
                  value={addContactGender}
                  onChange={(e) => setFilterValue("addContactGender", e.target.value)}
                  displayEmpty
                  IconComponent={KeyboardArrowDownIcon}
                  sx={{
                    width: "100%",
                    "& .MuiOutlinedInput-notchedOutline": { border: "none" },
                    "& .MuiSelect-select": { padding: 0 },
                  }}
                >
                  {genders.map((g) => (
                    <MenuItem key={g} value={g} >
                      <Typography sx={{ color: "#787878", fontWeight: "400", fontSize: { xs: "12px", sm: "14px" } }}>{g}</Typography>
                    </MenuItem>
                  ))}
                </Select>
              </Box>
            </Box>


            {/* profession */}
            <Box sx={{ mb: 2 }}>
              <Typography sx={{ fontSize: "15px", fontWeight: 500, mb: 2, color: "#1E1E1E", }}>Profession</Typography>
              <Box sx={{ display: "flex", gap: 1, border: " 1px solid #EFF0F6", p: 2, borderRadius: "8px", }}>
                <Select
                  value={addContactProfession}
                  onChange={(e) => setFilterValue("addContactProfession", e.target.value)}
                  displayEmpty
                  IconComponent={KeyboardArrowDownIcon}
                  sx={{
                    width: "100%",
                    "& .MuiOutlinedInput-notchedOutline": { border: "none" },
                    "& .MuiSelect-select": { padding: 0 },
                  }}
                >
                  {profession.map((g) => (
                    <MenuItem key={g} value={g}>
                      <Typography sx={{ color: "#787878", fontWeight: "400", fontsize: "12px" }}>{g}</Typography>
                    </MenuItem>
                  ))}
                </Select>
              </Box>
            </Box>

            {/* Groups */}
            <Box sx={{ mb: 2 }}>
              <Typography sx={{ fontSize: { xs: "14px", sm: "16px" }, fontWeight: 500, mb: 2, color: "#1E1E1E", }}>Groups</Typography>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1, }}>
                <Chip sx={{
                  bgcolor: "#F4F4F4", py: 2, borderRadius: "8px",
                  color: "#717579", fontSize: "12px",
                }}
                  label="VIP Group"
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
                  bgcolor: "#F4F4F4", py: 2, borderRadius: "8px",
                  color: "#717579", fontSize: "12px", fontWeight: 500,
                }}
                  label="Festival Offers"
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
                  bgcolor: "#F4F4F4", py: 2, borderRadius: "8px",
                  color: "#717579", fontSize: { xs: "12px", sm: "14px" }, fontWeight: 500,
                }}
                  label="Opted-In"
                  onDelete={(e) => e.preventDefault()}
                  deleteIcon={<CancelIcon sx={{ fontSize: "18px", color: "#1E1E1E2E" }} />} />

              </Box>
            </Box>

            {/* Last Engagement */}
            <Box sx={{ mb: 2 }}>
              <Typography sx={{ fontSize: { xs: "14px", sm: "16px" }, fontWeight: 500, mb: 2, color: "#1E1E1E", borderRadius: "8px" }}>Last Engagement</Typography>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1, }}>
                <Chip sx={{
                  bgcolor: "#F4F4F4", py: 2, borderRadius: "8px",
                  color: "#717579", fontSize: { xs: "12px", sm: "14px" }, fontWeight: 500,
                }}
                  label="15 Sep 2025"
                  onDelete={(e) => e.preventDefault()}
                  deleteIcon={<CancelIcon sx={{ fontSize: "18px", color: "#1E1E1E2E" }} />} />
                <ToggleChipbtn />
              </Box>
            </Box>

          </Box>
          <Box sx={{ width: "50%" }}>
            <Box sx={{ mb: 2 }}>
              {/* Mobile Number */}
              <Typography sx={{ fontSize: { xs: "14px", sm: "16px" }, fontWeight: 500, color: "#1E1E1E", mb: 1 }}>
                Mobile Number
              </Typography>
              <Box sx={{ display: "flex", gap: { xs: 1, sm: 2 }, mb: 2 }}>
                <FormControl size="small" sx={{
                  display: "flex", flexDirection: { xs: "column", md: "row" },
                  minWidth: 50, width: 110,
                  "& .MuiOutlinedInput-notchedOutline": {
                    border: "1px solid #EFF0F6",
                  },
                  "&:hover .MuiOutlinedInput-notchedOutline": {
                    border: "1px solid #EFF0F6",
                  },
                  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                    border: "1px solid #EFF0F6",
                  }

                }} >
                  <Select
                    sx={{
                      borderRadius: "10px", border: "none", width: "100%",
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
                  </Select>
                </FormControl>
                <Box sx={{
                  display: "flex", gap: 1, border: "1px solid #EFF0F6", minWidth: 180, width: 250,
                  p: 2, borderRadius: "8px",
                }}>
                  <Box component="input" type="text" placeholder="Enter the Mobile Number"
                    sx={{
                      width: "100%", border: "none", outline: "none",
                      fontSize: { xs: "12px", sm: "14px" }, background: "transparent", color: "#787878"
                    }}>
                  </Box>
                </Box>

              </Box>
              {/* DOB */}
              <Typography sx={{ fontSize: { xs: "14px", sm: "16px" }, fontWeight: 500, color: "#1E1E1E", mb: 2 }}>
                Date of Birth
              </Typography>
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
            </Box>


          </Box>
        </Box>

        {/* Footer Buttons */}

        {/* Footer Buttons */}
        <Box sx={{
          display: 'flex', flexDirection: { xs: "column", sm: "row" }, justifyContent: "flex-end",
          alignContent: "center", mt: 3, gap: 2
        }}>
          <Button sx={{
            color: "#1E1E1E", fontWeight: 600, textTransform: "none",
            px: 8, py: 1, border: "1px solid #1E1E1E20", borderRadius: "12px"
          }}
            onClick={(e) => e.preventDefault()}>
            Reset
          </Button>
          <Button sx={{
            color: "#FFFFFF", bgcolor: "#FF6501", fontWeight: 600, textTransform: "none",
            px: 8, py: 1, boxShadow: 1, borderRadius: "12px"
          }}>
            Add
          </Button>
        </Box>
      </Box>
    </Box >
  );
}
