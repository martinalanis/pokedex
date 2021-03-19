const baseUrl = 'http://pokeapi.co/api/v2'

export default
{
  /**
   * @returns Array of 10 first pokemons
   */
  list: async () => {
    return await fetch(`${baseUrl}/pokemon`)
      .then(res => res.json())
      .then(res => res.results.slice(0, 10).map(item => item.name))
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
  },
  /**
   * @returns Object array
   */
  getTypes: async (pokemon) => {
    return await fetch(`${baseUrl}/pokemon/${pokemon}`)
      .then(res => res.json())
      .then(res => res.types)
  },
  /**
   * @returns Object array
   */
  getStats: async (pokemon) => {
    return await fetch(`${baseUrl}/pokemon/${pokemon}`)
      .then(res => res.json())
      .then(res => res.stats)
  },
  /**
   * @returns Object array | 10 first results only
   */
  getMoves: async (pokemon) => {
    return await fetch(`${baseUrl}/pokemon/${pokemon}`)
      .then(res => res.json())
      .then(res => res.moves.slice(0, 10))
  }
}
