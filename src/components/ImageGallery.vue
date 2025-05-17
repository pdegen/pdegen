<template>
  <div class="container">
    <div class="text-center" v-if="!gameEnded">
      <p>Why, my favorite movies? I'm glad you asked!</p>
      <h4 v-if="!submittedGuess">Guess the movie</h4>
      <h4 v-else-if="submittedWrongGuess && !submittedWrongGuessAgain" class="text-danger">
        Incorrect!
      </h4>
      <h4 v-else-if="submittedWrongGuessAgain" class="text-danger">Still incorrect!</h4>
      <h4 v-else-if="submittedGuess" class="text-success">Correct!</h4>
      <h4>{{ winStreak > 4 ? '🔥' : '' }}Streak: {{ winStreak }}{{ winStreak > 4 ? '🔥' : '' }}</h4>

      <div v-if="submittedWrongGuess && !submittedWrongGuessAgain" class="text-center">
        Last try! Click the screenshot to reveal a hint...
      </div>

      <div v-else-if="submittedWrongGuessAgain" class="text-center">
        <h5>{{ selectedImages[0].title }}</h5>
        <p>{{ selectedImages[0].desc }}</p>
      </div>

      <div v-if="gameWon">
        <p>
          You've reached a streak of 3 and won the game!<br />Continue playing or reveal the
          complete movie list by clicking the "End Game" button below.
        </p>
      </div>
    </div>
    <div class="text-center" v-if="gameEnded">
      <h3>🎉 Congratulations! 🎉</h3>
      <p>
        You won with a streak of {{ winStreak }}! As a reward, you get to to behold the complete
        list of movies.
      </p>
    </div>
    <br />
    <div class="row g-4" v-if="gameEnded">
      <div v-for="(img, index) in shuffled" :key="index" class="col-sm-6 col-md-4 col-lg-3">
        <div class="gallery-item position-relative" @click="openModal(img)">
          <img :src="img.src" :alt="img.title" class="img-fluid rounded gallery-img" />
          <div class="overlay">
            <div>
              <p class="text-white">{{ img.title }}</p>
            </div>
          </div>
        </div>
      </div>
      <button type="button" class="btn btn-primary" @click="replay()">Play Again</button>
    </div>
    <div class="d-flex justify-content-center" v-else>
      <div v-for="(img, index) in selectedImages" :key="index" class="col-sm-6 col-md-4 col-lg-3">
        <div class="gallery-item position-relative" @click="openModal(img)">
          <img :src="img.src" :alt="img.title" class="img-fluid rounded gallery-img" />
          <div class="overlay">
            <div v-if="revealAnswer">
              <p class="text-white">{{ img.title }}</p>
            </div>
            <div v-else><p class="text-white">?</p></div>
          </div>
        </div>
        <br />
        <form @submit.prevent="checkAnswer(guess, img.title)">
          <input
            v-model="guess"
            type="text"
            class="form-control"
            id="guessAnswer"
            placeholder="Enter guess"
            :disabled="submittedWrongGuessAgain"
          />
        </form>
        <p v-if="!submittedWrongGuessAgain" class="text-center">Hit enter to submit.</p>
        <p v-else class="text-center">Try again next round...</p>
        <div class="text-center">
          <button
            type="button"
            class="btn btn-primary btn-lg"
            @click="advanceMovieQueue()"
            :disabled="!submittedGuess"
          >
            Next Movie
          </button>
          <div v-if="gameWon">
            <br />
            <button
              v-if="gameWon"
              type="button"
              class="btn btn-secondary btn-lg"
              @click="endGame()"
            >
              End Game
            </button>
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
            <div v-if="revealAnswer">
              <h5>{{ modalData.title }}</h5>
              <p>{{ modalData.desc }}</p>
            </div>
            <div v-else>
              <div v-if="!revealHint && canRevealHint">
                <button type="button" class="btn btn-secondary" @click="revealHint = true">
                  Hint
                </button>
              </div>
              <div v-else-if="revealHint">{{ modalData.desc }}</div>
            </div>
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
    src: 'https://image.tmdb.org/t/p/original/g5G19q0xgkzWEvfcGo1KcL8nQOk.jpg',
    title: 'Twin Peaks: Fire Walk with Me',
    desc: 'David Lynch, 1992',
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
  {
    src: 'https://image.tmdb.org/t/p/original/foFq1RZWQIgFuCQ0nyYccywjFyX.jpg',
    title: 'Portrait of a Lady on Fire',
    desc: 'Céline Sciamma, 2019',
  },
  {
    src: 'https://image.tmdb.org/t/p/original/d5l2ITQvpgP0dcWCAG6PUvp8YZw.jpg',
    title: 'Aftersun',
    desc: 'Charlotte Wells, 2022',
  },
  {
    src: 'https://image.tmdb.org/t/p/original/jy1wkkJnVbKkGRStg2XLFZf6Jx6.jpg',
    title: 'The Cranes are Flying',
    desc: 'Mikhail Kalatozov, 1957',
  },
  {
    src: 'https://image.tmdb.org/t/p/original/3nQm5pMc2mJTCNnjfDOrmVD7xNX.jpg',
    title: 'Ran',
    desc: 'Akia Kurosawa, 1985',
  },
  {
    src: 'https://image.tmdb.org/t/p/original/nC3IjYhUgZWgfKfFX0ygMigFwgc.jpg',
    title: 'Harakiri',
    desc: 'Masaki Kobyasahi, 1962',
  },
  {
    src: 'https://image.tmdb.org/t/p/original/d8qNbjFya51BxZga9mq0863NwHk.jpg',
    title: 'Landscape in the Mist',
    desc: 'Theo Angelopoulos, 1988',
  },
  {
    src: 'https://image.tmdb.org/t/p/original/KV2f8ifE4NeyVxPvRIZxsfdxyg.jpg',
    title: 'Aliens',
    desc: 'James Cameron, 1986',
  },
]

