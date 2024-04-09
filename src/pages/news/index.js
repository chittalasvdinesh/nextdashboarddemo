import React from 'react'

 const News = ({news}) => {
  return (
    <div>
      <h1>News</h1>
      {news.map((val)=>{
        return <div key={val.id}>
            <h2>{val.title} | {val.category}</h2>
            </div>
      })}
    </div>
  )
};
export default News;

export async function getServerSideProps(){
    const response=await fetch("http://localhost:4000/news");
    const data=await response.json();

    return {
        props:{news:data}
    }
}
