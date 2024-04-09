// import { useRouter } from 'next/router';
import React from 'react'

const Post = ({ data }) => {
  // const router=useRouter();
  // if(router.isFallback){
  //   return <h2>Loading...</h2>
  // }
  return (
    <div>
      <h1>{data.title}</h1>
      <h2>
        Id:{data.id}
      </h2>
      <h3>
        Price:{data.price}
      </h3>
      <p>
        Description : {data.description}
      </p>
    </div>
  )
};

export default Post;

export async function getStaticPaths() {
  const response = await fetch(`http://localhost:4000/posts`);
  const posts = await response.json();
  const paths = posts.map((val) => {
    return { params: { postId: val.id.toString() } }
  })
  return {
    paths,
    fallback: false
  }

}

export async function getStaticProps(context) {
  const { params } = context;
  const response = await fetch(`http://localhost:4000/posts/${params.postId}`);
  const data = await response.json();

  // if(!data.id){
  //   return {notFound:true}
  // }

  console.log(`generating page for /posts/${params.postId}`)

  return {
    props: { data,revalidate:10 }
  }

}
