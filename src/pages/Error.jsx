import { Link } from "react-router-dom";
import errorImg from "../assets/error-404.png";

const Error = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center">
      <img src={errorImg} alt="404 Error" className="w-96 mb-6" />
      <h1 className="text-3xl font-bold mb-2">Oops! Page not found</h1>
      <p className="mb-4 text-gray-500">
        The page you are looking for does not exist.
      </p>

      <Link to="/">
        <button className="bg-purple-500 text-white px-4 py-2 rounded">
          Go Home
        </button>
      </Link>
    </div>
  );
};

export default Error;