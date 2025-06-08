<script setup lang="ts">
import { ref } from 'vue'
import img_boot from '@/assets/img/portfolio/bootstrapseq.png'
import img_quote from '@/assets/img/portfolio/quotebrowser.png'

type PortfolioItem = {
  title: string
  cover: string
  description: string
}

// To DO: read from md file
const portfolioItems = ref<PortfolioItem[]>([
  {
    title: 'BootstrapSeq',
    cover: img_boot,
    description:
      "Bootstrap resample your low-powered RNA-Seq data set to estimate the reliability of downstream differential expression and enrichment results. Available via <a href='https://github.com/pdegen/BootstrapSeq' target='_blank' rel='noopener noreferrer'>GitHub.</a>",
  },
  {
    title: 'Quote Browser',
    cover: img_quote,
    description:
      "One reason why I like to read e-books is that I can easily highlight noteworthy passages and quickly retrieve them across my entire digital library. At time of writing, I have close to 5'000 highlights (aka clippings) saved on my Kindle, which I frequently consult whenever I'm writing or thinking about a related topic. However, these clippings are stored in a plain text file, which is unwieldy to navigate. Therefore, I made a simple web page that lets users upload their clippings for improved browsing, sorting, filtering, and sharing. Available <a href='https://pdegen.github.io/QuoteBrowser/' target='_blank' rel='noopener noreferrer'>here.</a>",
  },
])

const selectItem = (item: PortfolioItem) => {
  selectedItem.value = item
}

const selectedItem = ref<PortfolioItem | null>(null)
</script>

<template>
  <!-- Portfolio Grid Items-->

  <div class="row justify-content-center">
    <!--Don't use index in v-for here; use unique index like item.title or vue doesn't update sticky note due to DOM element recycling-->
    <!-- Portfolio Item 1-->
    <div
      class="col-md-6 col-lg-4 mb-5"
      v-for="item in portfolioItems"
      :key="item.title"
      @click="selectItem(item)"
      style="cursor: pointer"
    >
      <div class="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#myModal">
        <div
          class="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100"
        >
          <div class="portfolio-item-caption-content text-center text-white">
            <i class="fas fa-plus fa-3x"></i>
          </div>
        </div>
        <img class="img-fluid" :src="item.cover" :alt="item.title" />
      </div>
    </div>
  </div>

  <!-- Modal -->
  <div
    class="portfolio-modal modal fade"
    id="myModal"
    tabindex="-1"
    aria-labelledby="myModal"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-xl">
      <div class="modal-content">
        <div class="modal-header border-0">
          <button
            class="btn-close"
            type="button"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body text-center pb-5">
          <div class="container">
            <div class="row justify-content-center">
              <div class="col-lg-8">
                <!-- Portfolio Modal - Title-->
                <h2 class="portfolio-modal-title text-secondary text-uppercase mb-0">
                  {{ selectedItem?.title }}
                </h2>
                <!-- Icon Divider-->
                <div class="divider-custom">
                  <div class="divider-custom-line"></div>
                  <div class="divider-custom-icon"><i class="fas fa-star"></i></div>
                  <div class="divider-custom-line"></div>
                </div>
                <!-- Portfolio Modal - Image-->
                <img
                  class="img-fluid rounded mb-5"
                  :src="selectedItem?.cover"
                  :alt="selectedItem?.title"
                />
                <!-- Portfolio Modal - Text-->
                <p class="mb-4 text-start" v-html="selectedItem?.description"></p>
                <button class="btn btn-primary" data-bs-dismiss="modal">
                  <i class="fas fa-xmark fa-fw"></i>
                  Close Window
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
