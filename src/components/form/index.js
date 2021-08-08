import React from 'react';

import './form.scss';

class Form extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      method: "",
      url: ""

    }
  }
  handleSubmit = e => {
    e.preventDefault();
    const formData = {
      method: this.state.method,
      url: this.state.url
    };
    this.props.handleApiCall(formData);
  }

  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <label >
            <span>URL: </span>
            <input name='url' type='text' onChange={(event) => this.setState({ url: event.target.value })} />
            <button type="submit">GO!</button>
          </label>
          <label className="methods">
            <span id="get" onClick={() => { this.setState({ method: "GET" }) }}>GET</span>
            <span id="post" onClick={() => { this.setState({ method: "POST" }) }}>POST</span>
            <span id="put" onClick={() => { this.setState({ method: "PUT" }) }}>PUT</span>
            <span id="delete" onClick={() => { this.setState({ method: "Delete" }) }}>DELETE</span>
          </label>
        </form>
      </>
    );
  }
}

export default Form;
