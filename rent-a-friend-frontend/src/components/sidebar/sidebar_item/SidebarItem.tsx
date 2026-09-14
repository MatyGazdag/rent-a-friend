import { Link } from "react-router-dom";

import './SidebarItem.css'

interface PropType
{
    name: string,
    path: string
}

export default function SibeBarItem(props: PropType)
{
    return (
        <li>
            <Link to={props.path}>{props.name}</Link>
        </li>
    );
}