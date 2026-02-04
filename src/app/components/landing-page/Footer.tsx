import { Box, Typography } from "@mui/material";

export default function Footer() {
    return (
        <Box component="footer" sx={{ display: "flex", justifyContent: "center", alignItems: "center",
            width: `calc(100% -  80px)`}}>
            <Typography sx={{ color: "#1E1E1E", fontWeight: 500, fontSize: "12px" }}>
                copyright @ 2025 Growme
            </Typography>
        </Box>

    )

}