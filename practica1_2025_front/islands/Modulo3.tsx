import { useState } from "preact/hooks"

export default function Modulo3() {

  let def="Nulla lacus orci, tempor ut venenatis in, gravida in nunc. Donec vulputate, urna nec laoreet sagittis, elit turpis tempor magna, non lobortis tellus arcu vel neque. Nullam nisi nisi, elementum pellentesque lacinia eu, ornare a velit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent scelerisque erat mauris, et tincidunt lacus aliquam et. Aliquam erat volutpat. Sed in nibh vitae ante scelerisque luctus eu et eros."
  const [showText, setShowText] = useState(false);
  const [newText, setText] = useState(def);  

  return (
    <div>
    <div>
      <div class="btn-title">
      <h1 class="title">Modulo 3</h1>
      <button class="btn" onClick={() => setShowText(!showText)}>
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