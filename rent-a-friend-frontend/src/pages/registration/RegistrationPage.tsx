import { useState } from "react";
import useTitle from "../../customehooks/useTitle";
import { UserRegSchem } from "@rentafriend/shared";

import './RegistrationPage.css'

export default function RegistrationPage() {
    useTitle("Registration")

    const [errorMes, setErrorMes] = useState<string[]>([]);

    const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
        e.preventDefault();

        const formData = Object.fromEntries(new FormData(e.currentTarget));

        //Validation requirement located in shared/schemas/user.ts
        const result = UserRegSchem.safeParse(formData);

        if(result.success)
        {
            setErrorMes([]);

            console.log("Sending data: ", result.data)
        }else
        {
            const messages = result.error.issues.map((issue) => issue.message);
            setErrorMes(messages);
        }
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input name="username" type="text" placeholder="Scoootlaanndd" />
                <input name="email" type="email" placeholder="example@gmail.com" />
                <input name="password" type="password" />
                <input name="confirmPassword" type="password" />

                <input type="submit" value="Register" />
            </form>
            <div className="errors-containter">
                {errorMes.map((err) => {
                    return (<p>{err}</p>);
                })}
            </div>
        </>
    );
}