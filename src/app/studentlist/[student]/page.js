'use client'
export default function Student({params}){
    console.log(params)
    return(
        <div>
            <h1>Student Details</h1>
              {params.student}
        </div>
    )
}