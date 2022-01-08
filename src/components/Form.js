import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Form extends Component {
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
      // hasTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick,
    } = this.props;

    return (
      <section>
        <form>
          <h1>Adicionar Carta</h1>

          <label htmlFor="name">
            <h3>Nome da carta</h3>
            <input
              type="text"
              data-testid="name-input"
              value={ cardName }
              onChange={ onInputChange }
              id="name"
              name="cardName"
            />
          </label>

          <label htmlFor="description">
            <h3>Descrição</h3>
            <input
              type="textarea"
              data-testid="description-input"
              value={ cardDescription }
              onChange={ onInputChange }
              id="description"
              name="cardDescription"
            />
          </label>

          <label htmlFor="att-01">
            <h3>Atributo 01</h3>
            <input
              type="number"
              data-testid="attr1-input"
              value={ cardAttr1 }
              onChange={ onInputChange }
              id="att-01"
              name="cardAttr1"
            />
          </label>

          <label htmlFor="att-02">
            <h3>Atributo 02</h3>
            <input
              type="number"
              data-testid="attr2-input"
              value={ cardAttr2 }
              onChange={ onInputChange }
              id="att-02"
              name="cardAttr2"
            />
          </label>

          <label htmlFor="att-03">
            <h3>Atributo 03</h3>
            <input
              type="number"
              data-testid="attr3-input"
              value={ cardAttr3 }
              onChange={ onInputChange }
              id="att-03"
              name="cardAttr3"
            />
          </label>

          <label htmlFor="imgInput">
            <h3>Imagem</h3>
            <input
              type="text"
              data-testid="image-input"
              value={ cardImage }
              onChange={ onInputChange }
              id="imgInput"
              name="cardImg"
            />
          </label>

          <label htmlFor="rare">
            <h3>Raridade:</h3>
            <select
              data-testid="rare-input"
              value={ cardRare }
              onChange={ onInputChange }
              id="rare"
              name="cardRare"
            >
              <option value="normal">Normal</option>
              <option value="raro">Raro</option>
              <option value="muito raro">Muito Raro</option>
            </select>
          </label>

          <label htmlFor="trunfo">
            <h3>Trunfo :</h3>
            <input
              type="checkbox"
              data-testid="trunfo-input"
              checked={ cardTrunfo }
              onChange={ onInputChange }
              id="trunfo"
              name="cardTrunfo"
            />
          </label>

          <button
            type="submit"
            data-testid="save-button"
            disabled={ isSaveButtonDisabled }
            onClick={ onSaveButtonClick }
          >
            Salvar
          </button>

        </form>
      </section>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string,
  cardDescription: PropTypes.string,
  cardAttr1: PropTypes.number,
  cardAttr2: PropTypes.number,
  cardAttr3: PropTypes.number,
  cardImage: PropTypes.string,
  cardRare: PropTypes.string,
  cardTrunfo: PropTypes.bool,
  // hasTrunfo: PropTypes.bool,
  isSaveButtonDisabled: PropTypes.bool,
  onInputChange: PropTypes.func,
  onSaveButtonClick: PropTypes.func,
}.isRequired;
