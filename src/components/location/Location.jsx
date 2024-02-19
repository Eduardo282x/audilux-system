import { bodySend, columns, dataForm, optionsComponents, row,optionEdification, validationSchema } from "./location.data.js"
import { FormGenerator } from "../shared/formGenerator/FormGenerator.jsx"
import {style, Backdrop,Box,Modal,Fade,} from '../shared/materialUI.js'
import { TableShared } from "../shared/tableShared/TableShared.jsx"
import { useState } from "react"

export const Location = () => {
    const [openModal, setOpenModal] = useState(false);
    const [actionForm, setActionForm] = useState('addLocation');
    const [titleForm, setTitleForm] = useState('Agregar Ubicación');
    const [rows, setRows] = useState(row);
    const [bodyForm, setBodyForm] = useState(bodySend);
    const handleOpen = () => setOpenModal(true);
    const handleClose = () => setOpenModal(false);

    const getDataTable = ({action, data}) => {
        if(action === 'Add'){
            setBodyForm(bodySend);
            setTitleForm('Agregar Ubicación');
            setActionForm('addLocation');
            handleOpen();
        }
        if(action === 'Edit'){
            const editRows = data;
            setBodyForm(editRows);
            setTitleForm('Editar Ubicación');
            setActionForm('editLocation');
            handleOpen();
        }
        if(action === 'addLocation'){
            const newRow = [...rows];
            const addRows = {
                Auditor: data.Auditor,
                edificate: optionEdification.find(item => item.value == data.TypeEdification).label,
                TypeEdification: data.TypeEdification,
                Address: data.Address,
                Date: data.Date,
            };
            newRow.push(addRows);
            setRows(newRow);

            handleClose();
        }
        if(action === 'editLocation'){
            const newRows = [...rows];
            const editRow = newRows.find(ro => ro.id == data.id);
            editRow.Auditor = data.Auditor;
            editRow.edificate = optionEdification.find(item => item.value == data.TypeEdification).label,
            editRow.TypeEdification = data.TypeEdification;
            editRow.Address = data.Address;
            editRow.Date = data.Date;
            setRows(newRows);
            handleClose();
        }
        if(action === 'Delete'){
            deleteLocation(data);
        }
    }

    const deleteLocation = (location) => {
        const newRow = rows.filter(ro => ro.id != location.id);
        setRows(newRow);
    }

    return (
        <div >
            <TableShared iconTitle={'location'} title={'Ubicación'} columns={columns} rows={rows} optionsComponents={optionsComponents} returnData={getDataTable} />

            <div className="modal">
                <Modal
                    aria-labelledby="transition-modal-title"
                    aria-describedby="transition-modal-description"
                    open={openModal}
                    onClose={handleClose}
                    closeAfterTransition
                    slots={{ backdrop: Backdrop }}
                    slotProps={{
                        backdrop: {
                            timeout: 500,
                        },
                    }}
                >
                    <Fade in={openModal}>
                        <Box sx={style}>
                            <FormGenerator
                                title={titleForm}
                                dataForm={dataForm}
                                bodySend={bodyForm}
                                action={actionForm}
                                validationSchema={validationSchema}
                                sendForm={getDataTable}
                            />
                        </Box>
                    </Fade>
                </Modal>
            </div>
        </div>
    )
}
