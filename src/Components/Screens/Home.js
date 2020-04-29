import React, {useState, useEffect, Fragment} from 'react';
import {createUseStyles} from 'react-jss'

//import component
import Cat from '../SimpleComponents/Cat';
import Header from '../SimpleComponents/Header';
import Ranking from '../SimpleComponents/Ranking';

//url Back
import { url } from '../../Config/ConnectUrl';

const useStyles = createUseStyles({

  content:{
    maxWidth:'1024px',
    height:'100vh',
    margin:"0 auto",
    display:'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },

});



const Home = () => {
  const classes = useStyles();

  const [chats,setChats] = useState([]);

  const [cat1, setCat1] = useState({
      id: null,
      url: null,
      score: null
  });
    
  const [cat2, setCat2] = useState({
    id : null,
    url: null,
    score: null
  });

    const catListSet = (n)=>{
      setChats(n);
      console.log('cat function : ',n);
    }
    console.log("les chats state : ", chats);

    let cat1Score = cat1.score;
    const addCat1Point = ()=>{
      setCat1({...cat1, score : cat1Score+1});
      console.log(cat1);
      //updateWinningCat(cat1);
      updateWinningCat(cat1);
    }
  
    let cat2Score = cat2.score;
    const addCat2Point = ()=>{
      setCat2({...cat2, score : cat2Score+1});
      console.log(cat2);
      //updateWinningCat(cat2);
      updateWinningCat(cat2);
      //chooseCats();
    }




      const getCats = async () => {
        const settings = {
            method: 'GET',
            credentials: 'include',
            headers: {
                Authorization: `Access-Control-Allow-Origin`,
                Accept: 'application/json',
                'Content-Type': 'application/json'
            }
        };
        try {
            const fetchResponse = await fetch(`${url}/cats`, settings);
            const data = await fetchResponse.json();
            if (data.result) {
                console.log("FETCH RESULT CATS --->", data);
                //setChats(data.data);
                //setChatsCopy(data.data);
                chooseCats(data.data);
                count(data.data);
                catListSet(data.data);
            }
        }
        catch (err) {
            console.log('ERROR FETCH CATS--->', err);
        }
      };

      const updateWinningCat = async chatWin => {

        console.log("LE CHAT GAGNANT : ",chatWin);
        let chatWinId = chatWin.id;

        const updatedCat = {
          id : chatWin.id,
          url : chatWin.url,
          score : chatWin.score+1
        }

        const settings = {
          method: 'PUT',
          credentials: 'include',
          headers: {
            Authorization: `Access-Control-Allow-Origin`,
            Accept: 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(updatedCat)
        };
        try {
          const fetchResponse = await fetch(
            `${url}/cats/${chatWinId}/updateCat`,
            settings
          );
            const data = await fetchResponse.json();
            if (data.result) {
              console.log("CHAUD PATATE : ", data);
              chooseCats(data.data);
              count(data.data);
            }
          
        } catch (err) {
          console.log('ERROR FETCH UpdateCat--->', err);
        }

      }

      const chooseCats = (chats) => {

        let nmbCat1;
        nmbCat1 = Math.floor(Math.random() * (chats.length - 0 + 1)) + 0;
        setCat1({...cat1, id: chats[nmbCat1]._id, url: chats[nmbCat1].url, score: chats[nmbCat1].score == null ? 0 : chats[nmbCat1].score});
        
        let chatsCopy = [...chats];
        let newtableau = chatsCopy.splice(nmbCat1,1);
    
        let nmbCat2 = (Math.floor(Math.random() * (chatsCopy.length - 0 + 1)) + 0) ;
        setCat2({...cat2, id: chats[nmbCat2]._id, url: chatsCopy[nmbCat2].url, score: chatsCopy[nmbCat2].score == null ? 0 : chatsCopy[nmbCat2].score});
      
      }
      console.log('CHAT 1 : ',cat1);
      console.log('CHAT 2 : ',cat2);



      const [countCat, setCountCat]=useState(0);
      let nmbVote = 0;
      const count = (chats) => {
        for(var i=0; i <chats.length; i++){
          console.log("chaque score : ", chats[i].score);
          nmbVote = nmbVote + (chats[i].score == null ? 0 : chats[i].score);
        }
        setCountCat(nmbVote);
      }
      


        const rankingList = chats.map((chat,i)=>{
          return <Ranking link = {chat.url} score = {chat.score}  />
        });

  

        //console.log(rankingList);


      useEffect(()=>{
        getCats();
      },[])

    return(
      <div className={classes.container}>
          <Header
           nmbVote = {countCat}
          />
          <div className={classes.content}>
              <Cat
              type='cat1'
              urlImg = {cat1.url}
              score ={cat1.score}
              onClick = {addCat1Point}
              />
              <Cat
                  type='cat2'
                  urlImg = {cat2.url}
                  score ={cat2.score}
                  onClick = {addCat2Point}
              />

          </div>
          { chats &&
            <div>
              coucou
            { rankingList }

            </div>
          }
        </div>

      );

}


export default Home;