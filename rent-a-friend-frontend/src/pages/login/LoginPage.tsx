import { Link } from "react-router-dom";
import useTitle from "../../customehooks/useTitle";
import { API_ROUTES, UserLogSchem } from "@rentafriend/shared";
import { useState } from "react";

export default function LoginPage()
{
    useTitle("Login");

    const [errorMes, setErrorMes] = useState<string[]>([]);

    const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
        e.preventDefault();

        const formData = Object.fromEntries(new FormData(e.currentTarget));

        //Validation requirement located in shared/schemas/user.ts
        const result = UserLogSchem.safeParse(formData);

        if(result.success)
        {
            setErrorMes([]);

            console.log("Sending data: ", result.data)
            const res = fetch(API_ROUTES.AUTH.LOGIN, {
                method: 'GET',

            });
        }else
        {
            const messages = result.error.issues.map((issue) => issue.message);
            setErrorMes(messages);
        }
    };

    return (
        <>
            <h1>LOGIN</h1>
            <form onSubmit={handleSubmit}>
                <input name="identifier" type="text"/>
                <input name="password" type="password"/>

                <input type="submit" value="Login"/>
            </form>
            <p>Forget the password? Reset by email: <Link to={"/"}>click here</Link></p>
            <div className="errors-containter">
                {errorMes.map((err) => {
                    return (<p>{err}</p>);
                })}
            </div>
        </>
    );
}