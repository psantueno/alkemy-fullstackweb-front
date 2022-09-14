
import { Link } from "react-router-dom";

const Register = () => {

    return (

        <div className="page-register">

            <h1 className="title-register">Nuevo Registro</h1>

            <form className="form-register" action="/register" method="POST">

                <div className="form-floating">
                    <select defaultValue={"default"} className="form-select" id="floatingSelect" aria-label="Floating label select example">
                        <option value="default" disabled>Seleccione</option>
                        <option value="I">INGRESO</option>
                        <option value="E">EGRESO</option>
                    </select>
                    <label for="floatingSelect">Tipo de registro</label>
                </div>
                <br></br>

                <div className="form-floating mb-3">
                    <input type="number" min="1" className="form-control" id="floatingAmount"></input>
                    <label for="floatingAmount">Monto ARS$</label>
                </div>

                <div className="form-floating mb-3">
                    <input type="text" maxlength="13" className="form-control" id="floatingConcept" placeholder=""></input>
                    <label for="floatingConcept">Concepto</label>
                </div>

                <div className="form-floating mb-3">
                    <input type="date" className="form-control" id="floatingDate"></input>
                    <label for="floatingDate">Fecha</label>
                </div>

                <div className="buttons-form">
                    <div className="box-btn-save">
                        <button className="btns-register" type="submit" href="#">Guardar</button>
                    </div>
                    <br></br>
                    <div className="box-btn-back">
                        <Link to="/"><button className="btns-register" type="button">Volver</button></Link>
                    </div>
                </div>



            </form>
        </div>


    )
}

export default Register;