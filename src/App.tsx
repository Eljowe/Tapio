import { BsInstagram, BsTiktok, BsArrowRight } from 'react-icons/bs'
import {
  slideAnimation
} from './config/motion'
import {motion, AnimatePresence} from 'framer-motion';
import { Link } from "react-scroll";


function App() {
  /*<img src={Team1} className='w-max sm:w-[80vw] md:w-[80vw] lg:w-[70vw] xl:w-[60vw] 2xl:w-[50vw] rounded-xl mt-10' alt='Team'></img>*/
  return (
    <AnimatePresence>
    <motion.section className='home' {...slideAnimation('left')}>
      <div className='text-white w-full flex flex-col justify-center items-center'>
        <section id="koti" className='w-full h-[100vh] flex flex-col items-center p-6'>
          <h3 className='tracking-[3.75vw] text-xs mt-0 sm:mt-0 sm:tracking-[5vw] '>TOUKOLAN TERÄS</h3>
          <h1 className='text-5xl sm:text-7xl md:text-8xl tracking-[2vw] mt-[25vh] sm:mt-[33vh] px-0'>TOTE/TAPIO</h1>
          <img className="w-max h-[10vh] mt-5 sm:mt-20" src="https://www.toukolanteras.fi/wp-content/themes/wp-toukolan/images/logo.png" alt='logo'></img>
          <div className='flex flex-col sm:flex-row justify-center items-center mt-10 sm:mt-[10vh]'>
            <Link
              to="ottelut"
              smooth={true}
              duration={500}
              className="m-2 p-4 w-[80vw] sm:w-[25vw] text-center outline outline-white outline-1 rounded-md cursor-pointer"
            >
              <p className='tracking-[0.2vw]'>OTTELUT</p>
            </Link>
            <Link
              to="joukkue"
              smooth={true}
              duration={500}
              className="m-2 p-4 w-[80vw] sm:w-[25vw] text-center outline outline-white outline-1 rounded-md cursor-pointer"
            >
              <p className='tracking-[0.2vw]'>JOUKKUE</p>
            </Link>
            <Link
              to="table"
              smooth={true}
              duration={500}
              className="m-2 p-4 w-[80vw] sm:w-[25vw] text-center outline outline-white outline-1 rounded-md cursor-pointer"
            >
              <p className='tracking-[0.2vw]'>SARJATAULUKKO</p>
            </Link>
          </div>
          <div className='flex flex-row justify-center pb-4 mt-10 w-full'>
              <a className='px-4' href='https://www.instagram.com/totetapio/' target='_blank' rel='noreferrer'>
                <BsInstagram/>
              </a>
              <a className='px-4' href='https://www.tiktok.com/@totetapio' target='_blank' rel='noreferrer'>
                <BsTiktok/>
              </a>
              <a href='https://www.toukolanteras.fi/' target='_blank' rel='noreferrer'>
                <img className="w-max h-[20px] px-4" src="https://www.toukolanteras.fi/wp-content/themes/wp-toukolan/images/logo.png" alt='footer logo'></img>
              </a>
            </div>
        </section>
        <section id="ottelut" className='bg-[#ffffff] text-black flex-col justify-center items-center text-center mt-0 p-6 w-full'>
          <h3 className='p-4 m-auto w-[80vw] text-2xl text-black tracking-[0.3rem]'>Syyskauden ottelut</h3>
          <div className='flex flex-col m-auto w-[80vw] sm:w-[80vw] md:w-[80vw] lg:w-[70vw] xl:w-[60vw] 2xl:w-[50vw] items-center justify-center text-center divide-black divide-y divide-solid'>
            <a href="https://tulospalvelu.palloliitto.fi/match/2825150/lineups" target='_blank'>
              <div className='flex flex-row justify-between m-auto items-center text-left px-4 py-6 w-[80vw] lg:w-[70vw] xl:w-[60vw] 2xl:w-[50vw]'>
                <p>HIFK/3</p>
                <div className='flex flex-row justify-center items-center'>
                  <p className='pr-2 text-right'>Ti 1.8. 20:15</p>
                  <BsArrowRight/>
                </div>
              </div>
            </a>
            <a href="https://tulospalvelu.palloliitto.fi/match/2825154/lineups" target='_blank'>
              <div className='flex flex-row justify-between m-auto items-center text-left px-4 py-6 w-[80vw] lg:w-[70vw] xl:w-[60vw] 2xl:w-[50vw]'>
                <p>HePu</p>
                <div className='flex flex-row justify-center items-center'>
                  <p className='pr-2 text-right'>Ti 8.8. 20:20</p>
                  <BsArrowRight/>
                </div>
              </div>
            </a>
            <a href="https://tulospalvelu.palloliitto.fi/match/2825160/lineups" target='_blank'>
              <div className='flex flex-row justify-between m-auto items-center text-left px-4 py-6 w-[80vw] lg:w-[70vw] xl:w-[60vw] 2xl:w-[50vw]'>
                <p>HJK/Kantsu</p>
                <div className='flex flex-row justify-center items-center'>
                  <p className='pr-2 text-right'>Ke 16.8. 18:15</p>
                  <BsArrowRight/>
                </div>
              </div>
            </a>
            <a href="https://tulospalvelu.palloliitto.fi/match/2825163/lineups" target='_blank'>
              <div className='flex flex-row justify-between m-auto text-left px-4 py-6 w-[80vw] lg:w-[70vw] xl:w-[60vw] 2xl:w-[50vw]'>
                <p>PPJ/LeJa</p>
                <div className='flex flex-row justify-center items-center'>
                  <p className='pr-2 text-right'>Ti 22.8. 20:15</p>
                  <BsArrowRight/>
                </div>
              </div>
            </a>
            <a href="https://tulospalvelu.palloliitto.fi/match/2825170/lineups" target='_blank'>
              <div className='flex flex-row justify-between m-auto items-center text-left px-4 py-6 w-[80vw] lg:w-[70vw] xl:w-[60vw] 2xl:w-[50vw]'>
                <p>FC POHU/KY United</p>
                <div className='flex flex-row justify-center items-center'>
                  <p className='pr-2 text-right'>Ti 29.8. 20:20</p>
                  <BsArrowRight/>
                </div>
              </div>
            </a>
            <a href="https://tulospalvelu.palloliitto.fi/match/2825170/lineups" target='_blank'>
              <div className='flex flex-row justify-between m-auto items-center text-left px-4 py-6 w-[80vw] lg:w-[70vw] xl:w-[60vw] 2xl:w-[50vw]'>
                <p>PPV/Seos</p>
                <div className='flex flex-row justify-center items-center'>
                  <p className='pr-2 text-right'>Ti 5.9. 19:15</p>
                  <BsArrowRight/>
                </div>
              </div>
            </a>
            <a href="https://tulospalvelu.palloliitto.fi/match/2825175/lineups" target='_blank'>
              <div className='flex flex-row justify-between m-auto items-center text-left px-4 py-6 w-[80vw] lg:w-[70vw] xl:w-[60vw] 2xl:w-[50vw]'>
                <p>FC Spital</p>
                <div className='flex flex-row justify-center items-center'>
                  <p className='pr-2 text-right'>Ti 12.9. 20:20</p>
                  <BsArrowRight/>
                </div>
              </div>
            </a>
            <a href="https://tulospalvelu.palloliitto.fi/match/2825181/lineups" target='_blank'>
              <div className='flex flex-row justify-between m-auto items-center text-left px-4 py-6 w-[80vw] lg:w-[70vw] xl:w-[60vw] 2xl:w-[50vw]'>
                <p>Tavastia</p>
                <div className='flex flex-row justify-center items-center'>
                  <p className='pr-2 text-right'>Ke 20.9. 20:15</p>
                  <BsArrowRight/>
                </div>
              </div>
            </a>
            <a href="https://tulospalvelu.palloliitto.fi/match/2825190/lineups" target='_blank'>
              <div className='flex flex-row justify-between m-auto items-center text-left px-4 py-6 w-[80vw] lg:w-[70vw] xl:w-[60vw] 2xl:w-[50vw]'>
                <p>SAPA/Savanna</p>
                <div className='flex flex-row justify-center items-center'>
                  <p className='pr-2 text-right'>Pe 29.9. 18:00</p>
                  <BsArrowRight/>
                </div>
              </div>
            </a>
          </div>
        </section>
        <section id="joukkue" className='flex flex-col justify-center m-auto items-center mt-10 w-full lg:w-[70vw] xl:w-[60vw] 2xl:w-[50vw] divide-white divide-y divide-solid'>
        <h3 className=' margin-auto text-2xl my-10 tracking-[0.3rem]'>Joukkue</h3>
            <div className='flex flex-col justify-center m-auto items-center w-[80vw] lg:w-[70vw] xl:w-[60vw] 2xl:w-[50vw] pb-6'>
              <h4 className='text-xl tracking-[0.1rem] mt-6'>Puolustus</h4>
              <div className='flex flex-row justify-between m-auto items-center px-4 py-4 w-[80vw] lg:w-[70vw] xl:w-[60vw] 2xl:w-[50vw]'>
                <p>Joel Wickström</p>
                <p>#85</p>
              </div>
              <div className='flex flex-row justify-between m-auto items-center px-4 py-4 w-[80vw] lg:w-[70vw] xl:w-[60vw] 2xl:w-[50vw]'>
                <p>Abenezer Abraham-Yoseph</p>
                <p>#5</p>
              </div>
              <div className='flex flex-row justify-between m-auto items-center px-4 py-4 w-[80vw] lg:w-[70vw] xl:w-[60vw] 2xl:w-[50vw]'>
                <p>Mitja Ritvanen</p>
                <p>#17</p>
              </div>
              <div className='flex flex-row justify-between m-auto items-center px-4 py-4 w-[80vw] lg:w-[70vw] xl:w-[60vw] 2xl:w-[50vw]'>
                <p>Peik Pesonius</p>
                <p>#12</p>
              </div>
              <div className='flex flex-row justify-between m-auto items-center px-4 py-4 w-[80vw] lg:w-[70vw] xl:w-[60vw] 2xl:w-[50vw]'>
                <p>Saman Ghaderi</p>
                <p>#67</p>
              </div>
              <div className='flex flex-row justify-between m-auto items-center px-4 py-4 w-[80vw] lg:w-[70vw] xl:w-[60vw] 2xl:w-[50vw]'>
                <p>Topias Tykkyläinen</p>
                <p>#13</p>
              </div>
            </div>
            <div className='flex flex-col justify-center m-auto items-center w-[80vw] lg:w-[70vw] xl:w-[60vw] 2xl:w-[50vw] py-6'>
            <h4 className='text-xl tracking-[0.1rem]'>Keskikenttä</h4>
              <div className='flex flex-row justify-between m-auto items-center px-4 py-4 w-[80vw] lg:w-[70vw] xl:w-[60vw] 2xl:w-[50vw]'>
                <p>Hasan Simsek</p>
                <p>#2</p>
              </div>
              <div className='flex flex-row justify-between m-auto items-center px-4 py-4 w-[80vw] lg:w-[70vw] xl:w-[60vw] 2xl:w-[50vw]'>
                <p>Milkias Mesghenna</p>
                <p>#8</p>
              </div>
              <div className='flex flex-row justify-between m-auto items-center px-4 py-4 w-[80vw] lg:w-[70vw] xl:w-[60vw] 2xl:w-[50vw]'>
                <p>Mikael Tiusanen</p>
                <p>#11</p>
              </div>
              <div className='flex flex-row justify-between m-auto items-center px-4 py-4 w-[80vw] lg:w-[70vw] xl:w-[60vw] 2xl:w-[50vw]'>
                <p>Joel Girmay</p>
                <p>#14</p>
              </div>
              <div className='flex flex-row justify-between m-auto items-center px-4 py-4 w-[80vw] lg:w-[70vw] xl:w-[60vw] 2xl:w-[50vw]'>
                <p>Aleksi Merras</p>
                <p>#69</p>
              </div>
              <div className='flex flex-row justify-between m-auto items-center px-4 py-4 w-[80vw] lg:w-[70vw] xl:w-[60vw] 2xl:w-[50vw]'>
                <p>Bavar Isar</p>
                <p>#77</p>
              </div>
              <div className='flex flex-row justify-between m-auto items-center px-4 py-4 w-[80vw] lg:w-[70vw] xl:w-[60vw] 2xl:w-[50vw]'>
                <p>Antti Hemiä</p>
                <p>#99</p>
              </div>
            </div>
            <div className='flex flex-col justify-center m-auto items-center w-[80vw] lg:w-[70vw] xl:w-[60vw] 2xl:w-[50vw] py-6'>
              <h4 className='text-xl tracking-[0.1rem]'>Hyökkäys</h4>
              <div className='flex flex-row justify-between m-auto items-center px-4 py-4 w-[80vw] lg:w-[70vw] xl:w-[60vw] 2xl:w-[50vw]'>
                <p>Joel Pesonen</p>
                <p>#9</p>
              </div>
              <div className='flex flex-row justify-between m-auto items-center px-4 py-4 w-[80vw] lg:w-[70vw] xl:w-[60vw] 2xl:w-[50vw]'>
                <p>Adam Zaghoudi</p>
                <p>#10</p>
              </div>
              <div className='flex flex-row justify-between m-auto items-center px-4 py-4 w-[80vw] lg:w-[70vw] xl:w-[60vw] 2xl:w-[50vw]'>
                <p>Leevi Rolig</p>
                <p>#19</p>
              </div>
              <div className='flex flex-row justify-between m-auto items-center px-4 py-4 w-[80vw] lg:w-[70vw] xl:w-[60vw] 2xl:w-[50vw]'>
                <p>Lauri Juutilainen</p>
                <p>#22</p>
              </div>
              <div className='flex flex-row justify-between m-auto items-center px-4 py-4 w-[80vw] lg:w-[70vw] xl:w-[60vw] 2xl:w-[50vw]'>
                <p>Endrit Feka</p>
                <p>#29</p>
              </div>
              <div className='flex flex-row justify-between m-auto items-center px-4 py-4 w-[80vw] lg:w-[70vw] xl:w-[60vw] 2xl:w-[50vw]'>
                <p>Abaas Mukhtar Abdi Ismail</p>
                <p>#6</p>
              </div>
            </div>
            <div className='flex flex-col justify-center m-auto items-center w-[80vw] lg:w-[70vw] xl:w-[60vw] 2xl:w-[50vw] py-6'>
            <h4 className='text-xl tracking-[0.1rem]'>Maalivahti</h4>
              <div className='flex flex-row justify-between m-auto items-center px-4 py-4 w-[80vw] lg:w-[70vw] xl:w-[60vw] 2xl:w-[50vw]'>
                <p>Nour Elsherif</p>
                <p>#32</p>
              </div>
            </div>
          </section>
        </div>
        </motion.section>
      </AnimatePresence>
  )
}


export default App
