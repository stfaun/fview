<template>
    <div>
        <i-checkbox v-model="single" @on-change="s">Checkbox</i-checkbox>
        {{ single }}
        <div @click="single = !single">single-change</div>
        <br>
        {{ social }}
        <i-checkbox-group v-model="social" @on-change="s">
            <i-checkbox label="twitter">
                <i-icon type="social-twitter"></i-icon>
                <span>Twitter</span>
            </i-checkbox>
            <i-checkbox label="facebook">
                <i-icon type="social-facebook"></i-icon>
                <span>Facebook</span>
            </i-checkbox>
            <i-checkbox label="github">
                <i-icon type="social-github"></i-icon>
                <span>Github</span>
            </i-checkbox>
            <i-checkbox label="snapchat">
                <i-icon type="social-snapchat"></i-icon>
                <span>Snapchat</span>
            </i-checkbox>
        </i-checkbox-group>
        <br>
        <div @click="c">修改1</div>
        {{ fruit }}
        <i-checkbox-group v-model="fruit">
            <i-row>
                <i-col span="8">
                    <i-checkbox label="香蕉"></i-checkbox>
                </i-col>
                <i-col span="8">
                    <i-checkbox label="苹果"></i-checkbox>
                </i-col>
                <i-col span="8">
                    <i-checkbox label="西瓜"></i-checkbox>
                </i-col>
            </i-row>
        </i-checkbox-group>
        <br><br>
        <div style="border-bottom: 1px solid #e9e9e9;padding-bottom:6px;margin-bottom:6px;">
            <i-checkbox
                    :indeterminate="indeterminate"
                    v-model="checkAll"
                    @click.prevent.native="handleCheckAll">全选</i-checkbox>
        </div>
        <i-checkbox-group v-model="checkAllGroup" @on-change="checkAllGroupChange">
            <i-checkbox label="香蕉"></i-checkbox>
            <i-checkbox label="苹果"></i-checkbox>
            <i-checkbox label="西瓜"></i-checkbox>
        </i-checkbox-group>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                social: ['facebook', 'github'],
                fruit: ['苹果'],
                single: false,
                indeterminate: true,
                checkAll: false,
                checkAllGroup: ['香蕉', '西瓜']
            }
        },
        methods: {
            c () {
                this.social.splice(0, 1)
            },
            s (d) {
                console.log(d)
            },
            handleCheckAll () {
                if (this.indeterminate) {
                    this.checkAll = false;
                } else {
                    this.checkAll = !this.checkAll;
                }
                this.indeterminate = false;

                if (this.checkAll) {
                    this.checkAllGroup = ['香蕉', '苹果', '西瓜'];
                } else {
                    this.checkAllGroup = [];
                }
            },
            checkAllGroupChange (data) {
                if (data.length === 3) {
                    this.indeterminate = false;
                    this.checkAll = true;
                } else if (data.length > 0) {
                    this.indeterminate = true;
                    this.checkAll = false;
                } else {
                    this.indeterminate = false;
                    this.checkAll = false;
                }
            }
        }
    }
</script>
