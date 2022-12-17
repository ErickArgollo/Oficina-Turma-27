import React, { Component } from "react";
import Header from "../components/Header";
import Quotes from "../components/Quotes";
import { fetchRandomQuotes } from "../services/animeChanApi";

export default class Home extends Component {
  
  state = {
    search: "",
    quotes: [],
    invalidRequest: false,
  };

  getQuotes = async () => {
    const { search } = this.state;
    const quotes = await fetchRandomQuotes(search);
    if (quotes.error) {
      this.setState({
        invalidRequest: true,
      });
    } else {
      this.setState({
        quotes,
        invalidRequest: false,
      });
    }
  };

  render() {
    const { quotes, invalidRequest } = this.state;
    const { history } = this.props;
    return (
      <div>
        <Header />
        <input
          type="text"
          onChange={({ target }) => this.setState({ search: target.value })}
        />
        <button type="button" onClick={this.getQuotes}>
          Search
        </button>
        <section>
          {!invalidRequest ? (
            quotes.map((infos) => <Quotes key={infos.quote} info={infos} history={ history } />)
          ) : (
            <p>Não encontrado...</p>
          )}
        </section>
      </div>
    );
  }
}
