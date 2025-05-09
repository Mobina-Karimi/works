import { Link, replace, useNavigate, useSearchParams } from "react-router-dom"
import NavBar from "../components/NavBar"

function ProductsPage() {
    const Products = [
        {id:1, name:"Product 1"},
        {id:2, name:"Product 2"},
        {id:3, name:"Product 3"},
        {id:4, name:"Product 4"},
    ]

    // const query = useSearchParams()
    const [searchParams, setSearchParams] = useSearchParams()
    const navigate = useNavigate()


    const sortBy = searchParams.get("sortBy")
    const order = searchParams.get("order")
    // console.log(searchParams.toString())
    // console.log({sortBy,order})
    

    const sortHandler = () => {
        setSearchParams({order : "asc", sortBy : "sale"})
    }

    const homeHandler = () => {
        // navigate("/")
        // navigate(-1)
        // navigate(1)
        navigate("/", {replace:true})
    }
  return (
    <div>
        <NavBar/>
        <button onClick={sortHandler}>Sort</button>
        <ul>
            {/* <li>
                <Link to="/">Product 1</Link>
            </li>
            <li>
                <Link to="/">Product 2</Link>
            </li>
            <li>
                <Link to="/">Product 3</Link>
            </li>
            <li>
                <Link to="/">Product 4</Link>
            </li> */}

            {Products.map(product => (
            <li key={product.id}>
                <Link to={`/products/${product.id}`}>{product.name}</Link>
            </li>))}
        </ul>

        <button onClick={homeHandler}>Go Home</button>
    </div>
  )
}

export default ProductsPage