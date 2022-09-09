import MainBanner from "../../assets/images/main-banner.jpg";

const Home = () => {

    return (
        <div className="page-home">

            <h1>MI PRESUPUESTO</h1>
            <img className="img-main-banner" src={MainBanner} alt="imagen de bienvenida"></img>
            <div className="box-balance">
                <h4 className="text-balance">BALANCE <i className="fas fa-balance-scale"></i></h4>
                <div className="card-balance">$1460</div>
            </div>
            <div className="box-table">
                <div className="title-button">
                    <h6>ÚLTIMOS REGISTROS:</h6>
                    <a href="/register">
                        <button className="btn-add" name="add-button">
                            <label for="add-button"><i className="fas fa-plus-square"></i> Nuevo registro</label></button>
                    </a>
                </div>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Tipo</th>
                            <th scope="col">Concepto</th>
                            <th scope="col">Monto</th>
                            <th scope="col">Fecha</th>
                            <th scope="col">Editar</th>
                            <th scope="col">Borrar</th>
                        </tr>
                    </thead>
                    <tbody className="body-table">
                        <tr>
                            <th scope="row">1</th>
                            <td>Ingreso</td>
                            <td>Sueldo</td>
                            <td>$160000</td>
                            <td>12-10-2021</td>
                            <td>
                                <a className="btn-edit" title="Editar" href="/users/editUser/">
                                    <i className="fas fa-edit"></i>
                                </a>
                            </td>
                            <td>
                                <form action="/users/?_method=DELETE" method="POST">
                                    <button type="submit" className="btn-delete" title="Eliminar">
                                        <i className="fas fa-trash"></i>
                                    </button>
                                </form>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>Egreso</td>
                            <td>Comida</td>
                            <td>$5000</td>
                            <td>12-10-2021</td>
                            <td>
                                <a className="btn-edit" title="Editar" href="/users/editUser/">
                                    <i className="fas fa-edit"></i>
                                </a>
                            </td>
                            <td>
                                <form action="/users/?_method=DELETE" method="POST">
                                    <button type="submit" className="btn-delete" title="Eliminar">
                                        <i className="fas fa-trash"></i>
                                    </button>
                                </form>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td>Ingreso</td>
                            <td>Aguinaldo</td>
                            <td>$12000</td>
                            <td>12-10-2021</td>
                            <td>
                                <a className="btn-edit" title="Editar" href="/users/editUser/">
                                    <i className="fas fa-edit"></i>
                                </a>
                            </td>
                            <td>
                                <form action="/users/?_method=DELETE" method="POST">
                                    <button type="submit" className="btn-delete" title="Eliminar">
                                        <i className="fas fa-trash"></i>
                                    </button>
                                </form>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">4</th>
                            <td>Ingreso</td>
                            <td>Sueldo</td>
                            <td>$2000</td>
                            <td>12-10-2021</td>
                            <td>
                                <a className="btn-edit" title="Editar" href="/users/editUser/">
                                    <i className="fas fa-edit"></i>
                                </a>
                            </td>
                            <td>
                                <form action="/users/?_method=DELETE" method="POST">
                                    <button type="submit" className="btn-delete" title="Eliminar">
                                        <i className="fas fa-trash"></i>
                                    </button>
                                </form>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">5</th>
                            <td>Ingreso</td>
                            <td>Sueldo</td>
                            <td>$2000</td>
                            <td>12-10-2021</td>
                            <td>
                                <a className="btn-edit" title="Editar" href="/users/editUser/">
                                    <i className="fas fa-edit"></i>
                                </a>
                            </td>
                            <td>
                                <form action="/users/?_method=DELETE" method="POST">
                                    <button type="submit" className="btn-delete" title="Eliminar">
                                        <i className="fas fa-trash"></i>
                                    </button>
                                </form>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">6</th>
                            <td>Ingreso</td>
                            <td>Sueldo</td>
                            <td>$2000</td>
                            <td>12-10-2021</td>
                            <td>
                                <a className="btn-edit" title="Editar" href="/users/editUser/">
                                    <i className="fas fa-edit"></i>
                                </a>
                            </td>
                            <td>
                                <form action="/users/?_method=DELETE" method="POST">
                                    <button type="submit" className="btn-delete" title="Eliminar">
                                        <i className="fas fa-trash"></i>
                                    </button>
                                </form>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">7</th>
                            <td>Ingreso</td>
                            <td>Sueldo</td>
                            <td>$2000</td>
                            <td>12-10-2021</td>
                            <td>
                                <a className="btn-edit" title="Editar" href="/users/editUser/">
                                    <i className="fas fa-edit"></i>
                                </a>
                            </td>
                            <td>
                                <form action="/users/?_method=DELETE" method="POST">
                                    <button type="submit" className="btn-delete" title="Eliminar">
                                        <i className="fas fa-trash"></i>
                                    </button>
                                </form>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">8</th>
                            <td>Ingreso</td>
                            <td>Sueldo</td>
                            <td>$2000</td>
                            <td>12-10-2021</td>
                            <td>
                                <a className="btn-edit" title="Editar" href="/users/editUser/">
                                    <i className="fas fa-edit"></i>
                                </a>
                            </td>
                            <td>
                                <form action="/users/?_method=DELETE" method="POST">
                                    <button type="submit" className="btn-delete" title="Eliminar">
                                        <i className="fas fa-trash"></i>
                                    </button>
                                </form>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">9</th>
                            <td>Ingreso</td>
                            <td>Sueldo</td>
                            <td>$2000</td>
                            <td>12-10-2021</td>
                            <td>
                                <a className="btn-edit" title="Editar" href="/users/editUser/">
                                    <i className="fas fa-edit"></i>
                                </a>
                            </td>
                            <td>
                                <form action="/users/?_method=DELETE" method="POST">
                                    <button type="submit" className="btn-delete" title="Eliminar">
                                        <i className="fas fa-trash"></i>
                                    </button>
                                </form>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">10</th>
                            <td>Ingreso</td>
                            <td>Sueldo</td>
                            <td>$2000</td>
                            <td>12-10-2021</td>
                            <td>
                                <a className="btn-edit" title="Editar" href="/users/editUser/">
                                    <i className="fas fa-edit"></i>
                                </a>
                            </td>
                            <td>
                                <form action="/users/?_method=DELETE" method="POST">
                                    <button type="submit" className="btn-delete" title="Eliminar">
                                        <i className="fas fa-trash"></i>
                                    </button>
                                </form>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div >

    )
}

export default Home;