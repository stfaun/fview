<template>
    <li :class="classes" @click.stop="select" @mouseout.stop="blur" v-show="!hidden"><slot>{{ showLabel }}</slot></li>
</template>
<script>
    import Emitter from '../../mixins/emitter';

    const prefixCls = 'fv-fselect-item';

    export default {
        name: 'fOption',
        componentName: 'select-item',
        mixins: [ Emitter ],
        props: {
            value: {
                type: [String, Number],
                required: true
            },
            label: {
                type: [String, Number]
            },
            disabled: {
                type: Boolean,
                default: false
            },
            query: {
                type: Boolean,
                default: false
            },
            list: {
                type: Array
            }
        },
        data () {
            return {
                selected: false,
                index: 0,    // for up and down to focus
                isFocus: false,
                hidden: this.query,    // for search
                searchLabel: ''    // the value is slot,only for search
            };
        },
        computed: {
            classes () {
                return [
                    `${prefixCls}`,
                    {
                        [`${prefixCls}-disabled`]: this.disabled,
                        [`${prefixCls}-selected`]: this.selected,
                        [`${prefixCls}-focus`]: this.isFocus
                    }
                ];
            },
            showLabel () {
                return (this.label) ? this.label : this.value;
            }
        },
        methods: {
            select () {
                if (this.disabled) {
                    return false;
                }

                this.dispatch('fSelect', 'on-select-selected', this.value);
            },
            blur () {
                this.isFocus = false;
            },
            queryChange (val) {
                const parsedQuery = val.replace(/(\^|\(|\)|\[|\]|\$|\*|\+|\.|\?|\\|\{|\}|\|)/g, '\\$1');
                this.searchLabel = this.$el.innerHTML;
                if (this.query) {
                    this.hidden = (this.searchLabel == '' || this.list.filter((item) => { return item === this.searchLabel }) != '');
                } else {
                    this.hidden = !new RegExp(parsedQuery, 'i').test(this.searchLabel);
                }
                if (!this.hidden && this.searchLabel === val)
                    this.isFocus = true;
                else
                    this.isFocus = false;
            }
        },
        mounted () {
            this.dispatch('fSelect', 'append');
            this.$on('on-select-close', () => {
                this.isFocus = false;
            });
            this.$on('on-query-change', (val) => {
                this.$nextTick(() => {
                    this.queryChange(val);
                });
            });
        },
        beforeDestroy () {
            this.dispatch('fSelect', 'remove');
        }
    };
</script>
