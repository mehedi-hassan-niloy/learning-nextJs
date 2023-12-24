'use client'
import Link from "next/link";
import './about.css'
import { usePathname } from "next/navigation";

export default function Layout({children}){
    const pathName = usePathname()
    console.log(pathName)
    return(
        <div>
            {
                pathName !=="/about/aboutteacher"?<ul className="about-menu">
                <h4 className="Heading">About Navbar</h4>
                <li>
                    <Link href='/about'>About Main</Link>
                </li>
                <li>
                    <Link href='/about/aboutstudent'>About Student</Link>
                </li>
                <li>
                    <Link href='/about/aboutteacher'>About Teacher</Link>
                </li>
            </ul>
                
                :<Link href='/about'>back to main about page</Link>
            }
            {
             children   
            }
        </div>
    )
}