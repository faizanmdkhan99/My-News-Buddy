import React from 'react'

const NewsItem=({title,description,imgUrl,newsUrl,author,pubDate})=> {

    return (
      <div>
        <div className="card">
  <img src={imgUrl} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{description}</p>
    <p className="card-text"><small className="text-muted">Last updated {author!=null?"by "+author:""} on {new Date(pubDate).toGMTString()}</small></p>
    <a href={newsUrl} className="btn btn-dark btn-sm">Read More</a>
  </div>
</div>
      </div>
    )
  }


export default NewsItem;