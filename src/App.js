import logo from "./logo.svg";
import "./App.css";
import Header from "./componentes/Header"; // im porta automaticamente 
import Info from "./componentes/Info"; // im porta automaticamente 
import {personalInformation} from "./data/Data.js";

function App() {
  return (
    <div className="App">
      <Header />
      <Info 
            name={personalInformation.personalData.name}
            lastname={personalInformation.personalData.lastname}
            nationality={personalInformation.personalData.nationality}
            age={personalInformation.personalData.age}
            occupation={personalInformation.personalData.occupation}
            avatar={personalInformation.personalData.avatar}
            bio={personalInformation.bio}/>
      

      <img
        src="https://raw.githubusercontent.com/Ivanszs/dh-frontend3-clases/master/clase-4/satisfied.png"
        alt="ImagenTarea"
      />
    </div>
  );
}

export default App;
