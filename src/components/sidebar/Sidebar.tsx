
import type { ReactNode } from 'react';
import {} from './Sidebar.css'

interface PropType
{
    children: ReactNode
}

export default function SideBar(props: PropType)
{
    return (
        <aside>
            <nav>
                <ul>
                    {props.children}
                </ul>
            </nav>
        </aside>
    );
}