import React, { Component } from 'react';
import './PokemonSearch.css';

class PokemonSearch extends Component {
    state = {
      search: '',
      page: 1
    }


  handleSearch = ({ target }) => {
    this.setState({ search: target.value });
  }


  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onSearch(this.state);
  }

  componentDidUpdate(prevProp, prevState) {
    if (prevState !== this.state) {
      this.props.onSearch(this.state);
    }
  }

  render() {

    const { search } = this.state;


    return (
      <form className="PokemonSearch" onSubmit={this.handleSubmit}>

        <input
          name="search"
          value={search}
          placeholder="Search Pokemon"
          onChange={this.handleNameSearch}
        />

        {/* <select
          name="typeFilter"
          value={typeFilter}
          onChange={this.handleTypeChange}
        >
          <option value="">Sort Types</option>
          {types.map(type => (
            <option
              key={type}
              value={type}>

              {type}

            </option>
          ))}
        </select>

        <select
          name="sortDirection"
          value={sortDirection}
          onChange={this.handleSortChange}
        >
          <option value="">Sort Alphabetically</option>
          <option value="asc">A-Z</option>
          <option value="desc">Z-A</option>
        </select> */}

        <button>Search</button>

      </form>
    );
  }
}

export default PokemonSearch;