import {useGetProduct} from "../services/api/products"
import { useRef } from "react"

const Product = () => {
    const formRef = useRef(null)
    const {product, addProduct, deleteProduct} = useGetProduct()

    return (
        <div>
            <h1>Product Api</h1>
            <ul>
                {product.map((item) => (
                    <li key={item.id}>{`${item.id}-${item.title} - ${item.category} - ${item.price}`} 
                    <button onClick={() => console.log("edit id :", item.id)}>Edit</button>
                    <button onClick={() => deleteProduct(item.id)}>Delete</button></li>
                    
                ))}
            </ul>
            <h1>Form Add</h1>
            <form ref={formRef} onSubmit={(e) => {
                e.preventDefault()
                addProduct({
                    title : e.target.title.value,
                    category : e.target.category.value,
                    price : e.target.price.value
                })
                e.target.reset()
            }} action="">
                <label htmlFor="">Title</label>
                <br />
                <input name="title" type="text" />
                <br />
                <label htmlFor="">Category</label>
                <br />
                <select name="category" id="">
                    <option value="Animal">Animal</option>
                    <option value="Vegetable">Vegetable</option>
                </select>
                <br />
                <label htmlFor="">Price</label>
                <br />
                <input name="price" type="text" />
                <br />
                <button type="submit">Submit</button>
            </form>
        </div>
    )

}
export default Product