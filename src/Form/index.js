import React from 'react';
import db from './../db';

class Form extends React.Component {
  state = {
    text: '',
  };

  writeUserData = (text) => {
    // firebase.database().ref('test').set({
    //   data
    // });
    let docRef = db.collection('messages').doc('alovelace');

    let setAda = docRef.set({ text });

    console.log('STEADA', setAda)
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
