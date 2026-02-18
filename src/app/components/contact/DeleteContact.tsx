import { Box, Button, Dialog, DialogActions, Typography } from "@mui/material";
import Image from "next/image";
import { useContactStore } from "../controller/contactController";

const  DeleteContact = () =>  {
    const { openDeleteContact, closeDeleteContact, deleteContactOpen } = useContactStore();
    return (
        <Dialog
            open={deleteContactOpen}
            onClose={closeDeleteContact}
            slotProps={{ paper: { sx: { borderRadius: "15px" } } }} >
            <Box sx={{
                display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", px: 4, py: 2, pt: 3
            }}>
                <Box onClick={closeDeleteContact} sx={{ display: "flex", width: "100%", justifyContent: "flex-end", cursor: "pointer" }}>
                    <Image src="/clfltr.png" alt="delete" width={22} height={22} />
                </Box>
                <Box sx={{ bgcolor: "#FF6D591A", borderRadius: "50px", p: 2, mb: 2 }}>
                    <Image src="/delWrn.png" alt="delete" width={35} height={35} />
                </Box>
                <Typography id="alert-dialog-title" sx={{
                    color: "#1E1E1E", fontSize: "20px", fontWeight: "500",
                    textAlign: "center", mb: 1
                }}>
                    Are you sure you want to delete this contact?
                </Typography>

                <Typography id="alert-dialog-description" sx={{
                    color: "#717579", fontSize: "12px", fontWeight: "400", textAlign: "center",
                }}>
                    This action cannot be undone. This will permanently delete the
                </Typography>

                <Typography id="alert-dialog-description" sx={{
                    color: "#717579", fontSize: "12px", fontWeight: "400", textAlign: "center", mb: 2
                }}>
                    contact "John Peter" and remove all associated data.
                </Typography>

                <DialogActions sx={{ display: "flex", flexDirection: { xs: "column", md: "row" }, justifyContent: "center", gap: 2, width: "100%" }}>
                    <Button onClick={closeDeleteContact} sx={{
                        color: "#1E1E1E", fontWeight: 600, textTransform: "none",
                        px: 10, py: 1.5, border: "1px solid #1E1E1E20", borderRadius: "12px"
                    }}>
                        Cancel
                    </Button>
                    <Button onClick={closeDeleteContact} sx={{
                        color: "#FFFFFF", bgcolor: "#FF6D59", fontWeight: 600, textTransform: "none",
                        px: 10, py: 1.5, boxShadow: 1, borderRadius: "12px"
                    }}>
                        Delete
                    </Button>
                </DialogActions>
            </Box>
        </Dialog>


    )
}

export default DeleteContact;