'use client'
export default function Lecture({params}){
    console.log(params)
    return(
        <div>
            <h1>Day of Collage : {params.lecture[0]}</h1>
            <h1>Lecture No :{params.lecture[1]}</h1>
        </div>
    )
}