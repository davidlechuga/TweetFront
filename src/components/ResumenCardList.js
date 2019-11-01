import React from 'react'

import ResumenCard from './ResumenCard'

function ResumenCardList (props) {
  const { IBMtwits } = props
  // console.log(IBMtwits);
  
  return (
    <section>
      {
        IBMtwits.map(twit => (
          <ResumenCard
            created_at={ twit.text}
            full_text={twit.relevance}
            key= {twit.id}
          />
        ))

      }
    </section>
  )
}

export default ResumenCardList
