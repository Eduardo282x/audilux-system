import moment from 'moment';
import * as yup from 'yup';

export const capacity = [
    {value: 1, label: '1/8'},
    {value: 2, label: '1/6'},
    {value: 3, label: '1/4'},
    {value: 4, label: '1/3'},
    {value: 5, label: '1/2'},
    {value: 6, label: '3/4'},
    {value: 7, label: '1'},
    {value: 8, label: '1 1//2'},
    {value: 9, label: '2'},
    {value: 10, label: '3'},
    {value: 11, label: '4'},
    {value: 12, label: '5'},
    {value: 13, label: '5 1/2'},
    {value: 14, label: '7 1/2'},
    {value: 15, label: '10'},
    {value: 16, label: '15'},
    {value: 17, label: '20'},
    {value: 18, label: '25'},
    {value: 19, label: '30'},
    {value: 20, label: '40'},
    {value: 21, label: '50'},
    {value: 22, label: '60'},
    {value: 23, label: '75'},
    {value: 24, label: '100'},
]

export const columns = [
    {
        header:'Area',
        column: 'area',
        type: 'string',
        filterOption: true,
    },

    {
        header:'Capacidad',
        column: 'capacityLabel',
        type: 'string',
        filterOption: true,
        // width:200
    },
    {
        header:'Factor Carga',
        column: 'factor',
        type: 'string',
        filterOption: true,
        width:110
    },


    {
        header:'Cantidad',
        column: 'amount',
        type: 'string',
        filterOption: true,
    },
    {
        header:'Encendido',
        column: 'start',
        type: 'time',
        filterOption: true,
    },
    {
        header:'Apagado',
        column: 'end',
        type: 'time',
        filterOption: true,
    },
    {
        header:'Dias de uso',
        column: 'days',
        type: 'string',
        filterOption: true,
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
        area: 'Area1',
        capacityLabel: capacity.find(val => val.value == 1).label,
        capacity: 1,
        factor: 1,
        amount: '2',
        start: moment('2024-02-23T13:30'),
        end: moment('2024-02-23T13:30'),
        days: '28',
    },
    {
        id: 2,
        area: 'Area2',
        capacityLabel: capacity.find(val => val.value == 2).label,
        capacity: 2,
        factor: 2,
        amount: '5',
        start: moment('2024-02-23T08:00'),
        end: moment('2024-02-23T16:00'),
        days: '20',
    },
    {
        id: 3,
        area: 'Area3',
        capacityLabel: capacity.find(val => val.value == 3).label,
        capacity: 3,
        factor: 3,
        amount: '20',
        start: moment('2024-02-23T07:30'),
        end: moment('2024-02-23T17:30'),
        days: '30',
    },
    {
        id: 4,
        area: 'Area4',
        capacityLabel: capacity.find(val => val.value == 4).label,
        capacity: 4,
        factor: 4,
        amount: '42',
        start: moment('2024-02-23T09:30'),
        end: moment('2024-02-23T22:00'),
        days: '14',
    },
    {
        id: 5,
        area: 'Area2',
        capacityLabel: capacity.find(val => val.value == 5).label,
        capacity: 5,
        factor: 5,
        amount: '5',
        start: moment('2024-02-23T08:00'),
        end: moment('2024-02-23T16:00'),
        days: '20',
    },
    {
        id: 6,
        area: 'Area3',
        capacityLabel: capacity.find(val => val.value == 6).label,
        capacity: 6,
        factor: 6,
        amount: '20',
        start: moment('2024-02-23T07:30'),
        end: moment('2024-02-23T17:30'),
        days: '30',
    },
    {
        id: 7,
        area: 'Area4',
        capacityLabel: capacity.find(val => val.value == 7).label,
        capacity: 7,
        factor: 7,
        amount: '42',
        start: moment('2024-02-23T09:30'),
        end: moment('2024-02-23T22:00'),
        days: '14',
    },
];

export const optionsComponents = {
    showSeachInput: true,
    showAddBtn: true,
    showTable: true,
};

export const daysOption = [
    {value: 1, label: '1'},
    {value: 2, label: '2'},
    {value: 3, label: '3'},
    {value: 4, label: '4'},
    {value: 5, label: '5'},
    {value: 6, label: '6'},
    {value: 7, label: '7'},
    {value: 8, label: '8'},
    {value: 9, label: '9'},
    {value: 10, label: '10'},
    {value: 11, label: '11'},
    {value: 12, label: '12'},
    {value: 13, label: '13'},
    {value: 14, label: '14'},
    {value: 15, label: '15'},
    {value: 16, label: '16'},
    {value: 17, label: '17'},
    {value: 18, label: '18'},
    {value: 19, label: '19'},
    {value: 20, label: '20'},
    {value: 21, label: '21'},
    {value: 22, label: '22'},
    {value: 23, label: '23'},
    {value: 24, label: '24'},
    {value: 25, label: '25'},
    {value: 26, label: '26'},
    {value: 27, label: '27'},
    {value: 28, label: '28'},
    {value: 29, label: '29'},
    {value: 30, label: '30'},
    {value: 31, label: '31'},
];


export const bodySend = {    
    area: '',
    luminate: '',
    amount: '',
    start: '',
    end: '',
    days: '',
};

export const validationSchema = yup.object({
    area: yup.string().required('El campo es requerido'),
    luminate: yup.number().required('El campo es requerido'),
    amount: yup.string().required('El campo es requerido'),
    start: yup.string().required('El campo es requerido'),
    end: yup.string().required('El campo es requerido'),
    days: yup.number().required('El campo es requerido')
});

export const dataForm =[
    {
        label: 'Area',
        type: 'text',
        name: 'area',
        value: '',
    },
    {
        label: 'Capacidad',
        type: 'select',
        name: 'capacity',
        value: '',
        dataOption: capacity
    },
    {
        label: 'Cantidad',
        type: 'text',
        name: 'amount',
        value: '',
    },
    {
        label: 'Encendido',
        type: 'time',
        name: 'start',
        value: '',
    },
    {
        label: 'Apagado',
        type: 'time',
        name: 'end',
        value: '',
    },
    {
        label: 'Dias de uso',
        type: 'select',
        name: 'days',
        value: '',
        dataOption: daysOption
    }
];