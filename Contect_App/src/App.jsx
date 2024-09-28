import "./App.css";
import Contect from "./components/Contect/Contect";
import Contectinfo from "./components/Contectinfo/Contectinfo";
import Header from "./components/header/header";

function App() {
  return (
    <>
      <div>
        <Header />
        <Contectinfo />
        <Contect />
      </div>
    </>
  );
}

export default App;
