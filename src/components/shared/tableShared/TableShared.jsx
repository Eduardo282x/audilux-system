import {
    Table,
    TableBody,
    TableContainer,
    TableCell,
    TableHead,
    TableRow,
    TablePagination,
    Paper,
    IconButton,
    InfoIcon,
    DeleteIcon,
    EditIcon,
    AddIcon,
    SearchIcon,
    InputAdornment,
    OutlinedInput,
    FormControl,
    InputLabel,
    HomeIcon,
    LocationOnIcon,
    LightbulbIcon,
    EngineeringIcon,
} from "../materialUI";

import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { ParseTimeString, StyledTableCell } from "./tableShared.data.js";
import "./tableShared.css";
// import moment from "moment";

export const TableShared = ({
    title,
    widthDiv,
    columns,
    rows,
    optionsComponents,
    returnData,
    iconTitle
}) => {
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const [dataFilter, setDateFilter] = useState([]);
    const classWidth = `flex flex-col items-center justify-center bg-gray-200 rounded-3xl p-5 ${widthDiv != ''? widthDiv : 'w-[70rem]'}`

    const setIcon = (actionIcon) => {
        if (actionIcon == "Edit") return <EditIcon />;
        if (actionIcon == "Add") return <AddIcon />;
        if (actionIcon == "Delete") return <DeleteIcon />;
        if (actionIcon == "info") return <InfoIcon />;
        if (actionIcon == "home") return <HomeIcon />;
        if (actionIcon == "location") return <LocationOnIcon />;
        if (actionIcon == "light") return <LightbulbIcon />;
        if (actionIcon == "engine") return <EngineeringIcon />;
    };

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    const filterValue = (filterInput) => {
        if (rows && rows.length > 0) {
            const filterColumn = columns.filter((col) => col.filterOption == true);
            const filtersKey = filterColumn.map((col) => col.column);
            const filterSearch = filtersKey
                .map((col) =>
                    rows.filter((fil) =>
                        fil[col].toLowerCase().includes(filterInput.toLowerCase())
                    )
                )
                .flat();
            const reduceFilter = new Set(filterSearch);
            const result = [...reduceFilter];
            setDateFilter(result);
        }
    };

    const sendData = (row, action) => {
        returnData({ action: action, data: row });
    };

    const addNew = () => {
        returnData({ action: "Add", data: null, });
    };

    useEffect(() => {
        setDateFilter(rows);
    }, [rows]);

    return (
        <div className={classWidth}>
            <div className="flex items-center justify-between w-full px-5">
                <div className="flex items-center justify-center">
                    <p className="text-[#1565c0]">{setIcon(iconTitle)}</p>
                    <p className="text-black font-bold text-[18px]">{title}</p>
                </div>

                <div className="flex items-center justify-center">
                    {optionsComponents.showSeachInput && (
                        <FormControl sx={{ width: "20vw" }} variant="outlined">
                            <InputLabel>Buscar</InputLabel>
                            <OutlinedInput
                                type="text"
                                onChange={() => filterValue(event.target.value)}
                                endAdornment={
                                    <InputAdornment position="end">
                                        <SearchIcon />
                                    </InputAdornment>
                                }
                                label="Buscar"
                            />
                        </FormControl>
                    )}

                    {optionsComponents.showAddBtn && (
                        <IconButton onClick={addNew}>
                            <AddIcon color="primary" />
                        </IconButton>
                    )}
                </div>
            </div>

            <div className="tableScroll">
                <TableContainer component={Paper} className="table">
                    <Table stickyHeader>
                        <TableHead sx={{ background: "#1565c0" }}>
                            <TableRow>
                                {columns.map((col, ind) => (
                                    <StyledTableCell key={ind}>{col.header}</StyledTableCell>
                                ))}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {dataFilter
                                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                .map((row, index) => (
                                    <TableRow key={index} sx={{background: '#e5e7eb'}}>
                                        {columns.map((ro, key) => (
                                            <TableCell
                                                key={key}
                                                sx={{ width: ro.width ? ro.width : 100 }}
                                            >
                                                {ro.type == "string" ? row[ro.column] : ""}
                                                {/* {ro.type == "mm" ? row[ro.column] + "mm" : ""}
                                                {ro.type == "price" ? row[ro.column] + "$" : ""} */}
                                                {ro.type == "date" ? row[ro.column] : ""}
                                                {ro.type == "time" ? ParseTimeString(row[ro.column]) : ""}
                                                {/* {ro.type == "date" ? parseDate(row[ro.column]) : ""}  */}
                                                {ro.type == "icon" && (
                                                    <IconButton
                                                        className="editBtn"
                                                        onClick={() => sendData(row, ro.action)}
                                                        color={ro.colorBtn}
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
            </div>

            <div className="flex items-center justify-end w-full">
                {dataFilter.length > 5 && (
                    <TablePagination
                        rowsPerPageOptions={[5, 10, 25, 50, 100]}
                        component="div"
                        count={dataFilter.length}
                        rowsPerPage={rowsPerPage}
                        labelRowsPerPage={"Paginas"}
                        page={page}
                        onPageChange={handleChangePage}
                        onRowsPerPageChange={handleChangeRowsPerPage}
                    />
                )}
            </div>
        </div>
    );
};

TableShared.propTypes = {
    iconTitle: PropTypes.string,
    widthDiv: PropTypes.string,
    title: PropTypes.string,
    columns: PropTypes.array,
    rows: PropTypes.array,
    optionsComponents: PropTypes.object,
    returnData: PropTypes.func,
};
