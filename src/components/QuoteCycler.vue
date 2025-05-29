<script setup lang="ts">
import { ref } from 'vue'
import { parseCSV, shuffleArray } from '@/assets/js/scripts'
import quotesCSV from '@/assets/data/quotes.csv?raw'

type QuoteType = {
  quote: string
  author: string
  work?: string
  noquotemarks?: boolean
}

const testQuote = false
function getNextQuote(quotes: QuoteType[]): QuoteType {
  if (testQuote) {
    return quotes[quotes.length - 1]
  }

  // random quote
  // const quote = quotes[Math.floor(Math.random() * quotes.length)]
  // quote.quote.replace(/\\n/g, '<br>')

  // cycle next quote
  currentQuoteIndex = currentQuoteIndex + 1 == quotes.length ? 0 : currentQuoteIndex + 1
  const quote = quotes[currentQuoteIndex]

  // quote of the day
  //const index = Math.floor((Date.now() / (1000 * 60 * 60 * 24)) % quotes.length)
  //const quote = quotes[index]

  return quote
}

// must have header with QuoteType col names
const quotes = parseCSV<QuoteType>(quotesCSV)
shuffleArray(quotes)
let currentQuoteIndex = 0

const quote = ref<QuoteType>(getNextQuote(quotes))
//const quote = ref<QuoteType>(quotes[quotes.length - 1])
</script>

<template>
  <div class="container d-flex justify-content-center">
    <div class="quote text-start p-2">
      <h4
        class="fw-normal"
        v-html="
          `${!quote.noquotemarks ? '&ldquo;' : ''}${quote.quote.replace(/\n/g, '<br>')}${!quote.noquotemarks ? '&rdquo;' : ''}`
        "
      ></h4>
      <h5 class="fw-normal">
        —{{ quote.author
        }}<span v-if="quote.work"
          >, <i><span v-html="quote.work"></span></i>
        </span>
      </h5>
    </div>
  </div>
  <div class="container text-center">
    <button type="button" class="btn btn-primary btn-lg" @click="quote = getNextQuote(quotes)">
      Re-roll
    </button>
  </div>
</template>

<style scoped>
.quote {
  font-family: serif;
  background: #f9f9f9;
  border-left: 4px solid #ccc;
}
</style>
