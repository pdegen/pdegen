<script setup lang="ts">
import { onMounted } from 'vue'
import { navbarHandler, progressbarHandler } from '@/assets/js/scripts.ts'
import Navigation from '@/components/TheNavigation.vue'
import NavigationDropdown from '@/components/TheNavigationDropdown.vue'
import PortFolio from '@/components/PortFolio.vue'

onMounted(() => {
  requestAnimationFrame(() => {
    navbarHandler()
    progressbarHandler('#skills')
  })
})

const isDev = import.meta.env.MODE === 'development'
</script>

<template>
  <!-- Navigation-->
  <nav class="navbar navbar-expand-lg bg-secondary text-uppercase fixed-top" id="mainNav">
    <div class="container">
      <a class="navbar-brand" href="#page-top">Peter Degen</a>
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
            <a class="nav-link py-3 px-0 px-lg-3 rounded" href="#cv">CV</a>
          </li>
          <li class="nav-item mx-0 mx-lg-1">
            <a class="nav-link py-3 px-0 px-lg-3 rounded" href="#portfolio">Portfolio</a>
          </li>
          <li class="nav-item mx-0 mx-lg-1">
            <a class="nav-link py-3 px-0 px-lg-3 rounded" href="#publications">Publications</a>
          </li>
          <li class="nav-item mx-0 mx-lg-1">
            <a class="nav-link py-3 px-0 px-lg-3 rounded" href="#skills">Skills</a>
          </li>
          <li class="nav-item mx-0 mx-lg-1">
            <a class="nav-link py-3 px-0 px-lg-3 rounded" href="#about">About</a>
          </li>
          <li class="nav-item mx-0 mx-lg-1" href="#more">
            <NavigationDropdown />
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <!-- Masthead-->
  <header class="masthead bg-primary text-white text-center">
    <div class="container d-flex align-items-center flex-column">
      <!-- Masthead Avatar Image-->
      <img class="masthead-avatar mb-5" src="@/assets/img/avataaars.svg" alt="..." />
      <!-- Masthead Heading-->
      <h1 class="masthead-heading text-uppercase mb-0">Peter Degen</h1>
      <!-- Icon Divider-->
      <div class="divider-custom divider-light">
        <div class="divider-custom-line"></div>
        <div class="divider-custom-icon"><i class="fas fa-star"></i></div>
        <div class="divider-custom-line"></div>
      </div>
      <!-- Masthead Subheading-->
      <p class="masthead-subheading font-weight-light mb-0">
        PhD Computational Biology - Open Science Advocate - Coding Geek
      </p>
    </div>
  </header>

  <!-- CV Section -->
  <section class="page-section cv bg-light" id="cv">
    <h2 class="page-section-heading text-center text-uppercase text-secondary mb-0">
      Curriculum Vitae
    </h2>
    <!-- Icon Divider-->
    <div class="divider-custom">
      <div class="divider-custom-line"></div>
      <div class="divider-custom-icon"><i class="fa-solid fa-person-rays"></i></div>
      <div class="divider-custom-line"></div>
    </div>

    <div class="container d-flex align-items-center flex-column">
      <div class="timeline">
        <div class="timeline-item">
          <div class="timeline-icon bg-primary text-white">
            <i class="fas fa-user-graduate"></i>
          </div>
          <div class="timeline-content">
            <h5>Postdoctoral Researcher</h5>
            <p class="text-muted mb-0">Center for Reproducible Science, University of Zurich</p>
            <small class="text-muted">June 2025 – Present</small>
          </div>
        </div>
        <div class="timeline-item">
          <div class="timeline-icon bg-primary text-white">
            <i class="fas fa-user-graduate"></i>
          </div>
          <div class="timeline-content">
            <h5>Postdoctoral Researcher</h5>
            <p class="text-muted mb-0">
              Department of Radiation Oncology, University Hospital Bern
            </p>
            <small class="text-muted">Dec 2024 – Apr 2025</small>
          </div>
        </div>
        <div class="timeline-item">
          <div class="timeline-icon bg-primary text-white"><i class="fas fa-university"></i></div>
          <div class="timeline-content">
            <h5>PhD in Computational Biology</h5>
            <p class="text-muted mb-0">Department for BioMedical Research, University of Bern</p>
            <small class="text-muted">May 2021 – November 2024</small>
          </div>
        </div>
        <div class="timeline-item">
          <div class="timeline-icon bg-primary text-white"><i class="fas fa-university"></i></div>
          <div class="timeline-content">
            <h5>BSc & MSc in Physics</h5>
            <p class="text-muted mb-0">Department of Physics, ETH Zurich</p>
            <small class="text-muted">September 2014 – September 2020</small>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Portfolio Section-->
  <section class="page-section portfolio bg-light" id="portfolio">
    <div class="container">
      <!-- Portfolio Section Heading-->
      <h2 class="page-section-heading text-center text-uppercase text-secondary mb-0">Portfolio</h2>
      <!-- Icon Divider-->
      <div class="divider-custom">
        <div class="divider-custom-line"></div>
        <div class="divider-custom-icon"><i class="fas fa-star"></i></div>
        <div class="divider-custom-line"></div>
      </div>

      <PortFolio />
    </div>
  </section>

  <!-- Publications Section-->
  <section class="page-section bg-light" id="publications">
    <!-- Publications Section Heading-->
    <h2 class="page-section-heading text-center text-uppercase text-secondary mb-0">
      Publications
    </h2>
    <!-- Icon Divider-->
    <div class="divider-custom">
      <div class="divider-custom-line"></div>
      <div class="divider-custom-icon"><i class="fas fa-book"></i></div>
      <div class="divider-custom-line"></div>
    </div>
    <!-- Publications -->
    <div class="container justify-content-center">
      <br />

      <h5>RESEARCH ARTICLES</h5>
      <div>
        <strong>Degen</strong> & Medo. (2025). Replicability of bulk RNA-Seq differential expression
        and enrichment analysis results for small cohort sizes. <em>PLoS Computational Biology</em>.
        <a
          href="https://doi.org/10.1371/journal.pcbi.1011630"
          target="_blank"
          rel="noopener noreferrer"
          >doi: 10.1371/journal.pcbi.1011630</a
        >
      </div>
      <br />

      <h5>REPORTS</h5>
      <div>
        Pawel, <strong>Degen</strong>, Fraga González, Bollmann, Masoero, Guilloteau & Asfar.
        (2024). Insights from the Reproducibility Hackathon at the Swiss Reproducibility Conference
        2024. <em>Zenodo</em>.
        <a href="https://doi.org/10.5281/zenodo.12516514" target="_blank" rel="noopener noreferrer"
          >doi: 10.5281/zenodo.12516514</a
        >
      </div>
      <br />

      <h5>PRESENTATIONS</h5>
      <div>
        <strong>Degen</strong>. (2025). PhD Retrospective: RNA-Seq, Replicability, Open Science.
        <em>Zenodo</em>.
        <a href="https://doi.org/10.5281/zenodo.15263835" target="_blank" rel="noopener noreferrer"
          >doi: 10.5281/zenodo.15263835</a
        >
      </div>
      <br />

      <h5>THESES</h5>
      <div>
        <strong>Degen</strong>. (2024). Challenges in Bulk and Single-cell RNA-Seq Analysis:
        Investigating Robustness and Replicability. <em>PhD Thesis</em>. University of Bern.
      </div>
      <div>
        <strong>Degen</strong>. (2020). Straw Trackers for NA64 Electronuclear Backgound Studies.
        <em>Master Thesis</em>. ETH Zurich.
      </div>
    </div>
  </section>

  <!-- Skills Section -->
  <section class="page-section bg-light" id="skills">
    <div class="container">
      <!-- Skills Section Heading-->
      <h2 class="page-section-heading text-center text-uppercase text-secondary mb-0">Skills</h2>
      <!-- Icon Divider-->
      <div class="divider-custom">
        <div class="divider-custom-line"></div>
        <div class="divider-custom-icon"><i class="fas fa-gear"></i></div>
        <div class="divider-custom-line"></div>
      </div>

      <div class="row">
        <div class="col-md-6 mb-4">
          <h5>Data Analysis (Python, R)</h5>
          <div class="progress">
            <div
              class="progress-bar bg-primary"
              role="progressbar"
              data-value="90"
              style="width: 0%"
            >
              0%
            </div>
          </div>
        </div>
        <div class="col-md-6 mb-4">
          <h5>Game Development (Unity, C#)</h5>
          <div class="progress">
            <div
              class="progress-bar bg-primary"
              role="progressbar"
              data-value="70"
              style="width: 0%"
            >
              0%
            </div>
          </div>
        </div>
        <div class="col-md-6 mb-4">
          <h5>Machine Learning (Python)</h5>
          <div class="progress">
            <div
              class="progress-bar bg-primary"
              role="progressbar"
              data-value="50"
              style="width: 0%"
            >
              0%
            </div>
          </div>
        </div>
        <div class="col-md-6 mb-4">
          <h5>Frontend Development (HTML, CSS, TypeScript, Vue.js)</h5>
          <div class="progress">
            <div
              class="progress-bar bg-primary"
              role="progressbar"
              data-value="30"
              style="width: 0%"
            >
              0%
            </div>
          </div>
        </div>
      </div>
    </div>
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
          <p class="lead">
            During my PhD years, I enjoyed diverse collaborations with colleagues working in
            preclinical research, performing various computational analyses for radiation oncology
            and neuroscience experiments. Additionally, I conducted original research related to
            issues such as replicability and robustness of bioinformatics pipelines, which led to my
            interest in open science and meta science.
            <br />
            <br />
            In my free time, I'm an avid reader, film enthusiast, and volunteer for various human
            rights causes. I enjoy hiking in the Swiss mountains and teaming up with creative people
            to make small video games. I'm also learning web dev on the side...
          </p>
        </div>
      </div>
    </div>
  </section>

  <!-- Navigation Section-->
  <section
    class="page-section text-white mb-0"
    style="padding: 2rem; background-color: #15967d"
    id="more"
  >
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
    <div v-if="isDev">
      <router-link to="/sandbox" class="text-white">(Super Secret Sandbox)</router-link>
    </div>
  </div>
</template>

<!--
<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
-->
