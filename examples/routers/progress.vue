<template>
    <div>
        <i-progress :percent="percent"></i-progress>
        <i-button-group size="large">
            <i-button icon="ios-plus-empty" @click.native="add"></i-button>
            <i-button icon="ios-minus-empty" @click.native="minus"></i-button>
        </i-button-group>
        <i-progress :percent="25" :stroke-width="5"></i-progress>
        <i-progress :percent="100">
            <i-icon type="checkmark-circled"></i-icon>
            <span>成功</span>
        </i-progress>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                percent: 0
            }
        },
        methods: {
            add () {
                if (this.percent >= 100) {
                    return false;
                }
                this.percent += 10;
            },
            minus () {
                if (this.percent <= 0) {
                    return false;
                }
                this.percent -= 10;
            }
        }
    }
</script>
