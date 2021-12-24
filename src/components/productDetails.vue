<template>
    <div>
        <ul class="list-dots mb-0">
        <li v-for="detail in details" :key="detail">{{detail}} </li>
        <br>
        </ul>
    </div>
</template>
<script>
export default {
  name: 'productDetails',
  props: {
      details: Array
  }
}
</script>