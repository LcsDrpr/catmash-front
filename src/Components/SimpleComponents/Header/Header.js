import React, {useState,Fragment} from 'react';
import { useMediaQuery } from 'react-responsive';
import Img from 'react-image';


import "./header.scss";


const Header = props => {
    const { nmbVote,onClick, ...otherProps } = props;

    const [openSvg, setOpenSvg]=useState(false);

    const openRanking = ()=>{
        props.onClick();
        setOpenSvg(!openSvg);
    };

    const desktop = useMediaQuery({ query: '(min-device-width: 769px)' });
    const responsive = useMediaQuery({ query: '(max-device-width: 768px)' });

    return (
        <Fragment>
            {desktop &&
            <Fragment>
                <div className='header desktop'>
                    <div className={`rankingButton ${openSvg == true && 'openSvg'}`} onClick={ () => openRanking()}>
                        <p>Voir le classement</p>
                        <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" fill="white"/></svg>
                    </div>
                    <p>{props.nmbVote} votes</p>
                    <h1>CATMASH</h1>
                </div>
                <div className='header responsive'> 
                    <div className={`rankingButton ${openSvg == true && 'openSvg'}`} onClick={ () => openRanking()}>
                        <p>Voir le classement</p>
                        <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" fill="white"/></svg>
                    </div>
                    <h1>CATMASH</h1>
                    <p>{props.nmbVote} votes</p>
                </div>
            </Fragment>
            }
            { responsive &&
                <div className='header responsive'> 
                    <div className={`rankingButton ${openSvg == true && 'openSvg'}`} onClick={ () => openRanking()}>
                        <p>Voir le classement</p>
                        <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" fill="white"/></svg>
                    </div>
                    <h1>CATMASH</h1>
                    <p>{props.nmbVote} votes</p>
                </div>
            }
        </Fragment>
    );

}


export default Header;