import { Box } from '@mui/material';
import { useContactStore } from '../components/controller/contactController';

export default function ToggleChipbtn() {
    const { toggleChip, chip } = useContactStore();

    return (
        <Box onClick={() => toggleChip('chip')} sx={{ cursor: 'pointer', display: 'inline-block' }}>
            <img
                src={chip ? "/clschip.png" : "/chipopn.png"}
                alt="toggle chip"
                width={22}
                height={22}
            />
        </Box>
    );
}
