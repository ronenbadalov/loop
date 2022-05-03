import "./App.scss";
import Navbar from "./components/Navbar/Navbar";
import Container from "./Layout/Container/Container";
import SearchForm from "./components/SearchForm/SearchForm";
import { useState } from "react";
import ArticleContainer from "./components/Article/ArticleContainer";

const fetchNews = async (filterStr) => {
  try {
    //
    const res = await fetch(
      `https://newsapi.org/v2/${filterStr}apiKey=${process.env.REACT_APP_API_KEY}`,
      {
        method: "GET",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": true,
      }
    );
    if (!res.ok) throw new Error("Error while fetching news");
    return res.json();
  } catch (error) {
    console.error(error.message);
  }
};

const App = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const getNews = async (useFilter, country, category, query) => {
    setIsLoading(true);
    const filterStr = useFilter
      ? `top-headlines?${country ? `country=${country}&` : ""}${
          category ? `category=${category}&` : ""
        }${query ? `q=${query}&` : ""}`
      : `top-headlines?language=en&`;
    // console.log(
    //   `https://newsapi.org/v2/${filterStr}apiKey=${process.env.REACT_APP_API_KEY}`
    // );
    const data = await fetchNews(filterStr);
    console.log(data);
    data ? setData(data) : setError(true);
    setIsLoading(false);
  };

  return (
    <div className="App">
      <Navbar />
      <Container>
        <h1>So, What should we get you?</h1>
        <SearchForm onGetNews={getNews} />
      </Container>
      <ArticleContainer
        error={error}
        loading={isLoading}
        articles={data.articles}
      />
    </div>
  );
};

export default App;
