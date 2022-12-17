import React, { Component } from 'react'
import Header from '../components/Header'
import { fetchCharacterQuotes } from '../services/animeChanApi';

export default class CharacterQuotes extends Component {

  state = {
    characterQuotes: [],
  }

  componentDidMount(){
    this.getCharacterQuotes();
  }

  getCharacterQuotes = async () => {
    const { match: { params: { character}}} = this.props;
    const characterQuotes = await fetchCharacterQuotes(character);
    this.setState({
      characterQuotes,
    })
  }


  render() {
    const { match: { params: { character}}} = this.props;
    // console.log(history.location.pathname.split('/')[2])
    const { characterQuotes } = this.state;
    return (
      <div>
        <Header />
        <h1>{character}</h1>
        {
          characterQuotes.map((e) => (
          <div key={ e.quote }>
            <h2>{e.anime}</h2>
            <p>{e.quote}</p>
          </div>))
        }
      </div>
    )
  }
}
