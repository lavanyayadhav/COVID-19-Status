import React from 'react'
import axios from 'axios'
import './Covid.css';
class Covid extends React.Component{
    constructor(){
        super()
        this.state = {
            country : '',
            
                confirmed : '0',
                deaths : '0',
                recovered : '0'
            
        }
    }

    handleChange = (e) => {
        const country = e.target.value
        this.setState({country})
    }

    handleBlur= () => { 
        axios.get(`https://covid19.mathdro.id/api/countries/${this.state.country}`)
        .then((response) => {
            const dataList = response.data
            console.log(dataList.confirmed.value)
            this.setState((prevState) => {
                return{
                confirmed : dataList.confirmed.value,
                deaths : dataList.deaths.value,
                recovered : dataList.recovered.value
            }})
        })
        .catch((err) => {
            alert(err.message)
        })



}    

    render(){
        return(
            <div class="covid">
                <div class="div3">
                <h2>Enter the country Name to search</h2>
                <input class="input" placeholder="Country Name" type="text" value={this.state.country} onChange={this.handleChange} onBlur={this.handleBlur} />
               </div>
               <div class="div2">
                <table border="1" class="table">
                <thead>
                    <tr>
                        
                        <th> confirmed </th>
                        <th> deaths </th>
                        <th> recovered </th>
                        
                    </tr>
                </thead>
                <tbody>
                    
                            <tr key={this.state.confirmed}>
                                <td> {this.state.confirmed} </td>
                                <td> {this.state.deaths} </td>
                                <td> {this.state.recovered}  </td>
                                
                            </tr>
                        
                </tbody>
            </table>
            </div>    
            </div>
        )
    }
}

export default Covid