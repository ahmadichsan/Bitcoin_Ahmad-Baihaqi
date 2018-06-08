import React, { Component } from 'react';
import Navbar from './Navbar';
import axios from 'axios';

class Bittorp extends Component {

  state = 
  {
    input:null,
    repos:null,
    nilai:null,
  }
    

  onSeriesInputChange = e =>{
    this.setState({ nilai:e.target.value});
    axios.get(`https://blockchain.info/tobtc?currency=USD&value=${e.target.value*14000}`)
    .then((ambilData) => {  
      console.log(ambilData);
      this.setState({
        hasil: ambilData.data,
        })
     })
  }
    
    render() {
      const{nilai} = this.state;
      
     return (
        <div>
          <Navbar/>
        <center>
          <br/>
          <h3>Konversi Bitcoin ke Rupiah </h3>
            <h5>Kurs 1 USD = 14.000 IDR</h5>
          <br/>
          <input value = {nilai} type="number" onInput={this.onSeriesInputChange} style={{width:'400px'}}/>
          <br/>
          { this.state.nilai ? <h4>BTC {nilai} &nbsp; Rp {this.state.hasil}</h4> :
          <div>
           <br/> 
          <h4>Silakan input nominal Bitcoin</h4>
          </div>
           }

        </center>
        </div>
        );
       }
     }
export default Bittorp;