import Header from "../Header";
import { Link } from "react-router-dom";

const Login = () => {

    return (

        <div className="page-login">
            <Header />
            <h1 className="title-login">¡Bienvenido!</h1>
            <h6 className="subtitle-login">Iniciá sesión para comenzar:</h6>

            <form className="form-login" action="/records" method="POST">
                <div className="form-floating mb-3">
                    <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" required></input>
                    <label htmlFor="floatingInput">Email</label>
                </div>
                <div className="form-floating">
                    <input type="password" className="form-control" id="floatingPassword" placeholder="Password" required></input>
                    <label htmlFor="floatingPassword">Contraseña</label>
                </div>

                <div>
                    <label className="d-flex justify-content-center">
                        <p className="text-link-register">¿No tenés cuenta? <Link className="link-register" to="/users/register">¡Regístrate!</Link></p>
                    </label>
                </div>

                <div className="buttons-form">
                    <div className="box-btn-save">
                        <button className="btns-general" type="submit" href="#">Ingresar</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Login;