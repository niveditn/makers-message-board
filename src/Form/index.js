import React from 'react';
import db from './../db';

class Form extends React.Component {
  state = {
    text: '',
  };

  clearInput = () => {
    this.setState({ text: '' });
  }

  async saveMessage (text) {
    try {
      const timestamp = new Date();
      // save to collection
      const result = await db.collection('messages').add({ text, timestamp })
      console.log('Document written with ID: ', result.id);
      // reset text field
      this.clearInput();
    } catch (error) {
      console.error('Error adding document: ', error);
    }
  }  

  handleChange = (e) => {
    const text =  e.target.value;
    this.setState({ text });
  };

  handleSubmit = () => {
    const { text: currentText } = this.state; 
    const text = currentText.trim();
    // save message in firebase
    if(text.length) {
      this.saveMessage(text);
    } else {
      this.clearInput();
    }
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
