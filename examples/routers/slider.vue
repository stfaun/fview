<template>
    <div style="margin: 0 400px;">
        <i-slider v-model="value1"></i-slider>
        <i-slider v-model="value2" range></i-slider>
        <i-slider v-model="value3" range disabled></i-slider>
        {{ value1 }}{{value2}}
        <div @click="value1 = 13">change value1</div>
        <br>
        <i-slider v-model="value9" :tip-format="format"></i-slider>
        <i-slider v-model="value10" :tip-format="hideFormat"></i-slider>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                value1: 25,
                value2: [20, 50],
                value3: [20, 50],
                value9: 25,
                value10: 25
            }
        },
        methods: {
            format (val) {
                return '进度' + val + '%';
            },
            hideFormat () {
                return null;
            }
        }
    }
</script>
