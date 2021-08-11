import React from 'react'
import './history.scss';
function History(props) {

  return (

    <div>
      <h1>History</h1>
      {props.history ? props.history.map((event) => {
        return <>
          <br />
          <br />
          <h>URL: {event.url}</h>
          <br />
          <br />
          <h>methode: {event.method}</h>
          <br />
          <br />
        </>
      }) : <h3>impty</h3>}




    </div>

  )
}

export default History
