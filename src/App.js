import React, { useEffect, useState,  } from 'react';
import Page from './components/Page'
import './App.css';
import axios from 'axios';
import { GoogleMap, LoadScript} from '@react-google-maps/api'
import Mark from './components/MapMarker'
require('dotenv').config()

const App =() => {
  const [center, setCenter] = useState({
    lat: 60.192059,
    lng: 24.945831
  })

  

  
  const api_key = process.env.KEY
  const [siteData, setData] = useState(null)

  var topButton = null
  useEffect(() => {
    topButton = document.getElementById("toTop")
    
  })


  const scrollToPageTop = () => {
    
    document.body.scrollTop = 550
    document.documentElement.scrollTop = 550
  }

  

  const showScrollButton = () => {
    console.log(topButton)

    if (topButton) {

      if (document.body.scrollTop > 1000 || document.documentElement.scrollTop > 1000){
        topButton.style.display = "block"
      }
      else{
        
        topButton.style.display = "none"
      }
    }


  }

  window.onscroll = showScrollButton

  

  const get_api_data =async () => {
    const a = await axios.get('https://tranquil-brushlands-44401.herokuapp.com/events')
    
    return a.data

  }



  useEffect(() => {

    
    get_api_data()
    .then(d => setData(d.data))
    
    

  }, [])
  

  

  if (siteData === null){
 
    return (

    <div className="loader">
      Loading..


    </div>
  )
  }
  else{

    return(
      <div className='sub-bod'>

        <button id="toTop" className="topButton" onClick = {() => scrollToPageTop()}  >
          Scroll to top
        </button>


        <h1 className='App-header'>
        Tapahtumat Helsingissä
        </h1>




        <LoadScript
        
        id="script-loader"
        googleMapsApiKey={api_key}
        
      >
        <GoogleMap
        
        id="circle-example"
        mapContainerStyle={{
          height : 400,
          width : window.width,
          position:'relative',
          
          
        }}
        zoom={9}
        center={center}>


        {siteData.map(d => 
          //Marker component!!!!!!!!!!!!!
            <Mark key={d.id} setC = {() => setCenter({lat: d.location.lat, lng: d.location.lon})} data = {d}></Mark>
        )}


          
          

          
        
        
        </GoogleMap>
        
      </LoadScript>

        
        {
        siteData.map(d => 
        <Page key={d.id} page={d}/>)}



     
        




      </div>
    )
  }
  
}
export default App
