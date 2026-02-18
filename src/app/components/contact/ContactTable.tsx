import { Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Checkbox, IconButton, Paper, Typography,  Card, CardContent, Divider, } from "@mui/material";
import Image from "next/image";
import { MockContact } from "../services/Mock";
import { useContactStore } from "../controller/contactController";
import PaginationList from "./PaginationList";

const ContactTable = (props: any) => {

    const {
        openDeleteContact,
        openContactForm,
        setPage,
        totalPages,
        setRowValue,
        visiblePageCount,
        pagination,
    } = useContactStore();
    const { value: rowsPerPage, page } = pagination;
    const tableRowData = MockContact;
    const startIndex = (page - 1) * rowsPerPage;
    const endIndex = startIndex + rowsPerPage;
    const paginatedRows = MockContact.slice(startIndex, endIndex);
    const pages = visiblePageCount(tableRowData.length)
    const total = totalPages(tableRowData.length)

    const colors = [
        { dot: "#29B278", bg: "#29B2781A" },
        { dot: "#FF9F34", bg: "#FF9F341A" },
        { dot: "#F0432C", bg: "#F0432C1A" },
    ];
    const getRandomColor = () => colors[Math.floor(Math.random() * colors.length)];




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
                                            borderBottom: "none",
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

                                                <Image src={`/${row.mbCt}.png`} alt="icon" width={18} height={18} unoptimized style={{ display: "block", objectFit: "contain" }} />


                                                <Typography sx={{ color: "#717579", fontSize: 13, fontWeight: 500 }}>
                                                    {row.mobileNumber}
                                                </Typography>
                                            </Box>
                                        </TableCell>


                                        {/* Groups */}
                                        <TableCell align="left" sx={{ flexGrow: 1, }}>
                                            <Box sx={{ display: "flex", justifyContent: "flex-start", alignItems: "center", gap: 1, ml: 2 }}>

                                                <Box sx={{
                                                    bgcolor: "#F4F4F4", borderRadius: "8px", px: "10px ", py: "5px",
                                                }}>
                                                    <Typography sx={{ color: "#717579", fontSize: "13px", fontWeight: "500", }}>
                                                        {row.group}
                                                    </Typography>
                                                </Box>

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
                                            {/* Comment */}
                                            <IconButton
                                                sx={{ display: { xs: "none", sm: "inline-flex" }, width: 30, height: 30, ml: 1 }}
                                            >
                                                <Image src="/comt.png" alt="comment" width={30} height={30} />
                                            </IconButton>

                                            {/* Status */}
                                            <IconButton
                                                sx={{ display: { xs: "none", sm: "inline-flex" }, width: 30, height: 30, ml: 1 }}
                                            >
                                                <Image src="/stustb.png" alt="status" width={30} height={30} />
                                            </IconButton>

                                            {/* Edit */}
                                            <IconButton
                                                onClick={() => openContactForm(row)}
                                                sx={{ display: { xs: "none", sm: "inline-flex" }, width: 30, height: 30, ml: 1 }}
                                            >
                                                <Image src="/edittb.png" alt="edit" width={30} height={30} />
                                            </IconButton>

                                            {/* Delete */}
                                            <IconButton
                                                onClick={openDeleteContact}
                                                sx={{ display: { xs: "none", sm: "inline-flex" }, width: 30, height: 30, ml: 1 }}
                                            >
                                                <Image src="/deltb.png" alt="delete" width={30} height={30} />
                                            </IconButton>
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

                                            <Image
                                                src={`/${row.mbCt}.png`} alt="icon" width={18} height={18} unoptimized
                                                style={{ display: "block", objectFit: "contain" }} />

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
                                    <TableCell align="left">
                                        {/* Comment */}
                                        <IconButton
                                            sx={{ display: { xs: "inline-flex", sm: "none" }, width: 40, height: 40, ml: 1 }}
                                        >
                                            <Image src="/comt.png" alt="comment" width={30} height={30} />
                                        </IconButton>

                                        {/* Status */}
                                        <IconButton
                                            sx={{ display: { xs: "inline-flex", sm: "none" }, width: 30, height: 30, ml: 1 }}
                                        >
                                            <Image src="/stustb.png" alt="status" width={30} height={30} />
                                        </IconButton>

                                        {/* Edit */}
                                        <IconButton
                                            onClick={() => openContactForm(row)}
                                            sx={{ display: { xs: "inline-flex", sm: "none" }, width: 30, height: 30, ml: 1 }}
                                        >
                                            <Image src="/edittb.png" alt="edit" width={30} height={30} />
                                        </IconButton>

                                        {/* Delete */}
                                        <IconButton
                                            onClick={openDeleteContact}
                                            sx={{ display: { xs: "inline-flex", sm: "none" }, width: 30, height: 30, ml: 1 }}
                                        >
                                            <Image src="/deltb.png" alt="delete" width={30} height={30} />
                                        </IconButton>
                                    </TableCell>


                                </Box>

                            </Box>


                        </CardContent>

                    </Card>
                ))}

            </Box>


            <PaginationList
                rowsPerPage={pagination.value}
                rowCounts={pagination.rowCounts}
                page={pagination.page}
                totalPages={total}
                pages={pages}
                totalItems={tableRowData.length}
                onPageChange={(p: any) => setPage(p, tableRowData.length)}
                onRowsPerPageChange={(v: any) => setRowValue(v)}
            />
        </>

    );
}

export default ContactTable;