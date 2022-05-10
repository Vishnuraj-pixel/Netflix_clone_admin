import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { getUserFromLocalStorage } from "../services/utils/localStorage";

const ProtectedRoute = ({ children }) => {
  const user = getUserFromLocalStorage(); //temp
  if (user) {
    return children;
  }
  return (
    <div>
      <h1>Unauthorized...</h1>
      <button>Logout</button>
    </div>
  );
};

export default ProtectedRoute;
