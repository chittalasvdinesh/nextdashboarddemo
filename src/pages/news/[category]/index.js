import React from 'react'

const NewsCategoryList = ({ categoryList, category }) => {
    return (
        <div>
            <h1>NewsCategoryList</h1>
            {
                categoryList.map((val)=>{
                    return <h2>{val.title}</h2>
                })
            }
        </div>
    )
};

export default NewsCategoryList;

export async function getServerSideProps({ params }) {
    const { category } = params
    const response = await fetch(`http://localhost:4000/news?category=${category}`);
    const data = response.json();

    return {
        props: { categoryList: data, category }
    }
}
