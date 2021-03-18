const baseUrl = 'http://pokeapi.co/api/v2'

export default
{
  list: async () => {
    return await fetch(`${baseUrl}/pokemon`).then(res => res.json())
  }
}
