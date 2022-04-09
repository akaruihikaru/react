import logo from './logo.svg';
import './App.css';

// Routing
import { Routes, Route, Link } from "react-router-dom";

// JSX Javascript XML

function App() {

  return (
    <>
      {/* <ol>
        <li> <a href='/' >index</a> </li>
        <li> <a href='/home' >home</a> </li>
        <li> <a href='/about' >about</a> </li>
        <li> <a href='/dashboard' >dashboard</a> </li>
      </ol> */}

      <Routes>
        <Route path='/' element={<Root />} ></Route>
        <Route path='/home' element={<Home />} ></Route>
        <Route path='/about' element={<About />} ></Route>
        <Route path='/dashboard' element={<Dashboard />} ></Route>
      </Routes>

    </>
  )
}

export default App;

function Root() {
  // object
  const user = {
    firstname: 'Geraldi',
    lastname: 'Theo',
    umur: 20
  }

  // array
  const buah = ['tomat', 'apel', 'jambu'];

  // Logic
  let showUmur;
  if (user.umur < 5) {
    showUmur = 'Balita';
    // hijau
  } else if (user.umur < 12) {
    showUmur = 'Anak anak';
    // biru
  } else if (user.umur < 17) {
    showUmur = 'Remaja';
    // orange
  } else if (user.umur >= 17) {
    showUmur = 'Dewasa';
    // merah
  }

  return (
    <>
      {/* XML */}
      <p className="" >Nama saya: {user.firstname} {user.lastname}   </p>
      <p> Buah saya: {buah[2]} </p>

      {/* Kondisional */}
      {
        user.umur
          ? <p> Umur saya {user.umur} </p>
          : <p> Saya tidak punya umur </p>
      }

      {/* Kondisional 2 */}
      {/* <p  > Status Umur <span className='bg-red-500 text-white rounded-full px-3 ' > {showUmur}  </span> </p> */}
      {
        showUmur === 'Balita' &&
        <p  > <span className='bg-lime-500 text-white rounded-full px-3 ' >Balita</span>  </p>
      }
      {
        showUmur === 'Anak anak' &&
        <p  > <span className='bg-cyan-500 text-white rounded-full px-3' >Anak</span>  </p>
      }
      {
        showUmur === 'Remaja' &&
        <p > <span className='bg-orange-500 text-white rounded-full px-3' >Remaja</span>  </p>
      }
      {
        showUmur === 'Dewasa' &&
        <p  > <span className='bg-red-500 text-white rounded-full px-10' > Dewasa </span>  </p>
      }

      {/* Responsive */}
      {/* <div className='w-10 h-10 sm:w-20 sm:h-20 lg:w-60 lg:h-60 bg-slate-500' ></div> */}


      {/* Responsive Layout (2): Flex Box .. Grid */}
      {/* Flexbox */}
      <div className='flex flex-row gap-3 justify-center flex-wrap ' >
        <div className='w-32 h-32 bg-slate-500 ' ></div>
        <div className='w-32 h-32 bg-slate-500 ' ></div>
        <div className='w-32 h-32 bg-slate-500 ' ></div>
        <div className='w-32 h-32 bg-slate-500 ' ></div>
        <div className='w-32 h-32 bg-slate-500 ' ></div>
      </div>

      {/* Grid */}
      <div className='grid grid-cols-4 gap-y-1 ' >
        <div className='w-32 h-32 bg-slate-500 ' ></div>
        <div className='w-32 h-32 bg-slate-500 ' ></div>
        <div className='w-32 h-32 bg-slate-500 ' ></div>
        <div className='w-32 h-32 bg-slate-500 ' ></div>
        <div className='w-32 h-32 bg-slate-500 ' ></div>
        <div className='w-32 h-32 bg-slate-500 ' ></div>
      </div>
    </>
  )
}

function Home() {
  return (
    <>
      Home
      <p>Some a long paragraph</p>
    </>
  )
}

function About() {
  return (
    <>
      About
      <p>And some a very long paragraph</p>
    </>
  )
}



function Dashboard() {
  return (
    <>
      {/* React Tailwind */}

      <head>
        <title>React Tailwind</title>
      </head>

      <body>
        <nav className='bg-white py-3 px-3 ' >
          <div className='flex flex-row' >
            <div className='basis-1/12  ' >
              <div className='bg-white w-[58px] h-[58px] rounded-xl shadow-lg p-2 ' >
                <img src='/logo192.png' alt='logo' />
              </div>
            </div>
            <div className='  basis-10/12 hidden md:flex md:items-center ' >
              <button className='bg-white px-6 py-1 text-[#B1B1B1] rounded-xl text-sm shadow-lg ' >Kembali</button>
            </div>
            <div className='basis-1/12  hidden md:flex md:items-center ' >
              <button className='bg-[#E12960] px-6 py-1 text-white rounded-xl text-sm shadow-lg ' >Log Out</button>
            </div>
          </div>
        </nav>

        <section className='bg-[#E5E5E5]' >
          <div className='py-5  flex flex-row justify-center ' >
            <div className='basis-8/12 ' >
              <p className='font-lexend ' >Detail Pesanan</p>
            </div>
          </div>

          <div className='flex flex-col md:flex-row ' >
            <div className='basis-2/12 border border-red-500 flex justify-center ' >
              <div className='bg-[#E12960] w-[150px] h-[150px] rounded-lg ' >
                @
              </div>
            </div>
            <div className='basis-8/12 border border-red-500 ' >
              <div className='bg-white shadow-lg  p-5   rounded-lg ' >
                <div className='flex flex-row' >
                  <div className='basis-4/12 border border-red-500 ' >A</div>
                  <div className='basis-8/12 border border-red-500 ' >A</div>
                </div>
              </div>
            </div>
            <div className='basis-2/12 border border-red-500 flex justify-center ' >
              <div className='bg-[#E12960] w-[150px] h-[150px] rounded-lg ' >
                @
              </div>
            </div>
          </div>
        </section>
      </body>


    </>
  )
}