import { useParams } from "react-router-dom"

function ProductDetailsPage() {
    // const params = useParams()
    const {id} = useParams()
    // console.log(params)
  return (
    // <div>ProductDetailsPage - product# {params.id}</div>
    <div>ProductDetailsPage - product# {id}</div>
  )
}

export default ProductDetailsPage