<script setup lang="ts">
import { onMounted } from 'vue'
import { navbarHandler } from '@/assets/js/scripts.ts'
import QuoteCycler from '@/components/QuoteCycler.vue'
import BookRecs from '@/components/BookRecs.vue'
import MovieGallery from '@/components/MovieGallery.vue'
//import ArtGallery from '@/components/ArtGallery.vue'
import Navigation from '@/components/TheNavigation.vue'
//import NavigationDropdown from '@/components/TheNavigationDropdown.vue'

onMounted(() => {
  navbarHandler()

  const script = document.createElement('script')
  script.src = 'https://player.vimeo.com/api/player.js'
  script.type = 'text/javascript'
  script.async = true
  document.head.appendChild(script)

  script.onload = () => {
    console.log('External script loaded successfully!')
    // You can use the functions/objects defined in the external script here.
  }

  script.onerror = (error) => {
    console.error('Error loading external script:', error)
  }
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
            <a class="nav-link py-3 px-0 px-lg-3 rounded" href="#quotes">Quotes</a>
          </li>
          <li class="nav-item mx-0 mx-lg-1">
            <a class="nav-link py-3 px-0 px-lg-3 rounded" href="#books">Reading List</a>
          </li>
          <li class="nav-item mx-0 mx-lg-1">
            <a class="nav-link py-3 px-0 px-lg-3 rounded" href="#gallery">Movie Game</a>
          </li>
          <li class="nav-item mx-0 mx-lg-1">
            <a class="nav-link py-3 px-0 px-lg-3 rounded" href="#more">More</a>
          </li>
          <!-- <li class="nav-item mx-0 mx-lg-1">
            <NavigationDropdown />
          </li> -->
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
      <h1 class="masthead-heading text-uppercase mb-0">The Lounge</h1>
      <!-- Icon Divider-->
      <div class="divider-custom divider-light">
        <div class="divider-custom-line"></div>
        <div class="divider-custom-icon"><i class="fas fa-star"></i></div>
        <div class="divider-custom-line"></div>
      </div>
      <!-- Masthead Subheading-->
      <p class="masthead-subheading font-weight-light mb-0">Work in progress...</p>
      <!--<p class="masthead-subheading"><br><br>I use this space to play around with web dev stuff...</p>-->
    </div>
  </header>

  <!-- Quotes Section -->
  <section class="page-section cv bg-light" id="quotes">
    <h2 class="page-section-heading text-center text-uppercase text-secondary mb-0">
      Random Quote
    </h2>
    <!-- Icon Divider-->
    <div class="divider-custom">
      <div class="divider-custom-line"></div>
      <div class="divider-custom-icon"><i class="fa-solid fa-book"></i></div>
      <div class="divider-custom-line"></div>
    </div>

    <QuoteCycler />
  </section>

  <!-- Books Section -->
  <section class="page-section cv bg-light" id="books">
    <h2 class="page-section-heading text-center text-uppercase text-secondary mb-0">
      Reading List
    </h2>
    <!-- Icon Divider-->
    <div class="divider-custom">
      <div class="divider-custom-line"></div>
      <div class="divider-custom-icon"><i class="fa-solid fa-book"></i></div>
      <div class="divider-custom-line"></div>
    </div>

    <BookRecs />
  </section>

  <!-- Movie Section -->
  <section class="page-section cv bg-light" id="gallery">
    <h2 class="page-section-heading text-center text-uppercase text-secondary mb-0">
      Movie Guessing Game
    </h2>

    <!-- Icon Divider-->
    <div class="divider-custom">
      <div class="divider-custom-line"></div>
      <div class="divider-custom-icon"><i class="fa-solid fa-film"></i></div>
      <div class="divider-custom-line"></div>
    </div>

    <MovieGallery />
  </section>

  <!-- Navigation Section-->
  <section class="page-section bg-primary text-white mb-0" id="more" style="padding: 2rem">
    <Navigation />
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
