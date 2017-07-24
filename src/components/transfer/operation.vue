<template>
    <div :class="prefixCls + '-operation'">
        <i-button type="primary" size="small" :disabled="!rightActive" @click.native="moveToLeft">
            <i-icon type="ios-arrow-left"></i-icon> {{ operations[0] }}
        </i-button>
        <i-button type="primary" size="small" :disabled="!leftActive" @click.native="moveToRight">
            {{ operations[1] }} <i-icon type="ios-arrow-right"></i-icon>
        </i-button>
    </div>
</template>
<script>
    import iButton from '../button/button.vue';
    import iIcon from '../icon/icon.vue';

    export default {
        name: 'iOperation',
        components: { iButton, iIcon },
        props: {
            prefixCls: String,
            operations: Array,
            leftActive: Boolean,
            rightActive: Boolean
        },
        methods: {
            moveToLeft () {
                this.$parent.moveTo('left');
            },
            moveToRight () {
                this.$parent.moveTo('right');
            }
        }
    };
</script>