let shuffled = [...images].sort(() => 0.5 - Math.random())

// TO DO: small game where user guesses film title/director/year

// Reactive selected images
const selectedImages = ref<image_modal[]>([])
const modalData = ref<image_modal>(images[0])
const modal = ref(null)
const submittedGuess = ref(false)
const submittedWrongGuess = ref(false)
const submittedWrongGuessAgain = ref(false)
const revealAnswer = ref<boolean>(false)
const canRevealHint = ref<boolean>(false)
const revealHint = ref<boolean>(false)
const guess = ref<string>('')
const gameWon = ref<boolean>(false)
const gameEnded = ref<boolean>(false)
const winStreak = ref(0)
let currentFilmIndex: number = 0

// // Shuffle and pick n
// const rollImages = (n: number = 4) => {
//   const shuffled = [...images].sort(() => 0.5 - Math.random())
//   selectedImages.value = shuffled.slice(0, n)
//   revealHint.value = false
//   revealAnswer.value = false
// }

// note param can not be called guess since it would shadow the guess ref
const checkAnswer = (userGuess: string, correctAnswer: string) => {
  if (submittedGuess.value && !submittedWrongGuess.value) return

  if (userGuess.trim().toLowerCase() === correctAnswer.toLowerCase()) {
    winStreak.value++
    revealAnswer.value = true
    submittedWrongGuess.value = false
  } else {
    winStreak.value = 0

    if (submittedWrongGuess.value) {
      submittedWrongGuessAgain.value = true
      revealAnswer.value = true
    }

    submittedWrongGuess.value = true
    gameWon.value = false
    canRevealHint.value = true
  }
  submittedGuess.value = true

  if (winStreak.value == 3) {
    gameWon.value = true
  }
}

const endGame = () => {
  selectedImages.value = shuffled
  gameEnded.value = true
}

const openModal = (img: image_modal) => {
  modalData.value = img

  if (modal.value) {
    const bsModal = new bootstrap.Modal(modal.value)
    bsModal.show()
  }
}

const replay = () => {
  shuffled = [...images].sort(() => 0.5 - Math.random())
  gameEnded.value = false
  gameWon.value = false
  winStreak.value = 0
  advanceMovieQueue()
}

const advanceMovieQueue = () => {
  currentFilmIndex = currentFilmIndex + 1 == shuffled.length ? 0 : currentFilmIndex + 1
  selectedImages.value = shuffled.slice(currentFilmIndex, currentFilmIndex + 1)
  revealHint.value = false
  revealAnswer.value = false
  submittedGuess.value = false
  submittedWrongGuess.value = false
  submittedWrongGuessAgain.value = false
  canRevealHint.value = false
  guess.value = ''
}
// Initialize selection
advanceMovieQueue()
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
