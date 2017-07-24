<!-- <template>
    <div>
        <Irow>
            <Icol span="3">
                <Fmenu :theme="theme1" active-name="1" @on-select="s">
                    <Fsubmenu name="1">
                        <template slot="title">
                            <Iicon type="stats-bars"></Iicon>
                            统计分析
                        </template>
                        <Fmenu-group title="使用">
                            <Fmenu-item name="1-1">新增和启动</Fmenu-item>
                            <Fmenu-item name="1-2">活跃分析</Fmenu-item>
                            <Fmenu-item name="1-3">时段分析</Fmenu-item>
                        </Fmenu-group>
                    </Fsubmenu>
                    <Fsubmenu name="2">
                        <template slot="title">
                            <Iicon type="stats-bars"></Iicon>
                            统计分析
                        </template>
                        <Fmenu-group title="使用">
                            <Fmenu-item name="2-1">新增和启动</Fmenu-item>
                            <Fmenu-item name="2-2">活跃分析</Fmenu-item>
                            <Fmenu-item name="2-3">时段分析</Fmenu-item>
                        </Fmenu-group>
                        <Fmenu-group title="留存">
                            <Fmenu-item name="2-4">用户留存</Fmenu-item>
                            <Fmenu-item name="2-5">流失用户</Fmenu-item>
                        </Fmenu-group>
                    </Fsubmenu>
                    <Fsubmenu name="3">
                        <template slot="title">
                            <Iicon type="stats-bars"></Iicon>
                            统计分析
                        </template>
                        <Fmenu-group title="使用">
                            <Fmenu-item name="3-1">新增和启动</Fmenu-item>
                            <Fmenu-item name="3-2">活跃分析</Fmenu-item>
                            <Fmenu-item name="3-3">时段分析</Fmenu-item>
                        </Fmenu-group>
                        <Fmenu-group title="留存">
                            <Fmenu-item name="3-4">用户留存</Fmenu-item>
                            <Fmenu-item name="3-5">流失用户</Fmenu-item>
                        </Fmenu-group>
                    </Fsubmenu>
                </Fmenu>
            </Icol>
            <Icol span="3">
                <Fmenu :theme="theme1" active-name="1" @on-select="s">
                    <Fsubmenu name="1">
                        <template slot="title">
                            <Iicon type="stats-bars"></Iicon>
                            统计分析
                        </template>
                        <Fmenu-group>
                            <Fmenu-item name="1-1">新增和启动</Fmenu-item>
                            <Fmenu-item name="1-2">活跃分析</Fmenu-item>
                            <Fmenu-item name="1-3">时段分析</Fmenu-item>
                        </Fmenu-group>
                    </Fsubmenu>
                    <Fsubmenu name="2">
                        <template slot="title">
                            <Iicon type="stats-bars"></Iicon>
                            统计分析
                        </template>
                        <Fmenu-group title="使用">
                            <Fmenu-item name="2-1">新增和启动</Fmenu-item>
                            <Fmenu-item name="2-2">活跃分析</Fmenu-item>
                            <Fmenu-item name="2-3">时段分析</Fmenu-item>
                        </Fmenu-group>
                        <Fmenu-group title="留存">
                            <Fmenu-item name="2-4">用户留存</Fmenu-item>
                            <Fmenu-item name="2-5">流失用户</Fmenu-item>
                        </Fmenu-group>
                    </Fsubmenu>
                    <Fsubmenu name="3">
                        <template slot="title">
                            <Iicon type="stats-bars"></Iicon>
                            统计分析
                        </template>
                        <Fmenu-group title="使用">
                            <Fmenu-item name="3-1">新增和启动</Fmenu-item>
                            <Fmenu-item name="3-2">活跃分析</Fmenu-item>
                            <Fmenu-item name="3-3">时段分析</Fmenu-item>
                        </Fmenu-group>
                        <Fmenu-group title="留存">
                            <Fmenu-item name="3-4">用户留存</Fmenu-item>
                            <Fmenu-item name="3-5">流失用户</Fmenu-item>
                        </Fmenu-group>
                    </Fsubmenu>
                </Fmenu>
            </Icol>
        </Irow>
        <br>
        <p>切换主题</p>
        <Iradio-group v-model="theme1">
            <Iradio label="light"></Iradio>
            <Iradio label="dark"></Iradio>
            <Iradio label="primary"></Iradio>
        </Iradio-group>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                theme1: 'light'
            }
        },
        methods: {
            s (s) {
                console.log(s)
            }
        }
    }
