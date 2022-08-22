import React from 'react';
import Card from './components/Card';
import Filters from './components/Filters';
import Form from './components/Form';

export default class App extends React.Component {
  constructor() {
    super();

    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: '',
      cardAttr2: '',
      cardAttr3: '',
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
      isSaveButtonDisabled: true,
      savedCards: [],
      hasTrunfo: false,
      searchValues: {
        name: '',
        rarity: '',
        trunfo: false,
      },
    };
  }

  onInputChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    }, this.buttonValidation);
  };

  handleSearch = ({ target }) => {
    if (target.type === 'checkbox') {
      this.setState((prevState) => ({ searchValues: {
        name: '',
        rarity: '',
        trunfo: prevState.searchValues.trunfo,
      } }));
    }

    const value = target.name === 'rarity' && target.value === 'todas'
      ? '' : target.value;

    this.setState((prevState) => ({
      searchValues: { ...prevState.searchValues, [target.name]: value },
    }));
  }

  buttonValidation = () => {
    const { cardName, cardDescription, cardAttr1,
      cardAttr2, cardAttr3, cardImage, cardRare } = this.state;

    const inputArray = [cardName, cardDescription, cardAttr1,
      cardAttr2, cardAttr3, cardImage, cardRare];

    const isInputFilled = inputArray.every((input) => input !== '');

    const valueMaxAttribute = 90;
    const maxValueSum = 210;
    const attributesArray = [Number(cardAttr1), Number(cardAttr2), Number(cardAttr3)];
    const validateAtt = attributesArray
      .every((attribute) => attribute >= 0 && attribute <= valueMaxAttribute);

    const validSum = Number(cardAttr1)
    + Number(cardAttr2)
    + Number(cardAttr3)
    <= maxValueSum;

    const checkButton = (isInputFilled && validateAtt && validSum);
    this.setState({ isSaveButtonDisabled: !checkButton });
  };

  onSaveButtonClick = () => {
    const newCard = this.state;

    this.setState((previous) => ({
      cardName: '',
      cardDescription: '',
      cardAttr1: 0,
      cardAttr2: 0,
      cardAttr3: 0,
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
      isSaveButtonDisabled: true,
      savedCards: [...previous.savedCards, newCard],
      hasTrunfo: previous.cardTrunfo ? !previous.hasTrunfo : previous.hasTrunfo,
    }));
  }

  removeButton = (card) => {
    const { savedCards } = this.state;
    const filtered = savedCards.filter((item) => item.cardName !== card.cardName);
    this.setState((prevState) => ({
      savedCards: filtered,
      hasTrunfo: !prevState.hasTrunfo,
    }));
  }

  setFilterCard = () => {
    const { savedCards, searchValues: { name, rarity, trunfo } } = this.state;

    if (trunfo) return savedCards.filter((card) => card.cardTrunfo);

    if (rarity) {
      savedCards.filter((card) => card.cardName.includes(name)
      && card.cardRare === 'rarity');
    }
    return savedCards.filter((card) => card.cardName.includes(name));
  }

  render() {
    // const { savedCards, searchValues: { name, rarity } } = this.state;

    // const searchFilters = rarity ? savedCards.filter((card) => (
    //   card.cardName.includes(name) && card.cardRare === rarity
    // ))
    //   : savedCards.filter((card) => (
    //     card.cardName.includes(name)
    //   ));

    return (
      <div>
        <h1>Tryunfo</h1>
        <Form
          { ...this.state }
          onInputChange={ this.onInputChange }
          onSaveButtonClick={ this.onSaveButtonClick }
        />

        <Card
          { ...this.state }
          showButton={ false }
        />

        {this.setFilterCard.map((card) => (
          <div key={ card.cardName }>
            <Card
              { ...card }
              removeButton={ () => this.removeButton(card) }
              showButton
            />
          </div>
        ))}

        <Filters
          { ...this.state }
          handleSearch={ this.handleSearch }
        />

      </div>
    );
  }
}
