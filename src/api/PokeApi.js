const baseUrl = 'http://pokeapi.co/api/v2'

export default
{
  list: async () => {
    return await fetch(`${baseUrl}/pokemon`).then(res => res.json())
  },
  /**
   * @returns Object array
   */
  getAbilities: async (pokemon) => {
    return await fetch(`${baseUrl}/pokemon/${pokemon}`)
      .then(res => res.json())
      .then(res => res.abilities)
  },
  /**
   * @returns Number
   */
  getWeight: async (pokemon) => {
    return await fetch(`${baseUrl}/pokemon/${pokemon}`)
      .then(res => res.json())
      .then(res => res.weight)
  },
  /**
   * @returns Number
   */
  getHeight: async (pokemon) => {
    return await fetch(`${baseUrl}/pokemon/${pokemon}`)
      .then(res => res.json())
      .then(res => res.height)
  }
}
