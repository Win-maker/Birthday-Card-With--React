import React from 'react';


const BirthdayComponent = ({ bdData }) => {
    

    const bdComponent = {
        width: '400px',
        height: '100px',
        backgroundColor:'#BAE8E8'
    }

const imgContainer = {
    display: 'inline-block'
    }
    
    const imgStyle = {
        width: '50px',
        height: '50px',
        borderRadius: '50%',
        marginTop:'30px'
       
    }

    const info = {
        width: '100%',
        height: '50px'
    }

    const textStyle = {
        display: 'inline-block',
        marginLeft: '50px',
        marginBottom:'30px'
    }

    
           
    return (

        <>
            <div style={bdComponent}>
            <div style={imgContainer}><img src={bdData.img} alt={bdData.name} style={imgStyle} /></div>
                <div style={textStyle}>{bdData.name}
                    <p>{bdData.age}
                    </p></div>    
            </div>
        </>
    )
}

export default BirthdayComponent;