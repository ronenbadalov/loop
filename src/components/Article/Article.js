import React from "react";
import classes from "./Article.module.scss";
import logo from "../../assets/logo.png";
import Moment from "react-moment";

const checkRTL = (s) => {
  return /[\u0590-\u05FF]/.test(s);
};

const Article = ({ article }) => {
  return (
    <a href={article.url} target="_blank" className={classes["card"]}>
      <img
        className={
          article.urlToImage
            ? classes["card__image"]
            : classes["card__image__error"]
        }
        onError={({ currentTarget }) => {
          currentTarget.onerror = null;
          currentTarget.src = logo;
          currentTarget.classList.remove(classes["card__image"]);
          currentTarget.classList.add(classes["card__image__error"]);
        }}
        src={article.urlToImage || logo}
      />
      <div className={classes["card__caption"]}>
        <h3
          className={`${classes["card__title"]} ${
            checkRTL(article.title) && classes["card__text__RTL"]
          }`}
        >
          {article.title}
        </h3>
        <p className={classes["card__site-name"]}>
          {article.source.name} •{" "}
          {<Moment fromNow>{article.publishedAt}</Moment>}
        </p>
        {article.description && (
          <p
            className={`${classes["article__description__text"]}  ${
              checkRTL(article.description) && classes["card__text__RTL"]
            }`}
          >
            {article.description}
          </p>
        )}
      </div>
    </a>
  );
};

export default Article;
