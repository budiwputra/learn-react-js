import {useGetProduct} from "../services/api/products"
import { useNavigate } from "react-router"

const Product = () => {
    const {product, deleteProduct} = useGetProduct()
    const navigate = useNavigate()

    return (
        <div>
            <h1>Product Api</h1>
            <ul>
                {product.map((item) => (
                    <li key={item.id}>{`${item.id}-${item.title} - ${item.category} - ${item.price}`} 
                    <button onClick={() => navigate(`/update/${item.id}`)}>Edit</button>
                    <button onClick={() => deleteProduct(item.id)}>Delete</button></li>
                    
                ))}
            </ul>

        </div>
    )

}
export default Product