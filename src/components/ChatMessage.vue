<template>
  <div class="w-100 msg" :class="{ 'bot': !isUser }">
    <div class="msg__thumbnail">
      <img :src="isUser ? require('@/assets/user.png') : require('@/assets/robot.png')" alt="">
    </div>
    <div class="msg__box">
      <p class="msg__user">
        {{ isUser ? 'Guest' : 'Hermes' }}
      </p>
      <div class="msg__text">
        {{ text }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ChatMessage',
  props: {
    isUser: {
      type: Boolean,
      default: false
    },
    text: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>
$br: 15px;
.msg {
  // border: 1px solid teal;
  display: flex;
  align-items: flex-end;
  margin-bottom: 1rem;
  &__thumbnail {
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
    // box-shadow: $box-shadow;
    // overflow: hidden;
    // padding: 0.4rem;
    // background: #5199E4;
    // &--user {
    // }
    img {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }
  &__box {
    // border: 1px solid #fabada;
    margin: 0 1rem;
    max-width: 75%;
  }
  &__user {
    font-size: 0.8rem;
    color: #656468;
    font-weight: 700;
    margin-bottom: 0.6rem;
    // padding: 0 0.9rem;
  }
  &__text {
    display: inline-block;
    line-height: 1.3;
    background: #FFF;
    padding: 0.6rem 0.9rem;
    border-radius: $br 0px $br 0px;
    box-shadow: $box-shadow;
  }
}
.bot {
  flex-direction: row-reverse;
  .msg__box {
    text-align: right;
  }
  .msg__text {
    border-radius: 0px $br 0px $br;
  }
}
</style>
