<template>
  <div class="">
    <input
      type="text"
      placeholder="测试1"
      v-model="sea"
      @input="valChange(sea)"
    />
  </div>

  测试
  <br />
  <br />
  <br />
</template>
<script lang="ts" setup>
import { defineProps, ref, defineEmits, watch } from 'vue'

const props = defineProps({
  name: {
    type: String,
    required: true
  }
})

const emit = defineEmits(['update:name'])

const sea = ref(props.name)
const valChange = (e: string) => {
  emit('update:name', e)
}

watch(
  () => props.name,
  () => {
    sea.value = props.name
  },
  { deep: true }
)
</script>
<style lang="scss" scoped></style>
