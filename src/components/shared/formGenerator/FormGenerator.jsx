import PropTypes from "prop-types";
import {Button, TextField } from '../materialUI'
import { useFormik } from "formik";

export const FormGenerator = ({ title, dataForm, bodySend, validationSchema, action, sendForm }) => {

    const inputText = dataForm.filter(input => input.type == 'text');
    const inputSelect = dataForm.filter(input => input.type == 'select');

    const submitBtn = (values) => {
        sendForm({ action: action, data: values });
    }

    const formik = useFormik({
        initialValues: bodySend,
        validationSchema: validationSchema,
        onSubmit: (values) => submitBtn(values),
    })


    return (
        <div>
                        <form onSubmit={formik.handleSubmit} className="flex flex-col items-center justify-center gap-5">
                <p className="font-bold text-[20px]">{title}</p>

                {dataForm.map((formInput,index) => (
                    <TextField 
                        // error={formik[formInput.name] == '' ? true : false }
                        // required
                        className="inputField"
                        label={formInput.label} 
                        type={formInput.type}
                        key={index}  
                        disabled={formInput.readOnly}
                        name={formInput.name}
                        value={formik.values[formInput.name]}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.touched[formInput.name] && Boolean(formik.errors[formInput.name])}
                        helperText={formik.touched[formInput.name] && formik.errors[formInput.name]}
                        variant="outlined" 
                    />
                ))}

                <Button type="submit" variant="contained" disabled={!formik.isValid}>
                    Enviar
                </Button>
            </form>
        </div>
    )
}

FormGenerator.propTypes = {
    title: PropTypes.string,
    dataForm: PropTypes.array,
    bodySend: PropTypes.object,
    sendForm: PropTypes.func,
    validationSchema: PropTypes.any,
    action: PropTypes.string
};