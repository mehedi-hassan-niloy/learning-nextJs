'use client'
import {useRouter} from 'next/navigation'
const LoginTeacher = () =>{
    const router = useRouter();
    const navigate = (name)=>{
        router.push(name)
    }
    return(
      
        <div>
            <h1>Login for Teacher</h1>
            <br/>
          <br/>
          <button onClick={()=>navigate('/login/loginstudent')}>Go to login Page</button>
          <br/>
          <br/>
          <button onClick={()=>navigate('/')}>Go to Home Page</button>
            <br/>
            
        </div>
    )
}
export default LoginTeacher;