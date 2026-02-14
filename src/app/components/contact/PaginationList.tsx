import { Box, Button, MenuItem, Select, Typography } from "@mui/material"
import { useContactStore } from "../controller/contactController";
import { mockrows } from "../Services/Mock";
import Image from "next/image";
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';


interface PaginationProps {
    rowsPerPage: number;
    rowCounts: number[];
    page: number;
    totalPages: number;
    pages: number[];
    totalItems: number;
    onPageChange: (page: number) => void;
    onRowsPerPageChange: (value: number) => void;
}

export default function PaginationList({
    rowsPerPage,
    rowCounts,
    page,
    totalPages,
    pages,
    totalItems,
    onPageChange,
    onRowsPerPageChange
}: PaginationProps) {

    return (

        <Box sx={{
            display: 'flex', flexDirection: { xs: "column", md: "row" }, justifyContent: "space-between", alignItems: "center",
            gap: { xs: 2, md: 3 }, mt: { xs: 3, md: 2 } ,
        }}>
            {/* page result */}
            <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", gap: 3, }}>
                <Typography sx={{ fontSize: "12px", color: '#717579' }}>  Rows per page:</Typography>
                <Select value={rowsPerPage} onChange={(e) => onRowsPerPageChange(Number(e.target.value))}
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
                    <Typography sx={{ fontSize: "14px" }}>{mockrows.length} </Typography>
                    <Typography sx={{ fontSize: "14px" }}>results</Typography>
                    
                </Box>
            </Box>

            {/* pagination */}
            <Box >
                <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", gap: 1, }} >
                    {/* Prev */}
                    <Button disabled={page === 1} onClick={() => onPageChange(page - 1, )}
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
                            <Button key={p} onClick={() => onPageChange(p)}
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
                    <Button disabled={page === totalPages} onClick={()   => onPageChange(page + 1) }
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


    )
}