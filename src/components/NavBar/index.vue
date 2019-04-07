<template>
    <div class="nav-container" :class="{'nav-border':border}">
        <md-icon :name="icon"  :size="iconSize"  :color='color' @click="toBack"></md-icon>
        <div class="nav-title">
            {{title}}
        </div>
        <div class="nav-right">
             <slot name="right"></slot>
        </div>
    </div>
</template>

<script>
export default {
    props:{
        icon:{
            type: String,
            default: 'arrow-left'
        },
        title:{
            type: String,
            default:''
        },
        iconSize: {
            type: String,
            default: 'xs'
        },
        border: {
            type: Boolean,
            default: false
        },
        color: {
            type: String,
            default: '#9F9F9F'
        }
    },
    methods: {
        toBack() {
            this.$router.go(-1);
        }
    }
}
</script>


<style lang="stylus" scoped>
.nav
    &-container
        display: flex;
        align-items: center;
        padding-left: 30px;
        padding-right: 30px; 
        height: 108px;
        box-shadow:0px -1px 0px 0px rgba(238,238,238,1);

    &-title 
        flex: 1;
        font-size: 30px;/*px*/
        height: 100%;
        color : #909090;
        line-height: 108px;
        text-align: center;

    &-right 
        font-size :14px;
        color: #909090;
        a 
         color: #909090;
    &-border    
        border-bottom : 1px solid #CDCDCD; /*no*/
</style>

