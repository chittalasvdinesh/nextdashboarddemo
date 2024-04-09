import React from 'react'
import User from '../../../components/User';

export default function UserList({ users }) {
    return (
        <>
            <div>UserList - {users.length}</div>
            {users.map((user)=>{
                return <div key={user.id}>
                    <User user={user}/>
                </div>
            })}
        </>
    )
};

export async function getStaticProps() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();

    return {
        props: { users: data }
    }
}