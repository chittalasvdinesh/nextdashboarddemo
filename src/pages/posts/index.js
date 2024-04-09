import Link from 'next/link';
// import { useRouter } from 'next/router';
import React from 'react';



export default function Posts({ data = [] }) {
      console.log(data)
//    dont confuse postId with product it used for json-server
    return (
        <>
            {/* {router.pathname !== "/" && <Link href="/">Back to home</Link>} */}
            <h2>Posts-{data?.length}</h2>
            <ul>
                {data.map((val) => {
                    return <Link href={`/posts/${val.id}`}><li key={val.id}>{val.title}</li></Link>
                })}
            </ul>
        </>
    )
};


export async function getStaticProps() {
    console.log("Products regenerating")
    const response = await fetch("http://localhost:4000/posts");
    const data = await response.json();

    return { props: { data },revalidate:10 }


}


