export default {
    async getTwits() {
      // console.log('get')
      const response = await fetch( 'https://twiitgov.mybluemix.net/search/marihuana')
      if (!response.ok) throw new Error('Ocurrió un error al obtener los posts')
      const jsonBody = await response.json()
  
      const { statuses } = jsonBody.data

      // console.log(statuses[0].full_text);
      // console.log(statuses[1].full_text);
  
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
  



