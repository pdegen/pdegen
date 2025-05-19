<script setup lang="ts">
import { ref } from 'vue'
import Papa from 'papaparse'
import quotesCSV from '@/assets/data/quotes.csv?raw'

type QuoteType = {
  quote: string
  author: string
  work?: string
}

// must have header with QuoteType col names
function parseCSV(): QuoteType[] {
  const parsed = Papa.parse<QuoteType>(quotesCSV, {
    header: true,
    skipEmptyLines: true,
  })

  return parsed.data
}
function getNextQuote(quotes: QuoteType[]): QuoteType {
  //const quote = quotes[quotes.length - 1]

  // random quote
  // const quote = quotes[Math.floor(Math.random() * quotes.length)]
  // quote.quote.replace(/\\n/g, '<br>')

  // cycle next quote
  currentQuoteIndex = currentQuoteIndex + 1 == quotes.length ? 0 : currentQuoteIndex + 1
  const quote = shuffled[currentQuoteIndex]

  // quote of the day
  //const index = Math.floor((Date.now() / (1000 * 60 * 60 * 24)) % quotes.length)
  //const quote = quotes[index]

  return quote
}

const quotes = parseCSV()
const shuffled = [...quotes].sort(() => 0.5 - Math.random())
let currentQuoteIndex = 0

const quote = ref<QuoteType>(getNextQuote(shuffled))
//const quote = ref<QuoteType>(quotes[quotes.length - 1])
</script>

<template>
  <div class="container text-center">
    <h4 class="fw-normal" v-html="`&ldquo;${quote.quote.replace(/\n/g, '<br>')}&rdquo;`"></h4>
    <h5 class="fw-normal">
      —{{ quote.author
      }}<span v-if="quote.work"
        >, <i>{{ quote.work }}</i></span
      >
    </h5>
    <br />
    <button type="button" class="btn btn-primary btn-lg" @click="quote = getNextQuote(quotes)">
      Re-roll
    </button>
  </div>
</template>

<style scoped>
.quote-of-the-day {
  font-family: serif;
  background: #f9f9f9;
  border-left: 4px solid #ccc;
}
</style>
