'use client'
import { useState } from 'react'
import styles from './page.module.css'

export default function Home() {
  const [name, setName] = useState("Niloy")
  const apple=()=>{
   setName("Sumaiya")
  }
  return (
    <main className={styles.main}>
         
           <h1>Event, function and state {name}</h1>
           <button onClick={()=>apple()}>Click me</button>
    </main>
  )
}


