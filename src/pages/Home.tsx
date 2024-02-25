import Background from '../assets/images/library.jpg'

function Home() {
  return (
    <div
        style={{ backgroundImage: `url(${ Background })`}}
        className='flex flex-row justify-center mx-auto bg-cover bg-fixed'   
    >
        <div className="flex place-items-center h-screen">
            <h3 className="p-5 bg-slate-500 bg-opacity-70 text-slate-100 rounded mb-40">Welcome</h3>
        </div>
    </div>
  )
}

export default Home
