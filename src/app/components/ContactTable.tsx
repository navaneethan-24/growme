import { Group } from "@mui/icons-material";
import { Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Checkbox, Chip, IconButton, Paper, Typography, Button, Pagination, PaginationItem, Select, MenuItem, TableFooter } from "@mui/material";
import Image from "next/image";
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import { mockrows } from "./Services/Mock";
import { useContactStore } from "./controller/contactController";



export default function ContactTable({ rows }: { rows: any[] }) {

    const { value: rowsPerPage, page, setPage: setPage, totalPages, rowCounts, setRowValue,
        visiblePageCount, openEditContactDrawer,openDeleteContact } = useContactStore();
    const tableRowData = mockrows;
    const startIndex = (page - 1) * rowsPerPage;
    const endIndex = startIndex + rowsPerPage;
    const paginatedRows = mockrows.slice(startIndex, endIndex);
    const pages = visiblePageCount(tableRowData.length)
    const total = totalPages(tableRowData.length)

    return (
        <>
            <TableContainer component={Paper} sx={{ bgcolor: "#FFFFFF", borderRadius: "12px" }}>
                <Table sx={{ borderCollapse: "separate" }}>
                    {/* HEADER */}
                    <TableHead >
                        <TableRow >
                            <TableCell align="left" sx={{ borderBottom: "1px solid rgba(255, 101, 1, 0.5)" }}>
                                <Box sx={{ display: "flex", flexDirection: "row", }}>
                                    <Checkbox sx={{ color: "#7175794F", }} />
                                </Box>
                            </TableCell>

                            <TableCell align="left" sx={{ borderBottom: "1px solid rgba(255, 101, 1, 0.5)" }}>
                                <Box sx={{ display: "flex", flexDirection: "row", }}>
                                    <Typography sx={{ color: "#1E1E1E", fontSize: "15px", fontWeight: "500", }}> Name</Typography>
                                    <IconButton sx={{ padding: 0, ml: 1 }}>
                                        <Image src="/sorttb.png" alt="sort" width={12} height={12} style={{ objectFit: "contain" }} />
                                    </IconButton>
                                </Box>
                            </TableCell>

                            <TableCell align="left" sx={{ borderBottom: "1px solid rgba(255, 101, 1, 0.5)" }}>
                                <Box sx={{ display: "flex", justifyContent: "flex-start", alignItems: "center", flexDirection: "row", }}>
                                    <Typography sx={{
                                        color: "#1E1E1E", fontSize: "15px", fontWeight: "500",
                                    }}> Mobile Number </Typography>
                                    <IconButton sx={{ padding: 0, ml: 1 }}>
                                        <Image src="/sorttb.png" alt="sort" width={12} height={12} style={{ objectFit: "contain" }} />
                                    </IconButton>
                                </Box >
                            </TableCell>

                            <TableCell align="left" sx={{ borderBottom: "1px solid rgba(255, 101, 1, 0.5)" }}>
                                <Box sx={{ display: "flex", flexDirection: "row", }}>
                                    <Typography sx={{ color: "#1E1E1E", fontSize: "15px", fontWeight: "500", ml: 2 }}> Groups </Typography>
                                    <IconButton sx={{ padding: 0, ml: 1 }}>
                                        <Image src="/sorttb.png" alt="sort" width={12} height={12} style={{ objectFit: "contain" }} />
                                    </IconButton>
                                </Box>
                            </TableCell>

                            <TableCell align="left" sx={{ borderBottom: "1px solid rgba(255, 101, 1, 0.5)" }}>
                                <Box sx={{ display: "flex", flexDirection: "row", }}>
                                    <Typography sx={{ color: "#1E1E1E", fontSize: "15px", fontWeight: "500", ml: 2 }}> Tags </Typography>
                                    <IconButton sx={{ padding: 0, ml: 1 }}>
                                        <Image src="/sorttb.png" alt="sort" width={12} height={12} style={{ objectFit: "contain" }} />
                                    </IconButton>
                                </Box>
                            </TableCell>

                            <TableCell align="left" sx={{ borderBottom: "1px solid rgba(255, 101, 1, 0.5)" }}>
                                <Box sx={{ display: "flex", flexDirection: "row", }}>
                                    <Typography sx={{ color: "#1E1E1E", fontSize: "15px", fontWeight: "500", }}> Last Engagement</Typography>
                                    <IconButton>
                                        <Image src="/sorttb.png" alt="sort" width={12} height={12} style={{ objectFit: "contain" }} />
                                    </IconButton>
                                </Box>
                            </TableCell>

                            <TableCell align="left" sx={{ borderBottom: "1px solid rgba(255, 101, 1, 0.5)" }}>
                                <Box sx={{ display: "flex", flexDirection: "row", }}>
                                    <Typography sx={{ color: "#1E1E1E", fontSize: "15px", fontWeight: "500", }}> Actions </Typography>
                                </Box>
                            </TableCell>


                        </TableRow>
                    </TableHead>

                    {/* BODY */}
                    <TableBody>
                        {paginatedRows.map((row) => (
                            <TableRow key={row.id} hover sx={{
                                "& th, & td": {
                                    textAlign: "left",
                                    verticalAlign: "middle",
                                },
                            }}>
                                <TableCell align="left">
                                    <Checkbox sx={{ color: "#7175794F" }} />
                                </TableCell>

                                <TableCell align="left" >
                                    <Typography sx={{ color: "#1E1E1E", fontSize: "13px", fontWeight: "500", }}> {row.name} </Typography>
                                    <Typography sx={{ color: "#717579BF", fontSize: "13px", fontWeight: "500", }}> {row.profession} </Typography>
                                </TableCell>

                                <TableCell align="left" sx={{ p: 0 }}>
                                    <Box sx={{ display: "flex", justifyContent: "flex-start", alignItems: "center", gap: 1, ml: 2 }}>
                                        {row.mbCt?.map((ct: string, i: number) => (
                                            <Image
                                                key={i} src={ct} alt="icon" width={18} height={18} unoptimized style={{ display: "block", objectFit: "contain" }} />
                                        ))}

                                        <Typography sx={{ color: "#717579", fontSize: 13, fontWeight: 500 }}>
                                            {row.mobiles}
                                        </Typography>
                                    </Box>
                                </TableCell>


                                {/* Groups */}  
                                <TableCell align="left" sx={{ flexGrow: 1, }} >
                                    <Box sx={{ display: "flex", justifyContent: "flex-start", alignItems: "center", gap: 1, ml: 2 }}>
                                        {/* <Button sx={{ m: 0, p: 0, minWidth: 0, minHeight: 0, lineHeight: 1, }} >
                                            <Image src="/addtag.png" alt="tag" width={18} height={18} style={{ objectFit: "contain" }} />
                                        </Button> */}
                                        {row.groups?.map((g: string, i: number) => (
                                            <Box key={i} sx={{
                                                bgcolor: "#F4F4F4", borderRadius: "8px", px: "10px ", py: "5px",

                                            }}>
                                                <Typography sx={{ color: "#717579", fontSize: "13px", fontWeight: "500", }}>
                                                    {g}
                                                </Typography>
                                            </Box>
                                        ))}
                                    </Box>
                                </TableCell>

                                {/* Tags */}
                                <TableCell align="left" sx={{ flexGrow: 1 }} >
                                    <Box sx={{
                                        display: "flex", justifyContent: "flex-start", alignItems: "center", gap: 1,
                                        ml: 2, width: "100%"
                                    }}>
                                        {/* <Button sx={{ m: 0, p: 0, minWidth: 0, minHeight: 0, lineHeight: 1, }} >
                                            <Image src="/addtag.png" alt="tag" width={18} height={18} style={{ objectFit: "contain" }} />
                                        </Button> */}
                                        {row.tags?.map((g: string, i: number) => (
                                            <Box key={i} sx={{
                                                bgcolor: "#F4F4F4", borderRadius: "8px", px: "10px ", py: "5px",

                                            }}>
                                                <Typography sx={{ color: "#717579", fontSize: "13px", fontWeight: "500", }}>
                                                    {g}
                                                </Typography>
                                            </Box>
                                        ))}
                                    </Box>
                                </TableCell>


                                <TableCell align="left">
                                    <Typography sx={{ color: "#717579", fontSize: "13px", fontWeight: "500", }}>
                                        {row.lastEngagement}
                                    </Typography>
                                </TableCell>

                                <TableCell align="left">
                                    <IconButton onClick={() => console.log("comment")} sx={{ width: 30, height: 30, ml: 1 }}>
                                        <Image src="/comtb.png" alt="comtb" width={30} height={30} />
                                    </IconButton>

                                    <IconButton onClick={() => console.log("status")} sx={{ width: 30, height: 30, ml: 1 }}>
                                        <Image src="/stustb.png" alt="stustb" width={30} height={30} />
                                    </IconButton>

                                    <IconButton onClick={openEditContactDrawer} sx={{ width: 30, height: 30, ml: 1 }}>
                                        <Image src="/edittb.png" alt="edittb" width={30} height={30} />
                                    </IconButton>

                                        <IconButton onClick={openDeleteContact} sx={{ width: 30, height: 30, ml: 1 }}>
                                            <Image src="/deltb.png" alt="deltb" width={30} height={30} />
                                        </IconButton>

                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>



                </Table>
            </TableContainer>

            {/* contact footer */}
            <Box sx={{ display: 'flex', justifyContent: "space-between", alignItems: "center", gap: 5, mt: 2 }}>
                {/* page result */}
                <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", gap: 3, }}>
                    <Typography sx={{ fontSize: "12px", color: '#717579' }}>  Rows per page:</Typography>
                    <Select value={rowsPerPage} onChange={(e) => setRowValue(Number(e.target.value))}
                        IconComponent={(props) => <KeyboardArrowDownOutlinedIcon {...props}
                            sx={{ color: '#FF6501 !important', fontSize: "25px" }} />}
                        sx={{
                            width: "80px", height: "38px", backgroundColor: "#FFFFFF", borderRadius: "30px",
                            fontSize: "15px", textAlign: 'center'
                        }}>
                        {rowCounts.map((count: number) => (
                            <MenuItem key={count} value={count} >
                                {count}
                            </MenuItem>
                        ))}
                    </Select>
                    <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", gap: 1, }}>
                        <Typography sx={{ fontSize: "14px" }}>{rows.length} </Typography>
                        <Typography sx={{ fontSize: "14px" }}>results</Typography>
                    </Box>
                </Box>

                {/* pagination */}
                <Box sx={{ mt: 2 }}>
                    <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", gap: 1, }} >
                        {/* <Pagination
                            count={totalPages(rows.length)}
                            page={page}
                            siblingCount={1}      
                            boundaryCount={0}
                            onChange={(e, val) => setPage(val, rows.length)}
                            renderItem={(item) => (
                                <PaginationItem
                                    {...item}
                                    slots={{
                                        previous: () => (
                                            <Box sx={{ px: 3, py: 1, border: "1px solid rgba(255, 101, 1, 0.2)", borderRadius: "12px", fontSize: "15px", fontweight: 500, color: "#FF6501", textTransform: "none" }} display="flex" alignItems="center" justifyContent="center" gap={1}>
                                                <Box sx={{ width: 20, height: 20, position: "relative" }}>
                                                    <Image src="/pageprvbtn.png" alt="next" fill style={{ objectFit: "contain" }} />
                                                </Box>
                                                Previous
                                            </Box>
                                        ),
                                        next: () => (
                                            <Box sx={{ px: 3, py: 1, border: "1px solid rgba(255, 101, 1, 0.2)", borderRadius: "12px", fontSize: "15px", fontweight: 500, color: "#FF6501", textTransform: "none" }} display="flex" alignItems="center" justifyContent="center" gap={1}>
                                                Next
                                                <Box sx={{ width: 20, height: 20, position: "relative" }}>
                                                    <Image src="/pagenxtbtn.png" alt="next" fill style={{ objectFit: "contain" }} />
                                                </Box>
                                            </Box>
                                        ),
                                    }}
                                    sx={{
                                        color: "#202020",
                                        fontWeight: 500,
                                        transition: "none !important",
                                        boxShadow: "none",
                                        "&:hover": {
                                            backgroundColor: "transparent",
                                            boxShadow: "none",
                                        },
                                        "&.Mui-selected": {
                                            backgroundColor: "#FF6501",
                                            color: "#fff",
                                            "&:hover": {
                                                backgroundColor: "#FF6501",
                                            },
                                        },
                                        "&.MuiPaginationItem-previousNext": {
                                            transition: "none !important",
                                            "&:hover": {
                                                backgroundColor: "transparent",
                                                boxShadow: "none",
                                            },
                                        },

                                    }}
                                />


                            )}
                        /> */}
                        {/* Prev */}
                        <Button disabled={page === 1} onClick={() => setPage(page - 1, tableRowData.length)}
                            sx={{
                                px: 3, py: 1, border: "1px solid rgba(255, 101, 1, 0.2)", borderRadius: "12px",
                                fontSize: "15px", fontWeight: 500, color: "#FF6501", textTransform: "none",
                                display: "flex", alignItems: "center", gap: 1, justifyContent: "center"

                            }}
                        >
                            <Box sx={{ width: 20, height: 20, position: "relative" }}>
                                <Image
                                    src="/prvpg.png" alt="previous" fill style={{ objectFit: "contain" }}
                                />
                            </Box>

                            Previous

                        </Button>

                        <Box sx={{
                            display: 'flex', justifyContent: "center", alignItems: "center",
                            bgcolor: "rgba(255, 255, 255, 1)", borderRadius: "22px", p: 0.5,
                        }}>
                            {pages.map((p: any) => (
                                <Button key={p} onClick={() => setPage(p, tableRowData.length)}
                                    sx={{
                                        fontSize: "15px", fontWeight: 500, minWidth: "40px", minHeight: "30px", borderRadius: "50px",
                                        bgcolor: p === page ? "#FF6501" : "transparent",
                                        color: p === page ? "#fff" : "#202020",
                                        "&:hover": { bgcolor: p === page ? "#FF6501" : "transparent", },
                                    }}
                                >
                                    {p}
                                </Button>
                            ))}
                        </Box>

                        {/* Next */}
                        <Button disabled={page === total} onClick={() => setPage(page + 1, tableRowData.length)}
                            sx={{
                                px: 3, py: 1, border: "1px solid rgba(255, 101, 1, 0.2)", borderRadius: "12px",
                                fontSize: "15px", fontWeight: 500, color: "#FF6501", textTransform: "none",
                                display: "flex", alignItems: "center", gap: 1, justifyContent: "center"
                            }}
                        > Next
                            <Box sx={{ width: 20, height: 20, position: "relative" }}>
                                <Image src="/nxtpg.png" alt="previous" fill style={{ objectFit: "contain" }} />
                            </Box>

                        </Button>




                    </Box>
                </Box>

            </Box>




        </>

    );
}

