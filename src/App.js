import "./App.css";
// import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

function App() {
  return (
    <>
      <Navbar title="ReactApp" about="About" />
      <div className="container my-3">
        <TextForm heading="Enter The Text to Analyze Below" />
        {/* <About /> */}
      </div>
    </>
  );
}

export default App;
