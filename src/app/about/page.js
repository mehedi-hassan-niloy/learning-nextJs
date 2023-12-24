'use client'
import Link from "next/link";
import {useRouter} from 'next/navigation'

const About = () =>{
    const router = useRouter();
    const navigate = (name)=>{
        router.push(name)
    }
    return(
        <div>
            <h1>This is About Page</h1>
            <Link href='/'>Home Page </Link>
            <br/>
          <br/>
          <button onClick={()=>navigate('/login')}>Go to Login Page</button>
          <br/>
          <br/>
          <button onClick={()=>navigate('/')}>Go to Home Page</button>
        </div>
    )
}

export default About;