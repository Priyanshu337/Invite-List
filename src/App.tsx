import React, { useState } from 'react';
import logo from './logo.svg';
import List from "./component/List";
import './App.css';
import AddToList from './component/AddToList';

export interface IState{
  people:{
    name: string
    age: number
    url: string
    note?: string
  }[]
}

function App() {
  const [people, setPeople] = useState<IState["people"]>([
    {
      name: "Lebron James",
      url:"https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/1966.png",
      age: 36,
      note: "Addicted to games"
    },
    {
      name: "Kevin Hart",
      url:"https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcRbBZSEcgw5ZhyhWCwb9Oqu_E5QVQHB34PkZdCCzNRe6LW59y_o5MHWNgpicivRfon8Buj9lMItZre4Hb8",
      age: 35,
      note: "He loves to do standup comedy"
    }
  ])

  return (
    <div className="App">
      <h1>People Invited to party</h1>
      <List people = {people} />
      <AddToList people = { people} setPeople={setPeople} />
    </div>
  );
}

export default App;
