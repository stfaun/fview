<template>
    <div>
        <i-button type="primary" @click="modal1 = true">显示对话框</i-button>
        <i-modal v-model="modal1" title="新增商品分类">
            <div>
            </div>
        </i-modal>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                modal1: false
            }
        },
        methods: {
            ok () {
                this.$Message.info('点击了确定');
            },
            cancel () {
                this.$Message.info('点击了取消');
            }
        }
    }
</script>
