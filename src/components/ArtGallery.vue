<script setup lang="ts">
import { ref } from 'vue'
import * as bootstrap from 'bootstrap'
import { parseCSV } from '@/assets/js/scripts'
import artworksCSV from '@/assets/data/artworks.csv?raw'

// TO DO: filter artworks by year, mood

type Artwork = {
  src: string
  artist: string
  title?: string
  year?: number
}

const artworks = parseCSV<Artwork>(artworksCSV)
debugger
const shuffled = [...artworks].sort(() => 0.5 - Math.random())

// Reactive selected images
const modalData = ref<Artwork>(artworks[0])
const modal = ref(null)
let currentIndex: number = 0

const reloadModal = (work: Artwork) => {
  modalData.value = work
}

const openModal = (work: Artwork) => {
  reloadModal(work)

  if (modal.value) {
    const bsModal = new bootstrap.Modal(modal.value)
    bsModal.show()
  }
}

const advanceQueue = (reversed: boolean = false) => {
  debugger
  if (reversed) {
    currentIndex = currentIndex - 1 < 0 ? shuffled.length : currentIndex - 1
  } else {
    currentIndex = currentIndex + 1 == shuffled.length ? 0 : currentIndex + 1
  }
  selectedWork.value = shuffled[currentIndex]
  reloadModal(selectedWork.value)
}
// Initialize selection
const selectedWork = ref<Artwork>(shuffled[currentIndex])
</script>

<template>
  <div class="container">
    <div class="text-center">
      <p>Art tickles my brain.</p>
    </div>
    <div class="justify-content-center align-items-center d-flex">
      <div
        class="gallery-item position-relative col-12 col-md-6 d-flex justify-content-center align-items-center"
        style="height: 400px; overflow: hidden"
        @click="openModal(selectedWork)"
      >
        <img
          :src="selectedWork.src"
          :alt="selectedWork.title"
          class="img-fluid rounded gallery-img"
          style="max-height: 100%; max-width: 100%; object-fit: contain"
        />
      </div>
    </div>
    <br />
    <div class="row justify-content-center gap-4">
      <div class="col-5 col-md-3">
        <button type="button" class="btn btn-primary btn-lg w-100" @click="advanceQueue(true)">
          Previous
        </button>
      </div>
      <div class="col-5 col-md-3">
        <button type="button" class="btn btn-primary btn-lg w-100" @click="advanceQueue()">
          Next
        </button>
      </div>
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

          <div class="row justify-content-center align-items-center">
            <div class="col-1">
              <button type="button" class="btn btn-primary" @click="advanceQueue(true)">
                <i class="fa-solid fa-arrow-left"></i>
              </button>
            </div>

            <div class="col-9">
              <h5>{{ modalData.title || 'Unknown title' }}</h5>
              <p>
                {{ modalData.artist || 'Unknown artist'
                }}{{ modalData.year ? ', ' + modalData.year : '' }}
              </p>
            </div>
            <div class="col-1">
              <button type="button" class="btn btn-primary" @click="advanceQueue()">
                <i class="fa-solid fa-arrow-right"></i>
              </button>
            </div>
          </div>
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
