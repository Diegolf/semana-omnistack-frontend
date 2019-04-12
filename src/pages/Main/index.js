import React, { Component } from 'react';
import api from '../../services/api';

import "./styles.css";
import logo from '../../assets/logo.svg';

export default class main extends Component {
  state = {
    newBox: ''
  };

  handleSubmit = async e => {
    e.preventDefault(); // previne o comportamento de atualiar a página

    const response = await api.post('boxes', {
      title: this.state.newBox
    });

    this.props.history.push(`/box/${response.data._id}`);
  }
  
  /*
  handleInputChange = e => {
    
  }
  */

  render() {
    return (
        <div id="main-container">
            <form onSubmit={this.handleSubmit}>
              <img src={logo} alt="" />
              <input 
                value={this.state.newBox}
                placeholder="Criar um box" 
                onChange={e => this.setState({newBox: e.target.value})}
              />
              <button type="submit">Criar</button>
            </form>
        </div>
    );
  }
}
