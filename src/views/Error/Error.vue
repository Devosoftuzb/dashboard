<template>
  <div>
    <section class="bg-gray-400 dark:bg-[#222E3C]">
      <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div class="mx-auto max-w-screen-sm text-center">
          <h1
            class="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-red-600"
          >
            404
          </h1>
          <p
            class="mb-4 text-3xl tracking-tight font-bold text-white md:text-4xl"
          >
            Something's missing.
          </p>
          <p class="mb-4 text-lg font-light text-white">
            Sorry, we can't find that page. You'll find lots to explore on the
            home page.
          </p>
          <router-link
            to="/"
            class="inline-flex text-white bg-blue-600 border-2 hover:bg-white hover:text-blue-600 hover:border-blue-600 hover:border-2 focus:ring-4 focus:outline-none focus:ring-blue-600 font-medium rounded-lg text-sm px-5 py-2.5 text-center my-4"
            >Back to Homepage</router-link
          >
        </div>
      </div>
    </section>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>