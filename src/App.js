import React, { useState, useEffect } from 'react';
import './App.css';
import Cards from './Cards';

function App() {
const [user, setUser] = useState([]);
const [isHidden, setIsHidden] = useState(true);
const [curUser, setCurUser] = useState('');

const handleClick = (index) => {
  let clickedUser = index
  setCurUser(clickedUser)

  let status = isHidden === true ? false :true;
  setIsHidden(status)

}

useEffect(() => {
  fetch('https://randomuser.me/api?results=25')
  .then(res => {
    return res.json()
  })
  .then(user => (setUser(user.results)))
}, []);    

return (
  <div className="App">
    <header className="App-header">
      
        {user.map((user, index) => {
          return < Cards 
            pic={user.picture.large}
            first={user.name.first}
            last={user.name.last}
            gender={user.gender}
            email={user.email}
            city={user.location.city}
            index={index}
            isHidden= {isHidden}
            curUser= {curUser}
            handleClick={handleClick}
          />
        })}
      
    </header>
  </div>
);
}


export default App;
