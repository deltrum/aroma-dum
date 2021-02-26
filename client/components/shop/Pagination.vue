<template>
    <div class="pagination">
        <ul class="pagination__list">
            <li class="pagination__item">
                <a class="pagination__link pagination__link--arrow" href="#">
                    <svg xmlns="http://www.w3.org/2000/svg" width="11.317" height="20.556" viewBox="0 0 11.317 20.556">
                        <path id="down-chevron" d="M19.488,91.567l-9.21,9.18-9.21-9.18L0,92.639l10.278,10.245L20.556,92.639Z" transform="translate(102.884) rotate(90)" />
                    </svg>
                </a>
            </li>
            <li class="pagination__item" v-for="i in 3" :key="i">
                <a class="pagination__link" href="#">{{ i }}</a>
            </li>
            <li class="pagination__item">
                <a class="pagination__link pagination__link--arrow" href="#">
                    <svg xmlns="http://www.w3.org/2000/svg" width="11.317" height="20.556" viewBox="0 0 11.317 20.556">
                        <path id="down-chevron" d="M19.488,91.567l-9.21,9.18-9.21-9.18L0,92.639l10.278,10.245L20.556,92.639Z" transform="translate(-91.567 20.556) rotate(-90)" />
                    </svg>
                </a>
            </li>
        </ul>
    </div>
</template>

<script lang="ts" >
    import { Vue, Component } from 'vue-property-decorator';

    @Component({ name: 'Pagination' })
    export default class Pagination extends Vue {}
</script>
