import React, { useState,  } from 'react';




const Page = (page) => {

    const [show, setShow] = useState(false)


    console.log('PAGE', page)

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
                    Missä ja milloin? : {page.page.where_when_duration.where_and_when} 
                </p>
                <p >
                    Kesto: {page.page.where_when_duration.duration ? page.page.where_when_duration.duration : "Ei tietoa"} 
                </p>
            
                <p >
                    Sivut : 
                <a href={page.page.info_url}>{page.page.info_url}</a>
                    
                </p>
                </div>
        </div>
        )
    }
    
}

export default Page