import { useRouter } from 'next/router'
import React from 'react'

export default function ProductDetails() {
  const router=useRouter();
  const productId=router.query.productId

  return (
    <div>Product Details - {productId}</div>
  )
}
