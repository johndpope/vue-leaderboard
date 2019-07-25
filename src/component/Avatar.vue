<template>
  <div>
    <div
      class="avatar" :class="type"
      :style="{
      width: size + 'px',
      height: size + 'px',
      lineHeight: size + 'px',
      borderWidth: bWidth +'px'
    }"
    >
      <img :src="url" />
    </div>
  </div>
</template>
<style scoped lang="scss">
.avatar {
  margin: 0 auto;
  border-radius: 100%;
  position: relative;
  display: block;
  overflow: hidden;
  border-style:solid;
  background: #ffffff;
  &.border-default{
    border-color:rgba(0, 0, 0, 0.1);
  }
  :hover {
    text-decoration: none;
  }
  > img {
    width: 100%;
    position: absolute;
    left: 0;
    top: 50%;
    -webkit-transform: translateY(-50%);
    -ms-transform: translateY(-50%);
    transform: translateY(-50%);
  }
}
</style>
<script>
export default {
  props: {
    type:{
      type:String,
      default:'border-default'
    },
    bWidth:{
      type:Number,
      default:1
    },
    url: String,
    size: {
      type: Number,
      default: 60
    }
  }
};
</script>
