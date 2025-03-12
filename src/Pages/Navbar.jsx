import logo from  '../assets/admin.jpg'
import admin from  '../assets/profile.jpg'

const Navbar = () => {
  return (
    <div className="h-[15vh] flex bg-slate-500 p-10">
      <div className='flex w-full items-center  justify-between'>
        <img src={logo} alt=""
        className='h-16 rounded-full' />
        <img src={admin} alt="" 
        className='h-16 rounded-lg'/>
      </div>
    </div>
  )
}

export default Navbar