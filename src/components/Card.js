import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Card extends Component {
  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      removeButton,
      showButton,
    } = this.props;

    return (
      <section>
        <div>
          <p data-testid="name-card">{ cardName }</p>

          <img src={ cardImage } alt={ cardName } data-testid="image-card" />

          <p data-testid="description-card">{ cardDescription }</p>
          <span data-testid="attr1-card">{ cardAttr1 }</span>
          <span data-testid="attr2-card">{ cardAttr2 }</span>
          <span data-testid="attr3-card">{ cardAttr3 }</span>
          <span data-testid="rare-card">{ cardRare }</span>
          { cardTrunfo ? <span data-testid="trunfo-card">Super Trunfo</span> : null }
        </div>
        {
          showButton
        && (
          <button
            data-testid="delete-button"
            type="button"
            onClick={ removeButton }
          >
            Excluir
          </button>)
        }
      </section>
    );
  }
}

Card.propTypes = {
  cardName: PropTypes.string,
  cardDescription: PropTypes.string,
  cardAttr1: PropTypes.number,
  cardAttr2: PropTypes.number,
  cardAttr3: PropTypes.number,
  cardImage: PropTypes.string,
  cardRare: PropTypes.string,
  cardTrunfo: PropTypes.bool,
  removeButton: PropTypes.func,
  showButton: PropTypes.bool,
}.isRequired;
