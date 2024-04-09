import Error from 'next/error'
import Link from 'next/link'
import React from 'react'

export default function Todos({ data=[], errorCode }) {
    console.log(errorCode)
    if (errorCode) {
        return <Error statusCode={errorCode}/>
    }
    return (
        <>
            <h2>Todos-{data.length}</h2>
            <ul>
                {data.map((val) => {
                    return <li key={val.id}><Link href={`/todos/${val.id}`}>{val.title}</Link></li>
                })}
            </ul>
        </>
    )
};

export async function getServerSideProps() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/todo");
        console.log(response);
        // if (!response.ok) {
        //     throw new Error("Failed Fetch Data from Api")
        // }

        const errorCode=response.ok?false:response.status
        const data = await response.json();
        return { props: {errorCode, data } }

    } catch (error) {
        console.log(error)
        return {
            props: { errorCode: error.status }
        }
    }

}
