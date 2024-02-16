import { useEffect, useState } from "react"
import { TableShared } from "../shared/tableShared/TableShared.jsx"
import { columns, optionsComponents, row } from "./location.data.js"

export const Location = () => {

    const [columnsLocation, setColumnsLocation] = useState(columns);

    const getDataTable = (data) => {
        console.log(data);
    }

    useEffect(()=> {
        // const removeEdit = columns.filter(col => col.column != 'Edit');
        // setColumnsLocation(removeEdit);
    }, [])

    return (
        <div >
            <TableShared iconTitle={'location'} title={'Ubicación'} columns={columnsLocation} rows={row} optionsComponents={optionsComponents} returnData={getDataTable}/>
        </div>
    )
}
