<template>
  <section class="container">
    <h1 class="title part">
      ajouter un projet
    </h1>
    <div class="form-container">
      <div class="form-group">
          <input type="radio" id="design" value="design" v-model="work.type">
          <label>design</label>
          <input type="radio" id="insitu" value="insitu" v-model="work.type">
          <label>insitu</label>
          <input type="radio" id="autre" value="autre" v-model="work.type">
          <label>autre</label>
      </div>
      <div class="form-group">
          <label>titre</label><br>
          <input type="text"  v-model="work.label">
      </div>
      <div class="form-group">
          <label>accroche</label><br>
          <input type="text"  v-model="work.summary">
      </div>
      <div class="form-group">
          <label>texte</label><br>
          <textarea rows=10 cols=40 v-model="work.text"></textarea>
      </div>
      <div class="form-group">
          <label>année</label><br>
          <input type="text"  v-model="work.date">
      </div>
      <div class="form-group">
          <label>description</label><br>
          <input type="text"  v-model="work.description">
      </div>
      <div class="form-group">
          <label>image</label><br>
          <input type="text"  v-model="work.picture">
      </div>
      <button class="btn btn-primary" @click="submit">Submit</button>
    </div>
    <!-- <hr>
    <input type="file" @change="onFileChanged">
    <button @click="onUpload">Upload!</button>
    <hr>
    <button class="btn btn-primary" @click="getData">Get Data</button>
    <ul class="list-group">
      <li class="list-group-item" v-for="(work, id) in works" :key="id">{{ work.label }} - {{ work.abstract }}</li>
    </ul> -->
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
          type:'',
          summary:'',
          text:'',
          date:'',
          description:'',
          picture:''
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
          this.work = '';
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
.part
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
.form-container
{
  margin: auto;
  width: 50%;
}
.form-group
{
  margin: 10px 0;
  text-align: left;
}
label {
  margin-right: 10px;
}
</style>
