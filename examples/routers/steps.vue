<template>
<div>
    <i-steps :current="1" size="small">
        <i-step title="已完成" content="这里是该步骤的描述信息这里是该步骤的描述信息这里是该步骤的描述信息"></i-step>
        <i-step title="进行中" content="这里是该步骤的描述信息"></i-step>
        <i-step title="待进行" content="这里是该步骤的描述信息这里是该步骤的描述信息这里是该步骤的描述信息"></i-step>
        <i-step title="待进行" content="这里是该步骤的描述信息"></i-step>
    </i-steps>
    <br>
    <i-steps :current="2">
        <i-step title="已完成"></i-step>
        <i-step title="进行中"></i-step>
        <i-step title="待进行"></i-step>
        <i-step title="待进行"></i-step>
    </i-steps>
    <br>
    <i-steps :current="1" size="small">
        <i-step title="已完成"></i-step>
        <i-step title="进行中"></i-step>
        <i-step title="待进行"></i-step>
        <i-step title="待进行"></i-step>
    </i-steps>
    <br>
    <i-steps :current="1" direction="vertical" size="small">
        <i-step title="注册" icon="person-add"></i-step>
        <i-step title="上传头像" icon="camera" content="这里是该步骤的描述信息这里是该步骤的描述信息这里是该步骤的描述信息"></i-step>
        <i-step title="验证邮箱" icon="email"></i-step>
    </i-steps>
    <i-steps :current="1" direction="vertical">
        <i-step title="注册" icon="person-add"></i-step>
        <i-step title="上传头像" icon="camera" content="这里是该步骤的描述信息这里是该步骤的描述信息这里是该步骤的描述信息"></i-step>
        <i-step title="验证邮箱" icon="email"></i-step>
    </i-steps>
    <i-steps :current="-1" direction="vertical">
        <i-step title="注册" icon="person-add"></i-step>
        <i-step title="上传头像" icon="camera" content="这里是该步骤的描述信息这里是该步骤的描述信息这里是该步骤的描述信息"></i-step>
        <i-step title="验证邮箱" status="finish" icon="email"></i-step>
    </i-steps>
    <br>
    <p>当前正在进行第 {{ current + 1 }} 步</p>
    <i-steps :current="current">
        <i-step title="步骤1"></i-step>
        <i-step title="步骤2"></i-step>
        <i-step title="步骤3"></i-step>
        <i-step title="步骤4"></i-step>
    </i-steps>
    <br>
    <i-button type="primary" @click.native="next">下一步</i-button>
    <br><br><br>
    <i-steps :current="1" direction="vertical" size="small">
        <i-step title="已完成" content="这里是该步骤的描述信息这里是该步骤的描述信息这里是该步骤的描述信息"></i-step>
        <i-step title="进行中" content="这里是该步骤的描述信息"></i-step>
        <i-step title="待进行" content="这里是该步骤的描述信息这里是该步骤的描述信息这里是该步骤的描述信息"></i-step>
        <i-step title="待进行" content="这里是该步骤的描述信息"></i-step>
    </i-steps>
    <br><br>
    <i-steps :current="1" status="error">
        <i-step title="已完成" content="这里是该步骤的描述信息"></i-step>
        <i-step title="进行中" content="这里是该步骤的描述信息"></i-step>
        <i-step title="待进行" content="这里是该步骤的描述信息"></i-step>
        <i-step title="待进行" content="这里是该步骤的描述信息"></i-step>
    </i-steps>
</div>
</template>
<script>
    export default {
        props: {

        },
        data () {
            return {
                total: 512,
                current: 0
            }
        },
        computed: {

        },
        methods: {
            next () {
                if (this.current == 3) {
                    this.current = 0;
                } else {
                    this.current += 1;
                }
            }
        }
    }
</script>
