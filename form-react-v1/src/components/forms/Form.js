import React, { Component } from 'react';
import Car from '../Car';

class Form extends Component {
  state = {
    username: '',
    color: '',
    comment: '',
    colors: ['', 'green', 'black', 'blue', 'midnightblue'],
  };

  handleAddPseudo = event => {
    const username = event.target.value;
    this.setState({ username });
  };

  handleSelectOneColor = event => {
    const color = event.target.value;
    this.setState({ color });
  };

  handleWriteComment = event => {
    const comment = event.target.value;
    this.setState({ comment });
  };

  render() {
    return (
      <div>
        <Car state={this.state} />
        <h1>Commentaire</h1>
        Formulaire...
        <form>
          <div>
            <label htmlFor=''>Pseudo : </label>
            <input
              type='text'
              name='username'
              id='username'
              value={this.state.username}
              onChange={this.handleAddPseudo}
            />
          </div>
          <div>
            <label htmlFor='color'>Couleur : </label>
            <select
              value={this.state.color}
              onChange={this.handleSelectOneColor}
            >
              {this.state.colors.map((color, index) => {
                return (
                  <option key={index} value={color}>
                    {color}
                  </option>
                );
              })}
            </select>
          </div>
          <div>
            <label htmlFor=''>Commentaire : </label>
            <br />
            <textarea
              cols='60'
              rows='5'
              value={this.state.comment}
              onChange={this.handleWriteComment}
            >
              Laisser un commentaire...
            </textarea>
          </div>
          <div
            className='App-myDiv'
            style={{ backgroundColor: this.state.color }}
          >
            {this.state.color}
            <p style={{ color: 'green' }}>{this.state.comment}</p>
          </div>
        </form>
      </div>
    );
  }
}

export default Form;
