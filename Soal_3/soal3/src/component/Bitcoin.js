import React, { Component } from 'react';
import Navbar from './Navbar';
import axios from 'axios';

class Bitcoin extends Component
{
  state = 
  {
    dollarausbeli: "",
    dollarausjual:"" ,   
    eurobeli:"" ,        
    eurojual: "",    
    poundsterbeli:"" ,        
    poundsterjual: "",    
    yenbeli:"" ,        
    yenjual:"" ,  
    dollarusbeli:"" ,
    dollaramerikajual: "",
  }

  componentDidMount()
  {
    axios.get('https://blockchain.info/ticker')
    .then((ambilData) => {     
      this.setState({
        dollarausbeli: ambilData.data.AUD.buy.toFixed(2),
        dollarausjual: ambilData.data.AUD.sell.toFixed(2),   
        eurobeli: ambilData.data.EUR.buy.toFixed(2),        
        eurojual: ambilData.data.EUR.sell.toFixed(2),    
        poundsterbeli: ambilData.data.GBP.buy.toFixed(2),        
        poundsterjual: ambilData.data.GBP.sell.toFixed(2),    
        yenbeli: ambilData.data.JPY.buy.toFixed(2),        
        yenjual: ambilData.data.JPY.sell.toFixed(2),  
        dollarusbeli: ambilData.data.USD.buy.toFixed(2),
        dollaramerikajual: ambilData.data.USD.sell.toFixed(2),                  
      })
    })
  }

  render() {
    return (
      <div>
        <Navbar/>
        <center>
          <h1> Harga Bitcoin Hari Ini </h1>
            <table border='1'>
                <tbody>
                  <tr>
                    <th> Mata Uang </th>
                    <th> Harga Beli Bitcoin </th>
                    <th> Harga Jual Bitcoin </th>                        
                  </tr>
                  <tr>
                    <td>Dollar Australia</td>
                    <td>{this.state.dollarausbeli}</td>
                    <td>{this.state.dollarausjual}</td>                      
                  </tr>
                  <tr>
                    <td>Euro Eropa</td>
                    <td>{this.state.eurobeli}</td>
                    <td>{this.state.eurojual}</td>
                  </tr>
                  <tr>
                    <td>Poundsterling Inggris</td>
                    <td>{this.state.poundsterbeli}</td>
                    <td>{this.state.poundsterjual}</td>                      
                  </tr>
                  <tr>
                    <td>Yen Jepang</td>
                    <td>{this.state.yenbeli}</td>
                    <td>{this.state.yenjual}</td>                       
                  </tr>
                  <tr>
                    <td>Dollar Amerika</td>
                    <td>{this.state.dollarusbeli}</td>
                    <td>{this.state.dollaramerikajual}</td>                      
                  </tr>
                </tbody>
              </table>
          </center>
      </div>
      );
    }
  }
export default Bitcoin; 