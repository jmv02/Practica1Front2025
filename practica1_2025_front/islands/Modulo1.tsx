
import { useState } from "preact/hooks";


export default function Modulo1() {
  let def = "Curabitur eget lorem sed odio pulvinar gravida quis quis ante. Phasellus et neque mattis, porttitor massa eget, finibus dolor. Vestibulum blandit pellentesque risus quis bibendum. Morbi euismod nunc eget varius elementum. Suspendisse ut ultricies purus. Nulla quis ultricies tellus. Vivamus eleifend elit tortor, in cursus erat cursus id. Mauris auctor leo lorem, id fermentum purus condimentum sed. Proin in erat congue, convallis massa eu, laoreet augue. Ut eleifend lectus nec semper vehicula. Aliquam a dui turpis. Aliquam vel varius quam. ";
  const [showText, setShowText] = useState(false);
  const [newText, setText] = useState(def);  

  return (
    <div>
    <div>
      <div class="btn-title">
      <h1 class="title">Modulo 1</h1>
      <button onClick={() => setShowText(!showText)}>
        {showText ? "Mostrar mas" : "Mostrar menos"} 
      </button></div>
      {showText && (
        <table class="card">
          <tbody>
          <p>{newText}</p>
            <tr class="inputText">
            <input type="text" name="ipsum" value="" placeholder = "Input de texto"onChange={(e)=>setText(e.currentTarget.value)}></input>
            </tr>
          </tbody>
        </table>
      )}
    </div></div>
  );
}