<template>
    <span>
        <ul v-if="data && data.length" :class="[prefixCls + '-menu']">
            <i-casitem
                v-for="item in data"
                :key="item"
                :prefix-cls="prefixCls"
                :data="item"
                :tmp-item="tmpItem"
                @click.native.stop="handleClickItem(item)"
                @mouseenter.native.stop="handleHoverItem(item)"></i-casitem>
        </ul><i-caspanel v-if="sublist && sublist.length" :prefix-cls="prefixCls" :data="sublist" :disabled="disabled" :trigger="trigger" :change-on-select="changeOnSelect"></i-caspanel>
    </span>
</template>
<script>
    import iCasitem from './casitem.vue';
    import Emitter from '../../mixins/emitter';

    export default {
        name: 'iCaspanel',
        mixins: [ Emitter ],
        components: { iCasitem },
        props: {
            data: {
                type: Array,
                default () {
                    return [];
                }
            },
            disabled: Boolean,
            changeOnSelect: Boolean,
            trigger: String,
            prefixCls: String
        },
        data () {
            return {
                tmpItem: {},
                result: [],
                sublist: []
            };
        },
        watch: {
            data () {
                this.sublist = [];
            }
        },
        methods: {
            handleClickItem (item) {
                if (this.trigger !== 'click' && item.children) return;
                this.handleTriggerItem(item);
            },
            handleHoverItem (item) {
                if (this.trigger !== 'hover' || !item.children) return;
                this.handleTriggerItem(item);
            },
            handleTriggerItem (item, fromInit = false) {
                if (item.disabled) return;

                // return value back recursion
                const backItem = this.getBaseItem(item);
                this.tmpItem = backItem;
                this.emitUpdate([backItem]);

                if (item.children && item.children.length){
                    this.sublist = item.children;
                    this.dispatch('iCascader', 'on-result-change', {
                        lastValue: false,
                        changeOnSelect: this.changeOnSelect,
                        fromInit: fromInit
                    });
                } else {
                    this.sublist = [];
                    this.dispatch('iCascader', 'on-result-change', {
                        lastValue: true,
                        changeOnSelect: this.changeOnSelect,
                        fromInit: fromInit
                    });
                }
            },
            updateResult (item) {
                this.result = [this.tmpItem].concat(item);
                this.emitUpdate(this.result);
            },
            getBaseItem (item) {
                let backItem = Object.assign({}, item);
                if (backItem.children) {
                    delete backItem.children;
                }

                return backItem;
            },
            emitUpdate (result) {
                if (this.$parent.$options.name === 'iCaspanel') {
                    this.$parent.updateResult(result);
                } else {
                    this.$parent.$parent.updateResult(result);
                }
            }
        },
        mounted () {
            this.$on('on-find-selected', (params) => {
                const val = params.value;
                let value = [...val];
                for (let i = 0; i < value.length; i++) {
                    for (let j = 0; j < this.data.length; j++) {
                        if (value[i] === this.data[j].value) {
                            this.handleTriggerItem(this.data[j], true);
                            value.splice(0, 1);
                            this.$nextTick(() => {
                                this.broadcast('iCaspanel', 'on-find-selected', {
                                    value: value
                                });
                            });
                            return false;
                        }
                    }
                }
            });
            this.$on('on-clear', () => {
                this.sublist = [];
                this.tmpItem = {};
            });
        }
    };
</script>
