import React, {useState,Fragment} from 'react';
import {createUseStyles} from 'react-jss'
import Img from 'react-image';

const useStyles = createUseStyles({

    header:{
        //width:'100%',
        height:'50px',
        background:'#1B2236',
        opacity:'0.9',
        display: 'flex',
        alignItems: 'center',
        paddingLeft:'50px',
        paddingRight:'50px',
        position:'relative',

        '& h1':{
            position:'absolute',
            left:'50%',
            transform:'translateX(-50%)',
            bottom:'-41%',
            margin:0,
            fontSize:'40px',
            fontFamily:'Roboto',
            color:'white',
        },

        '& p':{
            margin:0,
            padding:0,
            color:'white',
            fontSize:'20px',
            fontFamily:'Roboto',
        }
    }
})

const Header = props => {
    const { nmbVote, ...otherProps } = props;
    const classes = useStyles(props);

    return (

        <div className={classes.header}> 
            <p>{props.nmbVote} votes</p>
            <h1>CATMASH</h1>
        </div>
    );

}


export default Header;