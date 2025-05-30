<script setup lang="ts">
import { ref } from 'vue'

withDefaults(
  defineProps<{
    src: string
    alt: string
    backgroundColor?: string
  }>(),
  {
    backgroundColor: 'rgba(0, 0, 0, 0.85)',
  },
)

const showModal = ref(false)
</script>
<template>
  <div>
    <img
      :src="src"
      :alt="alt"
      class="img-fluid"
      @click="showModal = true"
      style="cursor: zoom-in"
    />

    <div
      class="modal fade show"
      tabindex="-1"
      v-if="showModal"
      style="display: block; cursor: zoom-out"
      :style="{ backgroundColor: backgroundColor }"
      ref="modal"
    >
      <div class="modal-dialog modal-fullscreen m-0">
        <div class="modal-content bg-transparent border-0 position-relative">
          <!-- <button
            type="button"
            class="btn-close position-absolute end-0 top-0 m-3"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button> -->

          <!-- Fullscreen clickable backdrop inside modal -->
          <div
            class="position-absolute top-0 start-0 w-100 h-100"
            @click="showModal = false"
            style="z-index: 2"
          ></div>

          <!-- Centered image, z-index beneath clickable backdrop -->
          <div
            class="modal-body p-0 d-flex justify-content-center align-items-center"
            style="z-index: 0"
          >
            <img
              :src="src"
              :alt="alt"
              class="img-fluid"
              style="max-height: 100vh; object-fit: contain"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
