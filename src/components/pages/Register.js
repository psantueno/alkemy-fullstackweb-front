import Header from "../Header";

const Register = () => {

    return (

        <div className="page-register">

            <Header />

            <h1 className="title-register">Registro</h1>
            <h6 className="subtitle-register">Completá los campos para crear tu cuenta:</h6>

            <form className="form-register" action="/register" method="POST">
                <div className="form-floating mb-3">
                    <input type="text" minlength="3" maxlength="12" className="form-control" id="floatingUser" placeholder="Matute33"></input>
                    <label for="floatingUser">Nombre de usuario</label>
                </div>
                <div class="form-floating mb-3">
                    <input type="email" className="form-control" id="floatingEmail" placeholder="name@example.com" required></input>
                    <label for="floatingEmail">Email</label>
                </div>
                <div className="form-floating mb-3">
                    <input type="password" minlength="8" className="form-control" id="floatingPassword" placeholder="12345678"></input>
                    <label for="floatingPassword">Contraseña (mínimo 8 caracteres)</label>
                </div>
                <div className="buttons-form">
                    <div className="box-btn-save">
                        <button className="btns-general" type="submit" href="#">Registrarme</button>
                    </div>
                </div>
            </form>
        </div>

    )
}

export default Register;