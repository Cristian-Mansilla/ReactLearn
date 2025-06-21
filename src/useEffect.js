import { useState } from "react"
import { GlobalStyle } from "./styles/GlobalStyle";
import {C1} from "./components/C1";

export const UseEffect = () => {
    const [count, setCount] = useState(0);

    return <>
        <div>
            {count % 2 === 0 ? <C1 /> : <div>Componente desmontado</div>}
            <button onClick={()=> setCount(count+1)}>Pulsar</button>
        </div>
        <GlobalStyle/>
    </>
}