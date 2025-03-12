import upload from '../assets/upload.png'

const AddProduct = () => {
  return (
    <div className="flex h-full items-center  bg-white p-10  ">
      <div className="flex flex-col gap-6 mt-2">
        <label className="flex flex-col text-xl gap-2">
          Product Name
          <input type="text" placeholder="product name" 
          className="p-4 w-[120vh] outline-none border border-gray-400"/>
        </label>
        <div className="flex gap-4">
        <label className="flex flex-col text-xl gap-2">
          Old price
          <input type="text" placeholder="old price" 
          className="p-4 w-[60vh] outline-none border border-gray-400"/>
        </label>
        <label className="flex flex-col text-xl gap-2">
          New price
          <input type="text" placeholder="new price" 
          className="p-4 w-[60vh] outline-none border border-gray-400"/>
        </label>
        </div>
        <label className="flex flex-col text-xl gap-2">
          Product Category
          <select name="" id="" className="w-[20vh] h-14 outline-none rounded-md border border-gray-400">
            <option value="">ladies</option>
            <option value="">gents</option>
            <option value="">teens</option>
          </select>
        </label>
        <div>
          <label htmlFor="file-input " className='text-xl gap-2'>
            Image
            <img src={upload} className='w-40' alt="" />
          </label>
          <input type="file" id="file-input"  hidden/>
        </div>
        <button className="p-4 w-36 rounded-md bg-teal-500">UPLOAD</button>
      </div>
    </div>
  )
}

export default AddProduct