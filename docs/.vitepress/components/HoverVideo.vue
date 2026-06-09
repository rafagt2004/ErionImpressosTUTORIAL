<script setup>
import { ref, nextTick } from 'vue'

const video = ref(null)
const modalVideo = ref(null)

const playing = ref(false)
const showModal = ref(false)

const props = defineProps({
  src: String,

  title: {
    type: String,
    default: ''
  },

  description: {
    type: String,
    default: ''
  },

  width: {
    type: String,
    default: '100%'
  },

  playbackRate: {
    type: Number,
    default: 1
  }
})

const play = () => {
  if (!video.value) return

  video.value.playbackRate = props.playbackRate
  video.value.play()

  playing.value = true
}

const pause = () => {
  video.value?.pause()
  playing.value = false
}

const openModal = async () => {
  showModal.value = true

  await nextTick()

  if (!modalVideo.value) return

  const currentTime = video.value?.currentTime || 0

  modalVideo.value.currentTime = currentTime
  modalVideo.value.playbackRate = props.playbackRate

  modalVideo.value.play()
}

const closeModal = () => {
  modalVideo.value?.pause()
  showModal.value = false
}
</script>

<template>
  <div
    class="video-card"
    :style="{ width }"
    @mouseenter="play"
    @mouseleave="pause"
    @click="openModal"
  >
    <div class="video-wrapper">
      <video
        ref="video"
        class="hover-video"
        muted
        loop
        preload="metadata"
      >
        <source :src="src" type="video/mp4" />
      </video>

      <div
        class="play-overlay"
        :class="{ hidden: playing }"
      >
        <div class="play-button">
          <svg
            width="34"
            height="34"
            viewBox="0 0 24 24"
            fill="white"
            style="margin-left:4px"
          >
            <path d="M8 5v14l11-7z" />
          </svg>
        </div>
      </div>
    </div>

    <div
      v-if="title || description"
      class="video-content"
    >
      <h4 v-if="title">
        {{ title }}
      </h4>

      <p v-if="description">
        {{ description }}
      </p>
    </div>
  </div>

  <!-- Modal -->

  <Teleport to="body">
    <div
      v-if="showModal"
      class="modal-backdrop"
      @click.self="closeModal"
    >
      <div class="modal-content">
        <button
          class="close-button"
          @click="closeModal"
        >
          ✕
        </button>

        <video
          ref="modalVideo"
          controls
          class="modal-video"
        >
          <source :src="src" type="video/mp4" />
        </video>
      </div>
    </div>
  </Teleport>
</template>

<style scoped>
.video-card {
  border: 1px solid var(--vp-c-divider);
  border-radius: 16px;
  overflow: hidden;

  background: var(--vp-c-bg-soft);

  transition:
    transform .2s ease,
    box-shadow .2s ease;

  cursor: pointer;
}

.video-card:hover {
  transform: translateY(-2px);

  box-shadow:
    0 10px 25px rgba(0,0,0,.08);
}

.video-wrapper {
  position: relative;
}

.hover-video {
  width: 100%;
  display: block;

  aspect-ratio: 16 / 9;
  object-fit: cover;
}

.play-overlay {
  position: absolute;
  inset: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  background: rgba(0,0,0,.25);

  backdrop-filter: blur(2px);

  opacity: 1;

  transition:
    opacity .25s ease,
    backdrop-filter .25s ease;

  pointer-events: none;
}

.play-overlay.hidden {
  opacity: 0;
  backdrop-filter: blur(0px);
}

.play-button {
  width: 80px;
  height: 80px;

  border-radius: 999px;

  background: rgba(0,0,0,.65);

  border: 1px solid rgba(255,255,255,.2);

  display: flex;
  align-items: center;
  justify-content: center;

  backdrop-filter: blur(12px);

  box-shadow:
    0 8px 24px rgba(0,0,0,.25);

  transition:
    transform .25s ease,
    box-shadow .25s ease;
}

.video-card:hover .play-button {
  transform: scale(1.08);

  box-shadow:
    0 12px 32px rgba(0,0,0,.35);
}

.video-content {
  padding: 16px;
}

.video-content h4 {
  margin: 0 0 8px;
}

.video-content p {
  margin: 0;

  opacity: .75;

  line-height: 1.5;
}

/* Modal */

.modal-backdrop {
  position: fixed;
  inset: 0;

  background: rgba(0,0,0,.75);

  backdrop-filter: blur(8px);

  display: flex;
  align-items: center;
  justify-content: center;

  z-index: 9999;
}

.modal-content {
  position: relative;

  width: min(1200px, 90vw);
}

.modal-video {
  width: 100%;

  border-radius: 16px;
}

.close-button {
  position: absolute;

  top: -50px;
  right: 0;

  width: 40px;
  height: 40px;

  border: none;
  border-radius: 999px;

  background: rgba(255,255,255,.15);

  color: white;

  cursor: pointer;

  font-size: 20px;
}
</style>