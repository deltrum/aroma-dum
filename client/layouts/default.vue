<template>
    <div class="wrapper">
        <Header />
        <Nuxt />
        <Footer />
    </div>
</template>

<script lang="ts" >
import { Vue, Component } from "vue-property-decorator";
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";

@Component({ name: "Wrapper", components: { Header, Footer } })
export default class Wrapper extends Vue {}
</script>