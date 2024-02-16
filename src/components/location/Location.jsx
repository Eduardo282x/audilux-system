import { useState } from "react"
import { TableShared } from "../shared/tableShared/TableShared.jsx"
import { bodySend, columns, dataForm, optionsComponents, row, validationSchema } from "./location.data.js"
import {style, Backdrop,Box,Modal,Fade,} from '../shared/materialUI.js'
import { FormGenerator } from "../shared/formGenerator/FormGenerator.jsx"

export const Location = () => {
    const [openModal, setOpenModal] = useState(false);
    const handleOpen = () => setOpenModal(true);
    const handleClose = () => setOpenModal(false);

    // const [columnsLocation, setColumnsLocation] = useState(columns);

    const getDataTable = (data) => {
        console.log(data);
        if(data.action == 'Add'){
            handleOpen();
        }
        if(data.action == 'addLocation'){
            handleClose();
        }
    }

    // useEffect(()=> {
    //     const removeEdit = columns.filter(col => col.column != 'Edit');
    //     setColumnsLocation(removeEdit);
    // }, [])

    return (
        <div >
            <TableShared iconTitle={'location'} title={'Ubicación'} columns={columns} rows={row} optionsComponents={optionsComponents} returnData={getDataTable} />

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
                                title={'Agregar Ubicación'}
                                dataForm={dataForm}
                                bodySend={bodySend}
                                action={'addLocation'}
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
