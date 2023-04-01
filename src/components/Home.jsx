import React from 'react'
import { Drag } from '../components/Drag';
import { Buscador } from '../components/Buscador';
import { Prueba } from '../components/Prueba';
import {NavLink} from 'react-router-dom';





export const Home = () => {

  return (
    <div class="layout">
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
                    <h3 class="title">Time to clear the air!</h3>
                    <p class="description">Search for the species of a bird captured in an image</p>
                    <Drag/>
        
                </article>



            </section>

            <aside class="lateral">
                <Buscador />
            </aside>





            <footer class="footer">
                &copy; BirdSniffer - <a href="https://josemarigquijada.live">josemarigquijada.live</a>
            </footer>

        </div >
  )
}
