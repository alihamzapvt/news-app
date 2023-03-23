import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Product(props) {
  const [country, setCountry] = useState();
  const [post, setPost] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedOption, setSelectedOption] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  let url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${props.category}&apiKey=5e7b94ed47f44a359a0ad2d38a9be8f7&page=${currentPage}&pagesize=${props.pagesize}`;

  const nextitem = function () {
    setCurrentPage(currentPage + 1);
  };

  const previousitem = function () {
    setCurrentPage(currentPage - 1);
  };
  function api() {
    setLoading("spinner-border");
    axios.get(url).then((value) => {
      setPost(value.data.articles);
    });
    setLoading(false);
  }

  useEffect(() => {
    api();
  }, [currentPage]);
  // console.log(post);
  const russia = function () {
    console.log("Russia/////////////");
  };
  const handleOptionClick = () => {
    console.log("eventdksjksdjk");
  };
  return (
    <>
      <div className="d-flex justify-content-center">
        <div className={loading} role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
      <select>
        <option value="option1" onClick={handleOptionClick}>
          Option 1
        </option>
        <option value="option2" onClick={handleOptionClick}>
          Option 2
        </option>
        <option value="option3" onClick={handleOptionClick}>
          Option 3
        </option>
      </select>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: " auto auto auto auto",
          padding: "10px",
          gap: "10px",
        }}
      >
        {post.map((item) => {
          // console.log(item);
          return (
            <div className="card" style={{ width: "18rem" }}>
              <img
                src={
                  !item.urlToImage
                    ? "https://images.barrons.com/im-725426/social"
                    : item.urlToImage
                }
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">{item.description}</p>
                <a href="#" className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          );
        })}
      </div>
      <button onClick={nextitem}>next</button>
      <button onClick={previousitem}>previous</button>
    </>
  );
}

// const getNews = async () => {
//     const response = await axios.get(`https://newsapi.org/v2/top-headlines?country=us&page=${currentPage}&apiKey=YOUR_API_KEY`);
//     setNews(response.data.articles);
//   };
