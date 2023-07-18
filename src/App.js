import './App.css';
import Sidebar from './Component/Sidebar';
import Header from './Component/Header';
import Graph from './Component/Graph';
import Footer from './Component/Footer';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <div className="App">

    <Sidebar/>
    <Header/>
    <Graph/>
    <Footer/>
      
    </div>

  );
}

export default App;