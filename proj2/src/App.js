import NavBar from "./components/NavBar.jsx"
import './style.css';
import logoBNB from "./static/airbnb.png"
import clust from "./static/Group 77.png"
import ImgCluster from "./components/ImgCluster.jsx"
import Header from "./components/optionHeader"
import data from "./components/data.js"
import Slide from "./components/Slide.jsx"

function App() {

  const slides = data.map(option => {
    return (
      <Slide 
            key={option.key}
            {...option}
        />)
  })



  return (
    <div className="App">
      <NavBar logo={logoBNB} />
      <ImgCluster pic={clust} />
      <Header />
      <container className='scroll'>
        <div id='slides'>
          {slides}

        </div>
      </container>
    </div>
  );
}

export default App;
