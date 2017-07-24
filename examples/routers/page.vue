<template>
    <div>
        <i-page :total="100" :current="current" show-sizer></i-page>
        {{ current }}
        <i-button @click="current = 1">set current</i-button>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                current: 2
            }
        }
    }
</script>
