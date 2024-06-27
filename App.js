import React, {Component} from 'react';
import {
  BtnArea,
  BtnText,
  Container,
  Photo,
  TextPhrase,
  ButtonTO,
} from './src/styled';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      textoFrase: '',
      img: require('./src/biscoito.png'),
    };

    this.quebraBiscoito = this.quebraBiscoito.bind(this);

    this.frases = [
      'Siga os bons e aprenda com eles.',
      'O bom-senso vale mais do que muito conhecimento.',
      'O riso é a menor distância entre duas pessoas.',
      'Deixe de lado as preocupações e seja feliz.',
      'Realize o óbvio, pense no improvável e conquiste o impossível.',
      'Acredite em milagres, mas não dependa deles.',
      'A maior barreira para o sucesso é o medo do fracasso.',
    ];
  }

  quebraBiscoito() {
    let numeroAleatorio = Math.floor(Math.random() * this.frases.length);

    this.setState({
      textoFrase: '"' + this.frases[numeroAleatorio] + '"',
      img: require('./src/biscoitoAberto.png'),
    });
  }

  render() {
    return (
      <Container>
        <Photo source={this.state.img} />
        <TextPhrase>{this.state.textoFrase}</TextPhrase>
        <ButtonTO onPress={this.quebraBiscoito}>
          <BtnArea>
            <BtnText>Quebrar biscoito</BtnText>
          </BtnArea>
        </ButtonTO>
      </Container>
    );
  }
}

export default App;
