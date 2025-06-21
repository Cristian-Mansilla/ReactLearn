import { useState } from "react";
import paragraph from "./data/romeo-y-julieta.json";
import { GlobalStyle } from "./styles/GlobalStyle";
import { Btn } from "./styles/Btn";
import { Row } from "./styles/Row";
const App = () => {
  const [currentParagraph, setCurrentParagraph] = useState(0);
  const nextParagraph = () => {
    if (currentParagraph !== paragraph.length - 1) {
      setCurrentParagraph(currentParagraph + 1);
    }
  };
  const prevParagraph = () => {
    if (currentParagraph !== 0) {
      setCurrentParagraph(currentParagraph - 1);
    }
  };

  return (
    <>
      <div>
        <p>{paragraph[currentParagraph]}</p>
      </div>
      <Row>
        <Btn onClick={nextParagraph}>Siguiente</Btn>
        <Btn onClick={prevParagraph}>Atras</Btn>
      </Row>
      <GlobalStyle />
    </>
  );
};
export default App;
