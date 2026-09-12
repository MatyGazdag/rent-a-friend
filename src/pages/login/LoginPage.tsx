import { Form, Link } from "react-router-dom";


export default function LoginPage()
{
    return (
        <>
            <Form>
                <input name="username" type="text"/>
                <input name="password" type="password"/>

                <input type="submit" value="Login" />
            </Form>
            <p>Forget the password? Reset by email: <Link to={"/"}>click here</Link></p>
        </>
    );
}