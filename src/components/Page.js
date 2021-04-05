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
                <p className='body'>
                    {page.page.name.en}
                </p>
                <p className='body'>
                    Missä ja milloin? : {page.page.where_when_duration.where_and_when} 
                </p>
                <p className='body'>
                    Kesto: {page.page.where_when_duration.duration ? page.page.where_when_duration.duration : "Ei tietoa"} 
                </p>
            
                <p className='body'>
                    Sivut : 
                <a href={page.page.info_url}>{page.page.info_url}</a>
                    
                </p>
        </div>
        )
    }
    
}

export default Page