import "./App.css";
import Navbar from "./components/Navbar";
import TextForms from "./components/TextForms";

function App() {
  return (
    <>
    <Navbar title="TextUtils" aboutText="About TextUtils"/>
    <div className="container">
    <TextForms heading="Enter the text to analyze"/>
    </div>
    </>
  );
}

export default App;
