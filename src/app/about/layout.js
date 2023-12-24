import Link from "next/link";
import './about.css'

export default function Layout({children}){
    return(
        <div>
            <ul className="about-menu">
                <h4 className="Heading">About Navbar</h4>
                <li>
                    <Link href='/login'>About Main</Link>
                </li>
                <li>
                    <Link href='/about/aboutstudent'>About Student</Link>
                </li>
                <li>
                    <Link href='/about/aboutteacher'>About Teacher</Link>
                </li>
            </ul>
            {
             children   
            }
        </div>
    )
}