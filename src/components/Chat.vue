<template>
  <div class="h-100 chat">
    <form
      class="w-100 relative chat__form"
      @submit.prevent="pushToConversation"
    >
      <input
        type="text"
        class="chat__input"
        v-model="currentMessage"
      >
      <button type="submit" class="chat__button">
        <svg class="svg-icon" viewBox="0 0 20 20">
          <path d="M17.218,2.268L2.477,8.388C2.13,8.535,2.164,9.05,2.542,9.134L9.33,10.67l1.535,6.787c0.083,0.377,0.602,0.415,0.745,0.065l6.123-14.74C17.866,2.46,17.539,2.134,17.218,2.268 M3.92,8.641l11.772-4.89L9.535,9.909L3.92,8.641z M11.358,16.078l-1.268-5.613l6.157-6.157L11.358,16.078z"></path>
        </svg>
      </button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'Chat',
  data () {
    return {
      conversation: [],
      currentMessage: ''
    }
  },
  methods: {
    pushToConversation () {
      // console.log('new message')
      this.conversation.push({
        user: 'guest',
        message: this.currentMessage
      })
      this.currentMessage = ''
    }
  }
}
</script>

<style lang="scss" scoped>
.chat {
  display: flex;
  align-items: flex-end;
  padding: 0.8rem;
  background: #F3F6FB;
  &__form {
    display: flex;
    justify-content: center;
  }
  &__input {
    width: 100%;
    display: block;
    padding: 0.5rem;
    border: 1px solid rgba(0,0,0,0.5);
  }
  &__button {
    width: 3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background: $primary;
    padding: 0.4rem 0.6rem 0.4rem 0.4rem;
    margin-left: 0.5rem;
    border: none;
    border-radius: 50%;
    box-shadow: $box-shadow;
    svg {
      width: 100%;
      fill: #FFF;
      // stroke-width: 5;
    }
    &:hover {
      background: darken($primary, 5%);
    }
    &:active, &:focus, &:hover {
      outline: none;
    }
  }
}
</style>
