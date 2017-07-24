<template>
    <li :class="classes" @mouseenter="handleMouseenter" @mouseleave="handleMouseleave">
        <div :class="[prefixCls + '-submenu-title']" ref="reference" @click="handleClick">
            <slot name="title"></slot>
            <i-icon type="ios-arrow-down" :class="[prefixCls + '-submenu-title-icon']"></i-icon>
        </div>
        <ul :class="[prefixCls]" v-if="mode === 'vertical'" v-show="opened"><slot></slot></ul>
        <transition name="slide-up" v-else>
            <i-drop
                v-show="opened"
                placement="bottom"
                ref="drop"
                :style="dropStyle"><slot></slot></i-drop>
        </transition>
    </li>
</template>
<script>
    import iDrop from '../select/dropdown.vue';
    import iIcon from '../icon/icon.vue';
    import { getStyle, findComponentUpward } from '../../utils/assist';
    import Emitter from '../../mixins/emitter';

    const prefixCls = 'fv-menu';

    export default {
        name: 'iSubmenu',
        mixins: [ Emitter ],
        components: { iIcon, iDrop },
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
                prefixCls: prefixCls,
                active: false,
                opened: false,
                dropWidth: parseFloat(getStyle(this.$el, 'width')),
                parent: findComponentUpward(this, 'iMenu')
            };
        },
        computed: {
            classes () {
                return [
                    `${prefixCls}-submenu`,
                    {
                        [`${prefixCls}-item-active`]: this.active,
                        [`${prefixCls}-opened`]: this.opened,
                        [`${prefixCls}-submenu-disabled`]: this.disabled
                    }
                ];
            },
            mode () {
                return this.parent.mode;
            },
            accordion () {
                return this.parent.accordion;
            },
            dropStyle () {
                let style = {};

                if (this.dropWidth) style.minWidth = `${this.dropWidth}px`;
                return style;
            }
        },
        methods: {
            handleMouseenter () {
                if (this.disabled) return;
                if (this.mode === 'vertical') return;

                clearTimeout(this.timeout);
                this.timeout = setTimeout(() => {
                    this.parent.updateOpenKeys(this.name);
                    this.opened = true;
                }, 250);
            },
            handleMouseleave () {
                if (this.disabled) return;
                if (this.mode === 'vertical') return;

                clearTimeout(this.timeout);
                this.timeout = setTimeout(() => {
                    this.parent.updateOpenKeys(this.name);
                    this.opened = false;
                }, 150);
            },
            handleClick () {
                if (this.disabled) return;
                if (this.mode === 'horizontal') return;
                const opened = this.opened;
                if (this.accordion) {
                    this.parent.$children.forEach(item => {
                        if (item.$options.name === 'iSubmenu') item.opened = false;
                    });
                }
                this.opened = !opened;
                this.parent.updateOpenKeys(this.name);
            }
        },
        watch: {
            mode (val) {
                if (val === 'horizontal') {
                    this.$refs.drop.update();
                }
            },
            opened (val) {
                if (this.mode === 'vertical') return;
                if (val) {
                    // set drop a width to fixed when menu has fixed position
                    this.dropWidth = parseFloat(getStyle(this.$el, 'width'));
                    this.$refs.drop.update();
                } else {
                    this.$refs.drop.destroy();
                }
            }
        },
        mounted () {
            this.$on('on-menu-item-select', (name) => {
                if (this.mode === 'horizontal') this.opened = false;
                this.dispatch('iMenu', 'on-menu-item-select', name);
                return true;
            });
            this.$on('on-update-active-name', (status) => {
                this.active = status;
            });
        }
    };
</script>
