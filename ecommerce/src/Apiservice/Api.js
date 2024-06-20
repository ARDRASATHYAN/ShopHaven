import axios from 'axios'

const BASE_URL='https://fakestoreapi.com'

export const getAllproduct=async()=>{
    const response = await axios.get(`${BASE_URL}/products`)
    return response.data;
}


export const getProductId=async(id)=>{
    const response = await axios.get(`${BASE_URL}/products/${id}`)
    return response.data;
}


export const getProductimage=async(id)=>{
    const response = await axios.get(`${BASE_URL}/products/${id}/image`)
    return response.data;
}