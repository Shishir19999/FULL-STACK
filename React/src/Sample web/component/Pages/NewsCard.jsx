import React from 'react'

function NewsCard(props) {
    const {item,index}=props;
  return (
    
      <div key={index} className="col-md-4 mb-3">
            <div className="card">
              <img alt="..." className="card-img-top" src={item.urlToImage} style={{height:"200px"}} />
              <div className="card-body">
                <h5 className="card-title">{item.title}</h5>
                <p className="card-text">
                 {item.description}
                </p>
                <a className="btn btn-primary" href={item.url}>
                  Read More
                </a>
              </div>
            </div>
            </div>
    
  )
}

export default NewsCard
