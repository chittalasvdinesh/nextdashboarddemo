import { useRouter } from 'next/router';
import React from 'react'

export default function TodoItem() {
    const router = useRouter();
    console.log(router)
    return (
        <div>TodoItem-{router.query.todoId}</div>
    )
}
