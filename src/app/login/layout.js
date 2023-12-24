'use client'
import Link from "next/link";
import './login.css'
import { usePathname } from "next/navigation";

export default function Layout({children}){
    const pathName = usePathname()
    console.log(pathName)
    return(
        <div>
          {
          pathName !== "/login/loginteacher"?
          <ul className="login-menu">
           <h4 className="Heading">Login Navbar</h4>
           <li>
               <Link href='/login'>Login Main</Link>
           </li>
           <li>
               <Link href='/login/loginstudent'>Login Student</Link>
           </li>
           <li>
               <Link href='/login/loginteacher'>Login Teacher</Link>
           </li>
       </ul> 
          :<Link href='/login'>back to main login page</Link>
          }
            {
             children   
            }
        </div>
    )
}