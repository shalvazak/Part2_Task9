import { Link } from "react-router-dom";
import spiderman from '../spiderman.png';

const MainPage = () => {
    return (
        <div className="card">
            <img src={spiderman} alt="spider-man"/>
            <div className="card-content">
                <h3>Spider-Man</h3>
                
                <Link to={"/about"}>About</Link>
            </div>
        </div>
    )
}

export default MainPage;