import { Form } from "react-router-dom";



export default function RegistrationPage()
{
    return (
        <Form method="post" action="/events">
            <input name="username" type="text" placeholder="Scoootlaanndd"/>
            <input name="email" type="email" placeholder="example@gmail.com"/>
            <input name="password" type="password"/>
            <input name="passwordcheck" type="password"/>

            <input type="submit" value="Register" />
        </Form>
    );
}