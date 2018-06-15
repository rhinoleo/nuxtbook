<template>
  <section class="container">
    <h1 class="title">
      ADDWORK
    </h1>
    <div class="form-group">
        <label>work label</label>
        <input type="text"  v-model="work.label">
    </div>
    <div class="form-group">
        <label>work abstract</label>
        <input type="text"  v-model="work.abstract">
    </div>
    <div class="form-group">
        <label>work picture</label>
        <input type="text"  v-model="work.picture">
    </div>
    <button class="btn btn-primary" @click="submit">Submit</button>
    <hr>
    <input type="file" @change="onFileChanged">
    <button @click="onUpload">Upload!</button>
    <hr>
    <button class="btn btn-primary" @click="getData">Get Data</button>
    <ul class="list-group">
      <li class="list-group-item" v-for="(work, id) in works" :key="id">{{ work.label }} - {{ work.abstract }}</li>
    </ul>
  </section>
</template>

<script>
import axios from '~/plugins/axios'

export default {
  // async asyncData () {
  //   let { data } = await axios.get('/api/works')
  //   return { works: data.data }
  // },
  data () {
    return {
      work: {
          label:'',
          abstract:''
      },
      works: [],
      selectedFile: null
    }
  },
  head () {
    return {
      title: 'Add a work'
    }
  },
  methods: {
      submit() {
          axios.post('https://book-73f3b.firebaseio.com/data.json', this.work)
          .then(response => {
            console.log(response);
          }, error => {
            console.log(error);
          });
      },
      getData() {
        axios.get('https://book-73f3b.firebaseio.com/data.json')
        .then(response => {
          this.works = response.data;
        })
      },
      onFileChanged (event) {
        this.selectedFile = event.target.files[0]
      },
      onUpload() {
        axios.post('my-domain.com/file-upload', this.selectedFile)
      }
  }
}
</script>

<style scoped>
.title
{
  margin: 30px 0;
}
.users
{
  list-style: none;
  margin: 0;
  padding: 0;
}
.user
{
  margin: 10px 0;
}
</style>
