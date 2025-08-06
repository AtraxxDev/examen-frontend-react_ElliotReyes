// Insert your imports there
import { LoginCard } from "../../Components/LoginCard/LoginCard";
import { useAuthentication } from "../../Hooks/useAuthentication";



const Login = () => {

  const { login, error } = useAuthentication()

  return (
    <LoginCard onSubmit={login} error={error} />
  );
}

export default Login;