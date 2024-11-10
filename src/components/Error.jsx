import { Link } from "react-router-dom";

const Error = () => {
    return (
        <div>
            <h1>Page Not Found</h1>
            <Link to='/'>Go Back Home</Link>
        </div>
    );
};

export default Error;