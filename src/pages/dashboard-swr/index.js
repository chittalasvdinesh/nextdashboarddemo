import React from "react";
import useSWR from "swr";

// A function to fetch JSON data from a given URL
// const fetcher = (url) => fetch(url).then((res) => {
//   if (!res.ok) {
//     console.log(res)
//     throw new Error("Not found."); // Throw error for non-2xx responses
//   }
//   return res.json();
// });

const fetcher=async(url)=>{
    const response = await fetch(url);
    if(!response.ok){
        throw new Error("Not Found")
    }
    const data = await response.json();
    return data;
}

// React component named DashboardSwr
export default function DashboardSwr() {
  // Fetching data using useSWR hook
  const { data, error, isLoading } = useSWR(
    "https://api.github.com/repos/vercel/swr", // URL to fetch data from
    fetcher // Fetch function
  );

  // If an error occurs during data fetching, render an error message
  if (error) return <h2>An error has occurred:{error.message}</h2>
  
  // If data is still loading, render a loading message
  if (isLoading) return <h2>Loading...</h2>
  
  // If data has been fetched successfully, render the data
  return (
    <div>
      <h1>{data.name}</h1>
      <p>{data.description}</p>
      <strong>👁 {data.subscribers_count}</strong>{" "}
      <strong>✨ {data.stargazers_count}</strong>{" "}
      <strong>🍴 {data.forks_count}</strong>
    </div>
  );
}
