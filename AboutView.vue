<template>
  <div v-for="abouts in about" :key="abouts.id" class="about">
    <router-link :to="{name: 'AboutDetails', params: { id: abouts.id }}">
      <h2>{{ abouts.tittle }}</h2>
    </router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      about: [
        { tittle: 'My Profil', id:'Biodata Diri Saya', details: 'lorem' },
        { tittle: 'My Contact', id:'Kontak Yang Dapat Dihubungi', details: 'lorem' },
        
      ]
    }
  }
}
</script>

<style>
.about h2{
  background: yellow;
  padding: 20px;
  border-radius: 10px;
  margin: 10px auto;
  max-width: 600px;
  cursor: pointer;
  color: black;
}
.about h2:hover {
  background: red;
  color: white;
}
.about a{
  text-decoration: none;
}
</style>