
const ShowProducts = () => {
  return (
    <div className="h-full w-full bg-white flex p-4">
      <div className="w-full flex flex-col gap-4">
        <h1 className="text-center font-medium text-4xl">List of Products </h1>
        <div className="grid grid-cols-shop font-bold">
          <p>Product</p>
          <p>Name</p>
          <p>Category</p>
          <p>Old price</p>
          <p>New price</p>
          <p>Remove</p>
        </div>
        <hr className="bg-gray-500 h-1"/>
      </div>
    </div>
  )
}

export default ShowProducts