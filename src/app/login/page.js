'use client'
import Link from "next/link";
import {useRouter} from 'next/navigation'
const Login = () =>{
    const router = useRouter();
    const navigate = (name)=>{
        router.push(name)
    }
    return(
        <div>
            <h1>Hello Login Page</h1>
            <Link href='/'>Home Page </Link>
            <br/>
          <br/>
          <button onClick={()=>navigate('/about')}>Go to About Page</button>
          <br/>
          <br/>
          <button onClick={()=>navigate('/')}>Go to Home Page</button>
            <br/>
          <br/>
          <button onClick={()=>navigate('/login/loginstudent')}>Go to Student Login Page</button>
          <br/>
          <br/>
          <button onClick={()=>navigate('/login/loginteacher')}>Go to Teacher Login Page</button>
        </div>
    )
}
export default Login;