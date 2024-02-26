import { styled } from '@mui/material/styles';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';

export const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: '#1565c0',
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: '18px', // Tamaño de letra
        fontWeight: 'bold', // Tipo de letra en negrita
    },
}));

export const ParseTimeString = (inputTime) => {
    const hours = inputTime._d.getHours();
    const minutes = inputTime._d.getMinutes();
    if (hours >= 0 && hours <= 11) {
        // AM format
        const formattedHours = hours === 0 ? 12 : hours;
        const formattedMinutes = minutes.toString().padStart(2, "0");
        return `${formattedHours}:${formattedMinutes} AM`;
    } else if (hours >= 12 && hours <= 23) {
        // PM format
        const formattedHours = hours > 12 ? hours - 12 : hours;
        const formattedMinutes = minutes.toString().padStart(2, "0");
        return `${formattedHours}:${formattedMinutes} PM`;
    } else {
        return "Formato de hora inválido";
    }
}
