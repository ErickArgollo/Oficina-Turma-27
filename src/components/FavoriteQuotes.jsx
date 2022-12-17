import React, { Component } from 'react'

export default class FavoriteQuotes extends Component {

  removeFavorite = () => {
    const { infos: { quote }, getFavorites} = this.props;
    const currentFavorites = JSON.parse(localStorage.getItem('favoriteQuotes')) || []
    const remove = currentFavorites.filter((e) => e.quote !== quote)
    localStorage.setItem('favoriteQuotes', JSON.stringify(remove))
    getFavorites();

  }

  render() {
    const { infos: { anime, character, quote }, getFavorites} = this.props;
    console.log(anime)
    return (
      <div>
        <h2>{ anime }</h2>
        <h3>{ character }</h3>
        <p>{ quote }</p>
        <button type="button" onClick={ this.removeFavorite }>Desfavoritar</button>
      </div>
    )
  }
}
