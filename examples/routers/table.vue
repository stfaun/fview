<template>
    <div style="height:100%">
        <!-- <f-tree-table height="15%" :columns="columns1" :data="data1" :operates="operates"></f-tree-table> -->
        <br>
        <f-table height="200px" :columns="columns1" :data="data1"></f-table>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                columns1: [
                    {
                        title: '姓名',
                        key: 'name',
                        width: 400
                    },
                    {
                        title: '年龄',
                        key: 'age',
                        width: 200
                    },
                    {
                        title: '地址',
                        key: 'address',
                        width: 200
                    }
                ],
                data1: [
                    {
                        name: '王小明',
                        age: 18,
                        address: '北京市朝阳区芍药居',
                        parent: -1
                    },
                    {
                        name: '李小红',
                        age: 30,
                        address: '上海市浦东新区世纪大道',
                        parent: 0
                    },
                    {
                        name: '周小伟',
                        age: 26,
                        address: '深圳市南山区深南大道',
                        parent: -1
                    },
                    {
                        name: '王小明',
                        age: 18,
                        address: '北京市朝阳区芍药居',
                        parent: 2
                    },
                    {
                        name: '张小刚',
                        age: 25,
                        address: '北京市海淀区西二旗',
                        parent: 0
                    },
                    {
                        name: '张小刚',
                        age: 25,
                        address: '北京市海淀区西二旗',
                        parent: 8
                    },
                    {
                        name: '李小红',
                        age: 30,
                        address: '上海市浦东新区世纪大道',
                        parent: 5
                    },
                    {
                        name: '张小刚',
                        age: 25,
                        address: '北京市海淀区西二旗',
                        parent: -1
                    },
                    {
                        name: '李小红',
                        age: 30,
                        address: '上海市浦东新区世纪大道',
                        parent: -1
                    },
                    {
                        name: '周小伟',
                        age: 26,
                        address: '深圳市南山区深南大道',
                        parent: -1
                    }
                ],
                operates: [
                    {
                        event: 'add',
                        icon: 'plus',
                        text: '新增子类'
                    },
                    {
                        event: 'remove',
                        icon: 'trash',
                        text: '删除',
                        checkChild: true
                    }
                ]
            }
        }
    }
</script>
