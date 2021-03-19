const baseUrl = 'http://pokeapi.co/api/v2'

export default
{
  list: async () => {
    return await fetch(`${baseUrl}/pokemon`).then(res => res.json())
  },
  getAbilities: async (pokemon) => {
    return await fetch(`${baseUrl}/pokemon/${pokemon}`)
      .then(res => res.json())
      .then(res => res.abilities)
  }
}
