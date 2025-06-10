import  data  from "./data/data.json";
const App = () => {
  const titulo = <h1>Aprendiendo React</h1>;
  const btnAlert = () => {
    alert("Saluda React");
  };

  return (
    <>
      <div>{titulo}</div>
      <div>
        <button onClick={btnAlert}>Presioname</button>
      </div>

      <div>
        {data.map((element,key) => {
          return <p key={key}>{element.name}</p>
        })}
      </div>
    </>
  );
};

export default App;
