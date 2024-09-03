import { useState } from "react";
import "./App.scss";
import HeaderComponent from "./components/Header/headerComponent";

function App() {
  return (
    <>
      <HeaderComponent />
      <div className="App">
        <h1>welcome to the instock app</h1>
        <br />
        <br />
        <hr />
        <h1 className="font-H1-PageHeader ">Titilium Header Example</h1>
        <h2 className="font-H2-SubHeader ">Titilium Subheader Example</h2>
        <p className="font-H3-label">Titilium Label Example</p>
        <p className="font-H4-TableHeader">Titilium Table Header Example</p>
        <p className="font-P1-BodyLarge">Titilium Body Large Example</p>
        <p className="font-P2-BodyMedium">Titilium Body Medium Example</p>
        <p className="font-P3-BodySmall">Titilium Body Small Example</p>

        <p className="App__col1 font-H3-label">Color Example</p>
        <p className="App__col2 font-H3-label">Color Example</p>
        <p className="App__col3 font-H3-label">Color Example</p>
        <p className="App__col4 font-H3-label">Color Example</p>
        <p className="App__col5 font-H3-label">Color Example</p>
        <p className="App__col6 font-H3-label">Color Example</p>
        <p className="App__col7 font-H3-label">Color Example</p>
        <p className="App__col8 font-H3-label">Color Example</p>

        <div className="App__size1">Size Example 1</div>
        <div className="App__size2">Size Example 1</div>
        <div className="App__size3">Size Example 1</div>

        <div className="App__pad1">Padding Example 1</div>
        <div className="App__pad2">Padding Example 2</div>
        
      </div>
    </>
  );
}

export default App;
