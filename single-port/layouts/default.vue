<template>
    <div class="container">
      <h1 class="title">BOOK</h1>
      <!-- Make sure to add the <nuxt/> component when creating a layout to display the page component. -->
      <!-- https://nuxtjs.org/guide/views#layouts -->
      <nuxt/>
      <bio/>
      <!-- <contact/> -->
      <my-footer/>
    </div>
</template>

<script>
import MyFooter from '~/components/footer.vue'
import Bio from '~/components/bio.vue'
// import Contact from '~/components/contact.vue'
import store from '~/store'

export default {
  store,
  components: {
    Bio,
    // Contact,
    MyFooter
  }
}
</script>

<style>
.container
{
  margin: 0;
  width: 100%;
  padding: 100px 0;
  text-align: center;
}

.button, .button:visited
{
  display: inline-block;
  color: black;
  letter-spacing: 1px;
  background-color: #fff;
  border: 2px solid #000;
  text-decoration: none;
  text-transform: uppercase;
  padding: 15px 45px;
}

.button:hover, .button:focus
{
  color: #fff;
  background-color: #000;
}

.title
{
  color: #000;
  font-weight: 300;
  font-size: 2.5em;
  margin: 0;
}

</style>
