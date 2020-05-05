import React, {useState,Fragment} from 'react';
import {createUseStyles} from 'react-jss'
import Img from 'react-image';

const useStyles = createUseStyles({

    header:{
        height:'80px',
        background:'#1B2236',
        //opacity:'0.9',
        display: 'flex',
        alignItems: 'center',
        paddingLeft:'50px',
        paddingRight:'50px',
        position:'relative',
        zIndex:'5',

        '& h1':{
            position:'absolute',
            //left:'50%',
            right:'20px',
            //transform:'translateX(-50%)',
            //bottom:'-30%',
            margin:0,
            fontSize:'45px',
            fontFamily:'Roboto',
            color:'white',
        },

        '&>p':{
            margin:0,
            padding:0,
            color:'white',
            fontSize:'20px',
            fontFamily:'Roboto',
        },
    },

    rankingButton:{
        position:'relative',
        display:'flex',
        margin:0,
        marginRight:'20px',
        padding:'15px',
        borderRadius:'8px',
        transition: 'all .3s ease',
        "&::before":{
            content:'""',
            display:'block',
            position: 'absolute',
            left: 0,
            right: 0,
            bottom: 0,
            top: 0,
            border: 'solid 1px white',
            borderRadius: '8px',
            transition: 'all .3s ease',
        },
        '&:hover':{
            backgroundColor:'rgba(255,255,255,0.7)',
            '&::before':{
                left: '-15px',
                right: '-15px',
                bottom:' -15px',
                top: '-15px',
                opacity: 0,
            }
        },
        '& p':{
            padding:0,
            margin:0,
            color:'white',
            fontFamily:'Roboto',
            fontSize:'18px',
        },
        '& svg':{
            marginLeft: '10px',
            transition:'all 0.3s ease',
        },
    },

    openSvg:{

        '& svg':{
            transform: 'rotate(90deg)'
        }



    }
})

const Header = props => {
    const { nmbVote,onClick, ...otherProps } = props;
    const classes = useStyles(props);

    const [openSvg, setOpenSvg]=useState(false);

    const openRanking = ()=>{
        props.onClick();
        setOpenSvg(!openSvg);
    };

    return (

        <div className={classes.header}> 
            <div className={`${classes.rankingButton} ${openSvg == true && classes.openSvg}`} onClick={ () => openRanking()}>
                <p>Voir le classement</p>
                <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" fill="white"/></svg>
            </div>
            <p>{props.nmbVote} votes</p>
            <h1>CATMASH</h1>
        </div>
    );

}


export default Header;