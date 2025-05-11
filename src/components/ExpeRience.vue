<template>
    
    <div class="scroll-smooth">
        <section class="px-6 py-12 bg-white max-w-4xl mx-auto">
  <h2 class="text-4xl font-bold mb-8">
    Experience<span class="text-purple-600">.</span>
  </h2>

  <div class="flex flex-col sm:flex-row gap-6">
    <!-- Left: Company List -->
    <div class="flex sm:flex-col gap-4 text-left">
      <button
        v-for="(company, index) in companies"
        :key="company"
        @click="selected = index"
        :class="[
          'text-left text-lg font-medium hover:text-purple-600',
          selected === index ? 'text-purple-600 border-l-2 pl-3 border-purple-600' : 'pl-3 text-gray-600'
        ]"
      >
        {{ company }}
      </button>
    </div>

    <!-- Right: Details -->
    <div class="flex-1">
      <h3 class="text-xl font-semibold">
        Engineer @ <span class="text-purple-600">{{ companies[selected] }}</span>
      </h3>
      <p class="text-sm text-gray-500 mb-4">May 2018 – Present</p>

      <ul class="space-y-3 text-gray-700">
        <li class="flex items-start gap-2">
          <svg class="text-purple-600 w-4 h-4 mt-1" fill="currentColor" viewBox="0 0 20 20">
            <path
              fill-rule="evenodd"
              d="M16.707 5.293a1 1 0 00-1.414 0L8 12.586 4.707 9.293a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414 0l8-8a1 1 0 000-1.414z"
              clip-rule="evenodd"
            />
          </svg>
          Developed and shipped highly interactive web applications for Apple Music using Ember.js.
        </li>
        <li class="flex items-start gap-2">
          <svg class="text-purple-600 w-4 h-4 mt-1" fill="currentColor" viewBox="0 0 20 20">
            <path
              fill-rule="evenodd"
              d="M16.707 5.293a1 1 0 00-1.414 0L8 12.586 4.707 9.293a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414 0l8-8a1 1 0 000-1.414z"
              clip-rule="evenodd"
            />
          </svg>
          Built and shipped the Apple Music Extension within Facebook Messenger leveraging internal APIs.
        </li>
        <li class="flex items-start gap-2">
          <svg class="text-purple-600 w-4 h-4 mt-1" fill="currentColor" viewBox="0 0 20 20">
            <path
              fill-rule="evenodd"
              d="M16.707 5.293a1 1 0 00-1.414 0L8 12.586 4.707 9.293a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414 0l8-8a1 1 0 000-1.414z"
              clip-rule="evenodd"
            />
          </svg>
          Contributed extensively to MusicKit.js to add an Apple Music player to web apps.
        </li>
      </ul>
    </div>
  </div>
</section>
</div>


    

</template>
<script setup>
import { ref } from 'vue'

const companies = ['Apple', 'Microsoft', 'Spotify', 'Stripe', 'Webflow']
const selected = ref(0)
</script>
