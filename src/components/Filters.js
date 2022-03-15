import React, { Component } from 'react';
import propTypes from 'prop-types';

export default class Filters extends Component {
  render() {
    const { onInputChange, filterName } = this.props;
    return (
      <div>
        <h3>Filtros de busca:</h3>
        <label htmlFor="filterName">
          Nome da carta:
          <input
            data-testid="name-filter"
            name="filterName"
            value={ filterName }
            type="text"
            id="filterName"
            onChange={ onInputChange }
            placeholder="Nome da carta"
          />
        </label>
      </div>
    );
  }
}

Filters.propTypes = {
  onInputChange: propTypes.func,
}.isRequired;
