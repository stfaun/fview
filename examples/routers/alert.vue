<template>
    <div>
        <i-alert show-icon banner closable>消息提示文案</i-alert>
        <i-alert type="success" show-icon>成功提示文案</i-alert>
        <i-alert type="warning" show-icon banner>警告提示文案</i-alert>
        <i-alert type="error" show-icon>错误提示文案</i-alert>
        <i-alert show-icon>
            消息提示文案
            <template slot="desc">消息提示的描述文案消息提示的描述文案消息提示的描述文案消息提示的描述文案消息提示的描述文案</template>
        </i-alert>
        <i-alert type="success" show-icon>
            成功提示文案
            <span slot="desc">成功的提示描述文案成功的提示描述文案成功的提示描述文案成功的提示描述文案成功的提示描述文案</span>
        </i-alert>
        <i-alert type="warning" show-icon>
            警告提示文案
            <template slot="desc">
                警告的提示描述文案警告的提示描述文案警告的提示描述文案
            </template>
        </i-alert>
        <i-alert type="error" show-icon>
            错误提示文案
            <span slot="desc">
            自定义错误描述文案。
        </span>
        </i-alert>
        <i-alert show-icon closable>
            自定义图标
            <i-icon type="ios-lightbulb-outline" slot="icon"></i-icon>
            <template slot="desc">自定义图标文案自定义图标文案自定义图标文案自定义图标文案自定义图标文案</template>
        </i-alert>
    </div>
</template>
<script>
    export default {
    }
</script>
