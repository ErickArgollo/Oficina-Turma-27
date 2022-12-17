import React, { Component } from 'react'
import FavoriteQuotes from '../components/FavoriteQuotes'
import Header from '../components/Header'
export default class Favorites extends Component {

  state = { 
    favoriteQuotes: [],
  }

  componentDidMount(){
    this.getFavorites()
  }

  getFavorites = () => {
    const currentFavorites = JSON.parse(localStorage.getItem('favoriteQuotes')) || [];
    this.setState({
      favoriteQuotes: currentFavorites
    })
  }

  removeFavorite = ({target}) => {
    console.log(target.value)
    const currentFavorites = JSON.parse(localStorage.getItem('favoriteQuotes')) || []
    const remove = currentFavorites.filter((e) => e.quote !== target.value)
    localStorage.setItem('favoriteQuotes', JSON.stringify(remove))
    this.setState({
      favoriteQuotes: remove,
    })
  }


  render() {
    const { favoriteQuotes } = this.state;
    console.log(favoriteQuotes)
    return (
      <div>
        <h1>Favoritos</h1>
        <Header />
        <div>
          {/* {
            favoriteQuotes.map((e) => <FavoriteQuotes key={ e.quote } infos={ e } getFavorites={ this.getFavorites } />)
          } */}
          {
            favoriteQuotes.map((e) => <div key={ e.quote }>
              <h2>{e.anime}</h2>
              <h3>{e.character}</h3>
              <p>{e.quote}</p>
              <button type="button" value={e.quote} onClick={ this.removeFavorite }>Remover Favorito</button>
            </div>)
          }
        </div>
      </div>
    )
  }
}
