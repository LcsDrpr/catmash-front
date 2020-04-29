import React, {useState,Fragment} from 'react';
import {createUseStyles} from 'react-jss'



const useStyles = createUseStyles({

    // '@keyframes haloAnim':{
    //     0:{
    //         opacity:0,

    //     },
    //     10:{
    //         opacity:1,

    //     },
    //     100:{
    //         left: '-15px',
    //         right: '-15px',
    //         bottom: '-15px',
    //         top: '-15px',
    //         opacity:0,
    //     }

    // },

    win : {
        color:'green',

        "&::after":{
            width:'0!important',
        },


        "& svg":{

            opacity:'1!important',
            transform:'scale(2.5)',

            '& text':{
                fill:"#02CC62",
            }
        }
    },

    catDiv : {
        width:'400px',
        height:'400px',
        borderRadius:'15px',
        //border:'1px solid red',
        backgroundImage:props=>`url(${props.urlImg})`,
        backgroundRepeat:'no-repeat',
        backgroundSize:'auto',
        backgroundPosition: 'center',
        boxShadow:'5px 5px 25px 0 rgba(46, 61, 73, 0.2)',
        transition:'all 0.3s',
        position:'relative',
        margin:'0 20px 0 20px',
        backgroundColor:'white',
        "&::after":{
            content:"''",
            position:'absolute',
            left: 0,
            right: 0,
            bottom: 0,
            top: 0,
            width:0,
            backgroundColor:'#02CC62',
            opacity:'0.4',
            borderRadius:'15px',
            transition:'all 0.3s ease',
            pointerEvents: 'none',
            //animationDirection: 'reverse',
        },
        '&:hover':{
            boxShadow : '2px 4px 8px 0 rgba(46, 61, 73, 0.2)',
            '&::after':{
                width:'100%',
            }

            // '& $halo':{
            //     animationName:'$haloAnim',
            // }
        },
        
    },

    cat1:{
        position:'absolute',
        top:'-1%',
        left:'2%',
        transform: 'rotateZ(-40deg)',
        
        "& svg ":{
            opacity:0,
            transition:'all 0.4s ease',
        }
    },
    cat2:{
        position:'absolute',
        top:'-1%',
        right:'2%',
        transform: 'rotateZ(40deg)',
        //opacity:0,

        "& svg":{
            opacity:0,
            transition:'all 0.4s ease',

            // "& text":{
            //     transition:'all 0.4s ease',
            // }
        }
    }

});

const Cat = props => {

    const {name, onClick, urlImg, type, ...otherProps } = props;

    const classes = useStyles(props);

    const [win, setWin] = useState(false);


    const handleClick = ()=>{
        props.onClick();
        setWin(true);
        setTimeout(() => setWin(false), 1000);

    }

    console.log(props.type)

    return (

        <div className={`${classes.catDiv} cat-card ${win == true && classes.win}`}
            onClick={ () => handleClick()}
        > 
            <div className={props.type == 'cat1' ? classes.cat1 : classes.cat2}>
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
            {/* <div className='halodiv'></div> */}
            {/* <Img src={props.urlImg} /> */}

            {/* <button>Yo vote !</button> */}
            {/* <button onClick={ () => handleClick()}> Vote pour ce chat !</button> */}

        </div>
    );
}

export default Cat;