</script> -->


<template>
    <div>
        <i-row>
            <i-col span="4">
                <i-menu :theme="theme1" active-name="1" @on-select="s">
                    <i-submenu name="1">
                        <template slot="title">
                            <i-icon type="stats-bars"></i-icon>
                            统计分析
                        </template>
                        <i-menu-group title="使用">
                            <i-menu-item name="1-1">新增和启动</i-menu-item>
                            <i-menu-item name="1-2">活跃分析</i-menu-item>
                            <i-menu-item name="1-3">时段分析</i-menu-item>
                        </i-menu-group>
                    </i-submenu>
                    <i-submenu name="2">
                        <template slot="title">
                            <i-icon type="stats-bars"></i-icon>
                            统计分析
                        </template>
                        <i-menu-group title="使用">
                            <i-menu-item name="2-1">新增和启动</i-menu-item>
                            <i-menu-item name="2-2">活跃分析</i-menu-item>
                            <i-menu-item name="2-3">时段分析</i-menu-item>
                        </i-menu-group>
                        <i-menu-group title="留存">
                            <i-menu-item name="2-4">用户留存</i-menu-item>
                            <i-menu-item name="2-5">流失用户</i-menu-item>
                        </i-menu-group>
                    </i-submenu>
                    <i-submenu name="3">
                        <template slot="title">
                            <i-icon type="stats-bars"></i-icon>
                            统计分析
                        </template>
                        <i-menu-group title="使用">
                            <i-menu-item name="3-1">新增和启动</i-menu-item>
                            <i-menu-item name="3-2">活跃分析</i-menu-item>
                            <i-menu-item name="3-3">时段分析</i-menu-item>
                        </i-menu-group>
                        <i-menu-group title="留存">
                            <i-menu-item name="3-4">用户留存</i-menu-item>
                            <i-menu-item name="3-5">流失用户</i-menu-item>
                        </i-menu-group>
                    </i-submenu>
                </i-menu>
            </i-col>
            <i-col span="4">
                <i-menu :theme="theme1" active-name="1" @on-select="s">
                    <i-submenu name="1">
                        <template slot="title">
                            <i-icon type="stats-bars"></i-icon>
                            统计分析
                        </template>
                        <i-menu-group title="使用">
                            <i-menu-item name="1-1">新增和启动</i-menu-item>
                            <i-menu-item name="1-2">活跃分析</i-menu-item>
                            <i-menu-item name="1-3">时段分析</i-menu-item>
                        </i-menu-group>
                    </i-submenu>
                    <i-submenu name="2">
                        <template slot="title">
                            <i-icon type="stats-bars"></i-icon>
                            统计分析
                        </template>
                        <i-menu-group title="使用">
                            <i-menu-item name="2-1">新增和启动</i-menu-item>
                            <i-menu-item name="2-2">活跃分析</i-menu-item>
                            <i-menu-item name="2-3">时段分析</i-menu-item>
                        </i-menu-group>
                        <i-menu-group title="留存">
                            <i-menu-item name="2-4">用户留存</i-menu-item>
                            <i-menu-item name="2-5">流失用户</i-menu-item>
                        </i-menu-group>
                    </i-submenu>
                    <i-submenu name="3">
                        <template slot="title">
                            <i-icon type="stats-bars"></i-icon>
                            统计分析
                        </template>
                        <i-menu-group title="使用">
                            <i-menu-item name="3-1">新增和启动</i-menu-item>
                            <i-menu-item name="3-2">活跃分析</i-menu-item>
                            <i-menu-item name="3-3">时段分析</i-menu-item>
                        </i-menu-group>
                        <i-menu-group title="留存">
                            <i-menu-item name="3-4">用户留存</i-menu-item>
                            <i-menu-item name="3-5">流失用户</i-menu-item>
                        </i-menu-group>
                    </i-submenu>
                </i-menu>
            </i-col>
        </i-row>
        <br>
        <p>切换主题</p>
        <i-radio-group v-model="theme1">
            <i-radio label="light"></i-radio>
            <i-radio label="dark"></i-radio>
            <i-radio label="primary"></i-radio>
        </i-radio-group>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                theme1: 'light'
            }
        },
        methods: {
            s (s) {
                console.log(s)
            }
        }
    }
</script>
