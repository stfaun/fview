<!--<template>-->
    <!--<div>-->
        <!--<i-cascader :data="data" v-model="value1"></i-cascader>-->
        <!--{{ value1 }}-->
        <!--<div @click="c">change</div>-->
    <!--</div>-->
<!--</template>-->
<!--<script>-->
    <!--export default {-->
        <!--data () {-->
            <!--return {-->
                <!--value1: [],-->
                <!--data: [{-->
                    <!--value: 'beijing',-->
                    <!--label: '北京',-->
                    <!--children: [-->
                        <!--{-->
                            <!--value: 'gugong',-->
                            <!--label: '故宫'-->
                        <!--},-->
                        <!--{-->
                            <!--value: 'tiantan',-->
                            <!--label: '天坛'-->
                        <!--},-->
                        <!--{-->
                            <!--value: 'wangfujing',-->
                            <!--label: '王府井'-->
                        <!--}-->
                    <!--]-->
                <!--}, {-->
                    <!--value: 'jiangsu',-->
                    <!--label: '江苏',-->
                    <!--children: [-->
                        <!--{-->
                            <!--value: 'nanjing',-->
                            <!--label: '南京',-->
                            <!--children: [-->
                                <!--{-->
                                    <!--value: 'fuzimiao',-->
                                    <!--label: '夫子庙',-->
                                <!--}-->
                            <!--]-->
                        <!--},-->
                        <!--{-->
                            <!--value: 'suzhou',-->
                            <!--label: '苏州',-->
                            <!--children: [-->
                                <!--{-->
                                    <!--value: 'zhuozhengyuan',-->
                                    <!--label: '拙政园',-->
                                <!--},-->
                                <!--{-->
                                    <!--value: 'shizilin',-->
                                    <!--label: '狮子林',-->
                                <!--}-->
                            <!--]-->
                        <!--}-->
                    <!--],-->
                <!--}]-->
            <!--}-->
        <!--},-->
        <!--methods: {-->
            <!--c () {-->
                <!--this.value1 = ['jiangsu', 'suzhou', 'zhuozhengyuan']-->
            <!--}-->
        <!--}-->
    <!--}-->
<!--</script>-->


<template>
    <div>
        <i-cascader :data="data" v-model="value2"></i-cascader>
        {{ value2 }}
        <i-button @click="c">clear</i-button>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                value2: ['beijing', 'gugong'],
                data: []
            }
        },
        methods: {
            c () {
                this.value2 = []
            }
        },
        mounted () {
            this.data = [{
                value: 'beijing',
                label: '北京',
                children: [
                    {
                        value: 'gugong',
                        label: '故宫'
                    },
                    {
                        value: 'tiantan',
                        label: '天坛'
                    },
                    {
                        value: 'wangfujing',
                        label: '王府井'
                    }
                ]
            }, {
                value: 'jiangsu',
                label: '江苏',
                children: [
                    {
                        value: 'nanjing',
                        label: '南京',
                        children: [
                            {
                                value: 'fuzimiao',
                                label: '夫子庙',
                            }
                        ]
                    },
                    {
                        value: 'suzhou',
                        label: '苏州',
                        children: [
                            {
                                value: 'zhuozhengyuan',
                                label: '拙政园',
                            },
                            {
                                value: 'shizilin',
                                label: '狮子林',
                            }
                        ]
                    }
                ],
            }]
        }
    }
</script>
