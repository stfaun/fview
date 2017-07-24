<style>
    .demo-col div{
        background: #f50;
    }
</style>
<template>
    <div>
        <i-row :gutter="16">
            <i-col class-name="demo-col" span="4" v-for="i in n" key="i">
                <div>col-8</div>
            </i-col>
        </i-row>
        <i-button @click="add">add</i-button>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                n: 2
            }
        },
        methods: {
            add () {
                this.n++;
            }
        }
    }
</script>
