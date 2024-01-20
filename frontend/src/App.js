import './App.scss'
import 'react-tooltip/dist/react-tooltip.css'
import { About, SKills, Footer, Header, Testimonials, Work } from './container';
import { Navbar, Animation} from './components'


function App() {
  return (
    <div className="app">
      <Navbar/>
      <Header/>
        {/* <Animation/> */}
      <About/>
      <Work/>
      <SKills/>
      <Testimonials/>
      <Footer/>
    </div>
  );
}

export default App;
