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
            img ={{
                src: data.img.src ,
                alt: data.img.alt
            }}
            title = {data.title}
            country = {data.country}
            googleMapsLink = {data.googleMapsLink}
            dates = {data.dates}
            text = {data.text}
            
          />
        )}
      </main>
    </>
  )
}

export default App
