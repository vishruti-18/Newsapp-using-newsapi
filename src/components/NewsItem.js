import React from 'react'

const NewsItem = (props) => {
        let { title, description, imageUrl, newsUrl, author, date, source} = props;
        return (
            <div className='my-3'>
                <div className="card">
                    <div style={{
                        display:'flex',
                        justifyContent:'flex-end',
                        position:'absolute',
                        right:'0'
                    }}>
                        <span className='badge rounded-pill bg-danger'>{source}</span>
                    </div>
                    <img src={!imageUrl ? "https://static.toiimg.com/thumb/msid-93151977,width-1070,height-580,imgsize-83248,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg" : imageUrl} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                        <p className="card-text"><small className="text-danger">By {!author ? "Unknown" : author} on {new Date(date).toGMTString()}</small></p>
                    </div>
                    <a rel="noopener noreferrer" href={newsUrl} target='_blank' className="btn btn-sm btn-dark">Read More</a>
                </div>
            </div>

        )
    
}

export default NewsItem