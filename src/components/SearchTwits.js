
import React, {Component} from "react";
import api from '../lib/api'

class SearchTwits  extends Component {

     constructor(props) {
        super(props);
        this.onClick = this.onClick.bind(this)
        this.state = {search: '' }


        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }

      handleChange = (e) => {
          this.setState({search: e.target.value })
          
      }

      handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
      }
    

      async onClick(){
        const tweets = await api.getTwits()
        console.log('tweets: ', tweets)
        console.log(this.state.search)
    }

    render (){
        // const { handleSearch } = this.props
        // const search = this.state
        return(

                <div className="search-container">
                    <input 
                        className="search-input"
                        type="text"
                        onChange= {this.handleChange}
                        value= {this.state.search}
                        />
                    <button className="search-btn" type="submit" onClick={this.onClick} > SEARCH </button>
                </div>
        )
    }
  
}
export default SearchTwits

