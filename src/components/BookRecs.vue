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
    description:
      "If you're curious to learn how the US arrived at a place where <a target='_blank' rel='noopener noreferrer' href='https://climatecommunication.gmu.edu/all/climate-change-in-the-american-mind-beliefs-and-attitudes-fall-2024/'>a third of the population</a> is either unaware or outright denies the scientific consensus on anthropogenic climate change, this is the book the read. You may have heard before that <a target='_blank' rel='noopener noreferrer' href='https://www.scientificamerican.com/article/exxon-knew-about-climate-change-almost-40-years-ago/'>Exxon Mobile</a> was a key driver in obscuring their own research on climate change and spending millions to sow doubt about the science among the general public. But did you know that the same playbook was used time and again, from the ozone hole to acid rain to the environmental impact of DDT pesticides, often spearheaded by the same handful of former scientists turned industry shills? The authors trace a lineage of corporate-sponsored doubt-mongering that goes all the way back to the 1950s, when tobacco companies obscured the emerging scientific and medical consensus on the link between smoking and lung cancer. Crucially, the book shows how science denial is deeply intertwined with Cold War hysteria and free market ideology, funded by the private sector and conservative think tanks like The Heritage Foundation—yes, the one behind Project 2025 and <a target='_blank' rel='noopener noreferrer' href='https://forward.com/opinion/676036/antisemitism-heritage-foundation-project-esther/'>Project Esther</a>. Hard to think of an organization with a more damning track record for the future of humanity...",
  },
  {
    title: 'Doughnut Economics',
    subtitle: 'Seven Ways to Think Like a 21st-Century Economist',
    author: 'Kate Raworth',
    cover: 'https://covers.openlibrary.org/b/id/8347419-L.jpg',
    year: 2017,
    description: 'Description coming soon...',
  },
  {
    title: 'Educated',
    subtitle: 'A Memoir',
    author: 'Tara Westover',
    cover: 'https://covers.openlibrary.org/b/id/14832082-L.jpg',
    year: 2018,
    description:
      "Powerful memoir chronicling the author's upbringing in an abusive, conspiratorial, hardcore survivalist Mormon household that denied her education and healthcare, and how she eventually escaped this environment. The book's focus on one horrifyingly dysfunctional family may seem like a window into life on the fringes of society, but to anybody who is paying attention to recent events at all, it will be hard not to see in this a microcosm of the paranoia and corrosive hyperindividualism that characterizes US social relations more broadly...",
  },
  {
    title: 'Doppelganger',
    subtitle: 'A Trip into the Mirror World',
    author: 'Naomi Klein',
    cover: 'https://covers.openlibrary.org/b/id/14377472-L.jpg',
    year: 2023,
    description:
      "Brilliant memoir and insightful analysis of the resurgence of the far-right in the West. Of particular importance is the way that far-right politics co-opts leftist talking points and twists them to serve reactionary ends. Sadly, this is not a new story: divide and conquer is the oldest trick in the oligarch's playbook, promising minor economic concessions to the in-group while taking advantage of rising far-right sentiments to keep regular people in a constant state of manufactured hysteria about 'the Other'. What is new, however, is the way that social media has completely turbo-charged the spread of misinformation and the powerful allure of conspiracy theories, making it easier than ever to divert working-class resentment towards the latest scapegoat du jour. For a discussion of the book, see also <a target='_blank' rel='noopener noreferrer' href='https://www.youtube.com/watch?v=FxQ3EuEAOz0'>Ash Sarkar's interview with Naomi Klein</a> for Novara Media. Another crucial read is Klein's follow-up essay <a target='_blank' rel='noopener noreferrer' href='https://www.theguardian.com/us-news/ng-interactive/2025/apr/13/end-times-fascism-far-right-trump-musk'>The Rise of End Times Fascism</a>, co-written with Astra Taylor for The Guardian.",
  },
  {
    title: 'Road to Nowhere',
    subtitle: 'What Silicon Valley Gets Wrong about the Future of Transportation',
    author: 'Paris Marx',
    cover:
      'https://upload.wikimedia.org/wikipedia/en/thumb/b/b8/Road_to_Nowhere_%282022_book%29.jpg/250px-Road_to_Nowhere_%282022_book%29.jpg',
    year: 2022,
    description: 'Description coming soon...',
  },

  {
    title: 'Foundations of Economics',
    subtitle: "A Beginner's Companion",
    author: 'Yanis Varoufakis',
    cover:
      'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1348944275i/2018348.jpg',
    year: 1998,
    description: 'Description coming soon...',
  },
  {
    title: 'Less Is More',
    subtitle: 'How Degrowth Will Save the World',
    author: 'Jason Hickel',
    cover: 'https://covers.openlibrary.org/b/id/12439906-L.jpg',
    year: 2021,
    description: 'Description coming soon...',
  },
  {
    title: 'This Is Vegan Propaganda',
    subtitle: '(and Other Lies the Meat Industry Tells You)',
    author: 'Ed Winters',
    cover: 'https://covers.openlibrary.org/b/id/14233190-L.jpg',
    year: 2022,
    description: 'Description coming soon...',
  },
  {
    title: 'The Myth of American Idealism',
    subtitle: 'How U.S. Foreign Policy Endangers the World',
    author: 'Noam Chomsky and Nathan J. Robinson',
    cover: 'https://covers.openlibrary.org/b/id/14652612-L.jpg',
    year: 2024,
    description: 'Description coming soon...',
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
    <div class="d-flex justify-content-center">
      <div
        class="scroll-container d-flex justify-content-start"
        style="
          overflow-x: auto;
          overflow-y: hidden;
          padding: 1rem 0;
          height: 240px; /* enough for normal + scaled image */
        "
      >
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
    </div>

    <!-- Modal -->
    <div class="modal fade" ref="modal" tabindex="-1">
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
          <div class="modal-body">
            <div class="row h-100">
              <button
                type="button"
                class="btn-close position-absolute end-0 top-0 m-3"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
              <!-- Left: Book cover -->
              <div class="col-md-4 d-flex align-items-center justify-content-center text-center">
                <img
                  :src="selectedBook?.cover"
                  alt="Book cover"
                  class="img-fluid rounded shadow-sm"
                  style="max-height: 300px; object-fit: contain"
                />
              </div>

              <!-- Right: Book info -->
              <div class="col-md-8 d-flex flex-column justify-content-center">
                <div>
                  <h4 class="text-start">
                    <strong>{{ selectedBook?.title }}</strong>
                  </h4>
                  <h5 v-if="selectedBook?.subtitle" class="text-muted text-start">
                    {{ selectedBook?.subtitle }}
                  </h5>
                </div>
                <p class="mb-1 text-start">{{ selectedBook?.author }}, {{ selectedBook?.year }}</p>
                <hr />
                <p class="text-start" v-html="selectedBook?.description"></p>
              </div>
            </div>
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
  padding-bottom: 0rem;
}

.scroll-container img:hover {
  transform: scale(1.15);
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
