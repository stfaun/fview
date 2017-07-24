<template>
    <div>
        <i-dropdown @on-click="handleClick">
            <a href="javascript:void(0)">
                下拉菜单
                <i-icon type="arrow-down-b"></i-icon>
            </a>
            <i-dropdown-menu slot="list">
                <i-dropdown-item name="1">驴打滚</i-dropdown-item>
                <i-dropdown-item name="2">炸酱面</i-dropdown-item>
                <i-dropdown-item name="3" disabled>豆汁儿</i-dropdown-item>
                <i-dropdown-item name="4">冰糖葫芦</i-dropdown-item>
                <i-dropdown-item name="5" divided>北京烤鸭</i-dropdown-item>
            </i-dropdown-menu>
        </i-dropdown>
    </div>
</template>
<script>
    export default {
        methods: {
            handleClick (val) {
                console.log(val)
            }
        }
    }
</script>
