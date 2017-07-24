<template>
    <div>
        <i-carousel v-model="v1" dots="inside" trigger="hover">
            <i-carousel-item>
                <i-card>
                    <div class="demo-carousel">1</div>
                </i-card>
            </i-carousel-item>
            <i-carousel-item>
                <div class="demo-carousel">2</div>
            </i-carousel-item>
            <i-carousel-item>
                <div class="demo-carousel">3</div>
            </i-carousel-item>
            <i-carousel-item>
                <div class="demo-carousel">4</div>
            </i-carousel-item>
        </i-carousel>
        {{ v1 }}
        <div @click="v1 = 0">change v1</div>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                v1: 1
            }
        },
        methods: {
            push () {
                this.pushItem.push('test');
            },
            slideChange (from, to) {
                this.log.push(`From ${from} To ${to}`);
            }
        }
    }
</script>
<style>
    .demo-carousel{
        height: 200px;
        line-height: 200px;
        text-align: center;
        color: #fff;
        font-size: 20px;
        background: #506b9e;
    }
</style>