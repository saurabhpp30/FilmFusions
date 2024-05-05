import './App.css';
import {AllRoutes} from "./Routes/AllRoutes"
import {Card,Footer,Header} from "./Components"

function App() {
  return (
    <div className="App">
      <Header/>
      <AllRoutes/>
      <Footer/>
    </div>
  );
}

export default App;
