import './App.css';
import Card from './components/card'

function App() {

  const pokemon_count = 50;
  const colors = {
     fire: '#FDDFDF',
     grass: '#DEFDE0',
     electric: '#FCF7DE',
     water: '#DEF3FD',
     ground: '#f4e7da',
     rock: '#d5d5d4',
     fairy: '#fceaff',
     poison: '#98d7a5',
     bug: '#f8d5a3',
     dragon: '#97b3e6',
     psychic: '#eaeda1',
     flying: '#F5F5F5',
     fighting: '#E6E0D4',
     normal: '#F5F5F5',
  };

  return (
    <div>
      <div className='mt-16'></div>
      <div class="mx-36 grid grid-cols-6 gap-4">
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
      </div>
      
    </div>
  );
}

export default App;
