<template>
  <div class="min-h-screen max-h-screen bg-black bg-gradient-to-br from-[#3b3b39] to-[#111111]">
    <!-- <div
      class="absolute min-w-[100vw] min-h-screen max-w-[100vw] max-h-screen bg-[url('../assets/trees.png')] bg-cover bottom-0   blur-[0px] backdrop-brightness-95"
      style="
      z-index: 1
      background-position:;
      background-size:95%;
      background-repeat:no-repeat;

      "
    ></div> -->
    <div
      class="absolute min-w-[100vw] min-h-screen max-w-[100vw] max-h-screen bg-[url('../assets/opeailogo.png')] bg-cover -my-10 bg-center blur-[0px] backdrop-brightness-95"
      style="
      z-index: -1
      background-position:50%;
      background-size:80%;
      background-repeat:no-repeat;

      "
    ></div>
    
    <div class="relative z-20 px-10">
        <div class="text-4xl font-mono text-neutral-300 pt-52 font-bold">DISCOURSE GPT</div>
        <div class="text-neutral-400">AI Innovation, Human Imagination</div>
        <div class="text-xl pt-72 text-neutral-200 font-mono">A project by Students</div>
    </div>
  </div>
</template>
<script>
export default {
  name: "IntroView",
  methods: {},
  mounted() {
    setTimeout(() => {
      this.$router.push("/home");
    }, 2000);
  },
};
</script>
<style>
.route-enter-active,
.route-leave-active {
  transition: opacity 0.15s ease;
}

.route-enter-from,
.route-leave-to {
  opacity: 0.25;
}
</style>
