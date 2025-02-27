import { useState } from "preact/hooks"

export default function Modulo2() {
  let def = "Aenean varius iaculis fermentum. Praesent varius cursus magna, ac congue velit feugiat vel. Pellentesque nisl elit, tincidunt ac lobortis in, commodo in ante. Nam feugiat ipsum vitae tristique scelerisque. Integer leo nunc, venenatis vitae fermentum at, hendrerit non purus. Praesent a iaculis lacus. Etiam metus ipsum, euismod pellentesque felis a, venenatis pretium turpis. Praesent ut leo erat. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam gravida purus ut erat pharetra bibendum. Aenean cursus nibh et justo gravida, non dignissim turpis tempus. Nunc nec porttitor justo. Duis aliquam nunc in dolor accumsan sodales. Sed in feugiat lectus. Proin mollis metus ipsum, laoreet placerat orci consectetur sed. Donec eleifend elit id lectus porttitor, eget mollis tellus gravida.";
  const [showText, setShowText] = useState(false);
  const [newText, setText] = useState(def);  

  return (
    <div>
    <div>
      <div class="btn-title">
      <h1 class="title">Modulo 2</h1>
      <button class="btn" onClick={() => setShowText(!showText)}>
        {showText ? "Mostrar mas" : "Mostrar menos"} 
      </button></div>
      {showText && (
        <table class="card" >
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