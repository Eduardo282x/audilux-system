export const colmuns = [
    {
        header:'Auditor',
        column: 'auditor',
        type: 'string',
        filterOption: true,
        width:200
    },
    {
        header:'Edificación',
        column: 'edificate',
        type: 'string',
        filterOption: true,
        width:200
    },
    {
        header:'Direccion',
        column: 'adress',
        type: 'string',
        filterOption: true,
        width:200
    },
    {
        header:'Fecha',
        column: 'date',
        type: 'date',
        filterOption: false,
        // width:200
    },
    {
        header:'Editar',
        column: 'Edit',
        type: 'icon',
        colorBtn: 'primary',
        filterOption: false
    },
    {
        header:'Eliminar',
        column: 'Delete',
        type: 'icon',
        colorBtn: 'error',
        filterOption: false
    },
];

export const row = [
    {
        auditor: 'Auditor',
        edificate: 'Casa',
        adress: 'Dirección',
        date: '15/02/24',
    },
    {
        auditor: 'Auditor2',
        edificate: 'Casa',
        adress: 'Centro',
        date: '15/02/24',
    },
    {
        auditor: 'Auditor4',
        edificate: 'Terreno',
        adress: 'Oeste',
        date: '15/02/24',
    },
]