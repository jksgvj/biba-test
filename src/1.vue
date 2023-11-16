<template>
  <div>
    <input type="file" @change="uploadImage">
    <div v-for="image in images" :key="image" @click="showImage(image)">
      <img :src="'http://localhost:8080/images/' + image" alt="Image">
    </div>
    <div v-if="selectedImage">
      <img :src="'http://localhost:8080/images/' + selectedImage" alt="Image">
    </div>
  </div>
</template>
 
<script>
export default {
  data() {
    return {
      images: [],
      selectedImage: ''
    }
  },
  methods: {
    async uploadImage(e) {
      const file = e.target.files[0]
 
      const formData = new FormData()
      formData.append('image', file)
 
      await fetch('http://localhost:8080/upload', {
        method: 'POST',
        body: formData
      })
 
      this.loadImages()
    },
    async loadImages() {
      const response = await fetch('http://localhost:8080/images')
      this.images = await response.json()
    },
    showImage(image) {
      this.selectedImage = image
    }
  },
  created() {
    this.loadImages()
  }
};
</script>