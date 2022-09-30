import { useRef } from "react";
import { useFormRegister } from "../../hooks/useFormRegister";
import Header from "../Header";

const initialForm = {
    name: "",
    email: "",
    password: "",
};

const Register = () => {

    const inputName = useRef();
    const inputEmail = useRef();
    const inputPass = useRef();


    const validationsForm = (form, e) => {
        let errors = {};
        let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;

        // EVENTS //
        if (e) {

            if (e.target.name === "name") {
                if (!form.name.trim()) {
                    errors.name = "El nombre de usuario es requerido.";
                    inputName.current.className = "form-control is-invalid";
                } else if (form.name.trim().length < 3) {
                    errors.name = "El nombre de usuario debe tener al menos 3 caracteres.";
                    inputName.current.className = "form-control is-invalid";
                } else {
                    inputName.current.className = "form-control is-valid";
                }
            }

            if (e.target.name === "email") {
                if (!form.email.trim()) {
                    errors.email = "El correo electrónico es requerido.";
                    inputEmail.current.className = "form-control is-invalid";
                } else if (!regexEmail.test(form.email.trim())) {
                    errors.email = "Ingrese un correo electrónico válido";
                    inputEmail.current.className = "form-control is-invalid";
                } else {
                    inputEmail.current.className = "form-control is-valid";
                }
            }

            if (e.target.name === "password") {
                if (!form.password.trim()) {
                    errors.password = "La contraseña es requerida.";
                    inputPass.current.className = "form-control is-invalid";
                } else if (form.password.trim().length < 8) {
                    errors.password = "La contraseña debe tener al menos 8 caracteres.";
                    inputPass.current.className = "form-control is-invalid";
                } else {
                    inputPass.current.className = "form-control is-valid";
                }
            }
            return errors;
        }
    }

    const { form, errors, loading, response, handleChange, handleBlur, handleKeyUp, handleSubmit } = useFormRegister(initialForm, validationsForm);

    return (

        <div className="page-register">

            <Header />

            <h1 className="title-register">Registro</h1>
            <h6 className="subtitle-register">Completá los campos para crear tu cuenta:</h6>

            <form className="form-register" onSubmit={handleSubmit} action="/register" method="POST">
                <div className="form-floating mb-3">
                    <input ref={inputName} value={form.name} onKeyUp={handleKeyUp} onChange={handleChange} onBlur={handleBlur} type="text" name="name" minLength="3" maxLength="12" className="form-control" id="floatingName" placeholder="Matute33" required></input>
                    <label htmlFor="floatingName" className="">Nombre de usuario</label>
                    {errors.name && <span className="error-msg-name errors">{errors.name}</span>}
                </div>

                <div className="form-floating mb-3">
                    <input ref={inputEmail} value={form.email} onKeyUp={handleKeyUp} onChange={handleChange} onBlur={handleBlur} type="email" name="email" className="form-control" id="floatingEmail" placeholder="name@example.com" required></input>
                    <label htmlFor="floatingEmail">Email</label>
                    {errors.email && <span className="error-msg-name errors">{errors.email}</span>}
                </div>

                <div className="form-floating mb-3">
                    <input ref={inputPass} value={form.password} onKeyUp={handleKeyUp} onChange={handleChange} onBlur={handleBlur} name="password" type="password" minLength="8" className="form-control" id="floatingPassword" placeholder="12345678" required></input>
                    <label htmlFor="floatingPassword">Contraseña (mínimo 8 caracteres)</label>
                    {errors.password && <span className="error-msg-name errors">{errors.password}</span>}
                </div>

                <div className="buttons-form">
                    <div className="box-btn-save">
                        <input className="btns-general" type="submit" value="Registrarme"></input>
                    </div>
                </div>
            </form>
        </div>

    )
}

export default Register;