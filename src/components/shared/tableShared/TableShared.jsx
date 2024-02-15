import {
    Table,
    TableBody,
    TableContainer,
    TableCell,
    TableHead,
    TableRow,
    EditIcon,
    IconButton,
    InfoIcon,
    Paper,
    DeleteIcon,
    TablePagination,
    AddIcon
} from '../materialUI'

import { useState } from "react";
import PropTypes from "prop-types";
import {StyledTableCell} from './tableShared'
import './tableShared.css'
// import moment from "moment";

export const TableShared = ({ columns, rows, sendFather }) => {
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);

    const setIcon = (actionIcon) => {
        if (actionIcon == "Edit") return <EditIcon />;
        if (actionIcon == "Add") return <AddIcon />;
        if (actionIcon == "Delete") return <DeleteIcon />;
        if (actionIcon == "info") return <InfoIcon />;
    };

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const sendData = (row, action) => {
        sendFather({ action: action, data: row });
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    return (
        <div className="tableComponentContent">
            <TableContainer component={Paper} className="table">
                <Table stickyHeader>
                    <TableHead sx={{ background: "#1565c0" }}>
                        <TableRow>
                            {columns.map((col, ind) => (
                                <StyledTableCell key={ind}>
                                    {col.header}
                                </StyledTableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows
                            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            .map((row, index) => (
                                <TableRow key={index}>
                                    {columns.map((ro, key) => (
                                        <TableCell key={key} sx={{width: ro.width ? ro.width : 100}}>
                                            {ro.type == "string" ? row[ro.column] : ""}
                                            {/* {ro.type == "mm" ? row[ro.column] + "mm" : ""}
                                            {ro.type == "price" ? row[ro.column] + "$" : ""} */}
                                            {ro.type == "date" ? row[ro.column] : ""} 
                                            {/* {ro.type == "date" ? parseDate(row[ro.column]) : ""}  */}
                                            {ro.type == "icon" && (
                                                <IconButton
                                                    className="editBtn"
                                                    onClick={() => sendData(row, ro.action)}
                                                >
                                                    {setIcon(ro.column)}
                                                </IconButton>
                                            )}
                                        </TableCell>
                                    ))}
                                </TableRow>
                            ))}
                    </TableBody>
                </Table>
            </TableContainer>
            {rows.length > 5 ? (
                <TablePagination
                    rowsPerPageOptions={[5, 10, 25, 50, 100]}
                    component="div"
                    count={rows.length}
                    rowsPerPage={rowsPerPage}
                    labelRowsPerPage={"Paginas"}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
            ) : (
                ""
            )}
        </div>
    );
};

TableShared.propTypes = {
    columns: PropTypes.array,
    rows: PropTypes.array,
    sendFather: PropTypes.func,
};
