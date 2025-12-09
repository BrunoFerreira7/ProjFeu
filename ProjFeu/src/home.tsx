import logo from './assets/logo-doug.png'
import './style.css'


function App() {
  return (
    <>
    <header className='w-full bg-blue-950 text-white px-15 py-12 flex justify-between items-center'>
    <img src={logo}/>
    <nav className='hidden md:flex gap-6'>
      <a href ="#" className='houver: text-gray-00 color-white text-2xl'>HOME</a>
      <a href ="#" className='houver: text-gray-300 text-2xl'>NOVIDADES</a>
      <a href ="#" className='houver: text-gray-300 text-2xl'>JOGOS</a>
      <a href ="#" className='houver: text-gray-300 text-2xl'>SOBRE A EMPRESA</a>
      <a href ="#" className='houver: text-gray-300 text-2xl'>TRABALHE CONOSCO</a>
        <a href ="#" className='houver: text-gray-300 text-2xl'>TERMOS DE SERVIÇOS</a>
      <a href ="#" className='houver: text-gray-300 pd-20px text-2xl'>LOGIN</a>
      
     
    </nav>
    </header>
    </>
  )
}

export default App
