<script setup lang="ts">
import { ref } from 'vue'
import * as bootstrap from 'bootstrap'
import { parseCSV } from '@/assets/js/scripts'
import artworksCSV from '@/assets/data/artworks.csv?raw'

// TO DO: prev/next buttons on image

type Artwork = {
  src: string
  artist: string
  title?: string
  year?: number
}

const artworks = parseCSV<Artwork>(artworksCSV)
const shuffled = [...artworks].sort(() => 0.5 - Math.random())

// Reactive selected images
const modalData = ref<Artwork>(artworks[0])
const modal = ref(null)
let currentIndex: number = 0

const openModal = (work: Artwork) => {
  modalData.value = work

  if (modal.value) {
    const bsModal = new bootstrap.Modal(modal.value)
    bsModal.show()
  }
}

const advanceQueue = () => {
  currentIndex = currentIndex + 1 == shuffled.length ? 0 : currentIndex + 1
  selectedWork.value = shuffled[currentIndex]
}
// Initialize selection
const selectedWork = ref<Artwork>(shuffled[currentIndex])
</script>

<template>
  <div class="container">
    <div class="text-center">
      <p>Art tingles my brain.</p>
    </div>
    <div class="justify-content-center d-flex">
      <div class="gallery-item position-relative col-6" @click="openModal(selectedWork)">
        <img
          :src="selectedWork.src"
          :alt="selectedWork.title"
          class="img-fluid rounded gallery-img"
        />
        <div class="overlay">
          <div>
            <p class="text-white">{{ selectedWork.title }}</p>
          </div>
        </div>
      </div>
    </div>
    <br />
    <div class="text-center">
      <button type="button" class="btn btn-primary btn-lg" @click="advanceQueue()">
        Next Artwork
      </button>
    </div>
  </div>

  <!-- Modal -->
  <div class="modal fade" id="imageModal" tabindex="-1" aria-hidden="true" ref="modal">
    <div class="modal-dialog modal-dialog-centered modal-lg">
      <div class="modal-content bg-dark text-white">
        <div class="modal-header border-0">
          <button
            type="button"
            class="btn-close btn-close-white"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body text-center">
          <img :src="modalData.src" class="img-fluid rounded mb-3" :alt="modalData.title" />
          <h5>{{ modalData.title || 'Unknown title' }}</h5>
          <p>{{ modalData.artist || 'Unknown artist' }}, {{ modalData.year || 'unknown year' }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.gallery-item {
  cursor: pointer;
  overflow: hidden;
}
.gallery-img {
  transition: transform 0.3s ease;
}
.gallery-item:hover .gallery-img {
  transform: scale(1.05);
}
.overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.6);
  opacity: 0;
  padding: 10px;
  text-align: center;
  transition: opacity 0.3s ease;
}
.gallery-item:hover .overlay {
  opacity: 1;
}
</style>
