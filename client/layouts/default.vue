<template>
    <div class="wrapper">
        <Header />
        <Nuxt />
    </div>
</template>

<script lang="ts" >
import { Vue, Component } from "vue-property-decorator";
import Header from "@/components/Header.vue";

@Component({ name: "Wrapper", props: { Header } })
export default class Wrapper extends Vue {}
</script>