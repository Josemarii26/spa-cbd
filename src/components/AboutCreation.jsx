import React from 'react'
import { NavLink } from 'react-router-dom';


export const AboutCreation = () => {
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
          <h3 class="title">About Creation!</h3>
          <p class="description">We have been developing this classifier for longer than expected as we have been investigating how best to get the most out of the classifier, i.e. where we would get the highest hit percentage. </p>

        </article>
        <article class="peli-item">
          <h3 class="title">Convolutional?</h3>
          <p class="description">A very interesting option that we considered was to implement a convolutional neural network with the objective that, based on brute force and continuous training, it would be able to classify any image of a bird without any problem. However, the training of this neural network required a great computational power that was out of our reach, since a moderate hit rate required a number of hours of training (which consumed too many resources) that we could not afford. </p>

        </article>
        <article class="peli-item">
          <h3 class="title">Transformer?</h3>
          <p class="description">We were investigating how the different neural networks worked and the training they underwent to obtain results. Looking for efficient structures we found the Transformer structure, a new structure with great potential due to its flexibility and decentralized logic which allows its use in many fields, not only in image classification (it can also classify audio or any kind of input) but also in fields such as translation or interactive reading.</p>

        </article>
        
        



      </section>

      





      <footer class="footer">
        &copy; BirdSniffer - <a href="https://josemarigquijada.live">josemarigquijada.live</a>
      </footer>

    </div >
  )
}
