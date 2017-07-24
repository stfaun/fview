<template>
    <li :class="classes" @click.stop="handleClick"><slot></slot></li>
</template>
<script>
    import Emitter from '../../mixins/emitter';
    const prefixCls = 'fv-fmenu';

    export default {
        name: 'fMenuItem',
        mixins: [ Emitter ],
        props: {
            name: {
                type: [String, Number],
                required: true
            },
            disabled: {
                type: Boolean,
                default: false
            }
        },
        data () {
            return {
                active: false
            };
        },
        computed: {
            classes () {
                return [
                    `${prefixCls}-item`,
                    {
                        [`${prefixCls}-item-active`]: this.active,
                        [`${prefixCls}-item-selected`]: this.active,
                        [`${prefixCls}-item-disabled`]: this.disabled
                    }
                ];
            }
        },
        methods: {
            handleClick () {
                if (this.disabled) return;

                let parent = this.$parent;
                let name = parent.$options.name;
                while (parent && (!name || name !== 'fSubmenu')) {
                    parent = parent.$parent;
                    if (parent) name = parent.$options.name;
                }

                if (parent) {
                    this.dispatch('fSubmenu', 'on-menu-item-select', this.name);
                } else {
                    this.dispatch('fMenu', 'on-menu-item-select', this.name);
                }
            }
        },
        mounted () {
            this.$on('on-update-active-name', (name) => {
                if (this.name === name) {
                    this.active = true;
                    this.dispatch('fSubmenu', 'on-update-active-name', true);
                } else {
                    this.active = false;
                }
            });
        }
    };
</script>
