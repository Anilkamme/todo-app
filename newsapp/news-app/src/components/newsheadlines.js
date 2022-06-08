
import {useEffect,useState} from "react";
import axios from 'axios';

export const Newsheadlines=(props)=>{
    const [newsArticales,setNewsArticales]=useState([]);
    useEffect(()=>{
        axios({
            method:"get",
            url:'https://newsapi.org/v2/top-headlines',
            params:{
            country:"in",
            apiKey:"b3a0c75f3b614aaa846142f829daa150"
        }
        }).then((Response)=>{
            setNewsArticales(Response.data.articles);

        }).catch((err)=>{
            console.log(err);
        })
    },[])
    return(
        <>
        <h3>todays Newsheadlines</h3>{
            <div>
        newsArticales.map((articles,index)=>{
            return(
                <div className="card" style={{width: 18rem}}>
  <img className="card-img-top" src={articles.urlToImage} alt="Card image cap"/>
  <div className="card-body">
    <h5 class="card-title">{articles.title}</h5>
    <p className="card-text">{articles.description}</p>
    </div>
  </div>
</div>
                
            )})}
        </>
    )
}
