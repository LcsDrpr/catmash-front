import React, {useState, useEffect, Fragment} from 'react';

//import component
import Cat from '../../SimpleComponents/Cats/Cat';
import Header from '../../SimpleComponents/Header/Header';
import Ranking from '../../SimpleComponents/Ranking/Ranking';

//url Back
import { url } from '../../../Config/ConnectUrl';

//style
import "./home.scss";


const Home = () => {

  const [chats,setChats] = useState([]);
  const [winningCat, setWinningCat] = useState([]);

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
  
  const [openRanking, setOpenRanking]=useState(false);

  const open = ()=>{
    setOpenRanking(!openRanking);
  }


  const catListSet = (n)=>{
    setChats(n);
  }

  //  const winningCatSet = async(n)=>{

  //   await setWinningCat(n);
  //   //console.log(winningCat);

  //  }

  let cat1Score = cat1.score;
  const addCat1Point = async ()=>{
    setCat1({...cat1, score : cat1Score+1});
    updateWinningCat(cat1);
    //await winningCatSet(cat1);
  }
  
    let cat2Score = cat2.score;
    const addCat2Point = async ()=>{
      setCat2({...cat2, score : cat2Score+1});
      updateWinningCat(cat2);
      //await winningCatSet(cat2);
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
            `${url}/cats/cat`,
            settings
          );
            const data = await fetchResponse.json();
            if (data.result) {
              chooseCats(data.data);
              count(data.data);
              catListSet(data.data);
            }
          
        } catch (err) {
          console.log('ERROR FETCH UpdateCat--->', err);
          console.log('chat win id : ',chatWinId);
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



      const [countCat, setCountCat]=useState(0);
      let nmbVote = 0;
      const count = (chats) => {
        for(var i=0; i <chats.length; i++){
          nmbVote = nmbVote + (chats[i].score == null ? 0 : chats[i].score);
        }
        setCountCat(nmbVote);
      }
      

        
      useEffect(()=>{
        getCats();
      },[]);



    return(
      <div className='container'>
          <Header
            nmbVote = {countCat}
            onClick={open}
          />
          <Ranking data= {chats} open={openRanking}/>
          <Fragment>
            <h3>"... miaulera bien qui miaulera le dernier ..."</h3>
          </Fragment>

          <div className='content'>

              

              <Cat
                type='cat1'
                idCat = {cat1.id}
                urlImg = {cat1.url}
                score ={cat1.score}
                onClick = {addCat1Point}
              />
              <Cat
                  type='cat2'
                  idCat = {cat2.id}
                  urlImg = {cat2.url}
                  score ={cat2.score}
                  onClick = {addCat2Point}
              />

          </div>
 
        </div>

      );

}


export default Home;