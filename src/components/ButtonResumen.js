import React, {Component} from 'react';
import api from '../lib/api'


class BottonResumen extends Component {
    constructor(props) {
        super(props);
        this.onClick = this.onClick.bind(this)
      }

      async onClick(){
          const tweets = await api.getTwits()
          console.log('tweets: ', tweets)
      }

    render(){
        return(
            <div>
                <button type="submit" onClick={this.onClick}>Enviar</button>
            </div>
        )
    }
}

export default BottonResumen