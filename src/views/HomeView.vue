<!-- <template>

  <div class="home">
    <h1>Welcome</h1>
    <p class="text-red-500">This is styled locally.</p>
    <div class="flex w-full md:w-6/12 bg-yellow-400 p-4 m-auto">
      <div class="w-1/2 md:w-3/12 bg-blue-400 hover:bg-red-300 p-10"></div>
      <div class="border-2 border-green-800 w-1/2 md:w-3/12 bg-blue-500 p-10"></div>
    </div>
  </div>
  <TestComp></TestComp>
  <p class="kk">My name is {{username}}</p>
  <input class="border-2 border-violet-700" v-model="myText" type="text" />
  <h1>{{myText}}</h1>
  <button @click="logText">Add</button>
  {{num}}
  <button @click="minusNum">Subtract</button>
</template>

<style scoped>
.home {
  text-align: center;
  padding: 20px;
  background-color: #f0f0f0;
}
</style>

<script>
  import TestComp from "./TestComp"

  export default{
    components: {TestComp},
    data(){
      return{
        username: "Daniel",
        myText: "",
        num:0
      }
    },
    mounted(){
      alert("I just got here")
    },
    methods:{
      logText(){
        console.log(this.myText)
        if(this.num == 10){
          return;
        }
        this.num++
      },
      minusNum(){
       
        if(this.num == 0){
          return;
        }
         this.num--
        
      }
    }
  }
</script> -->
<template>
 <MainNavbar/>
 <HeroView/>
 <AboutMe/>
 <ExpeRience/>
 <SkillsView/>
</template>

<script setup>
import MainNavbar from '@/components/MainNavbar.vue'
import HeroView from '@/components/HeroView.vue'
import AboutMe from '@/components/AboutMe.vue'
import ExpeRience from '@/components/ExpeRience.vue'
import SkillsView from '@/components/SkillsView.vue'

</script>