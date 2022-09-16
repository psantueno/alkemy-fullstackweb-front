
import { Link } from "react-router-dom";
import Header from "../Header";

const Records = () => {

    return (

        <div className="page-records">
            <Header />
            <div className="container-sections-records">

                <h1 className="title-records">Nuevo Registro</h1>

                <form className="form-records" action="/records" method="POST">

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
                            <button className="btns-general" type="submit" href="#">Guardar</button>
                        </div>
                        <br></br>
                        <div className="box-btn-back">
                            <Link to="/"><button className="btns-general" type="button">Volver</button></Link>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Records;