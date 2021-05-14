import React from 'react'
import Logo from '../assets/images/logo.svg'
import Nav from './Nav'
import HeaderImage from '../assets/images/mobile/image-hero.jpg'
import desktopHeaderImage from '../assets/images/desktop/image-hero.jpg'
const Header = ({ viewPortControl }) => {

  function changeImageBasedOnWindowViewport() {
    const image = !viewPortControl ? HeaderImage : desktopHeaderImage
    return `url(${image})`
  }
  console.log(changeImageBasedOnWindowViewport())
  return (
    <header
      className="header mb-24 font-primary w-full  h-screen relative bg-no-repeat  bg-cover lg:bg-top "
      style={{ backgroundImage: changeImageBasedOnWindowViewport() }}
    >
      <div className="flex  justify-between mx-6 h-28 items-center">
        <div>
          <a href="/">
            <img
              src={Logo}
              className="w-40 h-24 object-contain"
              alt="Logo of the website"
            />
          </a>
        </div>

        <Nav />
      </div>

      <div
        className="border-white  border-2 absolute w-11/12 h-56 flex items-center  py-4
       mx-6 top-1/3 mt-16"
      >
        <h1 className="leading-10  text-xlg text-white font-light mx-6 uppercase">
          Immersive experiences that deliver
        </h1>
      </div>
    </header>
  )
}

export default Header
