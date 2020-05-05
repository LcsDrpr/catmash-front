import React, {useState,Fragment} from 'react';
import {createUseStyles} from 'react-jss'
import Img from 'react-image';


const useStyles = createUseStyles({

    ranking:{
        position:'absolute',
        zIndex:'-10',
        left:0,
        transform: 'translateY(-480px)',
        background:'white',
        borderRadius:'0px 0px 15px 15px',
        maxWidth: '300px',
        maxHeight:'400px',
        overflow:'scroll',
        padding:'10px',
        transition:'all 0.5s ease',

        '&>p':{
            marginBottom:'10px',
        },

        '& ul':{
            padding:0,
            paddingLeft: '15px',

        },

        '& li':{
            padding:'10px 0',
            paddingLeft:'60px',
            listStyle:'none',
            display:'flex',
            justifyContent: 'flex-start',
            alignItems: 'center',

            '& svg':{
                height:'30px',
                width:'auto',
            },

            '& img':{
                maxHeight:'50px',
                width:'auto',
                marginRight:'10px',
            },

            '&$first, &$second, &$third':{
                paddingLeft:'0px',
                '& svg':{
                    marginRight:'30px',
                }
            },

        }
    },
    open:{
        //top:'80px',
        transform:'translateY(0px)',
    },

    first:{
    },

    second:{

    },

    third:{

    },
    title:{
        textTransform:'uppercase',
        fontWeight:'bold',
    }


})




const Ranking = props => {
    const { data,link,score,open, ...otherProps } = props;
    const classes = useStyles(props);

    data.sort(function(a, b){
        return b.score - a.score;
    });

    const rankingList = data.map((chat,i)=>{

        let color = '';
        if(i == 0){
            color = '#F8E71C';
        }
        if(i == 1){
            color = "#DFDADA";
        }
        if(i == 2){
            color="#E49D5F";
        }

        let cup = <svg width="512px" height="512px" viewBox="0 0 512 512" version="1.1" xmlns="http://www.w3.org/2000/svg">
        <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
            <g id="trophy">
                <path d="M497,36.953125 L431.296875,36.953125 C431.535156,29.675781 431.667969,22.355469 431.667969,15 C431.667969,6.714844 424.949219,0 416.667969,0 L95.332031,0 C87.050781,0 80.332031,6.714844 80.332031,15 C80.332031,22.355469 80.464844,29.675781 80.703125,36.953125 L15,36.953125 C6.714844,36.953125 0,43.667969 0,51.953125 C0,119.164062 17.566406,182.574219 49.460938,230.507812 C80.988281,277.894531 122.984375,305.074219 168.351562,307.71875 C178.636719,318.910156 189.507812,328.035156 200.832031,334.996094 L200.832031,401.664062 L175.667969,401.664062 C145.246094,401.664062 120.5,426.414062 120.5,456.832031 L120.5,481.996094 L119.433594,481.996094 C111.148438,481.996094 104.433594,488.714844 104.433594,496.996094 C104.433594,505.28125 111.148438,511.996094 119.433594,511.996094 L392.566406,511.996094 C400.851562,511.996094 407.566406,505.28125 407.566406,496.996094 C407.566406,488.714844 400.851562,481.996094 392.566406,481.996094 L391.5,481.996094 L391.5,456.832031 C391.5,426.414062 366.753906,401.664062 336.332031,401.664062 L311.167969,401.664062 L311.167969,334.996094 C322.492188,328.039062 333.367188,318.910156 343.652344,307.71875 C389.015625,305.074219 431.011719,277.894531 462.542969,230.507812 C494.4375,182.574219 512,119.164062 512,51.953125 C512,43.667969 505.285156,36.953125 497,36.953125 Z" id="Shape" fill={i==0 ? '#F8E71C' : (i == 1 ? '#DFDADA' : (i == 2 && '#E49D5F') )} fill-rule="nonzero"></path>
                <path d="M437.5625,213.890625 C418.539062,242.484375 395.449219,262.179688 370.5,271.601562 C374.839844,264.484375 379.023438,256.925781 383.023438,248.925781 C408.140625,198.695312 424.207031,135.414062 429.621094,66.953125 L481.683594,66.953125 C479.328125,122.644531 463.871094,174.355469 437.5625,213.890625 Z" id="Path" fill="#FFFFFF"></path>
                <path d="M74.4375,213.890625 C48.128906,174.355469 32.671875,122.644531 30.316406,66.953125 L82.378906,66.953125 C87.789062,135.414062 103.859375,198.695312 128.976562,248.925781 C132.976562,256.925781 137.160156,264.484375 141.5,271.601562 C116.550781,262.179688 93.460938,242.484375 74.4375,213.890625 Z" id="Path" fill="#FFFFFF"></path>
            </g>
        </g>
    </svg>

        return <li className={`${i == 0 && classes.first} ${i == 1 && classes.second} ${i== 2 && classes.third}`}>
                {i == 0 ? cup : (i == 1?  cup : (i == 2 && cup) )}
                <Img src={chat.url} alt={chat._id}/>
                <p>{chat.score != null ? chat.score : 0} votes</p>
            </li>
            
    });


    return (

        <div className={`${classes.ranking} ${open == true && classes.open}`}>
            <p className={classes.title}>Classement</p>
            <ul>
                {rankingList}
            </ul>
        </div>
    );

}


export default Ranking;