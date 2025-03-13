import { useState } from 'react';
import { AddProducts, UploadImage } from '../api';
import upload from '../assets/upload.png'

const AddProduct = () => {
  const [image,setImage] = useState(false);
  const [formData,setFormData] = useState({
    name:'',
    image:'',
    category:'ladies',
    old_price:'',
    new_price:''
  });

  const changeHandler=(e)=>{
 setFormData({...formData, [e.target.name]:e.target.value});
  };

  const imageHandler=(e)=>{
    setImage(e.target.files[0]);
  }

  const addProduct = async()=>{
    if(!image){
      alert("Upload an image to continue");
     return; 
    }

    const imageResponse = await UploadImage(image);
    console.log(imageResponse,imageResponse.image_url);
    
    if(imageResponse && imageResponse.image_url){
      alert("Image was successifully added");
      const product = {...formData,image:imageResponse.image_url};

      const productResponse = await AddProducts(product);
      if(productResponse){
        alert("All product details added successifully");
        setFormData({
          name:'',
          image:'',
          category:'ladies',
          old_price:'',
          new_price:''
        });
        setImage(null);
      }
    }else{
      alert("Error uploading image.");
    }
  };

  return (
    <div className="flex h-full items-center bg-white p-10  ">
      <div className="flex flex-col gap-6 mt-2">
        <label className="flex flex-col text-xl gap-2">
          Product Name
          <input type="text" placeholder="product name" name='name' value={formData.name} 
          onChange={changeHandler} className="p-4 w-[120vh] outline-none border border-gray-400"/>
        </label>
        <div className="flex gap-4">
        <label className="flex flex-col text-xl gap-2">
          Old price
          <input type="text" placeholder="old price" name='old_price' value={formData.old_price} 
          onChange={changeHandler} className="p-4 w-[60vh] outline-none border border-gray-400"/>
        </label>
        <label className="flex flex-col text-xl gap-2">
          New price
          <input type="text" placeholder="new price" name='new_price' value={formData.new_price} 
          onChange={changeHandler} className="p-4 w-[60vh] outline-none border border-gray-400"/>
        </label>
        </div>
        <label className="flex flex-col text-xl gap-2">
          Product Category
          <select id="" 
          name='category' value={formData.category} onChange={changeHandler} 
          className="w-[20vh] h-14 outline-none rounded-md border border-gray-400">
            <option value="ladies">ladies</option>
            <option value="gents">gents</option>
            <option value="teens">teens</option>
          </select>
        </label>
        <div>
          <label htmlFor="file-input" className='text-xl gap-2 cursor-pointer'>
            Image
            <img src={image? URL.createObjectURL(image):upload} className='w-40' alt="" />
          </label>
          <input type="file" id="file-input" name='image' onChange={imageHandler} hidden/>
        </div>
        <button className="p-4 w-36 rounded-md bg-teal-500"
        onClick={addProduct}
        >UPLOAD</button>
      </div>
    </div>
  )
}

export default AddProduct