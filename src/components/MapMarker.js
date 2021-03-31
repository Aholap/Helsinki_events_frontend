import { Marker, InfoWindow } from '@react-google-maps/api'
import React, {  useState,  } from 'react';



const Mark = (props) => {
    
    const [show, setShow] = useState(null)
    const d = props.data
    
    console.log(show === null)
    const InfoWin = () => {
        return(
            
            <InfoWindow key={d.id} onCloseClick = {() => setShow(null)} onLoad={() => console.log('LOL')} position = {{lat: d.location.lat, lng: d.location.lon}}>
            <div>
                {d.name.fi + '\n'}
                <a  href={d.info_url}>{d.info_url}</a>
            </div>
          </InfoWindow>
        
        )
    }
    if (show === null){

    return(
        
        <Marker key={d.id} onRightClick={() => setShow(1)} title={d.name.fi + ' (right click for more info)'}  onClick={props.setC} position= {{lat: d.location.lat, lng: d.location.lon}} zoom={9}>
            


            </Marker>
    )
    }
    else{

        return(
        <div>
            <Marker key={d.id} title={d.name.fi + '(right click for more info)'}  onClick={props.setC}  position= {{lat: d.location.lat, lng: d.location.lon}} zoom={9}>
                
                </Marker>
                
                <InfoWin></InfoWin>
                </div>
        )
        }


    

    

    

}

export default Mark