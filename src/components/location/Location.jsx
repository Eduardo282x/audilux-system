import { TableShared } from "../shared/tableShared/TableShared.jsx"
import { colmuns, row } from "./location.data.js"

export const Location = () => {
    return (
        <div className="flex flex-col items-center justify-center bg-white rounded-3xl p-5 ">
            <div className="flex items-center justify-start w-full">
                <p className="text-black">Ubicación</p>
            </div>
            <TableShared columns={colmuns} rows={row}/>

        </div>
    )
}
