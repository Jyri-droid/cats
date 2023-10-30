import cats from "./utils/cats"
import Card from "./Card";
import getItemById from "./utils/getItemById";
import { useState } from "react";


const allIds = cats.map((element) => element.id);

const App = () => {
  const [list, setList] = useState(allIds);

  return (
    <div className="App">
      <div className="content-container">
      {list.map((element, index) => 
        <Card item={getItemById(cats, element)} key={`card ${index}`}/>
      )}
      </div>
    </div>
  );
}

export default App;
