import React, {useState,Fragment} from 'react';
import {createUseStyles} from 'react-jss'
import Img from 'react-image';

const useStyles = createUseStyles({



})

const Ranking = props => {
    const { link,score, ...otherProps } = props;
    const classes = useStyles(props);

    return (

        <div>

            <p>{props.link} et le score : {props.score != null ? props.score : 0}</p>

        </div>
    );

}


export default Ranking;