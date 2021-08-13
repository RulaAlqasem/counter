import React from 'react'
import './history.scss';
function History(props) {

  return (

    <div>
      {/* <h1>History</h1>
      {props.history ? props.history.map((event, idx) => {

        return (
          <div key={event.toString()}>
            <br />
            <br />
            <h id=''>URL: {event.url}</h>
            <br />
            <br />
            <h>methode: {event.method}</h>
            <br />
            <br />
            <span onClick={(event) => { props.deleteFromHis(idx) }}>Delete</span>
          </div>
        )
      }) : <h3>impty</h3>} */}


      <h2>History</h2>

      <table>
        <tr>
          <th>URL</th>
          <th>Methode</th>
          <th>delete from history</th>
        </tr>

        {props.history && props.history.map((event, idx) => {


          return (
            <tr key={event.toString()}>

              <td id=''>URL: {event.url}</td>

              <td>methode: {event.method}</td>

              <td onClick={(event) => { props.deleteFromHis(idx) }}>Delete</td>
            </tr>
          )
        })}


      </table>

    </div>

  )
}

export default History
