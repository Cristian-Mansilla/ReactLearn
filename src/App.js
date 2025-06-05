const App = () => {
  const titulo = <h1>Aprendiendo React</h1>;
  const btnAlert = () => {
    alert("Saluda React");
  };
  const array = [1, 2, 3, 4, 5];
  return (
    <>
      <div>
        {titulo}
      </div>
      <div>
        {array.map((elem,key)=>{
          return <p key={key}>{elem}</p>
        })}
      </div>
      <div>
        <button onClick={btnAlert}>Presioname</button>
      </div>
    </>
  );
};

export default App;
