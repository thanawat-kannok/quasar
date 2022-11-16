<template>
  <div class="" style="max-width: 150px">
    <div class="q-gutter-md">
      <q-select filled v-model="model" :options="options" label="Filled" />
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "IndexPage",
});
</script>
