import { TableShared } from "../shared/tableShared/TableShared"
import { row, columns, optionsComponents, bodySend, dataForm, validationSchema, capacityOptions, kitOptions, phasesOptions } from "./bombsMotors.data.js";
import { FormGenerator } from "../shared/formGenerator/FormGenerator.jsx"
import {style, Backdrop,Box,Modal,Fade,} from '../shared/materialUI.js'
import { useState } from "react";

export const BombsMotors = () => {
    const [openModal, setOpenModal] = useState(false);
    const [actionForm, setActionForm] = useState('addBomb');
    const [titleForm, setTitleForm] = useState('Agregar Bombas y motores');
    const [rows, setRows] = useState(row);
    const [bodyForm, setBodyForm] = useState(bodySend);
    const handleOpen = () => setOpenModal(true);
    const handleClose = () => setOpenModal(false);

    const getDataTable = ({action, data}) => {
        if(action === 'Add'){
            setBodyForm(bodySend);
            setTitleForm('Agregar Bombas y motores');
            setActionForm('addBomb');
            handleOpen();
        }
        if(action === 'Edit'){
            const editRows = data;
            setBodyForm(editRows);
            setTitleForm('Editar Bombas y motores');
            setActionForm('editBomb');
            handleOpen();
        }
        if(action === 'addBomb'){
            const newRow = [...rows];
            const { area, capacity, kit, phases, factor, amount, start, end, days } = data;
            const capacityLabel = capacityOptions.find(light => light.value === capacity).label;
            const kitLabel = kitOptions.find(light => light.value === kit).label;
            const phasesLabel = phasesOptions.find(light => light.value === phases).label;
            const addRows = { area, capacity, factor, kitLabel, phasesLabel, capacityLabel, amount, start, end, days };
            newRow.push(addRows);
            setRows(newRow);
            handleClose();
        }
        if(action === 'editBomb'){
            const newRows = [...rows];
            const editRow = newRows.find(ro => ro.id == data.id);
            editRow.area = data.area
            editRow.capacity = data.capacity
            editRow.capacityLabel = capacityOptions.find(light => light.value == data.capacity).label,
            editRow.kit = data.kit
            editRow.kitLabel = kitOptions.find(light => light.value == data.kit).label,
            editRow.phases = data.phases
            editRow.phasesLabel = phasesOptions.find(light => light.value == data.phases).label,
            editRow.factor = data.factor
            editRow.amount = data.amount
            editRow.start = data.start
            editRow.end = data.end
            editRow.days = data.days
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
        <TableShared iconTitle={'engine'} title={'Bombas y Motores'} columns={columns} rows={rows} optionsComponents={optionsComponents} returnData={getDataTable} widthDiv={'w-[85rem]'}/>

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
