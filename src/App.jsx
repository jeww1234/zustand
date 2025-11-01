import "./App.css";
import CountBox from "./Component/CountBox";
import CountStore from "./Store/CountStore";

function App() {
  const { count, increase, increaseBy, decrease, decreaseBy } = CountStore();

  return (
    <div>
      <h1>Count:{count}</h1>
      <button onClick={increase}>increase</button>
      <button onClick={decrease}>decrease</button>
      <button onClick={()=>increaseBy(10)}>10씩 증가</button>
      <button onClick={()=>decreaseBy(10)}>10씩 감소</button>
      <CountBox/>
    </div>
  );
}

export default App;
