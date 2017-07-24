<style scoped>
    .time{
        font-size: 14px;
        font-weight: bold;
    }
    .content{
        padding-left: 5px;
    }
</style>
<template>
<div>
    <i-timeline>
        <i-timeline-item>
            <p class="time">1976年</p>
            <p class="content">Apple i- 问世</p>
        </i-timeline-item>
        <i-timeline-item>
            <p class="time">1984年</p>
            <p class="content">发布 Macintosh</p>
        </i-timeline-item>
        <i-timeline-item>
            <p class="time">2007年</p>
            <p class="content">发布 iPhone</p>
        </i-timeline-item>
        <i-timeline-item>
            <p class="time">2010年</p>
            <p class="content">发布 iPad</p>
        </i-timeline-item>
        <i-timeline-item>
            <p class="time">2011年10月5日</p>
            <p class="content">史蒂夫·乔布斯去世</p>
        </i-timeline-item>
    </i-timeline>
    <i-timeline>
        <i-timeline-item color="green">发布1.0版本</i-timeline-item>
        <i-timeline-item color="green">发布2.0版本</i-timeline-item>
        <i-timeline-item color="red">严重故障</i-timeline-item>
        <i-timeline-item color="blue">发布3.0版本</i-timeline-item>
    </i-timeline>
    <i-timeline pending>
        <i-timeline-item>发布1.0版本</i-timeline-item>
        <i-timeline-item>发布2.0版本</i-timeline-item>
        <i-timeline-item>发布3.0版本</i-timeline-item>
        <i-timeline-item><a href="#">查看更多</a></i-timeline-item>
    </i-timeline>
    <i-timeline>
        <i-timeline-item color="green">
            <i-icon type="trophy" slot="dot"></i-icon>
            <span>发布里程碑版本</span>
        </i-timeline-item>
        <i-timeline-item>发布1.0版本</i-timeline-item>
        <i-timeline-item>发布2.0版本</i-timeline-item>
        <i-timeline-item>发布3.0版本</i-timeline-item>
    </i-timeline>
</div>
</template>
<script>
    export default {

    }
</script>
