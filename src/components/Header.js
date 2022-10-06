import { Link } from "react-router-dom";

const Header = () => {

    return (

        <div className="box-header">
            <div className="home">
                <nav className="navbar navbar-light bg-light">
                    <div className="container-fluid">
                        <Link className="navbar-brand" to="/"><i className="fas fa-home"></i> Inicio</Link>
                    </div>
                </nav>
            </div>                
            <div className="sign-in">
                <nav className="navbar navbar-light bg-light">
                    <div className="container-fluid">
                        <Link className="navbar-brand" to="/users/login"><i className="fas fa-user-circle"></i> Ingresar</Link>
                    </div>
                </nav>
            </div>
        </div>
    )
}


export default Header;