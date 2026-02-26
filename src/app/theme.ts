import { createTheme } from "@mui/material/styles";

const theme = createTheme({
    typography: {
        fontFamily: "var(--font-inter)"
    },
    palette: {
        background: {
            default: "rgba(246, 246, 246, 1)", 
        },
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {     
                    textTransform: "none",
                    minHeight: "unset",
                    fontFamily: "var(--font-inter)"
                },
            },
        },
        MuiChip: {
            styleOverrides: {
                root: {
                    fontFamily: "var(--font-inter)"
                },
            },
        },
    },
});

export default theme;
