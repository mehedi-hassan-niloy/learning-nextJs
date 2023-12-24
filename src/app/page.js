'use client'
import { useState } from 'react'
import styles from './page.module.css'
import Link from 'next/link'
import {useRouter} from 'next/navigation'

export default function Home() {
  const [name, setName] = useState("Niloy")
  const apple=()=>{
   setName("Sumaiya")
  }
  const router = useRouter();
  return (
    <main>
          <Link href='/login'>Login Page </Link>
          <br/>
          <br/>
          <br/>
          <br/>
          <Link href='/about'>About Page </Link>
           <h1>Event, function and state {name}</h1>
           <button onClick={()=>apple()}>Click me</button>

           
          <br/>
          <br/>
          <button onClick={()=>router.push('/login')}>Go to Login Page</button>
          <br/>
          <br/>
          <button onClick={()=>router.push('/about')}>Go to About Page</button>


    </main>
  )
}


