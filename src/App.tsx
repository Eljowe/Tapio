import { BsInstagram, BsTiktok, BsArrowRight } from 'react-icons/bs';
import { Link } from 'react-scroll';
import joukkuekuva from '../src/assets/Team1.jpg';

function App() {
  /*<img src={Team1} className='w-max sm:w-[80vw] md:w-[80vw] lg:w-[70vw] xl:w-[60vw] 2xl:w-[50vw] rounded-xl mt-10' alt='Team'></img>*/
  return (
    <div className="flex w-full flex-col items-center justify-center text-white">
      <section id="koti" className="flex w-full flex-col items-center">
        <div className="flex w-full flex-col items-center justify-center bg-black p-14 shadow-xl  grayscale-0">
          <div className="flex w-full flex-col items-center justify-center sm:h-[70dvh]">
            <div className="divide fixed top-2 z-10 flex w-full flex-row items-center justify-center text-[0.6em] sm:text-base">
              <Link
                to="ottelut"
                smooth={true}
                duration={500}
                className=" w-[180px] cursor-pointer text-center transition duration-500 hover:z-20 hover:scale-105 hover:underline"
              >
                <p className="tracking-[0.2vw]">OTTELUT</p>
              </Link>
              <Link
                to="joukkue"
                smooth={true}
                duration={500}
                className=" w-[180px] cursor-pointer text-center transition duration-500 hover:scale-105 hover:underline"
              >
                <p className="tracking-[0.2vw]">JOUKKUE</p>
              </Link>
              <Link
                to="table"
                smooth={true}
                duration={500}
                className=" w-[180px] cursor-pointer text-center transition duration-500 hover:scale-105 hover:underline"
              >
                <p className="tracking-[0.2vw]">SARJATAULUKKO</p>
              </Link>
            </div>
            <img
              src={joukkuekuva}
              className="absolute top-0 h-[100%] w-full object-cover grayscale filter"
              alt="joukkuekuva"
            />
            <div className="absolute inset-0 top-0 h-[100%] bg-gradient-to-b from-black to-transparent opacity-60"></div>
            <h1 className="z-10 px-0 text-5xl text-[#ffffff] sm:text-7xl md:text-8xl lg:text-9xl">TOTE/TAPIO</h1>
            <img
              className="z-10 mt-6 h-[10vh] w-max sm:mt-10"
              src="https://www.toukolanteras.fi/wp-content/themes/wp-toukolan/images/logo.png"
              alt="logo"
            ></img>
            <div className="fixed bottom-2 z-10 flex h-min flex-row items-center justify-end space-x-6 text-white sm:right-4 sm:top-2 sm:text-xl">
              <a
                className=" transition duration-500 hover:scale-125"
                href="https://www.instagram.com/totetapio/"
                target="_blank"
                rel="noreferrer"
              >
                <BsInstagram />
              </a>
              <a
                className=" transition duration-500 hover:scale-125"
                href="https://www.tiktok.com/@totetapio"
                target="_blank"
                rel="noreferrer"
              >
                <BsTiktok />
              </a>
              <a
                href="https://www.toukolanteras.fi/"
                target="_blank"
                rel="noreferrer"
                className="transition duration-500 hover:scale-125"
              >
                <img
                  className="h-[20px] w-max sm:h-[26px] "
                  src="https://www.toukolanteras.fi/wp-content/themes/wp-toukolan/images/logo.png"
                  alt="footer logo"
                ></img>
              </a>
            </div>
          </div>
        </div>
      </section>
      <section
        id="ottelut"
        className="mt-0 w-full flex-col items-center justify-center bg-white p-6 text-center text-black shadow-xl"
      >
        <h3 className="m-auto w-[80vw] p-4 text-2xl tracking-[0.3rem]">Syyskauden ottelut</h3>
        <div className="m-auto flex w-[80vw] flex-col items-center justify-center divide-y divide-solid divide-black text-center sm:w-[80vw] md:w-[80vw] lg:w-[70vw] xl:w-[60vw] 2xl:w-[50vw]">
          <a href="https://tulospalvelu.palloliitto.fi/match/2825150/lineups" target="_blank">
            <div className="m-auto flex w-[80vw] flex-row items-center justify-between px-4 py-6 text-left lg:w-[70vw] xl:w-[60vw] 2xl:w-[50vw]">
              <p>HIFK/3</p>
              <div className="flex flex-row items-center justify-center">
                <p className="pr-2 text-right">Ti 1.8. 20:15</p>
                <BsArrowRight />
              </div>
            </div>
          </a>
          <a href="https://tulospalvelu.palloliitto.fi/match/2825154/lineups" target="_blank">
            <div className="m-auto flex w-[80vw] flex-row items-center justify-between px-4 py-6 text-left lg:w-[70vw] xl:w-[60vw] 2xl:w-[50vw]">
              <p>HePu</p>
              <div className="flex flex-row items-center justify-center">
                <p className="pr-2 text-right">Ti 8.8. 20:20</p>
                <BsArrowRight />
              </div>
            </div>
          </a>
          <a href="https://tulospalvelu.palloliitto.fi/match/2825160/lineups" target="_blank">
            <div className="m-auto flex w-[80vw] flex-row items-center justify-between px-4 py-6 text-left lg:w-[70vw] xl:w-[60vw] 2xl:w-[50vw]">
              <p>HJK/Kantsu</p>
              <div className="flex flex-row items-center justify-center">
                <p className="pr-2 text-right">Ke 16.8. 18:15</p>
                <BsArrowRight />
              </div>
            </div>
          </a>
          <a href="https://tulospalvelu.palloliitto.fi/match/2825163/lineups" target="_blank">
            <div className="m-auto flex w-[80vw] flex-row justify-between px-4 py-6 text-left lg:w-[70vw] xl:w-[60vw] 2xl:w-[50vw]">
              <p>PPJ/LeJa</p>
              <div className="flex flex-row items-center justify-center">
                <p className="pr-2 text-right">Ti 22.8. 20:15</p>
                <BsArrowRight />
              </div>
            </div>
          </a>
          <a href="https://tulospalvelu.palloliitto.fi/match/2825170/lineups" target="_blank">
            <div className="m-auto flex w-[80vw] flex-row items-center justify-between px-4 py-6 text-left lg:w-[70vw] xl:w-[60vw] 2xl:w-[50vw]">
              <p>FC POHU/KY United</p>
              <div className="flex flex-row items-center justify-center">
                <p className="pr-2 text-right">Ti 29.8. 20:20</p>
                <BsArrowRight />
              </div>
            </div>
          </a>
          <a href="https://tulospalvelu.palloliitto.fi/match/2825170/lineups" target="_blank">
            <div className="m-auto flex w-[80vw] flex-row items-center justify-between px-4 py-6 text-left lg:w-[70vw] xl:w-[60vw] 2xl:w-[50vw]">
              <p>PPV/Seos</p>
              <div className="flex flex-row items-center justify-center">
                <p className="pr-2 text-right">Ti 5.9. 19:15</p>
                <BsArrowRight />
              </div>
            </div>
          </a>
          <a href="https://tulospalvelu.palloliitto.fi/match/2825175/lineups" target="_blank">
            <div className="m-auto flex w-[80vw] flex-row items-center justify-between px-4 py-6 text-left lg:w-[70vw] xl:w-[60vw] 2xl:w-[50vw]">
              <p>FC Spital</p>
              <div className="flex flex-row items-center justify-center">
                <p className="pr-2 text-right">Ti 12.9. 20:20</p>
                <BsArrowRight />
              </div>
            </div>
          </a>
          <a href="https://tulospalvelu.palloliitto.fi/match/2825181/lineups" target="_blank">
            <div className="m-auto flex w-[80vw] flex-row items-center justify-between px-4 py-6 text-left lg:w-[70vw] xl:w-[60vw] 2xl:w-[50vw]">
              <p>Tavastia</p>
              <div className="flex flex-row items-center justify-center">
                <p className="pr-2 text-right">Ke 20.9. 20:15</p>
                <BsArrowRight />
              </div>
            </div>
          </a>
          <a href="https://tulospalvelu.palloliitto.fi/match/2825190/lineups" target="_blank">
            <div className="m-auto flex w-[80vw] flex-row items-center justify-between px-4 py-6 text-left lg:w-[70vw] xl:w-[60vw] 2xl:w-[50vw]">
              <p>SAPA/Savanna</p>
              <div className="flex flex-row items-center justify-center">
                <p className="pr-2 text-right">Pe 29.9. 18:00</p>
                <BsArrowRight />
              </div>
            </div>
          </a>
        </div>
      </section>
      <section
        id="joukkue"
        className="flex w-full flex-col items-center justify-center divide-y divide-solid divide-white bg-[#780116]"
      >
        <h3 className=" margin-auto my-10 text-2xl tracking-[0.3rem]">Joukkue</h3>
        <div className="m-auto flex w-[80vw] flex-col items-center justify-center pb-6 lg:w-[70vw] xl:w-[60vw] 2xl:w-[50vw]">
          <h4 className="mt-6 text-xl tracking-[0.1rem]">Puolustus</h4>
          <div className="m-auto flex w-[80vw] flex-row items-center justify-between px-4 py-4 lg:w-[70vw] xl:w-[60vw] 2xl:w-[50vw]">
            <p>Joel Wickström</p>
            <p>#85</p>
          </div>
          <div className="m-auto flex w-[80vw] flex-row items-center justify-between px-4 py-4 lg:w-[70vw] xl:w-[60vw] 2xl:w-[50vw]">
            <p>Abenezer Abraham-Yoseph</p>
            <p>#5</p>
          </div>
          <div className="m-auto flex w-[80vw] flex-row items-center justify-between px-4 py-4 lg:w-[70vw] xl:w-[60vw] 2xl:w-[50vw]">
            <p>Mitja Ritvanen</p>
            <p>#17</p>
          </div>
          <div className="m-auto flex w-[80vw] flex-row items-center justify-between px-4 py-4 lg:w-[70vw] xl:w-[60vw] 2xl:w-[50vw]">
            <p>Peik Pesonius</p>
            <p>#12</p>
          </div>
          <div className="m-auto flex w-[80vw] flex-row items-center justify-between px-4 py-4 lg:w-[70vw] xl:w-[60vw] 2xl:w-[50vw]">
            <p>Saman Ghaderi</p>
            <p>#67</p>
          </div>
          <div className="m-auto flex w-[80vw] flex-row items-center justify-between px-4 py-4 lg:w-[70vw] xl:w-[60vw] 2xl:w-[50vw]">
            <p>Topias Tykkyläinen</p>
            <p>#13</p>
          </div>
        </div>
        <div className="m-auto flex w-[80vw] flex-col items-center justify-center py-6 lg:w-[70vw] xl:w-[60vw] 2xl:w-[50vw]">
          <h4 className="text-xl tracking-[0.1rem]">Keskikenttä</h4>
          <div className="m-auto flex w-[80vw] flex-row items-center justify-between px-4 py-4 lg:w-[70vw] xl:w-[60vw] 2xl:w-[50vw]">
            <p>Hasan Simsek</p>
            <p>#2</p>
          </div>
          <div className="m-auto flex w-[80vw] flex-row items-center justify-between px-4 py-4 lg:w-[70vw] xl:w-[60vw] 2xl:w-[50vw]">
            <p>Milkias Mesghenna</p>
            <p>#8</p>
          </div>
          <div className="m-auto flex w-[80vw] flex-row items-center justify-between px-4 py-4 lg:w-[70vw] xl:w-[60vw] 2xl:w-[50vw]">
            <p>Mikael Tiusanen</p>
            <p>#11</p>
          </div>
          <div className="m-auto flex w-[80vw] flex-row items-center justify-between px-4 py-4 lg:w-[70vw] xl:w-[60vw] 2xl:w-[50vw]">
            <p>Joel Girmay</p>
            <p>#14</p>
          </div>
          <div className="m-auto flex w-[80vw] flex-row items-center justify-between px-4 py-4 lg:w-[70vw] xl:w-[60vw] 2xl:w-[50vw]">
            <p>Aleksi Merras</p>
            <p>#69</p>
          </div>
          <div className="m-auto flex w-[80vw] flex-row items-center justify-between px-4 py-4 lg:w-[70vw] xl:w-[60vw] 2xl:w-[50vw]">
            <p>Bavar Isar</p>
            <p>#77</p>
          </div>
          <div className="m-auto flex w-[80vw] flex-row items-center justify-between px-4 py-4 lg:w-[70vw] xl:w-[60vw] 2xl:w-[50vw]">
            <p>Antti Hemiä</p>
            <p>#99</p>
          </div>
        </div>
        <div className="m-auto flex w-[80vw] flex-col items-center justify-center py-6 lg:w-[70vw] xl:w-[60vw] 2xl:w-[50vw]">
          <h4 className="text-xl tracking-[0.1rem]">Hyökkäys</h4>
          <div className="m-auto flex w-[80vw] flex-row items-center justify-between px-4 py-4 lg:w-[70vw] xl:w-[60vw] 2xl:w-[50vw]">
            <p>Joel Pesonen</p>
            <p>#9</p>
          </div>
          <div className="m-auto flex w-[80vw] flex-row items-center justify-between px-4 py-4 lg:w-[70vw] xl:w-[60vw] 2xl:w-[50vw]">
            <p>Adam Zaghoudi</p>
            <p>#10</p>
          </div>
          <div className="m-auto flex w-[80vw] flex-row items-center justify-between px-4 py-4 lg:w-[70vw] xl:w-[60vw] 2xl:w-[50vw]">
            <p>Leevi Rolig</p>
            <p>#19</p>
          </div>
          <div className="m-auto flex w-[80vw] flex-row items-center justify-between px-4 py-4 lg:w-[70vw] xl:w-[60vw] 2xl:w-[50vw]">
            <p>Lauri Juutilainen</p>
            <p>#22</p>
          </div>
          <div className="m-auto flex w-[80vw] flex-row items-center justify-between px-4 py-4 lg:w-[70vw] xl:w-[60vw] 2xl:w-[50vw]">
            <p>Endrit Feka</p>
            <p>#29</p>
          </div>
          <div className="m-auto flex w-[80vw] flex-row items-center justify-between px-4 py-4 lg:w-[70vw] xl:w-[60vw] 2xl:w-[50vw]">
            <p>Abaas Mukhtar Abdi Ismail</p>
            <p>#6</p>
          </div>
        </div>
        <div className="m-auto flex w-[80vw] flex-col items-center justify-center py-6 lg:w-[70vw] xl:w-[60vw] 2xl:w-[50vw]">
          <h4 className="text-xl tracking-[0.1rem]">Maalivahti</h4>
          <div className="m-auto flex w-[80vw] flex-row items-center justify-between px-4 py-4 lg:w-[70vw] xl:w-[60vw] 2xl:w-[50vw]">
            <p>Nour Elsherif</p>
            <p>#32</p>
          </div>
        </div>
      </section>
      <div className="flex w-full flex-row items-center justify-center space-x-6 bg-[#780116] p-4 shadow-xl ">
        <a
          className=" transition duration-500 hover:scale-125"
          href="https://www.instagram.com/totetapio/"
          target="_blank"
          rel="noreferrer"
        >
          <BsInstagram />
        </a>
        <a
          className=" transition duration-500 hover:scale-125"
          href="https://www.tiktok.com/@totetapio"
          target="_blank"
          rel="noreferrer"
        >
          <BsTiktok />
        </a>
        <a
          href="https://www.toukolanteras.fi/"
          target="_blank"
          rel="noreferrer"
          className="transition duration-500 hover:scale-125"
        >
          <img
            className="h-[20px] w-max "
            src="https://www.toukolanteras.fi/wp-content/themes/wp-toukolan/images/logo.png"
            alt="footer logo"
          ></img>
        </a>
      </div>
    </div>
  );
}

export default App;
