import Page_1 from "./components/Page_1";
import Page_2 from "./components/Page_2";
import Page_3 from "./components/Page_3";
import Page_4 from "./components/Page_4";
import Page_5 from "./components/Page_5";
import Page_6 from "./components/Page_6";
import Page_7 from "./components/Page_7";
import Page_8 from "./components/Page_8";
import Footer from "./components/footer";
import Header from "./components/header";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Page_1></Page_1>
      <Page_2></Page_2>
      <Page_3></Page_3>
      <Page_4></Page_4>
      <Page_5></Page_5>
      <Page_6></Page_6>
      <Page_7></Page_7>
      <Page_8></Page_8>
      <Footer></Footer>
    </div>
  );
}

export default App;
