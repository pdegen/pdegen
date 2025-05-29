<script setup lang="ts">
import { onMounted } from 'vue'
import { navbarHandler } from '@/assets/js/scripts.ts'
import Navigation from '@/components/TheNavigation.vue'
//import NavigationDropdown from '@/components/TheNavigationDropdown.vue'

import img_swissrn from '@/assets/img/swissrn-logo.png'
import img_landuse from '@/assets/img/Land-use-of-different-diets-Poore-Nemecek.png'

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
            <a class="nav-link py-3 px-0 px-lg-3 rounded" href="#climate">Climate</a>
          </li>
          <li class="nav-item mx-0 mx-lg-1">
            <a class="nav-link py-3 px-0 px-lg-3 rounded" href="#amnesty">Amnesty International</a>
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
      <h1 class="masthead-heading text-uppercase mb-0">Advocacy</h1>
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

  <!-- OS Section -->
  <section class="page-section bg-light" id="open">
    <h2 class="page-section-heading text-center text-uppercase text-secondary mb-0">
      Open Science
    </h2>
    <!-- Icon Divider-->
    <div class="divider-custom">
      <div class="divider-custom-line"></div>
      <div class="divider-custom-icon"><i class="fa-solid fa-microscope"></i></div>
      <div class="divider-custom-line"></div>
    </div>

    <div class="container text-center">
      <div class="row justify-content-center">
        <div class="col-7 col-md-4 col-lg-3 text-center">
          <img class="img-fluid" :src="img_swissrn" alt="Swiss RN Logo" />
        </div>
      </div>

      <div class="alert alert-primary col-12 col-md-6 mx-auto mt-4 text-start" role="alert">
        Are you an early-career researcher based in Switzerland and interested in open science and
        reproducibility? Do you want to gain organizing experience and network with a group of
        likeminded individuals? Consider joinging the
        <a
          href="https://www.swissrn.org/contents/academy/"
          target="_blank"
          rel="noopener noreferrer"
          >Swiss Reproducibility Network Academy</a
        >!
      </div>

      <h3 class="bs-primary">Resources</h3>

      <div>
        <a href="https://book.the-turing-way.org/" target="_blank" rel="noopener noreferrer"
          >The Turing Way</a
        >
      </div>
      <div>
        <a
          href="https://www.crs.uzh.ch/en/resources/CRS-Primers.html"
          target="_blank"
          rel="noopener noreferrer"
          >CRS Primers</a
        >
      </div>
    </div>
  </section>

  <!-- Climate Section -->
  <section class="page-section bg-light" id="climate">
    <h2 class="page-section-heading text-center text-uppercase text-secondary mb-0">Climate</h2>
    <!-- Icon Divider-->
    <div class="divider-custom">
      <div class="divider-custom-line"></div>
      <div class="divider-custom-icon"><i class="fa-solid fa-leaf"></i></div>
      <div class="divider-custom-line"></div>
    </div>

    <div class="container text-center">
      <div class="alert alert-secondary col-12 col-md-6 mx-auto mt-4" role="alert">
        <p class="text-center">
          <strong>
            <a href="https://www.science.org/doi/10.1126/sciadv.adh2458"
              >Earth beyond six of nine planetary boundaries</a
            ></strong
          >
        </p>
        <p class="text-start fst-italic">
          Our model results demonstrate that one of the most powerful means that humanity has at its
          disposal to combat climate change is respecting the land system change boundary. Bringing
          total global forest cover back to the levels of the late 20th century would provide a
          substantial cumulative sink for atmospheric CO<sub>2</sub> in 2100.
        </p>
      </div>

      <div class="row justify-content-center">
        <div class="col-12 col-md-7 text-center">
          <figure class="figure">
            <img
              class="figure-image img-fluid"
              src="https://www.stockholmresilience.org/images/200.3d04209a18a2642b2fc15eb6/1694596418196/Planetary%20Boundaries%202023.png"
              alt="The 2023 update to the Planetary boundaries"
            />
            <figcaption class="figure-caption">
              <strong
                ><a href="https://www.stockholmresilience.org/research/planetary-boundaries.html"
                  >The 2023 update to the Planetary boundaries.</a
                ></strong
              >
              Credit: Azote for Stockholm Resilience Centre, based on analysis in Richardson et al
              2023.
            </figcaption>
          </figure>
        </div>
      </div>

      <div class="alert alert-secondary col-12 col-md-6 mx-auto mt-4" role="alert">
        <p class="text-center fw-bold">
          <a href="https://www.penguinrandomhouse.com/books/645538/regenesis-by-george-monbiot/"
            >George Monbiot — Regenesis</a
          >
        </p>
        <p class="text-start fst-italic">
          By 2050, the human population of the planet will rise to between 9 and 10 billion. In
          principle, the world already produces enough food for between 10 and 14 billion. The
          problem is that an ever smaller proportion of this embarrassment of riches is feeding
          people directly. Why? Because while the human population growth rate has fallen to 1.05
          per cent a year, the growth rate of the livestock population has risen to 2.4 per cent a
          year. By 2050, to put it in brutal terms, the extra humans on the planet will weigh a
          little over 100 million tonnes, whereas, unless the current trend is disrupted, the extra
          farm animals will weigh 400 million tonnes. The biggest population crisis is not the
          growth in human numbers, but the growth in livestock numbers.
        </p>
      </div>

      <div class="alert alert-primary col-12 col-md-6 mx-auto mt-4" role="alert">
        Peas: 2.16 m<sup>2</sup> / 1000 kcal<br />
        Tofu: 1.30 m<sup>2</sup> / 1000 kcal<br />
        Olive oil: 2.98 m<sup>2</sup> / 1000 kcal<br />
        Nuts: 2.11 m<sup>2</sup> / 1000 kcal<br />
        Beef: 119.49 m<sup>2</sup> / 1000 kcal<br />
        Potatoes: 1.2 m<sup>2</sup> / 1000 kcal<br />

        <br />
        someone who is good at the economy please help me budget this. our planet is dying
      </div>

      <div class="alert alert-secondary col-12 col-md-6 mx-auto mt-4" role="alert">
        <p class="text-center fw-bold">
          <a href="https://www.ipcc.ch/srccl/chapter/chapter-5/">IPCC Executive Summary</a>
        </p>
        <p class="text-start fst-italic">
          In summary, there is significant potential mitigation (high confidence) arising from the
          adoption of diets in line with dietary recommendations made on the basis of health. [...]
          These are typically capped at the number of calories and higher in plant-based foods, such
          as vegetables, fruits, whole grains, legumes, nuts and seeds, and lower in animal-sourced
          foods, fats and sugar. Such diets have the potential to be both more sustainable and
          healthier than alternative diets [...]
        </p>
      </div>

      <div class="col-12 col-md-8 text-center mx-auto">
        <figure class="figure">
          <img
            class="figure-image img-fluid"
            :src="img_landuse"
            alt="Global land use for agriculture across different diets"
          />
          <figcaption class="figure-caption">></figcaption>
        </figure>
      </div>

      <div class="alert alert-secondary col-12 col-md-6 mx-auto mt-4" role="alert">
        <p class="text-center fw-bold">
          <a href="https://ourworldindata.org/land-use-diets">Our World in Data</a>
        </p>
        <p class="text-start fst-italic">
          If the world adopted a plant-based diet, we would reduce global agricultural land use from
          4 to 1 billion hectares. [...] Less than half – only 48% – of the world's cereals are
          eaten by humans. 41% is used for animal feed and 11% for biofuels. [...] Not all crops
          provide low-quality protein – legumes such as peas, beans, lentils, and products such as
          tofu have a good amino acid profile; when mixed with cereals in a person's diet, it's
          possible to get the full range of essential elements.
        </p>
      </div>
    </div>
  </section>

  <!-- Amnesty Section -->
  <section class="page-section bg-light" id="amnesty">
    <h2 class="page-section-heading text-center text-uppercase text-secondary mb-0">
      Amnesty International
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

      <div class="responsive-embed">
        <iframe
          src="https://player.vimeo.com/video/1085941675?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
          frameborder="0"
          allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
          allowfullscreen
          title="Generalversammlung 2025"
        ></iframe>
      </div>

      <br />

      <div class="alert alert-primary col-12 col-md-6 mx-auto mt-4" role="alert">
        <p class="fw-bold">Free to dance... free to protest!</p>
        Sign the
        <a
          href="https://action.amnesty.ch/de/amnesty-international-petition-demonstrationsfreiheit-garantieren/?utm_source=amnesty.ch&utm_medium=referral&utm_campaign=demonstrationsfreiheit&utm_term=&utm_content=petition"
          target="_blank"
          rel="noopener noreferrer"
          >petition</a
        >
        (de / fr) to support Amnesty's ongoing campaign to #ProtectTheProtest
      </div>
    </div>
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
