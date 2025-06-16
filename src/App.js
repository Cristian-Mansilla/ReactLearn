import "./styles/App.css";
import  data  from "./data/data.json";
import { Box } from "./styles/styled";
import Dollars from "./components/Dollars";
const App = () => {
  const titulo = <h1 style={{fontSize:"2.5em"}}>Aprendiendo React</h1>;
  const btnAlert = () => {
    alert("Saluda React");
  };

  return (
    <>
      <div className='title'>{titulo}</div>
      <div>
        <button onClick={btnAlert}>Presioname</button>
      </div>

      <div>
        {data.filter(element => element.edad > 24).map((element,key) => {
          return <p key={key}>{element.name}</p>
        })}
      </div>

      <Box>
        <Dollars></Dollars>
      </Box>

    </>
  );
};

export default App;
