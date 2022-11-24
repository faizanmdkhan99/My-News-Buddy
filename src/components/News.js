import React, {useState } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useEffect } from 'react';

const News=(props)=> {

const [articles, setArticles] = useState([]);
const [loading, setLoading] = useState(true);
const [page,setPage]=useState(1);
const [totalResults,setTotalResults]=useState(0);

// document.title=`${this.capitalizeFirstLetter(props.category)}-My News Buddy`;

const capitalizeFirstLetter=(string)=> {
  return string.charAt(0).toUpperCase() + string.slice(1);
}


const updateNews=async()=>{
  props.setProgress(10);
  let url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=`+page+"&pageSize="+props.pageSize;
  setLoading(true);
  let data=await fetch(url);
  props.setProgress(30);
  let parsedData=await data.json();
  props.setProgress(50);
  setArticles(parsedData.articles);
  setPage(page+1);
  setTotalResults(parsedData.totalResults);
  setLoading(false);
  props.setProgress(100);
}


useEffect(()=>{
updateNews();
// eslint-disable-next-line
},[]);

const fetchMoreData = async () => {  
  const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page+1}&pageSize=${props.pageSize}`;
  setPage(page + 1)
  let data = await fetch(url);
  let parsedData = await data.json();
  setArticles(articles.concat(parsedData.articles));
  setTotalResults(parsedData.articles)
};


    return (
      <>
      <h1 className="text-center" style={{marginBottom:"20px"}}>My News Buddy Latest News on - {capitalizeFirstLetter(props.category)}</h1> 
      {loading && <Spinner/>}
      <InfiniteScroll
                    dataLength={articles.length}
                    next={fetchMoreData}
                    hasMore={articles.length !== totalResults}
                    loader={<Spinner/>}
                > 
                    <div className="container">

                    <div className="row">
                        {articles.map((element,index) => {
                            return <div className="col-md-4" key={index}>
                                <NewsItem title={element.title ? element.title : ""} description={element.description ? element.description : ""} imgUrl={element.urlToImage} newsUrl={element.url} author={element.author} pubDate={element.publishedAt}/>
                            </div>
                        })}
                    </div>
                    </div> 
                </InfiniteScroll>  
          
      </>
    )
  }


News.propTypes={
  country:PropTypes.string,
  pageSize:PropTypes.number,
  category:PropTypes.string
}

News.defaultProps={
  country:"in",
  pageSize:9,
  category:"general"

}
export default News;