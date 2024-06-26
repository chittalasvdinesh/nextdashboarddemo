import React, { useEffect, useState } from 'react'

const Dashboard = () => {
    const [isLoading, setIsLoading] = useState(true)
    const [dashboardData, setDashboardData] = useState([]);
    useEffect(() => {
        const fetchDashboardData = async () => {
            const response = await fetch("http://localhost:4000/dashboard");
            const data = await response.json();
            setDashboardData(data);
            setIsLoading(false)

        };
        fetchDashboardData()
    }, []);

    if (isLoading) {
        return <div>Loading</div>
    }

    return (
        <>
            <h1>Dashboard</h1>
            <h2>Posts-{dashboardData.posts}</h2>
            <h2>Likes-{dashboardData.likes}</h2>
            <h2>Followers-{dashboardData.followers}</h2>
            <h2>Following-{dashboardData.following}</h2>
        </>
    )
};

export default Dashboard;
