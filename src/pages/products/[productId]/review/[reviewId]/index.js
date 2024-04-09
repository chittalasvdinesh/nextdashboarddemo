import { useRouter } from 'next/router'
import React from 'react'

export default function ReviewDetails() {
   const router=useRouter();
   const {reviewId, productId}=router.query


  return (
    <div> Review {reviewId} for Product {productId}</div>
  )
}
