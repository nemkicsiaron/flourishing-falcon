import { Link } from "react-router-dom";

const Home = () => {
    return (<div>
        <h1>🎉</h1>
        <Link to={"/surprise"}>Try this</Link>
    </div>);
};

export default Home;