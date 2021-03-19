<template>
  <div class="h-100 chat">
    <div class="chat__box">
      <div class="w-100 chat__box_container" id="chat-box">
        <chat-message
          v-for="({ isUser, text }, i) in conversation"
          :key="i"
          :is-user="isUser"
          :text="text"
        />
      </div>
    </div>
    <form
      class="w-100 relative chat__form"
      @submit.prevent="pushToConversation"
    >
      <input
        type="text"
        class="chat__input"
        v-model="currentMessage"
      />
      <button type="submit" class="chat__button">
        <svg class="svg-icon" viewBox="0 0 20 20">
          <path d="M17.218,2.268L2.477,8.388C2.13,8.535,2.164,9.05,2.542,9.134L9.33,10.67l1.535,6.787c0.083,0.377,0.602,0.415,0.745,0.065l6.123-14.74C17.866,2.46,17.539,2.134,17.218,2.268 M3.92,8.641l11.772-4.89L9.535,9.909L3.92,8.641z M11.358,16.078l-1.268-5.613l6.157-6.157L11.358,16.078z"></path>
        </svg>
      </button>
    </form>
  </div>
</template>

<script>
import ChatMessage from '@/components/ChatMessage'

export default {
  name: 'Chat',
  components: {
    ChatMessage
  },
  data () {
    return {
      conversation: [],
      currentMessage: ''
    }
  },
  methods: {
    pushToConversation () {
      if (this.currentMessage) {
        this.conversation.push({
          isUser: true,
          text: this.currentMessage
        })
        this.currentMessage = ''
        this.updateScroll()
      }
    },
    updateScroll () {
      console.log('scroll update')
      setTimeout(() => {
        const el = document.getElementById('chat-box')
        el.scrollTop = el.scrollHeight
      }, 100)
    }
  }
}
</script>

<style lang="scss" scoped>
.chat {
  display: grid;
  grid-template-rows: 1fr 2.5rem;
  padding: 0.8rem;
  background: #F3F6FB;
  &__box {
    display: flex;
    position: relative;
    flex-flow: column nowrap;
    justify-content: flex-end;
    align-items: center;
    justify-items: flex-end;
    overflow-y: scroll;
    // border: 1px solid blue;
  }
  &__box_container {
    overflow: scroll;
  }
  &__form {
    display: flex;
    justify-content: center;
  }
  &__input {
    width: 100%;
    display: block;
    padding: 0.3rem 1rem;
    // border: 1px solid rgba(0,0,0,0.1);
    border-radius: 20px;
    border: none;
    box-shadow: $box-shadow;
    &:active, &:focus, &:hover {
      outline: none;
    }
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
    box-shadow: $box-shadow-depth-2;
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
