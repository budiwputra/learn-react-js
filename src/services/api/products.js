import instance from "./instance"
import { useState, useEffect } from "react"

export const useGetProduct = () => {
    const [product, setProduct] =useState([])

    const getProduct = async () => {
        try {
            const response = await instance.get("/products")
            setProduct(response.data)
            console.log('response getProduct',response)
        } catch (error) {
            console.log(error.response)
        } finally {
            console.log('done getProduct')
        }
    }

    const addProduct = async (payload) => {
        try {
            const response = await instance.post("/products", payload)
            const created = response.data
            setProduct((prev) => [created, ...prev])
        } catch (error) {
            console.log(error.response)
        } finally {
            console.log("done addProduct")
        }

    }

    const updateProduct = async (id, payload) => {
        try {
            const response = await instance.put(`/products/${id}`, payload)
            const updated = response.data
            setProduct( (prev) => prev.map((item) => item.id === id ? {...item, ...updated} : item  ) )
        } catch (error) {
            console.log(error.response)
        } finally {
            console.log("done updateProduct")
        }
    }

    const deleteProduct = async (id) => {
        try {
            await instance.delete(`/products/${id}`)
            setProduct((prev) => prev.filter((item) => item.id !== id ) )

        } catch (error) {
            console.log(error.response)
        } finally {
            console.log("done deleteProduct")
        }
    }

    useEffect( () => {
        getProduct()
    },[])

    return {
        getProduct,
        addProduct,
        deleteProduct,
        product
    }

}
