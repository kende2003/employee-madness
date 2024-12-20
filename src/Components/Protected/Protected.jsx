import { Navigate } from "react-router-dom";
import { useAuth } from "../../Context/AuthProvider";

function Protected(props) {
  const { user } = useAuth();

  if (!user) {
    return <Navigate to="/" />;
  }

  return <>{props.children}</>;
}

export default Protected;
