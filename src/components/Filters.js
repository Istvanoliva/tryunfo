import React, { Component } from 'react';
import propTypes from 'prop-types';

export default class Filters extends Component {
  render() {
    const { handleSearch, searchValues: { name } } = this.props;
    return (
      <div>
        <h3>Filtros de busca:</h3>
        <label htmlFor="name">
          Nome da carta:
          <input
            data-testid="name-filter"
            name="name"
            value={ name }
            type="text"
            id="name"
            onChange={ handleSearch }
            placeholder="Nome da carta"
          />
        </label>

        <select
          name="rarity"
          data-testid="rare-filter"
          onChange={ handleSearch }
        >
          <option>todas</option>
          <option>normal</option>
          <option>raro</option>
          <option>muito raro</option>
        </select>

        <label htmlFor="trunfo-filter">
          <input
            type="checkbox"
            data-testid="trunfo-filter"
            // onChange={  }
          />
        </label>
      </div>
    );
  }
}

Filters.propTypes = {
  onInputChange: propTypes.func,
}.isRequired;
