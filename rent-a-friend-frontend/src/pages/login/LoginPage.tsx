import { Link } from "react-router-dom";
import useTitle from "../../customehooks/useTitle";

export default function LoginPage()
{
    useTitle("Login")

    return (
        <>
        <h1>LOGIN</h1>
            <form>
                <input name="username" type="text"/>
                <input name="password" type="password"/>

                <input type="submit" value="Login" />
            </form>
            <p>Forget the password? Reset by email: <Link to={"/"}>click here</Link></p>
        </>
    );
}