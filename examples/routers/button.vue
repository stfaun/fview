<template>
    <div>
        <h4>基本</h4>
        <br><br>
        <i-button-group>
            <i-button>取消</i-button>
            <i-button type="primary">确定</i-button>
        </i-button-group>
        <i-button-group>
            <i-button disabled>昨日</i-button>
            <i-button disabled>今日</i-button>
            <i-button disabled>明日</i-button>
        </i-button-group>
        <i-button-group>
            <i-button type="primary">L</i-button>
            <i-button>M</i-button>
            <i-button type="ghost">M</i-button>
            <i-button type="dashed">R</i-button>
        </i-button-group>
        <br><br>
        <h4>配合图标</h4>
        <br><br>
        <i-button-group>
            <i-button type="primary">
                <i-icon type="chevron-left"></i-icon>
                前进
            </i-button>
            <i-button type="primary">
                后退
                <i-icon type="chevron-right"></i-icon>
            </i-button>
        </i-button-group>
        <i-button-group>
            <i-button type="primary" icon="ios-skipbackward"></i-button>
            <i-button type="primary" icon="ios-skipforward"></i-button>
        </i-button-group>
        <i-button-group>
            <i-button type="ghost" icon="ios-color-wand-outline"></i-button>
            <i-button type="ghost" icon="ios-sunny-outline"></i-button>
            <i-button type="ghost" icon="ios-crop"></i-button>
            <i-button type="ghost" icon="ios-color-filter-outline"></i-button>
        </i-button-group>
        <br><br>
        <h4>圆角</h4>
        <br><br>
        <i-button-group shape="circle">
            <i-button type="primary">
                <i-icon type="chevron-left"></i-icon>
                前进
            </i-button>
            <i-button type="primary">
                后退
                <i-icon type="chevron-right"></i-icon>
            </i-button>
        </i-button-group>
        <i-button-group shape="circle">
            <i-button type="primary" icon="ios-skipbackward"></i-button>
            <i-button type="primary" icon="ios-skipforward"></i-button>
        </i-button-group>
        <i-button-group shape="circle">
            <i-button type="ghost" icon="ios-color-wand-outline"></i-button>
            <i-button type="ghost" icon="ios-sunny-outline"></i-button>
            <i-button type="ghost" icon="ios-crop"></i-button>
            <i-button type="ghost" icon="ios-color-filter-outline"></i-button>
        </i-button-group>
        <br><br>
        <h4>尺寸</h4>
        <br><br>
        <i-button-group size="large">
            <i-button type="ghost">Large</i-button>
            <i-button type="ghost">Large</i-button>
        </i-button-group>
        <i-button-group>
            <i-button type="ghost">Default</i-button>
            <i-button type="ghost">Default</i-button>
        </i-button-group>
        <i-button-group size="small">
            <i-button type="ghost">Small</i-button>
            <i-button type="ghost">Small</i-button>
        </i-button-group>
        <br><br>
        <i-button-group size="large" shape="circle">
            <i-button type="ghost">Large</i-button>
            <i-button type="ghost">Large</i-button>
        </i-button-group>
        <i-button-group shape="circle">
            <i-button type="ghost">Default</i-button>
            <i-button type="ghost">Default</i-button>
        </i-button-group>
        <i-button-group size="small" shape="circle">
            <i-button type="ghost">Small</i-button>
            <i-button type="ghost">Small</i-button>
        </i-button-group>
    </div>
</template>
<script>
    export default {

    }
</script>
