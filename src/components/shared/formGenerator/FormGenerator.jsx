import PropTypes from "prop-types";
import {
    Button,
    TextField,
    MenuItem,
    FormControl,
    Select,
    InputLabel,
} from "../materialUI";
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import moment from 'moment';
import './formGenerator.css'
import { useFormik } from "formik";

export const FormGenerator = ({
    title,
    dataForm,
    bodySend,
    validationSchema,
    action,
    sendForm,
}) => {
    const inputText = dataForm.filter((input) => input.type == "text");
    const inputSelect = dataForm.filter((input) => input.type == "select");
    const inputDate = dataForm.filter((input) => input.type == "date");
    const inputTime = dataForm.filter((input) => input.type == "time");

    const submitBtn = (values) => {
        sendForm({ action: action, data: values });
    };

    // const setManualValue = (event, value, name) => {
    //     formik.values[name] = value.props.value;
    //     console.log(formik.values);
    // }

    const setTimeValues = (hora, name) => {
        formik.values[name] = hora
    }

    const formik = useFormik({
        initialValues: bodySend,
        validationSchema: validationSchema,
        onSubmit: (values) => submitBtn(values),
    });

    return (
        <div>
            <form
                onSubmit={formik.handleSubmit}
                className="flex flex-col items-center justify-center gap-5"
            >
                <p className="text-black font-bold text-[20px]">{title}</p>

                {inputText && inputText.map((formInput, index) => (
                    <TextField
                        // error={formik[formInput.name] == '' ? true : false }
                        // required
                        // sx={{width: 250}}
                        fullWidth
                        label={formInput.label}
                        type={formInput.type}
                        key={index}
                        disabled={formInput.readOnly}
                        name={formInput.name}
                        value={formik.values[formInput.name]}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={
                            formik.touched[formInput.name] &&
                            Boolean(formik.errors[formInput.name])
                        }
                        helperText={
                            formik.touched[formInput.name] && formik.errors[formInput.name]
                        }
                        variant="outlined"
                    />
                ))}

                {inputSelect && inputSelect.map((select, index) => (
                    <FormControl fullWidth key={index}>
                        <InputLabel>{select.label}</InputLabel>
                        <Select
                            value={formik.values[select.name]}
                            onChange={formik.handleChange}
                            name={select.name}
                            label={select.label}
                        >
                            {select.dataOption.map((item, index) => (
                                <MenuItem key={index} value={item.value}>
                                    {item.label}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                ))}

                {inputDate && inputDate.map((formDate, index) => (
                    <LocalizationProvider key={index} dateAdapter={AdapterMoment}>
                        <DatePicker
                            fullWidth
                            label={formDate.label}
                            value={formik.values.start}
                            onChange={(date) => formik.setFieldValue("start", date)}
                            renderInput={(params) => <TextField {...params} />}
                            maxDate={moment().toDate()}
                        />
                    </LocalizationProvider>
                ))}

                {inputTime && inputTime.map((formTime, index) => (
                    <LocalizationProvider key={index} dateAdapter={AdapterMoment}>
                        <DemoContainer components={['TimePicker']}>
                            <TimePicker 
                                value={formik.values[formTime.name]}
                                onChange={(event) => setTimeValues(event, formTime.name)}
                                sx={{width: '336px'}}
                                label={formTime.label} 
                                />
                        </DemoContainer>
                    </LocalizationProvider>
                ))}

                <Button type="submit" variant="contained" disabled={!formik.isValid}>
                    Enviar
                </Button>
            </form>
        </div>
    );
};

FormGenerator.propTypes = {
    title: PropTypes.string,
    dataForm: PropTypes.array,
    bodySend: PropTypes.object,
    sendForm: PropTypes.func,
    validationSchema: PropTypes.any,
    action: PropTypes.string,
};
