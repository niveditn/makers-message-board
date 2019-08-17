import React from 'react';
import firebase from './../db';

class Form extends React.Component {
  state = {
    text: '',
  };

  writeUserData = (data) => {
    firebase.database().ref('test').set({
      data
    });
  }  

  handleChange = (e) => {
    const text =  e.target.value;
    this.setState({ text });
  };

  handleSubmit = () => {
    const { text } = this.state;
    // TODO: save message in firebase
    this.writeUserData(text);
    this.setState({ text: '' });
  }

  render() {
    const { text } = this.state;

    return <React.Fragment>
      <input value={text} onChange={this.handleChange}/>
      <button onClick={this.handleSubmit}>Go!</button>
    </React.Fragment>
  }

}

export default Form;
