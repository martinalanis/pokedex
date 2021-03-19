<template>
  <div class="chat w-100">
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
      @submit.prevent="pushToConversation(currentMessage)"
    >
      <input
        type="text"
        class="chat__input"
        v-model.trim="currentMessage"
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
import { Hermes, PokeApi } from '@/api'

export default {
  name: 'Chat',
  components: {
    ChatMessage
  },
  data () {
    return {
      conversation: [],
      currentMessage: '',
      sessionId: null
    }
  },
  created () {
    this.sessionId = new Date().getTime()
    setTimeout(() => {
      this.askQuestion('Hola')
    }, 1000)
  },
  methods: {
    async askQuestion (question) {
      /**
       * Ask question to soldAi bot
       */
      try {
        const { default_answer, parameters, intent_info } = await Hermes.askQuestion(this.sessionId, question)
          .then(res => res.current_response)
        // Add to conversation in bot mode
        if (parameters.entities && intent_info) {
          this.handleResponse(default_answer, parameters, intent_info)
        } else if (!intent_info.properties) {
          this.pushToConversation('Por el momento no cuento con la información de ese pokemon', false)
        } else {
          this.pushToConversation(default_answer, false)
        }
      } catch (error) {
        console.log(error)
      }
    },
    handleResponse (answer, parameters, intentInfo) {
      /**
       * Get pokemons detected by chatbot
       */
      const pokemons = parameters.entities.map(entity => entity.name)
      /**
       * Get type of request to perform to pokeApi and validate has implemented method
       */
      const { type } = JSON.parse(intentInfo.properties)
      console.log(type)
      const availableFeatures = ['ability', 'weight']
      if (availableFeatures.includes(type)) {
        console.log('includes')
        this[`${type}Response`](answer, pokemons)
      }
    },
    async abilityResponse (answer, pokemons) {
      try {
        const abilities = []
        for (const pokemon of pokemons) {
          const pokemonAbilities = await PokeApi.getAbilities(pokemon)
            .then(res => res.map(obj => obj.ability.name).join(', '))
          abilities.push(pokemonAbilities)
        }
        this.pushToConversation(
          answer + ' ' + abilities.join(' y '),
          false
        )
      } catch (error) {
        console.log(error)
      }
    },
    async getAbilities (pokemon) {
      try {
        return await PokeApi.getAbilities(pokemon)
          .then(res => res.map(obj => obj.ability.name).join(', '))
      } catch (error) {
        console.log(error)
      }
    },
    async weightResponse (answer, pokemons) {
      try {
        const weights = []
        for (const pokemon of pokemons) {
          weights.push(await PokeApi.getWeight(pokemon))
        }
        this.pushToConversation(
          answer + ' ' + weights.join(' y '),
          false
        )
      } catch (error) {
        console.log(error)
      }
    },
    pushToConversation (message, isUser = true) {
      if (message) {
        this.conversation.push({
          isUser,
          text: message
        })
        if (isUser) {
          this.currentMessage = ''
          this.askQuestion(message)
        }
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
  padding: 0 0.8rem 0.8rem 0.8rem;
  background: #F3F6FB;
  height: 100%;
  &__box {
    display: flex;
    position: relative;
    flex-flow: column nowrap;
    justify-content: flex-end;
    align-items: center;
    justify-items: flex-end;
    overflow-y: hidden;
  }
  &__box_container {
    overflow-y: auto;
  }
  &__form {
    display: flex;
    justify-content: center;
  }
  &__input {
    width: 100%;
    display: block;
    padding: 0.3rem 1rem;
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
    cursor: pointer;
    box-shadow: $box-shadow-depth-2;
    svg {
      width: 100%;
      fill: #FFF;
    }
    &:hover {
      background: darken($primary, 5%);
    }
    &:active, &:focus, &:hover {
      outline: none;
    }
  }
  @media screen and ($tablet) {
    height: 96%;
    border-radius: 20px;
    padding: 0 1rem 1.2rem 1rem;
  }
}
</style>
