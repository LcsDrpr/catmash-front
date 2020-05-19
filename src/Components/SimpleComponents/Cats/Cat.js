import React, {useState,Fragment} from 'react';
import Img from 'react-image';

import "./cat.scss";



const Cat = props => {

    const {name, onClick, urlImg, type, winner, idCat, ...otherProps } = props;


    const [win, setWin] = useState(false);

    const handleClick = async()=>{
        props.onClick();
        setWin(true);
        setTimeout(() => setWin(false), 1000);
        console.log('THE WINNER',props.winner)
    }

    // const winSet = ()=>{
        
    //     console.log("PROPS IDCAT : ", props.idCat);
    //     console.log("PROPS WINNER : ", props.winner);

    //     idCatCat == winnerCat ? setWin(true) : setWin(false);
    // }



    return (

        <div className={`catDiv cat-card ${win == true && 'win'} ${props.type == 'cat1' ? 'cat-left' : 'cat-right'}`} 
            onClick={ () => handleClick()}
        > 
            <div className='svg-box'>
                <svg width="24px" height="18px" viewBox="0 0 24 18" version="1.1" xmlns="http://www.w3.org/2000/svg" >
                    <title>+1</title>
                    <defs></defs>
                    <g id="Page-3" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" font-family="Roboto-Bold, Roboto" font-size="25" font-weight="bold">
                        <text id="+1" fill="#FFFFFF">
                        <tspan x="0" y="18">+1</tspan>
                        </text>
                    </g>
                </svg>
            </div>
            {/* <Img src={props.urlImg}/> */}
            <div className={'image'} style={{backgroundImage:`url(${urlImg})`}}></div>
        </div>
    );
}

export default Cat;