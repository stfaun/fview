<template>
    <div :class="classes" ref="cell">
        <template v-if="renderType === 'index'">{{naturalIndex + 1}}</template>
        <template v-if="renderType === 'selection'">
            <i-checkbox :value="checked" @on-change="toggleSelect" :disabled="disabled"></i-checkbox>
        </template>
        <template v-if="renderType === 'operation'">
            <div @mouseenter.stop="showOperate" @mouseleave.stop="hideOperate">
                <i-icon :type="column.icon" :disabled="disabled" style="cursor:pointer" v-if="column.icon"></i-icon>
                <i-icon type="more" :disabled="disabled" style="cursor:pointer" v-if="!column.icon"></i-icon>
            </div>
        </template>
        <template v-if="renderType === 'action'">
            <div>
                <a v-for="item in operations" v-if="row['op-'+item.value]" href="javascript:;" class="operate-btn" @click.prevent="$parent.$parent.$emit(item.value,row)"><f-icon :type="item.icon"></f-icon> {{ item.text }}</a>
            </div>
        </template>
        <template v-if="renderType === 'normal'"><span v-html="row[column.key]"></span></template>
    </div>
</template>
<script>
    import Vue from 'vue';
    import iCheckbox from '../checkbox/checkbox.vue';
    import iIcon from '../icon/icon.vue';
    import fIcon from '../icon/ficon.vue';
    import { getStyle } from '../../utils/assist';

    export default {
        name: 'iTableCell',
        components: { iCheckbox, iIcon, fIcon },
        props: {
            prefixCls: String,
            row: Object,
            column: Object,
            naturalIndex: Number,    // index of rebuildData
            index: Number,           // _index of data
            checked: Boolean,
            disabled: Boolean,
            fixed: {
                type: [Boolean, String],
                default: false
            }
        },
        data () {
            return {
                renderType: '',
                uid: -1,
                context: this.$parent.$parent.currentContext,
                operations: this.$parent.$parent.operations
            };
        },
        computed: {
            classes () {
                return [
                    `${this.prefixCls}-cell`,
                    {
                        [`${this.prefixCls}-hidden`]: !this.fixed && this.column.fixed && (this.column.fixed === 'left' || this.column.fixed === 'right'),
                        [`${this.prefixCls}-cell-ellipsis`]: this.column.ellipsis || false
                    }
                ];
            }
        },
        methods: {
            compile () {
                if (this.column.render && this.renderType === 'render') {
                    this.$el.innerHTML = '';
                    const component = new Vue({
                        functional: true,
                        render: (h) => {
                            return this.column.render(h, {
                                row: this.row,
                                column: this.column,
                                index: this.index
                            });
                        }
                    });
                    const Cell = component.$mount();
                    this.$refs.cell.appendChild(Cell.$el);
                }
            },
            destroy () {

            },
            toggleSelect () {
                this.$parent.$parent.toggleSelect(this.index);
            },
            showOperate () {
                let boundingRect = this.$el.getBoundingClientRect();
                this.$parent.$parent.showOperate(this.index, boundingRect.top, boundingRect.bottom);
            },
            hideOperate () {
                let boundingRect = this.$el.getBoundingClientRect();
                this.$parent.$parent.hideOperate(this.index, boundingRect.top, boundingRect.bottom);
            }
        },
        created () {
            if (this.column.type === 'index') {
                this.renderType = 'index';
            } else if (this.column.type === 'selection') {
                this.renderType = 'selection';
            } else if (this.column.type === 'operation') {
                this.renderType = 'operation';
            } else if (this.column.type === 'action') {
                this.renderType = 'action';
            } else if (this.column.render) {
                this.renderType = 'render';
            } else {
                this.renderType = 'normal';
            }
        },
        mounted () {
            this.$nextTick(() => {
                this.compile();
            });
        },
        beforeDestroy () {
            this.destroy();
        },
        watch: {
            naturalIndex () {
                this.destroy();
                this.compile();
            }
        }
    };
</script>
