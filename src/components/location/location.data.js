import * as yup from 'yup';

export const columns = [
    {
        header:'Auditor',
        column: 'Auditor',
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
        column: 'Address',
        type: 'string',
        filterOption: true,
        width:200
    },
    {
        header:'Fecha',
        column: 'Date',
        type: 'date',
        filterOption: false,
        // width:200
    },
    {
        header:'Editar',
        column: 'Edit',
        type: 'icon',
        action: 'Edit',
        colorBtn: 'primary',
        filterOption: false
    },
    {
        header:'Eliminar',
        column: 'Delete',
        type: 'icon',
        action: 'Delete',
        colorBtn: 'error',
        filterOption: false
    },
];

export const row = [
    {
        id: 1,
        Auditor: 'Auditor',
        edificate: 'Casa',
        TypeEdification: 5,
        Address: 'Dirección',
        Date: '15/02/24',
    },
    {
        id: 2,
        Auditor: 'Auditor2',
        edificate: 'Casa',
        TypeEdification: 5,
        Address: 'Centro',
        Date: '15/02/24',
    },
    {
        id: 3,
        Auditor: 'Auditor4',
        edificate: 'Apartamento',
        TypeEdification: 1,
        Address: 'Oeste',
        Date: '15/02/24',
    },
    {
        id: 4,
        Auditor: 'Auditor',
        edificate: 'Casa',
        TypeEdification: 5,
        Address: 'Dirección',
        Date: '15/02/24',
    },
    {
        id: 5,
        Auditor: 'Auditor2',
        edificate: 'Casa',
        TypeEdification: 5,
        Address: 'Centro',
        Date: '15/02/24',
    },
    {
        id: 6,
        Auditor: 'Auditor4',
        edificate: 'Apartamento',
        TypeEdification: 1,
        Address: 'Oeste',
        Date: '15/02/24',
    },
    {
        id: 7,
        Auditor: 'Auditor',
        edificate: 'Casa',
        TypeEdification: 5,
        Address: 'Dirección',
        Date: '15/02/24',
    },
    {
        id: 8,
        Auditor: 'Auditor2',
        edificate: 'Casa',
        TypeEdification: 5,
        Address: 'Centro',
        Date: '15/02/24',
    },
    {
        id: 9,
        Auditor: 'Auditor4',
        edificate: 'Apartamento',
        TypeEdification: 1,
        Address: 'Oeste',
        Date: '15/02/24',
    },
];

export const optionsComponents = {
    showSeachInput: true,
    showAddBtn: true,
    showTable: true,
}

export const ubication = [
    {value: 1, label: 'Venezuela',},
    {value: 2, label: 'Resto del Mundo'},
];

export const optionEdification = [
    {value: 1, label: 'Apartamento'},
    {value: 2, label: 'Atico'},
    {value: 3, label: 'Bungalow'},
    {value: 4, label: 'Cabaña'},
    {value: 5, label: 'Casa'},
    {value: 6, label: 'Casa en Arbol'},
    {value: 7, label: 'Casona'},
    {value: 8, label: 'Castillo'},
    {value: 9, label: 'Chalets'},
    {value: 10, label: 'Choza'},
    {value: 11, label: 'Cueva'},
    {value: 12, label: 'Duplex'},
    {value: 13, label: 'Edificio'},
    {value: 14, label: 'Establo'},
    {value: 15, label: 'Estudio'},
    {value: 16, label: 'Garaje'},
    {value: 17, label: 'Hacienda'},
    {value: 18, label: 'Hotel'},
    {value: 19, label: 'Loft'},
    {value: 20, label: 'Mansion'},
    {value: 21, label: 'Palacio'},
    {value: 22, label: 'Palafito'},
    {value: 23, label: 'Quinta'},
    {value: 24, label: 'Rancho'},
    {value: 25, label: 'Villa'},
];

export const bodySend = {    
    Auditor: '',
    Date: '',
    Country: '',
    Address: '',
    TypeEdification: '',
};

export const validationSchema = yup.object({
    Auditor : yup.string().required('El campo es requerido'),
    Date : yup.string().required('El campo es requerido'),
    Country : yup.string().required('El campo es requerido'),
    Address : yup.string().required('La campo es requerida'),
    TypeEdification : yup.string().required('El campo es requerido'),
});

export const dataForm =[
    {
        label: 'Auditor',
        type: 'text',
        name: 'Auditor',
        value: '',
    },
    {
        label: 'Fecha',
        type: 'text',
        name: 'Date',
        value: '',
    },
    {
        label: 'Pais',
        type: 'select',
        name: 'Country',
        value: '',
        dataOption: ubication
    },
    {
        label: 'Dirección',
        type: 'text',
        name: 'Address',
        value: '',
    },
    {
        label: 'Tipo de edificación',
        type: 'select',
        name: 'TypeEdification',
        value: '',
        dataOption: optionEdification
    },
];