import React from 'react';
import db from './../db';

class Form extends React.Component {
  state = {
    text: '',
  };

  async saveMessage (text) {
    try {
      const timestamp = new Date();
      // save to collection
      const result = await db.collection('messages').add({ text, timestamp })
      console.log('Document written with ID: ', result.id);
      // reset text field
      this.setState({ text: '' });
    } catch (error) {
      console.error('Error adding document: ', error);
    }
  }  

  handleChange = (e) => {
    const text =  e.target.value;
    this.setState({ text });
  };

  handleSubmit = () => {
    const { text } = this.state;
    // save message in firebase
    this.saveMessage(text);
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
