import AuthForm from "../../components/home/AuthForm";

const Signup = () => {
  const url = "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=";

  return (
    <AuthForm authUrl={url} buttonName="Signup" />
  )
}

export default Signup