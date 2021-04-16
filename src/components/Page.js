
import React, { useState,  } from 'react';
const parse = require('html-react-parser');

const Page = (page) => {


    
    const [show, setShow] = useState(false)
    const [divButShow, setDivButShow] = useState(false)

    
    
    const a = parse.htmlToDOM(page.page.description.body)
    console.log(a)
    const b = parse.domToReact(a)
    console.log(b)

    console.log(<div></div>)

    
    if(!show){

        return(
        
            <button className='button' onClick = {() => setShow(show === false ? true : false)}>+ {page.page.name.fi} </button>
            
            
    )

    }
    else{



        return(
        <div >
            <button className='button' onClick = {() => setShow(show === false ? true : false)}>- {page.page.name.fi} </button>
            
            <div className="body">
                <p >
                    {page.page.name.en}
                </p>
                <p >
                    Missä ja milloin? : {page.page.where_when_duration.where_and_when ? page.page.where_when_duration.where_and_when : "No info"} 
                </p>
                <p >
                    Kesto: {page.page.where_when_duration.duration ? page.page.where_when_duration.duration : "Ei tietoa"} 
                </p>
            
                <p >
                    Sivut : 
                <a href={page.page.info_url}>{page.page.info_url}</a>
                    
                </p>

            <button className="button"  onClick = {() => setDivButShow(divButShow === false ? true : false)}>

                {divButShow ? "- Less Info" : "+ More Info"}
            </button>
                
                {divButShow ? b : null}

            </div>

           
                
        </div>



        )
        
        
    }
    
}

export default Page