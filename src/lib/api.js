export default {
    async getTwits() {
      console.log('get')
      const response = await fetch('http://localhost:3003/search/Coca-Cola')
      if (!response.ok) throw new Error('Ocurrió un error al obtener los posts')
      const jsonBody = await response.json()
  
      const { statuses } = jsonBody.data


      console.log(statuses);
  
      return statuses
      
    },
  
    async searchTwits() {
      const response = await fetch('search/tweets')
      .then((response)=>{
        console.log(response)
      }
      )
      const jsonBody = await response.json()
  
      const { searchtwits } = jsonBody.data


      if (!response.ok) throw new Error('Ocurrió un error al obtener los posts')
  
      return searchtwits
    },
}
  



