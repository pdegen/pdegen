<template>
  <div class="container py-5">
    <div class="row g-4">
      <div v-for="(img, index) in images" :key="index" class="col-sm-6 col-md-4 col-lg-3">
        <div class="gallery-item position-relative" @click="openModal(img)">
          <img :src="img.src" :alt="img.title" class="img-fluid rounded gallery-img" />
          <div class="overlay">
            <p class="text-white">{{ img.title }}</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal -->
    <div class="modal fade" id="imageModal" tabindex="-1" aria-hidden="true" ref="modal">
      <div class="modal-dialog modal-dialog-centered modal-lg">
        <div class="modal-content bg-dark text-white">
          <div class="modal-header border-0">
            <h5 class="modal-title">{{ modalData.title }}</h5>
            <button
              type="button"
              class="btn-close btn-close-white"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body text-center">
            <img :src="modalData.src" class="img-fluid rounded mb-3" :alt="modalData.title" />
            <p>{{ modalData.desc }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

type image_model = {
  src: string
  title: string
  desc: string
}

const images: image_model[] = [
  {
    src: 'https://image.tmdb.org/t/p/original/49eTYtwKusXvQ2cerLIeiQSr2s9.jpg',
    title: 'Princess Mononoke',
    desc: 'Hayao Miyazaki, 1997',
  },
  {
    src: 'https://image.tmdb.org/t/p/original/bA509BLSS8RCtHI9rnDnVRaRFr4.jpg',
    title: 'A Scene at the Sea',
    desc: 'Takeshi Kitano, 1991',
  },
  {
    src: 'https://image.tmdb.org/t/p/original/5SZXEt1TI1IBikTeMu6NxGGo2Yz.jpg',
    title: 'Blade Runner',
    desc: 'Ridley Scott, 1982',
  },
  {
    src: 'https://image.tmdb.org/t/p/original/HUvuptSzuS4VshzG8w01NiMd1A.jpg',
    title: "Angel's Egg",
    desc: 'Mamoru Oshii, 1985',
  },
  {
    src: 'https://image.tmdb.org/t/p/original/qvZ91FwMq6O47VViAr8vZNQz3WI.jpg',
    title: 'Seven Samurai',
    desc: 'Akira Kurosawa, 1954',
  },
  {
    src: 'https://image.tmdb.org/t/p/original/zaPzgyxua4ieJUKYR1WSX6f5VMQ.jpg',
    title: 'The Matrix',
    desc: 'Lilly and Lana Wachowski, 1999',
  },
  {
    src: 'https://image.tmdb.org/t/p/original/jSwSQp3wrVznojidRsMWCtJNK0Q.jpg',
    title: 'Taste of Cherry',
    desc: 'Abbas Kiarostami, 1997',
  },
  {
    src: 'https://image.tmdb.org/t/p/original/czrTZnZgSwtIofk0UYrRMicVgHB.jpg',
    title: '2001: A Space Odyssey',
    desc: 'Stanley Kubrick, 1968',
  },
]

const modalData = ref({})
const modal = ref(null)

const openModal = (img: image_model) => {
  modalData.value = img
  const bsModal = new bootstrap.Modal(modal.value)
  bsModal.show()
}
</script>

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
