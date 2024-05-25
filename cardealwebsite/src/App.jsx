import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Home from './Components/Home/Home';
import Search from './Components/Search/Search';
import Trending from './Components/Trendings/Trendings';
import Sellers from './Components/Sellers/Sellers';
import Auction from './Components/Auction/Auction';
import Review from './Components/Review/Review';
import Footer from './Components/Footer/Footer';

function App() {

  return (
    <div>
      <Navbar/>
      <Home/>
      <Search/>
      <Trending/>
      <Sellers/>
      <Auction/>
      <Review/>
      <Footer/>
    </div>
  )
}

export default App
