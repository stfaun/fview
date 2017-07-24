<template>
    <ul :class="[prefixCls + '-item-group']">
        <span :class="[prefixCls + '-item-group-title']">{{ title }}</span>
        <slot></slot>
    </ul>
</template>
<script>
    const prefixCls = 'fv-fmenu';

    export default {
        name: 'fMenuGroup',
        props: {
            title: {
                type: String,
                default: ''
            }
        },
        data () {
            return {
                prefixCls: prefixCls
            };
        }
    };
</script>
