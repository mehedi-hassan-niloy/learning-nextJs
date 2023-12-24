import Link from "next/link";

export default function StudentList(){
    return(
        <div>
            <h1>Student List</h1>
            <ul>
                <li><Link href='/studentlist/Niloy'>Niloy</Link></li>
                <li><Link href='/studentlist/Sumaiya'>Sumaiya</Link></li>
                <li><Link href='/studentlist/karima'>karima</Link></li>
                <li><Link href='/studentlist/farabi'>Farabi</Link></li>
                <li><Link href='/studentlist/yamin'>Yamin</Link></li>
               
            </ul>
        </div>
    )
}