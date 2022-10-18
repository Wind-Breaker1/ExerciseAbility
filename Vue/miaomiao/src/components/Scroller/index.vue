<template>
    <div class="wrapper" ref="wrapper">
        <slot></slot>
    </div>
</template>
<script>
import Bscroll from 'better-scroll'
export default {
    props:{
        handleToScroll: {
            type: Function,
            default: function(){}
        },
        handleToTouchEnd: {
            type: Function,
            default: function(){}
        }
    },
    mounted(){
        var scroll = new Bscroll(this.$refs.wrapper,{
            tap: true,
            probeType: 1,
            click: true
        });

        this.scroll = scroll;
        // console.log(this.scroll)

        scroll.on('scroll', pos => {
            this.handleToScroll(pos);
        });

        scroll.on('touchEnd', pos => {
            this.handleToTouchEnd(pos);
        });
    },
    methods: {
        toScrollTop(y){
            
            this.scroll.scrollTo(0, y);
        }
    }
}
</script>

<style scoped>
.wrapper{
    height: 100%;
}
</style>