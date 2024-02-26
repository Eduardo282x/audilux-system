import PropTypes from "prop-types";
import {
    Button,
    TextField,
    MenuItem,
    FormControl,
    Select,
    InputLabel,
} from "../materialUI";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";

import "./formGenerator.css";
import { useFormik } from "formik";

export const FormGenerator = ({
    title,
    dataForm,
    bodySend,
    validationSchema,
    action,
    sendForm,
}) => {

    const submitBtn = (values) => {
        sendForm({ action: action, data: values });
    };

    const setTimeValues = (hora, name) => {
        formik.values[name] = hora;
    };

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

                {dataForm && dataForm.map((form, indexForm) => (
                    (form.type == 'text' &&
                        <TextField
                            fullWidth
                            label={form.label}
                            type={form.type}
                            key={indexForm}
                            disabled={form.readOnly}
                            name={form.name}
                            value={formik.values[form.name]}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={
                                formik.touched[form.name] && Boolean(formik.errors[form.name])
                            }
                            helperText={
                                formik.touched[form.name] && formik.errors[form.name]
                            }
                            variant="outlined"
                        />
                    ) ||
                    (form.type == 'number' &&
                        <TextField
                            fullWidth
                            label={form.label}
                            type={form.type}
                            key={indexForm}
                            disabled={form.readOnly}
                            name={form.name}
                            value={formik.values[form.name]}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={
                                formik.touched[form.name] && Boolean(formik.errors[form.name])
                            }
                            helperText={
                                formik.touched[form.name] && formik.errors[form.name]
                            }
                            variant="outlined"
                        />
                    ) ||
                    (form.type == 'select' &&
                        <FormControl fullWidth key={indexForm}>
                            <InputLabel>{form.label}</InputLabel>
                            <Select
                                value={formik.values[form.name]}
                                onChange={formik.handleChange}
                                name={form.name}
                                label={form.label}
                            >
                                {form.dataOption.map((item, index) => (
                                    <MenuItem key={index} value={item.value}>
                                        {item.label}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    ) ||
                    (form.type == 'time' &&
                        <LocalizationProvider key={indexForm} dateAdapter={AdapterMoment}>
                            <DemoContainer components={["TimePicker"]}>
                                <TimePicker
                                    value={formik.values[form.name]}
                                    onChange={(event) => setTimeValues(event, form.name)}
                                    sx={{ width: "336px" }}
                                    label={form.label}
                                />
                            </DemoContainer>
                        </LocalizationProvider>

                    )
                )

                )}

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
