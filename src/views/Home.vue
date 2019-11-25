<template>
  <Sidebar />
</template>
<script>
import Sidebar from '../components/Sidebar.vue'
import VImageInput from 'vuetify-image-input/a-la-carte';
// import InputEvent from '../components/InputEvent.vue'
export default {
  
  data: () => ({
    drawer: true,
  }),
  components: {
    Sidebar
    // InputEvent
  },
  methods: {
    dashboard() {
      this.$router.push("/sidebar");
    },
    addevent() {
      this.$router.push("/addevent");
    }
  }
};
</script>