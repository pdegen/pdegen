<script setup lang="ts">
import { onMounted } from 'vue'
import { navbarHandler } from '@/assets/js/scripts.ts'
import Navigation from '@/components/TheNavigation.vue'

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
            <a class="nav-link py-3 px-0 px-lg-3 rounded" href="#open">Open Science</a>
          </li>
          <li class="nav-item mx-0 mx-lg-1">
            <a class="nav-link py-3 px-0 px-lg-3 rounded" href="#amnesty">Amnesty</a>
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
      <h1 class="masthead-heading text-uppercase mb-0">Advocacy and Engagement</h1>
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

  <!-- Amnesty Section -->
  <section class="page-section cv bg-light" id="amnesty">
    <h2 class="page-section-heading text-center text-uppercase text-secondary mb-0">
      Open Science
    </h2>
    <!-- Icon Divider-->
    <div class="divider-custom">
      <div class="divider-custom-line"></div>
      <div class="divider-custom-icon"><i class="fa-solid fa-microscope"></i></div>
      <div class="divider-custom-line"></div>
    </div>

    <div class="container text-center">Coming soon...</div>
  </section>

  <!-- Amnesty Section -->
  <section class="page-section cv bg-light" id="amnesty">
    <h2 class="page-section-heading text-center text-uppercase text-secondary mb-0">
      Amnesty Inernational
    </h2>

    <!-- Icon Divider-->
    <div class="divider-custom">
      <div class="divider-custom-line"></div>
      <div class="divider-custom-icon"><i class="fa-solid fa-bullhorn"></i></div>
      <div class="divider-custom-line"></div>
    </div>

    <div class="container text-center">
      Greetings from the General Assembly 2025 of Amnesty International's Swiss Section :D
      <br />
      <br />

      <div style="padding: 25% 0 0 0; position: relative">
        <iframe
          src="https://player.vimeo.com/video/1085941675?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
          frameborder="0"
          allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
          style="position: absolute; top: 0; left: 0; width: 100%; height: 100%"
          title="Generalversammlung 2025"
        ></iframe>
      </div>
      <br />
      Free to dance... free to protest!
      <br />
      Sign the
      <a
        href="https://action.amnesty.ch/de/amnesty-international-petition-demonstrationsfreiheit-garantieren/?utm_source=amnesty.ch&utm_medium=referral&utm_campaign=demonstrationsfreiheit&utm_term=&utm_content=petition"
        target="_blank"
        rel="noopener noreferrer"
        >petition</a
      >
      (de / fr) to support Amnesty's ongoing campaign to #ProtectTheProtest
    </div>
  </section>

  <!-- Navigation Section-->
  <section class="page-section bg-primary text-white mb-0" id="navigation" style="padding: 2rem">
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
