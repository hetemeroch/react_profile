import logo from './logo.svg';
import './App.css';
import Profile from './profile';
import Images from './01.jpg'


function App() {
  const profile = 
    {
      fulname : "Heteme Rochenman",
      profession : "Web Developper",
      telephone : "1234567890"
    }
  
  const myfonction = () => {
    window.alert('Hello')
  }

  return (
    <div className="App">
      <Profile  tab = {profile} texte = {myfonction}>
        <img src={Images} alt="" />
      </Profile>


    </div>
  );
}

export default App;
