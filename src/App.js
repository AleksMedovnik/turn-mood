import './App.scss';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Nav from './components/Nav/Nav';

function App() {
  return (
    <div className="App">
      <div className='container'>
        <Header />
        <Nav />
        <Main />
      </div>
    </div>
  );
}

export default App;