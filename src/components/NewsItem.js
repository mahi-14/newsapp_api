import React from "react";

// export class NewsItem extends Component {
//   render() {
const NewsItem = (props) => {
  //destructuring
  let { title, description, imageUrl, newsUrl, author, date, source } = props;

  return (
    <div className="my-3">
      <div className="card">
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            position: "absolute",
            right: "0",
          }}
        >
          <span className="badge rounded-pill bg-danger">{source}</span>
        </div>
        <img
          src={
            !imageUrl
              ? "https://images.firstpost.com/wp-content/uploads/2022/04/1-11.jpg"
              : imageUrl
          }
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">
            {!description
              ? "OnePlus 10R 5G, OnePlus Nord CE 2 Lite 5G, OnePlus Nord Buds Price in India: OnePlus is all set to launch OnePlus 10R 5G, OnePlus Nord CE 2 Lite 5G and OnePlus Nord Buds in India on Thursday, 28 April 2022"
              : description}
          </p>
          <p className="card-text">
            <small className="text-muted">
              By {!author ? "Unknown" : author} on{" "}
              {new Date(date).toGMTString()}
            </small>
          </p>
          <a href={newsUrl} target="_blank" className="btn btn-sm btn-dark">
            Read More
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewsItem;
