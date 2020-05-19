<template>
  <MotifAbsence/>
</template>

<script>
import MotifAbsence from '../components/MotifAbsence.vue'

export default {
  name: 'Absence',
  props: {
    msg: String
  },
  components: {
    MotifAbsence
  }
};
</script>


<style scoped>

</style>
