import { useState } from "react";
import useTitle from "../../customehooks/useTitle";

import './RegistrationPage.css'

export default function RegistrationPage() {
    useTitle("Registration")

    const [errorMes, errorMesSet] = useState<string[]>([]);

    const handleSubmit = (e: React.SyntheticEvent) => {
        e.preventDefault();

        const target = e.target as typeof e.target & {
            email: { value: string };
            password: { value: string };
        };
        const email = target.email.value;
        const password = target.password.value;

        const errors: string[] = [];

        if(!email.includes('@'))
        {
            errors.push("Email must include @")
        }

        if(password.length < 6)
        {
            errors.push("Password is too short! Atleast 6 characters long")
        }

        errorMesSet(errors)
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input name="username" type="text" placeholder="Scoootlaanndd" />
                <input name="email" type="email" placeholder="example@gmail.com" />
                <input name="password" type="password" />
                <input name="passwordcheck" type="password" />

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