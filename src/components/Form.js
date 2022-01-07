import React, { Component } from 'react';

export default class Form extends Component {
  render() {
    return (
      <div>
        <form>

          <h3>Nome da carta</h3>
          <input
            type="text"
            data-testid="name-input"
          />

          <h3>Descrição</h3>
          <input
            type="textarea"
            data-testid="description-input"
          />

          <h3>Atributo 01</h3>
          <input
            type="number"
            data-testid="attr1-input"
          />

          <h3>Atributo 02</h3>
          <input
            type="number"
            data-testid="attr2-input"
          />

          <h3>Atributo 03</h3>
          <input
            type="number"
            data-testid="attr3-input"
          />

          <h3>Imagem</h3>
          <input
            type="text"
            data-testid="image-input"
          />

          <h3>Raridade :</h3>
          <select
            data-testid="rare-input"
          >
            <option value="normal">Normal</option>
            <option value="raro">Raro</option>
            <option value="muito raro">Muito Raro</option>
          </select>

          <h3>Trunfo :</h3>
          <input
            type="checkbox"
            data-testid="trunfo-input"
          />

          <button
            type="submit"
            data-testid="save-button"
          >
            Salvar
          </button>

        </form>
      </div>
    );
  }
}
