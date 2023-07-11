import Team1 from './assets/Team1.jpg'
import Team2 from './assets/Team2.jpg'

import { BsInstagram, BsTiktok } from 'react-icons/bs'
import { BiCopyright } from 'react-icons/bi'


function App() {
  /*
  useEffect(() => {
    getMatches()
  }, [])
  */

  return (
    <div className='text-white w-full flex flex-col justify-center items-center'>
      <div className='w-full h-max flex flex-col justify-center items-center p-6'>
        <h3 className='tracking-[3.75vw] text-xs sm:tracking-[5vw] md:tracking-[5vw] lg:tracking-[5vw] xl:tracking-[5vw] 2xl:tracking-[5vw]'>TOUKOLAN TERÄS</h3>
        <h1 className='text-5xl sm:text-7xl md:text-8xl tracking-[2vw] mt-10 px-0'>TOTE/TAPIO</h1>
        <img className="w-max h-[10vh] mt-5" src="https://www.toukolanteras.fi/wp-content/themes/wp-toukolan/images/logo.png" alt='logo'></img>
        <img src={Team1} className='w-max sm:w-[80vw] md:w-[80vw] lg:w-[70vw] xl:w-[60vw] 2xl:w-[50vw] rounded-xl mt-5' alt='Team'></img>
      </div>
      <div className='bg-white text-black flex-col justify-center items-center text-center mt-10 p-6 w-full'>
        <h3 className='p-4 m-auto w-[80vw] text-2xl text-[#780116]'>Tulevat ottelut</h3>
        <div className='flex flex-col m-auto w-[80vw] sm:w-[80vw] md:w-[80vw] lg:w-[70vw] xl:w-[60vw] 2xl:w-[50vw] items-center justify-center text-center divide-black divide-y divide-solid'>
          <a href="https://tulospalvelu.palloliitto.fi/match/2825150/lineups" target='_blank'>
            <div className='flex flex-row justify-between m-auto items-center px-4 py-6 w-[80vw] sm:w-[80vw] md:w-[80vw] lg:w-[70vw] xl:w-[60vw] 2xl:w-[50vw]'>
              <p>HIFK/3 vs ToTe/Tapio</p>
              <p>Ti 1.8. 20:15</p>
            </div>
          </a>
          <a href="https://tulospalvelu.palloliitto.fi/match/2825154/lineups" target='_blank'>
            <div className='flex flex-row justify-between m-auto items-center text-left px-4 py-6 w-[80vw] sm:w-[80vw] md:w-[80vw] lg:w-[70vw] xl:w-[60vw] 2xl:w-[50vw]'>
              <p>ToTe/Tapio vs HePu</p>
              <p>Ti 8.8. 20:20</p>
            </div>
          </a>
          <a href="https://tulospalvelu.palloliitto.fi/match/2825160/lineups" target='_blank'>
            <div className='flex flex-row justify-between m-auto items-center px-4 py-6 w-[80vw] sm:w-[80vw] md:w-[80vw] lg:w-[70vw] xl:w-[60vw] 2xl:w-[50vw]'>
              <p>HJK/Kantsu vs ToTe/Tapio</p>
              <p>Ke 16.8. 18:15</p>
            </div>
          </a>
          <a href="https://tulospalvelu.palloliitto.fi/match/2825163/lineups" target='_blank'>
            <div className='flex flex-row justify-between m-auto px-4 py-6 w-[80vw] sm:w-[80vw] md:w-[80vw] lg:w-[70vw] xl:w-[60vw] 2xl:w-[50vw]'>
              <p>ToTe/Tapio vs PPJ/LeJa</p>
              <p>Ti 22.8. 20:15</p>
            </div>
          </a>
          <a href="https://tulospalvelu.palloliitto.fi/match/2825170/lineups" target='_blank'>
            <div className='flex flex-row justify-between m-auto items-center px-4 py-6 w-[80vw] sm:w-[80vw] md:w-[80vw] lg:w-[70vw] xl:w-[60vw] 2xl:w-[50vw]'>
              <p>FC POHU/KY United vs ToTe/Tapio</p>
              <p>Ti 29.8. 20:20</p>
            </div>
          </a>
          <a href="https://tulospalvelu.palloliitto.fi/match/2825170/lineups" target='_blank'>
            <div className='flex flex-row justify-between m-auto items-center px-4 py-6 w-[80vw] sm:w-[80vw] md:w-[80vw] lg:w-[70vw] xl:w-[60vw] 2xl:w-[50vw]'>
              <p>PPV/Seos vs ToTe/Tapio</p>
              <p>Ti 5.9. 19:15</p>
            </div>
          </a>
          <a href="https://tulospalvelu.palloliitto.fi/match/2825175/lineups" target='_blank'>
            <div className='flex flex-row justify-between m-auto items-center px-4 py-6 w-[80vw] sm:w-[80vw] md:w-[80vw] lg:w-[70vw] xl:w-[60vw] 2xl:w-[50vw]'>
              <p>ToTe/Tapio vs FC Spital</p>
              <p>Ti 12.9. 20:20</p>
            </div>
          </a>
          <a href="https://tulospalvelu.palloliitto.fi/match/2825181/lineups" target='_blank'>
            <div className='flex flex-row justify-between m-auto items-center px-4 py-6 w-[80vw] sm:w-[80vw] md:w-[80vw] lg:w-[70vw] xl:w-[60vw] 2xl:w-[50vw]'>
              <p>ToTe/Tapio vs Tavastia</p>
              <p>Ke 20.9. 20:15</p>
            </div>
          </a>
          <a href="https://tulospalvelu.palloliitto.fi/match/2825190/lineups" target='_blank'>
            <div className='flex flex-row justify-between m-auto items-center px-4 py-6 w-[80vw] sm:w-[80vw] md:w-[80vw] lg:w-[70vw] xl:w-[60vw] 2xl:w-[50vw]'>
              <p>SAPA/Savanna vs ToTe/Tapio</p>
              <p>Pe 29.9. 18:00</p>
            </div>
          </a>
        </div>
      </div>
      <h3 className=' margin-auto text-2xl mt-10'>Joukkue</h3>
      <div className='flex flex-col justify-center m-auto items-center mt-10 w-full sm:w-[80vw] md:w-[80vw] lg:w-[70vw] xl:w-[60vw] 2xl:w-[50vw] divide-white divide-y divide-solid'>
          <div className='flex flex-col justify-center m-auto items-center w-[80vw] sm:w-[80vw] md:w-[80vw] lg:w-[70vw] xl:w-[60vw] 2xl:w-[50vw] pb-6'>
            <h4 className='text-xl'>Puolustus</h4>
            <div className='flex flex-row justify-between m-auto items-center px-4 py-4 w-[80vw] sm:w-[80vw] md:w-[80vw] lg:w-[70vw] xl:w-[60vw] 2xl:w-[50vw]'>
              <p>Joel Wickström</p>
              <p>#85</p>
            </div>
            <div className='flex flex-row justify-between m-auto items-center px-4 py-4 w-[80vw] sm:w-[80vw] md:w-[80vw] lg:w-[70vw] xl:w-[60vw] 2xl:w-[50vw]'>
              <p>Abenezer Abraham-Yoseph</p>
              <p>#5</p>
            </div>
            <div className='flex flex-row justify-between m-auto items-center px-4 py-4 w-[80vw] sm:w-[80vw] md:w-[80vw] lg:w-[70vw] xl:w-[60vw] 2xl:w-[50vw]'>
              <p>Mitja Ritvanen</p>
              <p>#17</p>
            </div>
            <div className='flex flex-row justify-between m-auto items-center px-4 py-4 w-[80vw] sm:w-[80vw] md:w-[80vw] lg:w-[70vw] xl:w-[60vw] 2xl:w-[50vw]'>
              <p>Peik Pesonius</p>
              <p>#12</p>
            </div>
            <div className='flex flex-row justify-between m-auto items-center px-4 py-4 w-[80vw] sm:w-[80vw] md:w-[80vw] lg:w-[70vw] xl:w-[60vw] 2xl:w-[50vw]'>
              <p>Saman Ghaderi</p>
              <p>#67</p>
            </div>
            <div className='flex flex-row justify-between m-auto items-center px-4 py-4 w-[80vw] sm:w-[80vw] md:w-[80vw] lg:w-[70vw] xl:w-[60vw] 2xl:w-[50vw]'>
              <p>Topias Tykkyläinen</p>
              <p>#13</p>
            </div>
          </div>
          <div className='flex flex-col justify-center m-auto items-center w-[80vw] sm:w-[80vw] md:w-[80vw] lg:w-[70vw] xl:w-[60vw] 2xl:w-[50vw] py-6'>
          <h4 className='text-xl'>Keskikenttä</h4>
            <div className='flex flex-row justify-between m-auto items-center px-4 py-4 w-[80vw] sm:w-[80vw] md:w-[80vw] lg:w-[70vw] xl:w-[60vw] 2xl:w-[50vw]'>
              <p>Hasan Simsek</p>
              <p>#2</p>
            </div>
            <div className='flex flex-row justify-between m-auto items-center px-4 py-4 w-[80vw] sm:w-[80vw] md:w-[80vw] lg:w-[70vw] xl:w-[60vw] 2xl:w-[50vw]'>
              <p>Milkias Mesghenna</p>
              <p>#8</p>
            </div>
            <div className='flex flex-row justify-between m-auto items-center px-4 py-4 w-[80vw] sm:w-[80vw] md:w-[80vw] lg:w-[70vw] xl:w-[60vw] 2xl:w-[50vw]'>
              <p>Mikael Tiusanen</p>
              <p>#11</p>
            </div>
            <div className='flex flex-row justify-between m-auto items-center px-4 py-4 w-[80vw] sm:w-[80vw] md:w-[80vw] lg:w-[70vw] xl:w-[60vw] 2xl:w-[50vw]'>
              <p>Joel Girmay</p>
              <p>#14</p>
            </div>
            <div className='flex flex-row justify-between m-auto items-center px-4 py-4 w-[80vw] sm:w-[80vw] md:w-[80vw] lg:w-[70vw] xl:w-[60vw] 2xl:w-[50vw]'>
              <p>Aleksi Merras</p>
              <p>#69</p>
            </div>
            <div className='flex flex-row justify-between m-auto items-center px-4 py-4 w-[80vw] sm:w-[80vw] md:w-[80vw] lg:w-[70vw] xl:w-[60vw] 2xl:w-[50vw]'>
              <p>Bavar Isar</p>
              <p>#77</p>
            </div>
            <div className='flex flex-row justify-between m-auto items-center px-4 py-4 w-[80vw] sm:w-[80vw] md:w-[80vw] lg:w-[70vw] xl:w-[60vw] 2xl:w-[50vw]'>
              <p>Antti Hemiä</p>
              <p>#99</p>
            </div>
          </div>
          <div className='flex flex-col justify-center m-auto items-center w-[80vw] sm:w-[80vw] md:w-[80vw] lg:w-[70vw] xl:w-[60vw] 2xl:w-[50vw] py-6'>
            <h4 className='text-xl'>Hyökkäys</h4>
            <div className='flex flex-row justify-between m-auto items-center px-4 py-4 w-[80vw] sm:w-[80vw] md:w-[80vw] lg:w-[70vw] xl:w-[60vw] 2xl:w-[50vw]'>
              <p>Joel Pesonen</p>
              <p>#9</p>
            </div>
            <div className='flex flex-row justify-between m-auto items-center px-4 py-4 w-[80vw] sm:w-[80vw] md:w-[80vw] lg:w-[70vw] xl:w-[60vw] 2xl:w-[50vw]'>
              <p>Adam Zaghoudi</p>
              <p>#10</p>
            </div>
            <div className='flex flex-row justify-between m-auto items-center px-4 py-4 w-[80vw] sm:w-[80vw] md:w-[80vw] lg:w-[70vw] xl:w-[60vw] 2xl:w-[50vw]'>
              <p>Leevi Rolig</p>
              <p>#19</p>
            </div>
            <div className='flex flex-row justify-between m-auto items-center px-4 py-4 w-[80vw] sm:w-[80vw] md:w-[80vw] lg:w-[70vw] xl:w-[60vw] 2xl:w-[50vw]'>
              <p>Lauri Juutilainen</p>
              <p>#22</p>
            </div>
            <div className='flex flex-row justify-between m-auto items-center px-4 py-4 w-[80vw] sm:w-[80vw] md:w-[80vw] lg:w-[70vw] xl:w-[60vw] 2xl:w-[50vw]'>
              <p>Endrit Feka</p>
              <p>#29</p>
            </div>
            <div className='flex flex-row justify-between m-auto items-center px-4 py-4 w-[80vw] sm:w-[80vw] md:w-[80vw] lg:w-[70vw] xl:w-[60vw] 2xl:w-[50vw]'>
              <p>Abaas Mukhtar Abdi Ismail</p>
              <p>#6</p>
            </div>
          </div>
          <div className='flex flex-col justify-center m-auto items-center w-[80vw] sm:w-[80vw] md:w-[80vw] lg:w-[70vw] xl:w-[60vw] 2xl:w-[50vw] py-6'>
          <h4 className='text-xl'>Maalivahti</h4>
            <div className='flex flex-row justify-between m-auto items-center px-4 py-4 w-[80vw] sm:w-[80vw] md:w-[80vw] lg:w-[70vw] xl:w-[60vw] 2xl:w-[50vw]'>
              <p>Nour Elsherif</p>
              <p>#32</p>
            </div>
          </div>
        </div>
        <div className='flex flex-col justify-center m-auto items-center px-6 py-6 w-full sm:w-[80vw] md:w-[80vw] lg:w-[70vw] xl:w-[60vw] 2xl:w-[50vw]'>
          <img src={Team2} className='w-max sm:w-[80vw] md:w-[80vw] lg:w-[70vw] xl:w-[60vw] 2xl:w-[50vw] rounded-xl' alt='Team'></img>
        </div>
        <footer className='flex flex-row justify-around p-6 w-[100vw] bg-[#0F0F0F]'>
          <a href='https://www.instagram.com/totetapio/' target='_blank' rel='noreferrer'>
            <BsInstagram/>
          </a>
          <a href='https://www.tiktok.com/@totetapio' target='_blank' rel='noreferrer'>
            <BsTiktok/>
          </a>
          <div className='flex flex-row justify-center items-center'>
            <BiCopyright/>
            <p>2023</p>
          </div>
        </footer>
      </div>
  )
}

export default App
