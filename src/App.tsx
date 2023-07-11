import { useEffect } from 'react'
import Team1 from './assets/Team1.jpg'

function App() {
  return (
    <div className='text-white w-full flex flex-col justify-center items-center'>
      <div className='w-full h-max flex flex-col justify-center items-center p-6'>
        <h3 className='tracking-[3.75vw] text-xs sm:tracking-[5vw] md:tracking-[5vw] lg:tracking-[5vw] xl:tracking-[5vw] 2xl:tracking-[5vw]'>TOUKOLAN TERÄS</h3>
        <h1 className='text-5xl sm:text-7xl md:text-8xl tracking-[2vw] mt-10 px-0'>TOTE/TAPIO</h1>
        <img className="w-max h-[10vh] mt-5" src="https://www.toukolanteras.fi/wp-content/themes/wp-toukolan/images/logo.png" alt='logo'></img>
        <img src={Team1} className='w-max sm:w-[80vw] md:w-[80vw] lg:w-[70vw] xl:w-[60vw] 2xl:w-[50vw] rounded-xl mt-5' alt='Team'></img>
      </div>
      <div className='bg-white text-black flex-col justify-center items-center text-center mt-10 p-6 w-full'>
        <div className='flex flex-col m-auto w-[80vw] sm:w-[80vw] md:w-[80vw] lg:w-[70vw] xl:w-[60vw] 2xl:w-[50vw] items-center justify-center text-center divide-black divide-y divide-solid'>
          <h3 className='p-4 w-[80vw] text-2xl text-[#780116]'>Tulevat ottelut</h3>
          <p className='p-4 w-[80vw]'>Tote vs Tapi</p>
          <p className='p-4 w-[80vw]'>Tote vs Hjk</p>
        </div>
      </div>
      <div className='flex-col justify-center items-center text-center mt-10 w-full divide-white divide-y divide-solid'>
        <h3 className='p-4 margin-auto text-2xl'>Joukkue</h3>
        <div className='flex flex-row justify-center m-auto items-center mt-10 w-full sm:w-[80vw] md:w-[80vw] lg:w-[70vw] xl:w-[60vw] 2xl:w-[50vw]'>
          <div className='flex flex-col justify-left items-left text-left w-1/2'>
            <p className='p-4'>#85 Joel Wickström</p>
            <p className='p-4'>#86 Janne Kivinen</p>
          </div>
          <div className='flex flex-col justify-left items-left text-right w-1/2'>
            <p className='p-4'>Puolustaja</p>
            <p className='p-4'>Puolustaja</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
