<template>
  <div class="container">
    <div class="text-center">
      Click the button to see a random selection of my favourite movies!
      <br />
      <br />
      <button type="button" class="btn btn-primary btn-lg" @click="rollImages">
        Re-roll Movies
      </button>
    </div>
    <br />
    <div class="row g-4">
      <div v-for="(img, index) in selectedImages" :key="index" class="col-sm-6 col-md-4 col-lg-3">
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
            <button
              type="button"
              class="btn-close btn-close-white"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body text-center">
            <img :src="modalData.src" class="img-fluid rounded mb-3" :alt="modalData.title" />
            <h5>{{ modalData.title }}</h5>
            <p>{{ modalData.desc }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import * as bootstrap from 'bootstrap'

type image_modal = {
  src: string
  title: string
  desc: string
}

// TO DO: move to csv
const images: image_modal[] = [
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
  {
    src: 'https://image.tmdb.org/t/p/original/gx3Iat10dc39XbDwbmdfKPsow3U.jpg',
    title: 'In the Mood for Love',
    desc: 'Wong Kar-Wai, 2000',
  },
  {
    src: 'https://image.tmdb.org/t/p/original/6yrbWzzrPp7pwz6zHdifspJk8t3.jpg',
    title: 'Stalker',
    desc: 'Andrei Tarkovsky, 1979',
  },
  {
    src: 'https://image.tmdb.org/t/p/original/cR4n0ts9NU1MnDBeHdRwQCmlHOh.jpg',
    title: 'Twin Peaks: The Return',
    desc: 'David Lynch, 2017',
  },
  {
    src: 'https://image.tmdb.org/t/p/original/yFfOnVynWSsDbpyYLY8cJMff44V.jpg',
    title: 'Memories of Murder',
    desc: 'Bong Joon-ho, 2003',
  },
  {
    src: 'https://image.tmdb.org/t/p/original/9LCawRttI7Klb0XY58ZoX5Yfz2l.jpg',
    title: 'Certain Women',
    desc: 'Kelly Reichardt, 2016',
  },
  {
    src: 'https://image.tmdb.org/t/p/original/3gSvNuM4ieYloFvZu0Zu0wyMNIU.jpg',
    title: 'Burning',
    desc: 'Lee Chang-dong, 2018',
  },
  {
    src: 'https://image.tmdb.org/t/p/original/p69ybBV94wSmyCGE2y2pH9U86l0.jpg',
    title: 'To Be or Not to Be',
    desc: 'Ernst Lubitsch, 1942',
  },
  {
    src: 'https://image.tmdb.org/t/p/original/8w8DjWOz3RFyw1cneE8YvzA56kz.jpg',
    title: 'A Moment of Innocence',
    desc: 'Mohsen Makhmalbaf, 1996',
  },
  {
    src: 'https://image.tmdb.org/t/p/original/gitdN085d55TdEiz84xyCA6Wd6g.jpg',
    title: 'Under the Skin',
    desc: 'Jonathan Glazer, 2014',
  },
  {
    src: 'https://image.tmdb.org/t/p/original/myKJ6PaZTzK4IWE5yifXvnfMkUT.jpg',
    title: 'Edvard Munch',
    desc: 'Peter Watkins, 1974',
  },
  {
    src: 'https://image.tmdb.org/t/p/original/zxxmSDnl5OwIxOmWQbgPvjmSRv3.jpg',
    title: 'Syndromes and a Century',
    desc: 'Apichatpong Weerasethakul, 2006',
  },
  {
    src: 'https://image.tmdb.org/t/p/original/3DFPbnO10Npvwn8MjB9nejmQxxj.jpg',
    title: 'Right Now, Wrong Then',
    desc: 'Hong Sang-soo, 2015',
  },
  {
    src: 'https://image.tmdb.org/t/p/original/47NmEf7kEmsNK3T9hiquNYO8fU9.jpg',
    title: 'Offside',
    desc: 'Jafar Panahi, 2006',
  },
  {
    src: 'https://image.tmdb.org/t/p/original/6BfG57tE8EYiE1i9Ls77kDHyAF4.jpg',
    title: 'A Bride for Rip Van Winkle',
    desc: 'Shunji Iwai, 2016',
  },
  {
    src: 'https://image.tmdb.org/t/p/original/hdHIjZxq3SWFqpAz4NFhdbud0iz.jpg',
    title: 'Alien',
    desc: 'Ridley Scott, 1979',
  },
  {
    src: 'https://image.tmdb.org/t/p/original/b5xn9wkLWcJ5EGXLChtZVuoaJSU.jpg',
    title: 'Spirited Away',
    desc: 'Hayao Miyazaki, 2001',
  },
  {
    src: 'https://image.tmdb.org/t/p/original/g8G91vbvyUqnyFSlVruwiaZsUrn.jpg',
    title: 'First Reformed',
    desc: 'Paul Schrader, 2017',
  },
  {
    src: 'https://image.tmdb.org/t/p/original/fxYazFVeOCHpHwuqGuiqcCTw162.jpg',
    title: 'My Neighbor Totoro',
    desc: 'Hayao Miyazaki, 1988',
  },
  {
    src: 'https://image.tmdb.org/t/p/original/bln0pnieTax3KrEpG5ZjN3fi1sw.jpg',
    title: 'Casablanca',
    desc: 'Michael Curtiz, 1943',
  },
  {
    src: 'https://image.tmdb.org/t/p/original/WsnQS5wcEzbsIWcaJm4TqoImT3.jpg',
    title: 'Rebels of the Neon God',
    desc: 'Tsai Ming-liang, 1994',
  },
  {
    src: 'https://image.tmdb.org/t/p/original/7aRdT0ijJdME6jY8PzHgzAmw0dd.jpg',
    title: 'Raise the Red Lantern',
    desc: 'Zhang Yimou, 1991',
  },
]

// TO DO: small game where user guesses film title/director/year

// Reactive selected images
const selectedImages = ref<image_modal[]>([])

// Shuffle and pick 4
function rollImages() {
  const shuffled = [...images].sort(() => 0.5 - Math.random())
  selectedImages.value = shuffled.slice(0, 4)
}

// Initialize selection
rollImages()

const modalData = ref<image_modal>(images[0])
const modal = ref(null)

const openModal = (img: image_modal) => {
  modalData.value = img

  if (modal.value) {
    const bsModal = new bootstrap.Modal(modal.value)
    bsModal.show()
  }
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
