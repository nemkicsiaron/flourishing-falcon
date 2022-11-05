import { Link } from "react-router-dom";
import "./Home.css"

const Home = () => {
    return (<div className="homeboi">
        <img className="boom" src="https://media0.giphy.com/media/3rYxjPwF5i9mALN1UM/giphy.gif?cid=ecf05e47rndwj9vhq1ybgcmljgcamhhbtsv4q1mbx14v4sl1&rid=giphy.gif&ct=s" alt="party fireworks" />
        <Link to={"/surprise"}>Don't click this</Link>
    </div>);
};

export default Home;