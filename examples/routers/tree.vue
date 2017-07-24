<template>
    <i-tree :data="baseData" @on-check-change="handleSelectChange" show-checkbox></i-tree>
</template>
<script>
    export default {
        data () {
            return {
                bd: [],
                baseData: [
                    {
                        expand: true,
                        title: 'parent 1',
                        children: [{
                            title: 'parent 1-0',
                            expand: true,
//                            disabled: true,
//                            checked: true,
                            children: [
                                {
                                    title: 'leaf',
                                    checked: true,
                                    selected: true
                                },
                                {
                                    title: 'leaf',
                                    checked: false
                                }
                            ]
                        }, {
                            title: 'parent 1-1',
                            expand: true,
                            checked: true,
                            children: [
                                {
                                    title: '<span style="color: red">leaf</span>',
                                    checked: false
                                }
                            ]
                        }]
                    },
                    {
                        expand: true,
                        title: 'parent 1',
                        children: [{
                            title: 'parent 1-0',
                            expand: true,
                            children: [{
                                title: 'leaf'
                            }, {
                                title: 'leaf',
                            }]
                        }, {
                            title: 'parent 1-1',
                            expand: true,
                            checked: true,
                            children: [{
                                title: '<span style="color: red">leaf</span>',
                            }]
                        }]
                    }
                ]
            }
        },
        methods: {
            handleSelectChange (data) {
                console.log(data);
            }
        }
    }
</script>
