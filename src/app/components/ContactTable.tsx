import { Group } from "@mui/icons-material";
import { Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Checkbox, Chip, IconButton, Paper, Typography, Button, Pagination, PaginationItem, Select, MenuItem, TableFooter, Menu, Popover, Card, CardContent, Divider } from "@mui/material";
import Image from "next/image";
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import { mockrows } from "./Services/Mock";
import { useContactStore } from "./controller/contactController";
import MoreVertIcon from '@mui/icons-material/MoreVert';

export default function ContactTable({ rows }: { rows: any[] }) {
    const { value: rowsPerPage,
        page, setPage: setPage,
        totalPages,
        rowCounts,
        setRowValue,
        visiblePageCount,
        openEditContactDrawer,
        openDeleteContact,
        isMbvActionOpen,
        openMobileAction,
        closeMobileAction,
    } = useContactStore();
    const tableRowData = mockrows;
    const startIndex = (page - 1) * rowsPerPage;
    const endIndex = startIndex + rowsPerPage;
    const paginatedRows = mockrows.slice(startIndex, endIndex);
    const pages = visiblePageCount(tableRowData.length)
    const total = totalPages(tableRowData.length)

    const colors = [
        { dot: "#29B278", bg: "#29B2781A" },
        { dot: "#FF9F34", bg: "#FF9F341A" },
        { dot: "#F0432C", bg: "#F0432C1A" },
    ];
    const getRandomColor = () =>
        colors[Math.floor(Math.random() * colors.length)];
    return (
        < >
            {/* DeskTop view */}
            <Box sx={{ display: { xs: "none", md: "block" }, justifyContent: "center", alignItems: "center", }}>
                <TableContainer component={Paper} sx={{
                    bgcolor: "#FFFFFF", borderRadius: "12px", mb: 2, width: "100%",
                    boxShadow: "none", border: "1px solid #E2E8F0"
                }}>
                    <Table sx={{
                        "& th, & td": {
                            whiteSpace: "nowrap",
                            px: { xs: 1, md: 2 },
                            py: { xs: 1, md: 1.5 },
                            fontSize: { xs: "12px", md: "13px" },
                        },
                    }}>
                        {/* HEADER */}
                        <TableHead >
                            <TableRow sx={{
                                "& td, & th": {
                                    whiteSpace: "nowrap"
                                }
                            }} >
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
                            {paginatedRows.map((row) => {
                                return (
                                    <TableRow key={row.id} hover sx={{
                                        "& th, & td": {
                                            textAlign: "left",
                                            verticalAlign: "middle",
                                        },
                                    }}>
                                        <TableCell align="left">
                                            <Checkbox sx={{ color: "#7175794F" }} />
                                        </TableCell>

                                        <TableCell align="left">
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
                                        <TableCell align="left" sx={{ flexGrow: 1, }}>
                                            <Box sx={{ display: "flex", justifyContent: "flex-start", alignItems: "center", gap: 1, ml: 2 }}>
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
                                        <TableCell align="left" sx={{ flexGrow: 1 }}>
                                            <Box sx={{
                                                display: "flex", justifyContent: "flex-start", alignItems: "center", gap: 1,
                                                ml: 2, width: "100%"
                                            }}>
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
                                            {(() => {
                                                const color = getRandomColor();

                                                return (
                                                    <Box sx={{ display: "flex", alignItems: "center", gap: 1, }}>
                                                        <Box sx={{
                                                            bgcolor: color.bg, width: "12px", height: "12px", borderRadius: "50%",
                                                            display: "flex", justifyContent: "center", alignItems: "center"
                                                        }}>
                                                            <Box sx={{ bgcolor: color.dot, width: "5px", height: "5px", borderRadius: "50%" }}></Box>
                                                        </Box>
                                                        <Typography sx={{ color: "#717579", fontSize: "13px", fontWeight: "500", }}>
                                                            {row.lastEngagement}
                                                        </Typography>
                                                    </Box>
                                                )
                                            })()}

                                        </TableCell>

                                        <TableCell align="left">
                                            <IconButton onClick={() => console.log("comment")} sx={{
                                                display: { xs: "none", sm: "inline-flex" }, width: 30, height: 30, ml: 1,
                                            }}>
                                                <Image src="/comt.png" alt="comtb" width={30} height={30} />
                                            </IconButton>

                                            <IconButton onClick={() => console.log("status")} sx={{
                                                display: { xs: "none", sm: "inline-flex" }, width: 30, height: 30, ml: 1
                                            }}>
                                                <Image src="/stustb.png" alt="stustb" width={30} height={30} />
                                            </IconButton>

                                            <IconButton onClick={openEditContactDrawer} sx={{ width: 30, height: 30, ml: 1 }}>
                                                <Image src="/edittb.png" alt="edittb" width={30} height={30} />
                                            </IconButton>

                                            <IconButton onClick={openDeleteContact} sx={{ width: 30, height: 30, ml: 1 }}>
                                                <Image src="/deltb.png" alt="deltb" width={30} height={30} />
                                            </IconButton>

                                            <IconButton onClick={(e) => openMobileAction(e, row.id)}
                                                sx={{ width: 30, height: 30, ml: 1 }}>
                                                <MoreVertIcon sx={{ display: { xs: "inline-flex", sm: "none" } }} />
                                            </IconButton>

                                            <Popover
                                                open={isMbvActionOpen}
                                                onClose={closeMobileAction}
                                                anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                                                transformOrigin={{ vertical: "top", horizontal: "right" }}
                                            >
                                                <MenuItem onClick={() => { console.log("comment"); closeMobileAction(); }}>
                                                    <IconButton onClick={() => console.log("comment")} sx={{
                                                        width: 30, height: 30, ml: 1,
                                                    }}>
                                                        <Image src="/comt.png" alt="comtb" width={30} height={30} />
                                                    </IconButton>
                                                </MenuItem>

                                                <MenuItem onClick={() => { console.log("status"); closeMobileAction(); }}>
                                                    <IconButton onClick={() => console.log("comment")} sx={{
                                                        width: 30, height: 30, ml: 1,
                                                    }}>
                                                        <Image src="/stustb.png" alt="stustb" width={30} height={30} />
                                                    </IconButton>
                                                </MenuItem>``
                                            </Popover>
                                        </TableCell>
                                    </TableRow>
                                );
                            })}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Box>

            {/* mobile card View */}
            <Box sx={{ display: { xs: "block", md: "none" }, justifyContent: "center", alignItems: "center" }}>
                {paginatedRows.map((row: any) => (
                    <Card key={row.id} sx={{ mb: 2, borderRadius: "12px", bgcolor: "#FFFFFF", width: "100%" }}>
                        <CardContent sx={{ px: 2, py: 2, '&:last-child': { pb: 1 } }}>
                            {/* mbv head */}
                            <Box sx={{ mb: 1 }}>
                                <Typography sx={{ color: "#1E1E1E", fontSize: "15px", fontWeight: "500", }}> {row.name} </Typography>
                                <Typography sx={{ color: "#717579", fontSize: "13px", fontWeight: "500", }}> {row.profession} </Typography>
                            </Box>
                            {/* Mbv body */}
                            <Box>
                                <Box sx={{ mb: 1, display: "flex", justifyContent: "space-between" }}>
                                    <Box >
                                        <Typography sx={{ color: "#717579", fontSize: "13px", fontWeight: "500", mb: 1 }}> Mobile </Typography>
                                        <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", }}>
                                            {row.mbCt?.map((ct: string, i: number) => (
                                                <Image
                                                    key={i} src={ct} alt="icon" width={18} height={18} unoptimized
                                                    style={{ display: "block", objectFit: "contain" }} />
                                            ))}
                                            <Typography sx={{ color: "#1E1E1E", fontSize: 13, fontWeight: 500, ml: 1 }}>
                                                {row.mobiles}
                                            </Typography>
                                        </Box>
                                    </Box>
                                    <Box>
                                        <Typography sx={{ color: "#717579", fontSize: "13px", fontWeight: "500", mb: 1 }}> Last Engagement </Typography>
                                        <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", }}>
                                            <Typography sx={{ color: "#1E1E1E", fontSize: 13, fontWeight: 500, ml: 1 }}>
                                                {row.lastEngagement}
                                            </Typography>
                                        </Box>
                                    </Box>
                                </Box>

                            </Box>
                            <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 1 }}>
                                <Box sx={{ display: "flex", justifyContent: "flex-start", alignItems: "center", gap: 1, }}>
                                    {row.groups?.map((group: string, i: number) => (
                                        <Box key={i} sx={{
                                            bgcolor: "#F4F4F4", borderRadius: "8px", px: "10px ", py: "5px",
                                        }}>
                                            <Typography sx={{ color: "#717579", fontSize: "13px", fontWeight: "500", }}>
                                                {group}
                                            </Typography>
                                        </Box>
                                    ))}
                                </Box>
                                <Box sx={{ display: "flex", justifyContent: "flex-start", alignItems: "center", gap: 1, ml: 2 }}>
                                    {row.tags?.map((tag: string, i: number) => (
                                        <Box key={i} sx={{
                                            bgcolor: "#F4F4F4", borderRadius: "8px", px: "10px ", py: "5px",
                                        }}>
                                            <Typography sx={{ color: "#717579", fontSize: "13px", fontWeight: "500", }}>
                                                {tag}
                                            </Typography>
                                        </Box>
                                    ))}
                                </Box>

                            </Box>
                            <Divider sx={{ mb: 1 }} />
                            <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", }}>
                                <Box>
                                    <Checkbox sx={{ color: "#FF6501", fontSize: "5px" }} />
                                </Box>
                                <Box>
                                    <IconButton onClick={() => console.log("comment")} sx={{
                                        width: 30, height: 30, ml: 1,
                                    }}>
                                        <Image src="/comt.png" alt="comtb" width={30} height={30} />
                                    </IconButton>

                                    <IconButton onClick={() => console.log("status")} sx={{
                                        width: 30, height: 30, ml: 1
                                    }}>
                                        <Image src="/stustb.png" alt="stustb" width={30} height={30} />
                                    </IconButton>

                                    <IconButton onClick={openEditContactDrawer} sx={{ width: 30, height: 30, ml: 1 }}>
                                        <Image src="/edittb.png" alt="edittb" width={30} height={30} />
                                    </IconButton>

                                    <IconButton onClick={openDeleteContact} sx={{ width: 30, height: 30, ml: 1 }}>
                                        <Image src="/deltb.png" alt="deltb" width={30} height={30} />
                                    </IconButton>

                                </Box>

                            </Box>


                        </CardContent>

                    </Card>
                ))}

            </Box>

            {/* contact footer */}
            <Box sx={{
                display: 'flex', flexDirection: { xs: "column", md: "row" }, justifyContent: "space-between", alignItems: "center",
                gap: { xs: 2, md: 3 }, mt: { xs: 3, md: 2 },
            }}>
                {/* page result */}
                <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", gap: 3, }}>
                    <Typography sx={{ fontSize: "12px", color: '#717579' }}>  Rows per page:</Typography>
                    <Select value={rowsPerPage} onChange={(e) => setRowValue(Number(e.target.value))}
                        IconComponent={(props) => <KeyboardArrowDownOutlinedIcon {...props}
                            sx={{ color: '#FF6501 !important', fontSize: "25px" }} />}
                        sx={{
                            width: "80px", height: "38px", backgroundColor: "#FFFFFF", borderRadius: "30px",
                            fontSize: "15px", textAlign: 'center', border: "1px solid transparent",
                            "& fieldset": {
                                border: "none",
                            },
                        }}>
                        {rowCounts.map((count: number) => (
                            <MenuItem key={count} value={count}  >
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
                <Box >
                    <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", gap: 1, }} >
                        {/* Prev */}
                        <Button disabled={page === 1} onClick={() => setPage(page - 1, tableRowData.length)}
                            sx={{
                                px: 3, py: 1, border: "1px solid rgba(255, 101, 1, 0.2)", borderRadius: "12px",
                                display: "flex", alignItems: "center", gap: 1, justifyContent: "center"

                            }}
                        >
                            <Box sx={{ width: 20, height: 20, position: "relative" }}>
                                <Image
                                    src="/prvpg.png" alt="previous" fill style={{ objectFit: "contain" }}
                                />
                            </Box>

                            <Typography sx={{
                                display: { xs: "none", sm: "block" }, fontSize: "15px", fontWeight: 500,
                                color: "#FF6501", textTransform: "none",
                            }}>
                                Previous
                            </Typography>

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
                        >

                            <Typography sx={{
                                display: { xs: "none", sm: "block" }, fontSize: "15px", fontWeight: 500,
                                color: "#FF6501", textTransform: "none",
                            }}>
                                Next
                            </Typography>
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

