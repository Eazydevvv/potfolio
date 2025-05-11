<template>

<div class="scroll-smooth">
  <!-- All your sections (e.g., Home, Projects, About) -->
      <section id="About" class="bg-white py-16 px-6 sm:px-12 lg:px-32">
        <h2 class="text-4xl font-bold text-gray-900 mb-4">
            About <span class="text-purple-600">me.</span>
        </h2>
        <p class="text-gray-700 max-w-2xl mb-12">
            Developing beautiful and functional websites is what I love doing, and that’s why I give my all in every new
            challenge.
        </p>

        <div class=" flex-wrap md:grid-cols-2 gap-8">
            <!-- Stack Section -->
            <div>
                <h3 class="text-xl font-semibold mb-4">My Stack.</h3>
                <div class="flex bg-gray-100  rounded-lg flex-wrap   gap-3">
                    <span class="px-4 py-2 bg-gray-100 rounded-lg text-sm font-medium text-gray-700">Web Design</span>
                    <span class="px-4 py-2 bg-gray-100 rounded-lg text-sm font-medium text-gray-700">UI/UX
                        Expertise</span>
                    <span class="px-4 py-2 bg-gray-100 rounded-lg text-sm font-medium text-gray-700">JavaScript
                        Proficiency</span>
                    <span class="px-4 py-2 bg-gray-100 rounded-lg text-sm font-medium text-gray-700">Team Player</span>
                    <span class="px-4 py-2 bg-gray-100 rounded-lg text-sm font-medium text-gray-700">Learning
                        Always</span>
                    <span class="px-4 py-2 bg-gray-100 rounded-lg text-sm font-medium text-gray-700">Keeping Abreast of
                        Trends</span>
                </div>
            </div>

            <!-- Special Place Section -->
            <div>
                <h3 class="text-xl font-semibold mb-4">My Special Place.</h3>
                <div class="rounded-xl overflow-hidden bg-gray-100">
                    <img src="@/assets/gettyimages-1439695288-640x640.jpg" alt="Globe"
                        class="w-full h-auto object-cover" />
                </div>
            </div>
        </div>
    </section>
</div>



</template>

<script setup>
// No JavaScript logic needed for now
</script>