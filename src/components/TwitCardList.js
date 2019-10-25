import React from 'react'

import TwitCard from './TwitCard'

function TwitCardList (props) {
  const { twits } = props

  return (
    <section>
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
