import "./App.css";
import ClassComponent from "./pages/ClassComponent";
import { FunctionComponent } from "./pages/FunctionComponent";
import LifeCyclePage from "./pages/LifeCyclePage";
import SetStatePage from "./pages/SetStatePage";

function App() {
  return (
    <div className="App">
      <ClassComponent></ClassComponent>
      <FunctionComponent></FunctionComponent>
      <SetStatePage></SetStatePage>
      <LifeCyclePage></LifeCyclePage>
    </div>
  );
}

export default App;
