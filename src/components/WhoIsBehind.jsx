import React from 'react'
import { NavLink } from 'react-router-dom';

export const WhoIsBehind = () => {
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
          <h3 class="title">Who is behind?</h3>
          <p class="description">Behind this project we are two students of the <strong>Software Engineering degree of the University of Seville</strong>.<br></br> We are José María García Quijada and Eloy Moreno Domínguez and we are delighted that you use our little application. </p>
          <div style={{ display: 'flex', justifyContent: 'center'}}>
            <div style={{ marginRight: '10px' }}>

              <img src={`${process.env.PUBLIC_URL}/f1.png`} alt="Descripción de la imagen" width={500} height={600}/>

              <h3>José Mª García Quijada</h3>
            </div>
            <div>
              <img src={`${process.env.PUBLIC_URL}/f2.png`} alt="Descripción de la imagen" width={500} height={600}/>

              <h3>Eloy Moreno Domínguez</h3>
            </div>
          </div>
        </article>



      </section>







      <footer class="footer">
        &copy; BirdSniffer - <a href="https://josemarigquijada.live">josemarigquijada.live</a>
      </footer>

    </div >
  )
}
