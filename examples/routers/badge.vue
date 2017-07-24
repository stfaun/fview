<style scoped>
    .demo-badge{
        width: 42px;
        height: 42px;
        background: #eee;
        border-radius: 6px;
        display: inline-block;
    }
</style>
<style>
    .demo-badge-alone{
        background: #5cb85c !important;
    }
</style>
<template>
    <div>
        <i-badge count="3">
            <a href="#" class="demo-badge"></a>
        </i-badge>
        <i-badge dot>
            <a href="#" class="demo-badge"></a>
        </i-badge>
        <i-badge dot>
            <i-icon type="ios-bell-outline" size="26"></i-icon>
        </i-badge>
        <i-badge dot>
            <a href="#">可以是一个链接</a>
        </i-badge>
        <i-badge count="100">
            <a href="#" class="demo-badge"></a>
        </i-badge>
        <i-badge count="1000" overflow-count="999">
            <a href="#" class="demo-badge"></a>
        </i-badge>
        <br>
        <i-badge count="10"></i-badge>
        <br><br>
        <i-badge count="20" class-name="demo-badge-alone"></i-badge>
    </div>
</template>
<script>
    export default {
        props: {},
        data () {
            return {};
        },
        computed: {},
        methods: {}
    };
</script>