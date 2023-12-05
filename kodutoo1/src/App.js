import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <button className="nupp">Nupp</button>
      <p className="sinine-tekst"><i>See on tekst</i></p>
      <p className="roheline-tekst"><b>See on samuti tekst</b></p>
      
      <table>
        <tr>
          <th>Ettevõte</th>
          <th>Kontakt</th>
          <th>Riik</th>
        </tr>
        <tr>
          <td>Alfreds Futterkiste</td>
          <td>Maria Anders</td>
          <td>Saksamaa</td>
        </tr>
        <tr>
          <td>Centro comercial Moctezuma</td>
          <td>Francisco Chang</td>
          <td>Mehhiko</td>
        </tr>
        <tr>
          <td>Ernst Handel</td>
          <td>Roland Mendel</td>
          <td>Austria</td>
        </tr>
        <tr>
          <td>Island Trading</td>
          <td>Helen Bennett</td>
          <td>UK</td>
        </tr>
        <tr>
          <td>Laughing Bacchus Winecellars</td>
          <td>Yoshi Tannamuri</td>
          <td>Kanada</td>
        </tr>
        <tr>
          <td>Magazzini Alimentari Riuniti</td>
          <td>Giovanni Rovelli</td>
          <td>Itaalia</td>
        </tr>
      </table>

      <iframe width="560" height="315" src="https://www.youtube.com/embed/KDMvN45sjo4?si=d4BnmU2XsVdYyVzq" title="YouTube video player"
      frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen>
      </iframe>

      <img className="pilt" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F50%2Fe2%2Fa0%2F50e2a0bdde0faadf63f337e32cd68b3e.jpg&f=1&nofb=1&ipt=0f57fa45b1b4e5a77a2ed297e3d54c515dbf4c5afc2a679db4a2afe2d48dbac3&ipo=images" 
      alt="Blue fish" />      
    </div>
  );
}

export default App;
