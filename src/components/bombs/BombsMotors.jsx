import { TableShared } from "../shared/tableShared/TableShared"
import { row, columns, optionsComponents, bodySend, dataForm, validationSchema } from "./bombsMotors.data.js";
import { FormGenerator } from "../shared/formGenerator/FormGenerator.jsx"
import {style, Backdrop,Box,Modal,Fade,} from '../shared/materialUI.js'
import { useState } from "react";

export const BombsMotors = () => {
    const [openModal, setOpenModal] = useState(false);
    const [actionForm, setActionForm] = useState('addLuminate');
    const [titleForm, setTitleForm] = useState('Agregar Luminaria');
    const [rows, setRows] = useState(row);
    const [bodyForm, setBodyForm] = useState(bodySend);
    const handleOpen = () => setOpenModal(true);
    const handleClose = () => setOpenModal(false);

    const getDataTable = ({action, data}) => {
        if(action === 'Add'){
            setBodyForm(bodySend);
            setTitleForm('Agregar Luminaria');
            setActionForm('addLuminate');
            handleOpen();
        }
        if(action === 'Edit'){
            const editRows = data;
            setBodyForm(editRows);
            setTitleForm('Editar Luminaria');
            setActionForm('editLuminate');
            handleOpen();
        }
        if(action === 'addLuminate'){
            // const newRow = [...rows];
            // const { area, luminate, amount, start, end, days } = data;
            // const luminateLabel = typeIluminary.find(light => light.value === luminate).label;
            // const addRows = { area, luminate, luminateLabel, amount, start, end, days };
            // console.log(addRows);
            // newRow.push(addRows);
            // setRows(newRow);
            handleClose();
        }
        if(action === 'editLuminate'){
            // const newRows = [...rows];
            // const editRow = newRows.find(ro => ro.id == data.id);
            // editRow.area = data.area
            // editRow.luminate = data.luminate
            // editRow.luminateLabel = typeIluminary.find(light => light.value == data.luminate).label,
            // editRow.amount = data.amount
            // editRow.start = data.start
            // editRow.end = data.end
            // editRow.days = data.days
            // setRows(newRows);
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
        <TableShared iconTitle={'engine'} title={'Bombas y Motores'} columns={columns} rows={rows} optionsComponents={optionsComponents} returnData={getDataTable}/>

        <div className="modal">
            <Modal
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
