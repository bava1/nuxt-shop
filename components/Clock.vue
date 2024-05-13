<template>
    <div class="clock">
        <h5 class="mt-3 text-bold">
            {{ localTime }}
            {{ new Date().toLocaleString('cs', { weekday: 'long'}) }}
            {{ new Date().toLocaleDateString('cs') }}
        </h5>
    </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
const localTime = ref('');

const showLocaleTime = () => {
    setInterval(() => localTime.value = new Date().toLocaleTimeString(), 1000);
};

onMounted(() => {
    showLocaleTime();
});

</script>

<style>
.clock {
    width: 100%;
    text-align: center;
}
</style>
