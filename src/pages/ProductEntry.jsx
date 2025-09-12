import {useGetProduct} from "../services/api/products"
import { useRef, useEffect } from "react"
import { useNavigate, useParams } from "react-router"

const ProductEntry = ({isUpdate}) => {
    const navigate = useNavigate()
    const {id} = useParams()
    const formRef = useRef(null)
    const {product ,addProduct, updateProduct} = useGetProduct()

    console.log("Params :", id)

    useEffect(() => {
        if (isUpdate && product.length > 0 ) {
            const productItem = product.find(p => p.id === id)
            if (productItem) {
            console.log("item", productItem.id)
            } else {
            console.log("Produk dengan id", id, "tidak ditemukan")
            }
            formRef.current.title.value = productItem.title,
            formRef.current.category.value = productItem.category,
            formRef.current.price.value = productItem.price
        }

    },[isUpdate, product, id])
    

    return (
        <div>
            <h1>Product Entry</h1>
            <form ref={formRef} onSubmit={(e) => {
                e.preventDefault()
                if (isUpdate) {
                    updateProduct(id, {
                        title : e.target.title.value,
                        category : e.target.category.value,
                        price : e.target.price.value
                    })
                    navigate('/productapi')
                } else {
                    addProduct({
                        title : e.target.title.value,
                        category : e.target.category.value,
                        price : e.target.price.value
                    })
                    navigate('/productapi')
                }
                e.target.reset()
            }} action="">
                <label htmlFor="">Title</label>
                <br />
                <input name="title" type="text" />
                <br />
                <label htmlFor="">Category</label>
                <br />
                <input name="category" type="text" />
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

export default ProductEntry