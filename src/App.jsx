import './App.css'
import Header from './components/Header.jsx'
import Entry from './components/Entry.jsx'
import DataArray from "./data.js"
function App() {
  return (
    <>
      <Header></Header>
      <main className='container'>
        {DataArray.map(data => 
          <Entry 
          key={data.id}
          entry={data}
          />
        )}
      </main>
    </>
  )
}

export default App
