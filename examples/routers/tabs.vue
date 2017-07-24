<template>
    <i-row>
        <i-col :span="12">
            <i-tabs type="card" closable @on-tab-remove="handleTagRemove">
                <i-tab-pane label="标签一" v-if="tab0">标签一的内容</i-tab-pane>
                <i-tab-pane label="标签二" v-if="tab1">标签二的内容</i-tab-pane>
                <i-tab-pane label="标签三" v-if="tab2">标签三的内容</i-tab-pane>
            </i-tabs>
        </i-col>
        <i-col :span="12">
            <i-tabs type="card" closable @on-tab-remove="handleTagRemove">
                <i-tab-pane :label="tab.label" v-for="tab of tabs" :key="tab">{{tab.content}}</i-tab-pane>
                <i-button size="small" slot="extra" @click="addTab">添加</i-button>
            </i-tabs>
        </i-col>
    </i-row>
</template>


<script>
    export default {
        data () {
            return {
                tabs:[
                        {label:'标签0',content:'标签内容0'},
                        {label:'标签1',content:'标签内容1'},
                        {label:'标签2',content:'标签内容2'},
                ],
                tab0: true,
                tab1: true,
                tab2: true
            }
        },
        methods: {
            handleTagRemove (name) {
                this['tab' + name] = false;
            },
            addTab(){
                this.tabs.push({label:'标签'+this.tabs.length,content:'标签内容'+this.tabs.length});
            }
        }
    }
</script>
