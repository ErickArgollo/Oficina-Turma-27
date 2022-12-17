import React, { Component } from "react";

export default class Quotes extends Component {
  state = {
    isFavorite: false,
  };

  componentDidMount(){
    this.checkIsFavorite()
  }

  checkIsFavorite = () => {
    const {
      info: { quote },
    } = this.props;
    const currentFavorites = JSON.parse(localStorage.getItem('favoriteQuotes')) || [];
    const isFavorite = currentFavorites.some((e) => e.quote === quote)
    this.setState({
      isFavorite,
    })

  }

  saveFavorite = () => {
    const {
      info: { anime, character, quote },
    } = this.props;
    const currentFavorites = JSON.parse(localStorage.getItem('favoriteQuotes')) || []
    localStorage.setItem('favoriteQuotes',JSON.stringify([...currentFavorites, {anime, character, quote }]))
    this.setState({
        isFavorite: true,
    })
  };

  removeFavorite = () => {
    const { info: { quote }} = this.props;
    const currentFavorites = JSON.parse(localStorage.getItem('favoriteQuotes')) || []
    const remove = currentFavorites.filter((e) => e.quote !== quote)
    this.setState({
        isFavorite: false
    })
    localStorage.setItem('favoriteQuotes', JSON.stringify(remove))
  };

  render() {
    const {
      info: { anime, character, quote },
      history,
    } = this.props;
    const { isFavorite } = this.state;
    return (
      <div>
        <h2>{anime}</h2>
        <h3>{character}</h3>
        <p>{quote}</p>
        <div>
            {
                isFavorite ? <button type="button" onClick={ this.removeFavorite }>Desfavoritar</button> : <button type="button" onClick={this.saveFavorite}>
                Favoritar
              </button>
            }
          
          <button
            type="button"
            onClick={() => history.push(`/quotes/${character}`)}
          >
            Citações do personagem
          </button>
        </div>
      </div>
    );
  }
}
