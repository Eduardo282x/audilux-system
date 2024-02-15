export const Home = () => {
    return (
        <div className="flex flex-col items-center justify-around w-full gap-14">
            <p className="text-[32px] text-cyan-500">AudiLux</p>
            <p className="text-[32px] text-cyan-500">Bienvenido</p>

            <p>
                <b>AUDILUX</b> es la primera APP open source desarollada en La Universidad del Zulia
                con la cual podemos recolectar los datos necesarios para realizar una <b>Auditoria energetica</b> a nivel residencial.
            </p>

            <p>
                <b>AUDILUX</b> esta orientado a de sistemas de iluminacion, acondicionamiento ambiental y
                sistemas de bombeo encontrado en residencias
            </p>

            <p>
                Para empezar a utilizar <b>AUDILUX</b> pulsa en el menu ubicado en la seccion <b>superior</b> sobre el sistema de tu eleccion y listo 
                puedes recolectar datos necesarios para realizar una auditoria energetica
            </p>

            <p>
                Se recomienda borrar los archivos existenes de auditorias previas antes de comenzar la recoleccion de los datos de la auditoria actual
                para borrarlos pulsa.
            </p>
        </div>
    )
}
