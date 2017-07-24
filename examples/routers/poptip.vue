<template>
    <div style="margin: 100px;">
        <i-poptip
                confirm
                title="您确认删除这条内容吗？"
                @on-ok="ok"
                @on-cancel="cancel">
            <i-button>删除</i-button>
        </i-poptip>
        <i-poptip
                confirm
                title="Are you sure delete this task?"
                @on-ok="ok"
                @on-cancel="cancel"
                ok-text="yes"
                cancel-text="no">
            <i-button>国际化</i-button>
        </i-poptip>
    </div>
</template>
<script>
    export default {
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
