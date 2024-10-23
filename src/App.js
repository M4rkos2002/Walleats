import './App.css';
import {TipButtonComponent} from "./components/tip-button.component";
import {CardInputDefaultComponent, CardInputSmallComponent} from "./components/card-input.component";

function App() {
    const handleButtonClick = () => {
        console.log('Botón clickeado');
    };

    return (
        <div className="App">
          <CardInputSmallComponent />
            <CardInputDefaultComponent />
        </div>
  );
}

export default App;
