<script setup lang="ts">
import { ref } from 'vue'
import * as bootstrap from 'bootstrap'

type Book = {
  title: string
  subtitle?: string
  author: string
  cover: string
  year: number
  description: string
}

const books: Book[] = [
  {
    title: 'Merchants of Doubt',
    subtitle:
      'How a Handful of Scientists Obscured the Truth on Issues from Tobacco Smoke to Global Warming',
    author: 'Naomi Oreskes and Erik M. Conway',
    cover: 'https://covers.openlibrary.org/b/id/7909667-L.jpg',
    year: 2010,
    description: 'Lorem ipsum.',
  },
  {
    title: 'Doughnut Economics',
    subtitle: 'Seven Ways to Think Like a 21st-Century Economist',
    author: 'Kate Raworth',
    cover: 'https://covers.openlibrary.org/b/id/8347419-L.jpg',
    year: 2017,
    description: 'Lorem ipsum.',
  },
  {
    title: 'Educated',
    subtitle: 'A Memoir',
    author: 'Tara Westover',
    cover: 'https://covers.openlibrary.org/b/id/14832082-L.jpg',
    year: 2018,
    description: 'Lorem ipsum.',
  },
  {
    title: 'Doppelganger',
    subtitle: 'Doppelganger: A Trip into the Mirror World',
    author: 'Naomi Klein',
    cover: 'https://covers.openlibrary.org/b/id/14377472-L.jpg',
    year: 2023,
    description: 'Lorem ipsum.',
  },
  {
    title: 'Road to Nowhere',
    subtitle: 'What Silicon Valley Gets Wrong about the Future of Transportation',
    author: 'Paris Marx',
    cover:
      'https://upload.wikimedia.org/wikipedia/en/thumb/b/b8/Road_to_Nowhere_%282022_book%29.jpg/250px-Road_to_Nowhere_%282022_book%29.jpg',
    year: 2022,
    description: 'Lorem ipsum.',
  },
]

// TO DO: add filter/sort options

const selectedBook = ref<Book | null>(null)
const modal = ref<HTMLDivElement | null>(null)

const openModal = (book: Book) => {
  selectedBook.value = book
  if (modal.value) {
    const bsModal = new bootstrap.Modal(modal.value)
    bsModal.show()
  }
}
</script>

<template>
  <div class="container my-4 text-center">
    <div class="scroll-container d-flex overflow-auto justify-content-center">
      <div
        v-for="(book, index) in books"
        :key="index"
        class="me-3 flex-shrink-0"
        @click="openModal(book)"
        style="cursor: pointer"
      >
        <img :src="book.cover" class="rounded shadow" style="height: 200px" :alt="book.title" />
      </div>
    </div>

    <!-- Modal -->
    <div class="modal fade" ref="modal" tabindex="-1">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">{{ selectedBook?.title }}</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" />
          </div>
          <div class="modal-body">
            <p><strong>Author:</strong> {{ selectedBook?.author }}</p>
            <p>{{ selectedBook?.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.scroll-container img {
  transition: transform 0.3s ease;
  scrollbar-width: thin;
  padding-bottom: 1rem;
}

.scroll-container img:hover {
  transform: scale(1.1);
  z-index: 1;
}

.scroll-container::-webkit-scrollbar {
  height: 8px;
}
.scroll-container::-webkit-scrollbar-thumb {
  background-color: #aaa;
  border-radius: 4px;
}
</style>
