<script setup lang="ts">
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
function getOneQuote(quotes: QuoteType[]): QuoteType {
  //return quotes[quotes.length - 1]

  // random quote
  return quotes[Math.floor(Math.random() * quotes.length)]

  // quote of the day
  //const index = Math.floor((Date.now() / (1000 * 60 * 60 * 24)) % quotes.length)
  //return quotes[index]
}

const quotes = parseCSV()
const quote = getOneQuote(quotes)
</script>

<template>
  <div class="container text-center">
    <h4 class="fw-normal">"{{ quote.quote }}"</h4>
    <h5 class="fw-normal">
      —{{ quote.author
      }}<span v-if="quote.work"
        >, <i>{{ quote.work }}</i></span
      >
    </h5>
  </div>
</template>

<style scoped>
.quote-of-the-day {
  font-family: serif;
  background: #f9f9f9;
  border-left: 4px solid #ccc;
}
</style>
