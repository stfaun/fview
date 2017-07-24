<template>
    <div>
        <i-tag v-for="item in count" :key="item" :name="item" @on-close="close" closable>标签{{ item + 1 }}</i-tag>
        <i-button icon="ios-plus-empty" type="dashed" size="small" @click="count += 1">添加标签</i-button>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                count: 3
            }
        },
        methods: {
            close (e, name) {
                console.log(e);
                console.log(name);
            }
        }
    }
</script>
