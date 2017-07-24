<template>
    <div>
        <i-radio-group v-model="date.sex">
            <i-radio label="male form"></i-radio>
            <i-radio label="female"></i-radio>
        </i-radio-group>
        <i-button @click="handleChange">change</i-button>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                date: {
                    sex: ''
                }
            }
        },
        methods: {
            handleChange () {
                this.date.sex = 'male form';
            }
        }
    }
</script>
