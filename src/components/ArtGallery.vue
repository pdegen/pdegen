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

const hoverGalleryButtons = ref(false)
const artworks = parseCSV<Artwork>(artworksCSV)
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
advanceQueue()
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
  <div
    class="modal fade justify-content-centered align-items-center"
    id="imageModal"
    tabindex="-1"
    aria-hidden="true"
    ref="modal"
  >
    <div
      class="modal-dialog modal-dialog-centered modal-lg responsive-modal"
      style="max-height: 80vh; max-width: 80vw"
    >
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
          <div class="row justify-content-center align-items-center text-center">
            <div class="col-auto">
              <!-- Left Button -->
              <button
                @click="advanceQueue(true)"
                class="position-absolute top-0 start-0 btn btn-dark d-flex align-items-center justify-content-center"
                style="
                  height: 100%;
                  width: 15%;
                  background-color: rgba(33, 37, 41, 0);
                  border: none;
                "
                :style="{
                  backgroundColor: hoverGalleryButtons
                    ? 'rgba(33, 37, 41, 0.7)'
                    : 'rgba(33, 37, 41, 0)',
                }"
                @mouseover="hoverGalleryButtons = true"
                @mouseleave="hoverGalleryButtons = false"
              >
                <i class="fa-solid fa-chevron-left fa-2xl"></i>
              </button>
            </div>
            <div class="col">
              <img
                :src="modalData.src"
                class="img-fluid rounded d-block w-100"
                :alt="modalData.title"
                style="object-fit: contain; max-height: 80vh"
              />

              <h5 style="margin: 1rem 0 0">{{ modalData.title || 'Unknown title' }}</h5>
              <p style="margin-bottom: 0">
                {{ modalData.artist || 'Unknown artist'
                }}{{ modalData.year ? ', ' + modalData.year : '' }}
              </p>
            </div>
            <div class="col-auto text-center">
              <!-- Right Button -->
              <button
                @click="advanceQueue()"
                class="position-absolute top-0 end-0 btn btn-dark d-flex align-items-center justify-content-center"
                style="
                  height: 100%;
                  width: 15%;
                  background-color: rgba(33, 37, 41, 0);
                  border: none;
                "
                :style="{
                  backgroundColor: hoverGalleryButtons
                    ? 'rgba(33, 37, 41, 0.7)'
                    : 'rgba(33, 37, 41, 0)',
                }"
                @mouseover="hoverGalleryButtons = true"
                @mouseleave="hoverGalleryButtons = false"
              >
                <i class="fa-solid fa-chevron-right fa-2xl"></i>
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

@media (max-width: 768px) {
  .responsive-modal {
    max-width: 100vw !important;
  }
}
</style>
