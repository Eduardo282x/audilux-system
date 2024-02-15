import { TableShared } from "../shared/tableShared/TableShared.jsx"
import { colmuns, row } from "./location.js"

export const Location = () => {
    return (
        <div>
            Location
            <TableShared columns={colmuns} rows={row}/>

        </div>
    )
}
