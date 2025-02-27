import Modulo1 from "../islands/Modulo1.tsx";
import Modulo2 from "../islands/Modulo2.tsx";
import Modulo3 from "../islands/Modulo3.tsx";

export default function Home() {
  return (
    <div class="global">
    <div class="card">
      <Modulo1/>
    </div>
    <div class="card">
    <Modulo2/>
  </div>
  <div class="card">
    <Modulo3/>
  </div>
  </div>
  
  );
}