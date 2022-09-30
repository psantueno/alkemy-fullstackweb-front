import { useState } from "react";

export const useFormRegister = (initialForm, validateForm) => {   //los parámetros inciales los recibe el hook.
    const [form, setForm] = useState(initialForm);
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);
    const [response, setResponse] = useState(null);

    const handleChange = (e) => {
        const {name, value} = e.target;
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
        e.preventDefault();
        setErrors(validateForm(form));
        console.log(errors)

        if(Object.keys(errors).length === 0) {
            alert("enviando form");
            } else {
                alert("no puedes pasar");
        }
    };

    return {
        form, errors, loading, response, handleChange, handleBlur, handleKeyUp, handleSubmit
    };
}