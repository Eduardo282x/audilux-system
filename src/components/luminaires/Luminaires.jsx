import { TableShared } from "../shared/tableShared/TableShared"
import { row, columns, optionsComponents } from "./luminaires.data";
// import { useState } from "react";

export const Luminaires = () => {
    // const [columnsLuminaries, setColumnsLouminaries] = useState(columns);

    const getDataTable = (data) => {
        console.log(data);
    }

    return (
        <div >
            <TableShared iconTitle={'light'} title={'Luminaria'} columns={columns} rows={row} optionsComponents={optionsComponents} returnData={getDataTable}/>
        </div>
    )
}
