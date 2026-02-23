import './App.css'
import Dashboard from './components/Dashboard'
import {lazy, Suspense} from 'react'


function App() {
  const Dash = lazy(() => import('./components/Dashboard'))
return (
    <div className="App">
        <Suspense fallback={<div><h1>Loading...</h1></div>}>
      <Dash/>
      </Suspense>
      </div>
  )
}

export default App;
