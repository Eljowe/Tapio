import Team1 from './assets/Team1.jpg'

function App() {

  return (
    <div className='text-white w-full flex flex-col justify-center items-center'>
      <h3 className='text-2xl tracking-[2vw] sm:tracking-[1em] md:tracking-[1.5em]'>TOUKOLAN TERÄS</h3>
      <h1 className='text-5xl sm:text-8xl md:text-8xl tracking-widest p-6'>TOTE/TAPIO</h1>
      <img className="w-max h-[10vh]" src="https://www.toukolanteras.fi/wp-content/themes/wp-toukolan/images/logo.png"></img>
      <img src={Team1} className='w-[80vw] sm:w-[80vw] md:w-[70vw] lg:w-[60vw] xl:w-[60vw] 2xl:w-[50vw] mt-10 rounded-2xl' alt='Team'></img>
    </div>
  )
}

export default App
