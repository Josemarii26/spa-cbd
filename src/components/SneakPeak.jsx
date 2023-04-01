import React from 'react'
import { NavLink } from 'react-router-dom';
import { Carrousel } from '../components/Carrousel';





export const SneakPeak = () => {

  
  return (
    <div class="layout2">
      <header class="header">
        <div class="logo">
          <div class="play"></div>
        </div>

        <h1>Bird Sniffer</h1>
      </header>

      <nav class="nav">
        <ul>
          <NavLink to='/home'
            className={({ isActive }) => isActive ? "activado" : ""}>
            Home</NavLink>
          <NavLink to='/sneak-peak'
            className={({ isActive }) => isActive ? "activado" : ""}>
            Sneak Peak</NavLink>
          <NavLink to='/about-creation'
            className={({ isActive }) => isActive ? "activado" : ""}>
            About creation</NavLink>
          <NavLink to='/who-is-behind'
            className={({ isActive }) => isActive ? "activado" : ""}>
            Who is behind?</NavLink>
        </ul>
      </nav>
      <section id="content" class="content">


        <article class="peli-item">
          <h3 class="title">Sneak Peak!</h3>
          <p class="description">We want to simplify things and in this case the identification of bird species, for this we have created, through artificial intelligence a bird classifier. The operation is quite simple, you drag an image and wait for the result of artificial intelligence.<br></br> <strong>Keep in mind that it is not perfect and can fail, its accuracy is directly proportional to the quality of the photo it receives.</strong> </p>
          <img src={`${process.env.PUBLIC_URL}/pajaro.png`} alt="Descripción de la imagen" width={1200} height={600} />
        </article>

        


        








      </section>







      <footer class="footer">
        &copy; BirdSniffer - <a href="https://josemarigquijada.live">josemarigquijada.live</a>
      </footer>

    </div >
  )
}
