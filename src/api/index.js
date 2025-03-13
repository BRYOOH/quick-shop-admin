import axios from "axios";

const api = axios.create({
    baseURL:"http://localhost:4000",
});

export const AddProducts = async(data)=>{
    try {
        const response = await api.post("/addproduct",data);
        return response.data;
    } catch (error) {
        console.error("Product was not added " + error);
        return null;
    }
};

export const UploadImage = async(image)=>{
    let formData = new FormData();
    formData.append('image',image);

    try {
    const response = await api.post("/upload",formData,{
        headers: {
            "Content-Type": "multipart/form-data",
        },
    });
    return response.data;
    } catch (error) {
        console.error("Image upload has failed" + error);
        return null;
    }
};

export const DeleteProduct = async(id)=>{
    try {
        const response = await api.delete(`/deleteproduct/${id}`);
        return response.data;
    } catch (error) {
        console.error("Product was not deleted" + error);
        return null;
    }
};

export const AllProducts = async(data)=>{
    try {
        const response = await api.get("/allProducts",data);
        return response.data;
    } catch (error) {
        console.error("Products were not fetched" + error);
        return null;
    }
};

export default api;