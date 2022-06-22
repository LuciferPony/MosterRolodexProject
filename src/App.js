import './App.css';
import { useState, useEffect } from 'react';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';

const App = () => {
  const [searchField, setSearchField] = useState(''); //useState returns an array -> [value, setValue]
  const [monsters, setMonsters] = useState([]);
  useEffect( () => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response =>response.json())
      .then(users=> setMonsters(users));
    }, [] )

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  };
  const filteredMonsters = monsters.filter(monster => {
    return monster.name.toLocaleLowerCase().includes(searchField);
  });
  return (
    <div className="App">
      <h2 className='app-title'>Monsters Rolodex</h2>

      <SearchBox onChangeHandler={onSearchChange} placeholder={'search monsters'} className={'search-box'}/>
      <CardList className='card-list-monsters' monsters={filteredMonsters}/>
    </div>
  );
}
// class App extends Component {

//   constructor() {
//     super();
//     this.state = {
//       monsters: [],
//       searchField: ''
//     };
//   }

//     componentDidMount() {
//       fetch('https://jsonplaceholder.typicode.com/users')
//         .then(response =>response.json())
//         .then(users=> this.setState(() => {
//           return {monsters: users}
//         },
//         ()=> {
//           console.log(this.state);
//         }))
//     }

//     onSearchChange = (event) => {
//       const searchField = event.target.value.toLocaleLowerCase();
//         this.setState(() => {
//           return {searchField}
//         });
//     }

//   render() {

//     const { monsters, searchField } = this.state;
//     const { onSearchChange } = this;
//     const filteredMonsters = monsters.filter(monster =>
//       {
//         return monster.name.toLocaleLowerCase().includes(searchField);
//       });
//     return (
//       <div className="App">
//         <h2 className='app-title'>Monsters Rolodex</h2>

//         <SearchBox onChangeHandler={onSearchChange} placeholder={'search monsters'} className={'search-box'}/>
//         <CardList monsters={filteredMonsters}/>
//       </div>
//     );
//   }
// }

export default App;
