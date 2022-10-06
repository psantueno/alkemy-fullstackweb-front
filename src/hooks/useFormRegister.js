import { useState } from "react";

export const useFormRegister = (initialForm, validateForm) => {   //los parámetros inciales los recibe el hook.
    const [form, setForm] = useState(initialForm);
    const [errors, setErrors] = useState({});
    const [response, setResponse] = useState(undefined);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({
            ...form,
            [name]: value
        });
    };

    const handleBlur = (e) => {
        handleChange(e);
        setErrors(validateForm(form, e));
    };

    const handleKeyUp = (e) => {
        handleChange(e);
        setErrors(validateForm(form, e));
    }

    const handleSubmit = (e) => {

        handleChange(e) // ver si se puede reemplazar por el contenido del evento

        e.preventDefault();
        setErrors(validateForm(form, e));

        // DEJAR ARREGLADO EL CODIGO COMO ANTES

        if (Object.keys(errors).length === 0) {

            fetch('http://localhost:3001/users/register', {
                method: "POST",
                body: JSON.stringify(form),
                headers: { 'Content-Type': 'application/json' }
            }).then(res => res.ok ? res.json() : Promise.reject(res))
                .then(res => {
                    console.log(res.errors)
                    if (res.errors) {
                        setResponse(res);
                    } else {
                        alert('El usuario ha sido registrado con éxito');
                        setForm(initialForm);
                    }
                })
                .catch(error => {
                    console.log(error);
                });
        } else {
            alert("Revise los errores del formulario");
        }
    };

    return {
        form, errors, response, handleChange, handleBlur, handleKeyUp, handleSubmit,
    };

}