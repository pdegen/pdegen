<script setup lang="ts">
export type Video = {
  src: string
}

defineProps<{
  videos: Video[]
}>()
</script>

<template>
  <div id="videoCarousel" class="carousel slide" data-bs-ride="carousel">
    <button
      class="carousel-control-prev"
      type="button"
      data-bs-target="#videoCarousel"
      data-bs-slide="prev"
    >
      <i class="fa-solid fa-chevron-left text-dark fa-2xl"></i>
    </button>
    <div class="carousel-inner">
      <div
        v-for="(video, index) in videos"
        :key="index"
        :class="['carousel-item', { active: index === 0 }]"
      >
        <div class="ratio ratio-16x9">
          <iframe
            width="560"
            height="315"
            :src="video.src"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </div>

    <button
      class="carousel-control-next"
      type="button"
      data-bs-target="#videoCarousel"
      data-bs-slide="next"
    >
      <i class="fa-solid fa-chevron-right text-dark fa-2xl"></i>
    </button>
  </div>
</template>

<style scoped>
.carousel-control-prev {
  margin-left: -4rem;
}

.carousel-control-next {
  margin-right: -4rem;
}

@media (max-width: 576px) {
  .carousel-control-prev {
    margin-left: -3rem;
  }
  .carousel-control-next {
    margin-right: -3rem;
  }
}
</style>
