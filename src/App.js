import './App.css'
import Home from './containers/home/home'
import Contact from './containers/contact/contact'
import Portfolio from './containers/portfolio/portfolio'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import Navbar from '../src/components/navbar/navbar'
import Footer from '../src/components/footer/footer'

function App () {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route path='/portfolio' component={Portfolio} />
          <Route path='/contact' component={Contact} />
          <Route path='/' component={Home} />
        </Switch>
        <Footer />
        <script src='https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js'></script>
      </div>
    </Router>
  )
}

export default App

// document.addEventListener('DOMContentLoaded', function() {
//   const elems = document.querySelectorAll('.sidenav');
//   const instances = M.Sidenav.init(elems, options);
// });