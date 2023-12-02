<template>
  <div class="bg-[FEFFFE] min-h-screen py-10 pt-14 text-black">
    <div class="border-b-[1px] border-black pb-8">
      <div class="text-left px-5 flex justify-between">
        <!-- <i class="fa-solid fa-angle-left fa-2xl"></i> -->
        <div class=""></div>
        <div class="flex flex-col">
          <div
            class="bg-neutral-600 w-12 h-12 rounded-full absolute top-5 f px-5 py-6 align-top"
          >
            .
            <!-- <i class="fa-brands fa-vuejs fa-xl"></i> -->
          </div>
          <div class="mt-6 text-xl font-bold absolute pl-1">GPT</div>
        </div>
        <div class="space-x-4">
          <router-link to="/call">
            <i class="fa-solid fa-phone fa-xl"></i>
          </router-link>
          <button @click="switchbutton()">
            <i class="fa-solid fa-language fa-xl"></i>
          </button>
          
        </div>
      </div>
    </div>

    <div class="">
      <div
        class="h-[79vh] z-1 overflow-y-scroll flex-col justify-end relative pb-1 px-5"
        id="messageDiv"
        ref="scrollContainer"
      >
        <div class="my-3">
          <div class="text-xs text-neutral-500">Text Message</div>
          <div class="text-xs text-neutral-500">Sat, 20th Oct at 11:11 am</div>
        </div>
        <div class="" v-for="array in messageArray" :key="array">
          <div class="" v-for="array1 in array" :key="array1">
            <div
              class="flex"
              :class="[array1[0] == 'user' ? 'justify-end' : 'justify-start']"
            >
              <div
                class="max-w-[70%] px-3 py-2 my-1 rounded-xl text-sm text-start"
                id="scale-up-center"
                :class="[
                  array1[0] == 'user'
                    ? 'bg-black text-white'
                    : 'bg-neutral-300 text-black',
                ]"
              >
                {{ array1[1] }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="fixed bottom-5 flex">
      <form @submit.prevent="this.send_message()" class="flex">
        <input
          type="text"
          class="w-[81vw] h-12 rounded-3xl border-2 px-3 py-0.1 border-neutral-400 ml-6 text-base"
          placeholder="Aa"
          v-model="message"
        />
        <div class="py-2 px-2 mt-1">
          <button type="submit">
            <i class="fa-solid fa-paper-plane fa-xl"></i>
          </button>
        </div>
      </form>
    </div>
  </div>



  
</template>

<script>
// @ is an alias to /src
import axios from "axios";

export default {
  name: "HomeView",
  data() {
    return {
      message: "",
      messageArray: [],
      language:'english',
    };
  },
  mounted() {
    this.getting_message();
  },
  methods: {
    switchbutton(){
      if(this.language=='english'){
        this.language='nepali';
      }
      else{
        this.language = 'english'
      }
    },
    async getting_message() {
      try {
        const response = await axios.get("https://backend-with-rest.prithaklamsal.repl.co/chat/", {
          headers: {
            "Content-Type": "application/json",
          },
        });
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    },
    async send_message() {
      try {
        const response = await axios.post("https://backend-with-rest.prithaklamsal.repl.co/chat/", {
          language: this.language,
          message: this.message,
        });
        this.messageArray.push(response.data.chat_history);
        // console.log(response)
        // this.getting_message()
        console.log(this.messageArray);
        this.message = "";
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>
