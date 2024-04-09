import { useRouter } from 'next/router'
import React from 'react'

export default function Doc() {
    const router = useRouter();
    const { params = [] } = router.query;
    console.log(params)

    if (params.length === 2) {
        return <div>docs for feature {params[0]} for example {params[1]} </div>
    }
    else if (params.length === 1) {
        return <div>docs for feature {params[0]} </div>
    }
    return (
        <div>Docs Home {params[0]}</div>
    )
}
