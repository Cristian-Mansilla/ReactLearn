import { useState } from "react";
import paragraph from "./data/romeo-y-julieta.json";
import { GlobalStyle } from "./styles/GlobalStyle";
const App = () => {
  const [currentParagraph, setCurrentParagraph] = useState(0);
  return (
    <>
      <GlobalStyle />
      <p>{paragraph[currentParagraph]}</p>
    </>
  );
};
export default App;
