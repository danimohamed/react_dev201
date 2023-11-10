import React from "react";

export default class JeuDe extends React.Component {
  constructor() {
    super();
    this.state = {
      cont: 0,
      resultat: null,
    };
  }

  jeu() {
    const n = Math.floor(Math.random() * 6 + 1);
    this.setState({ resultat: n, cont: this.state.cont + 1 });
  }

  initializeGame() {
    this.setState({ cont: 0, resultat: null });
  }

  render() {
    const { resultat } = this.state;
    const diceImageSrc = resultat ? `image/${resultat}.jpg` : null;

    return (
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
        <img src="image/icon.jpg" alt="icon" />
        <h1>Jeu de</h1>
        {diceImageSrc && <img src={diceImageSrc} alt={`Dice result: ${resultat}`} />}
        
        <div>
          <h2>Face: {resultat}</h2>
          <h2>Nombre d'essai: {this.state.cont}</h2>
        </div>
        <button onClick={() => this.jeu()}>Play</button>
        {resultat === 3 && <p>Bravo, vous avez trouvé la face cachée, c'est 3!</p>}
        <button onClick={() => this.initializeGame()}>Initialize</button>
      </div>
    );
  }
}
