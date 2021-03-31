import React, { useEffect, useState,  } from 'react';
import Page from './components/Page'
import './App.css';
import axios from 'axios';
import { GoogleMap, LoadScript} from '@react-google-maps/api'
import Mark from './components/MapMarker'

const App =() => {
  const [center, setCenter] = useState({
    lat: 60.192059,
    lng: 24.945831
  })

  

  
  const api_key = 'AIzaSyByr3VXd1vbL7HcpRizHpF-dy4yYd1_4Uo'
  const [siteData, setData] = useState(null)
  

  const get_api_data =async () => {
    const a = await axios.get('https://tranquil-brushlands-44401.herokuapp.com/events')
    console.log(a)
    return a.data

  }



  useEffect(() => {

    
    get_api_data()
    .then(d => setData(d.data))
    
    

  }, [])
  

  

  if (siteData === null){
    console.log(typeof(siteData))
    console.log(siteData == null)
    return (

    <div>
      null


    </div>
  )
  }
  else{
    console.log(siteData)
    return(
      <div className='sub-bod'>
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
          height: "400px",
          width: "800px"
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
