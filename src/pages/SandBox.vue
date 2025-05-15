<script setup lang="ts">
import { onMounted } from 'vue'
import ImageGallery from '@/components/ImageGallery.vue'
import { animateBalls } from '@/assets/js/anims.ts'
import { navbarHandler } from '@/assets/js/scripts.ts'

onMounted(() => {
  animateBalls({ amplitude: 40, speed: 1.5 })
  navbarHandler()
})
</script>

<template>
  <!-- Navigation-->
  <nav class="navbar navbar-expand-lg bg-secondary text-uppercase fixed-top" id="mainNav">
    <div class="container">
      <a class="navbar-brand" href="/pdegen/">Peter Degen</a>
      <button
        class="navbar-toggler text-uppercase font-weight-bold bg-primary text-white rounded"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarResponsive"
        aria-controls="navbarResponsive"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        Menu
        <i class="fas fa-bars"></i>
      </button>
      <div class="collapse navbar-collapse" id="navbarResponsive">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item mx-0 mx-lg-1">
            <a class="nav-link py-3 px-0 px-lg-3 rounded" href="#animations">Animations</a>
          </li>
          <li class="nav-item mx-0 mx-lg-1">
            <a class="nav-link py-3 px-0 px-lg-3 rounded" href="#gallery">Gallery</a>
          </li>
          <li class="nav-item mx-0 mx-lg-1">
            <a class="nav-link py-3 px-0 px-lg-3 rounded" href="#about">About</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <!-- Masthead-->
  <header class="masthead bg-primary text-white text-center">
    <div class="container d-flex align-items-center flex-column">
      <!-- Masthead Avatar Image-->
      <!-- <img class="masthead-avatar mb-5" src="assets/img/avataaars.svg" alt="..." /> -->
      <!-- Masthead Heading-->
      <h1 class="masthead-heading text-uppercase mb-0">Sandbox</h1>
      <!-- Icon Divider-->
      <div class="divider-custom divider-light">
        <div class="divider-custom-line"></div>
        <div class="divider-custom-icon"><i class="fas fa-star"></i></div>
        <div class="divider-custom-line"></div>
      </div>
      <!-- Masthead Subheading-->
      <p class="masthead-subheading font-weight-light mb-0">Just testing...</p>
      <!--<p class="masthead-subheading"><br><br>I use this space to play around with web dev stuff...</p>-->
    </div>
  </header>

  <!-- Animations Section -->
  <section class="page-section cv bg-light" id="animations">
    <h2 class="page-section-heading text-center text-uppercase text-secondary mb-0">Animations</h2>

    <!-- Icon Divider-->
    <div class="divider-custom">
      <div class="divider-custom-line"></div>
      <div class="divider-custom-icon"><i class="fa-solid fa-star"></i></div>
      <div class="divider-custom-line"></div>
    </div>

    <div class="container d-flex align-items-center flex-column">
      <div class="container d-flex align-items-center flex-column">
        <h3>GSAP</h3>
        <div class="ball-row" style="padding: 3rem">
          <div class="ball bg-primary"></div>
          <div class="ball bg-secondary"></div>
          <div class="ball bg-primary"></div>
          <div class="ball bg-secondary"></div>
          <div class="ball bg-primary"></div>
          <div class="ball bg-secondary"></div>
          <div class="ball bg-primary"></div>
          <div class="ball bg-secondary"></div>
          <div class="ball bg-primary"></div>
          <div class="ball bg-secondary"></div>
          <div class="ball bg-primary"></div>
          <div class="ball bg-secondary"></div>
          <div class="ball bg-primary"></div>
          <div class="ball bg-secondary"></div>
          <div class="ball bg-primary"></div>
          <div class="ball bg-secondary"></div>
          <div class="ball bg-primary"></div>
        </div>
      </div>

      <hr />
      <div class="container d-flex align-items-center flex-column">
        <h3>Vue.js</h3>

        Coming soon...
      </div>
    </div>
  </section>

  <!-- Gallery Section -->
  <section class="page-section cv bg-light" id="gallery">
    <h2 class="page-section-heading text-center text-uppercase text-secondary mb-0">Cool Movies</h2>

    <!-- Icon Divider-->
    <div class="divider-custom">
      <div class="divider-custom-line"></div>
      <div class="divider-custom-icon"><i class="fa-solid fa-film"></i></div>
      <div class="divider-custom-line"></div>
    </div>

    <ImageGallery />
  </section>

  <!-- About Section-->
  <section class="page-section bg-primary text-white mb-0" id="about" style="padding-bottom: 4rem">
    <div class="container">
      <!-- About Section Heading-->
      <h2 class="page-section-heading text-center text-uppercase text-white">About</h2>
      <!-- Icon Divider-->
      <div class="divider-custom divider-light">
        <div class="divider-custom-line"></div>
        <div class="divider-custom-icon"><i class="fas fa-star"></i></div>
        <div class="divider-custom-line"></div>
      </div>
      <!-- About Section Content-->
      <div class="row">
        <div class="col-lg-12 ms-auto">
          <p class="lead text-center">You've reached the end!</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Footer-->
  <footer class="footer text-center">
    <div class="container">
      <div class="row">
        <!-- Footer Social Icons-->
        <div>
          <h4 class="text-uppercase mb-4">Around the Web</h4>
          <a class="btn btn-outline-light btn-social mx-1" href="https://github.com/pdegen"
            ><i class="fab fa-fw fa-github"></i
          ></a>
          <a
            class="btn btn-outline-light btn-social mx-1"
            href="https://orcid.org/0009-0004-0706-9200"
            ><i class="fab fa-fw fa-orcid"></i
          ></a>
          <a
            class="btn btn-outline-light btn-social mx-1"
            href="https://www.linkedin.com/in/peter-d-56928621a/"
            ><i class="fab fa-fw fa-linkedin-in"></i
          ></a>
        </div>
      </div>
    </div>
  </footer>
  <!-- Copyright Section-->
  <div class="copyright py-4 text-center text-white">
    <div class="container"><small>Copyright &copy; Peter Degen 2025</small></div>
  </div>
</template>
