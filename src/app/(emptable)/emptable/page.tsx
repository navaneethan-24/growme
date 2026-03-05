"use client";
import { Box, Container, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Typography, Autocomplete, Button } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { useEmpDataStore } from "../../components/controller/EmpDataController";
import dayjs, { Dayjs } from "dayjs";

const gender = ["Male", "Female", "Other"]

const EmpData = () => {
    const { rows, addRow, updateRow,deleteRow, handleSubmit } = useEmpDataStore();
    
    return (
        <Box sx={{ bgcolor: "#f7f6f6", minHeight: "100vh" }}>
            <Container maxWidth="xl">
                <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", mt: 5 }}>
                    <Typography sx={{fontSize: "24px"}}> EMPTABLE</Typography>
                </Box>
                <Box sx={{ display: "flex", justifyContent: "flex-end", alignItems: "center", my: 5, }}>
                    <Button variant="contained" onClick={handleSubmit}>SUBMIT</Button>
                </Box>

                <Table sx={{
                    borderCollapse: "collapse",
                    "& th, & td": {
                        border: "1px solid #d0d0d0",
                    },
                    "& th": {
                        fontWeight: 600,
                        bgcolor: "#f0f0f0",
                    }
                }}>
                    <TableHead>
                        <TableRow>
                            <TableCell align="center">ID</TableCell>
                            <TableCell align="center">NAME</TableCell>
                            <TableCell align="center">GENDER</TableCell>
                            <TableCell align="center">DOB</TableCell>
                            <TableCell align="center">ACTION</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row: any) => (
                            <TableRow key={row.id}>
                                <TableCell align="center">
                                    <Typography >{row.id}</Typography>
                                </TableCell>

                                <TableCell align="center" >
                                    <TextField
                                        placeholder="Name"
                                        variant="standard"
                                        value={row.name}
                                        onChange={(e) => updateRow(row.id, { name: e.target.value })}
                                        slotProps={{ input: { disableUnderline: true } }}
                                        sx={{
                                            width: "100%",
                                            "& .MuiInputBase-input": {
                                                padding: "4px 8px",
                                                fontSize: "13px",
                                                color: "inherit",
                                                
                                            },
                                        }}
                                    />
                                </TableCell>
                                <TableCell align="center">
                                    <Autocomplete   
                                        disablePortal
                                        options={gender}
                                        value={row.gender ?? null }
                                        onChange={(_, newValue) => updateRow(row.id, {gender: newValue})}
                                        sx={{ width: 300, textAlign:'center' }}
                                        renderInput={(params) => (
                                            <TextField
                                                {...params}
                                                placeholder="Gender"
                                                variant="standard"
                                                slotProps={{
                                                    input: { ...params.InputProps, disableUnderline: true }
                                                }}

                                            />
                                        )}
                                    />
                                </TableCell>
                                <TableCell align="center">
                                    <DatePicker
                                        label="DOB"
                                        value={row.dob ? dayjs(row.dob) : null }
                                        onChange={(newValue: Dayjs | null) => updateRow(row.id, { dob: newValue })}
                                        slotProps={{
                                            textField: {
                                                variant: "standard",
                                                InputProps: { disableUnderline: true },

                                            },
                                        }}
                                    />
                                </TableCell>
                                <TableCell align="center">
                                    <Button variant="contained" color="error" onClick={() => deleteRow(row.id)}>DELETE</Button>
                                </TableCell>

                            </TableRow>
                        ))}
                    
                    </TableBody>
                </Table>

                <Box sx={{ display: "flex", justifyContent: "flex-start", alignItems: "center", my: 5, }}>
                    <Button variant="contained" onClick={addRow}>ADD</Button>
                </Box>


            </Container>


        </Box>
    )
}

export default EmpData;