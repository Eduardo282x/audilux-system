export const columns = [
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
];

export const capacity = [
    {value: '1/8', label: ''},
    {value: '1/6', label: ''},
    {value: '1/4', label: ''},
    {value: '1/3', label: ''},
    {value: '1/2', label: ''},
    {value: '3/4', label: ''},
    {value: '1', label: ''},
    {value: '1 1/2', label: ''},
    {value: '2', label: ''},
    {value: '3', label: ''},
    {value: '4', label: ''},
    {value: '5', label: ''},
    {value: '5 1/2', label: ''},
    {value: '7 1/2', label: ''},
    {value: '10', label: ''},
    {value: '15', label: ''},
    {value: '20', label: ''},
    {value: '25', label: ''},
    {value: '30', label: ''},
    {value: '40', label: ''},
    {value: '50', label: ''},
    {value: '60', label: ''},
    {value: '75', label: ''},
    {value: '100', label: ''},
]