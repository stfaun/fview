<style>
    .demo-breadcrumb-separator{
        color: #ff5500;
        padding: 0 5px;
    }
</style>
<template>
<div>
    <i-breadcrumb separator="<b class='demo-breadcrumb-separator'>=></b>">
        <i-breadcrumb-item href="/">Home4</i-breadcrumb-item>
        <i-breadcrumb-item href="/checkbox" replace>Components</i-breadcrumb-item>
        <i-breadcrumb-item>Breadcrumb</i-breadcrumb-item>
    </i-breadcrumb>
    <i-breadcrumb separator="">
        <i-breadcrumb-item href="/">
            <template>Home</template>
            <template slot="separator">
                <b style="color: #ff5500;">-></b>
            </template>
        </i-breadcrumb-item>
        <i-breadcrumb-item href="/components/breadcrumb">
            <template>Breadcrumb</template>
            <template slot="separator">
                <b style="color: #ff5500;">-></b>
            </template>
        </i-breadcrumb-item>
        <i-breadcrumb-item>Breadcrumb</i-breadcrumb-item>
    </i-breadcrumb>
</div>
</template>
<script>
    export default {

    }
</script>