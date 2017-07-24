<template>
    <transition name="slide-up">
        <ul :class="classes" v-show="visible">
            <li>
                <span :class="arrowClasses" @click="handleExpand">
                    <i-icon type="arrow-right-b"></i-icon>
                </span>
                <i-checkbox
                    v-if="showCheckbox"
                    :value="data.checked"
                    :indeterminate="indeterminate"
                    :disabled="data.disabled || data.disableCheckbox"
                    @click.native.prevent="handleCheck"></i-checkbox>
                <span :class="titleClasses" v-html="data.title" @click="handleSelect"></span>
                <i-tree-node
                    v-for="item in data.children"
                    :key="item"
                    :data="item"
                    :visible="data.expand"
                    :multiple="multiple"
                    :show-checkbox="showCheckbox">
                </i-tree-node>
            </li>
        </ul>
    </transition>
</template>
<script>
    import iCheckbox from '../checkbox/checkbox.vue';
    import Emitter from '../../mixins/emitter';
    import { findComponentsDownward } from '../../utils/assist';

    const prefixCls = 'fv-tree';

    export default {
        name: 'iTreeNode',
        mixins: [ Emitter ],
        components: { iCheckbox },
        props: {
            data: {
                type: Object,
                default () {
                    return {};
                }
            },
            multiple: {
                type: Boolean,
                default: false
            },
            showCheckbox: {
                type: Boolean,
                default: false
            },
            visible: {
                type: Boolean,
                default: false
            }
        },
        data () {
            return {
                prefixCls: prefixCls,
                indeterminate: false
            };
        },
        computed: {
            classes () {
                return [
                    `${prefixCls}-children`
                ];
            },
            selectedCls () {
                return [
                    {
                        [`${prefixCls}-node-selected`]: this.data.selected
                    }
                ];
            },
            arrowClasses () {
                return [
                    `${prefixCls}-arrow`,
                    {
                        [`${prefixCls}-arrow-disabled`]: this.data.disabled,
                        [`${prefixCls}-arrow-open`]: this.data.expand,
                        [`${prefixCls}-arrow-hidden`]: !(this.data.children && this.data.children.length)
                    }
                ];
            },
            titleClasses () {
                return [
                    `${prefixCls}-title`,
                    {
                        [`${prefixCls}-title-selected`]: this.data.selected
                    }
                ];
            }
        },
        methods: {
            handleExpand () {
                if (this.data.disabled) return;
                this.$set(this.data, 'expand', !this.data.expand);
            },
            handleSelect () {
                if (this.data.disabled) return;
                if (this.data.selected) {
                    this.data.selected = false;
                } else if (this.multiple) {
                    this.$set(this.data, 'selected', !this.data.selected);
                } else {
                    this.dispatch('iTree', 'selected', this.data);
                }
                this.dispatch('iTree', 'on-selected');
            },
            handleCheck () {
                if (this.disabled) return;
                const checked = !this.data.checked;
                if (!checked || this.indeterminate) {
                    findComponentsDownward(this, 'iTreeNode').forEach(node => node.data.checked = false);
                } else {
                    findComponentsDownward(this, 'iTreeNode').forEach(node => node.data.checked = true);
                }
                this.data.checked = checked;
                this.dispatch('iTree', 'checked');
                this.dispatch('iTree', 'on-checked');
            },
            setIndeterminate () {
                this.indeterminate = this.data.checked ? false : findComponentsDownward(this, 'iTreeNode').some(node => node.data.checked);
            }
        },
        created () {
            // created node.vue first, mounted tree.vue second
            if (!this.data.checked) this.$set(this.data, 'checked', false);
        },
        mounted () {
            this.$on('indeterminate', () => {
                this.broadcast('iTreeNode', 'indeterminate');
                this.setIndeterminate();
            });
        }
    };
</script>