import React from 'react'
import TwitCard from './TwitCard'
import SearchTwits from './SearchTwits'



// handleSearch = (search) => {
//   console.log(search); 
// }

function TwitCardList (props) {

  const { twits } = props

  return (

    <section>

      <SearchTwits  
        // handleSearch = {this.handleSearch}
      
      />

      {
        twits.map(twit => (
          <TwitCard
            created_at={ twit.created_at}
            full_text={twit.full_text}
            key= {twit.id}
          />
        ))
      }
    </section>

  )
}

export default TwitCardList
