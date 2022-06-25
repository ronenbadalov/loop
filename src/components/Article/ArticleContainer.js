import React from "react";
import Article from "./Article";
import classes from "./ArticleContainer.module.scss";
import Lottie from "lottie-react";
import loader from "../../assets/loader.json";
import noResultsLottie from "../../assets/no-results.json";
import errorLottie from "../../assets/error.json";
import TransitionGroup from "react-transition-group/TransitionGroup";
import CSSTransition from "react-transition-group/CSSTransition";
const defaultLottieOptions = {
  loop: true,
  autoplay: true,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};
const ArticleContainer = ({ articles, loading, error, noResults }) => {
  return (
    <>
      <TransitionGroup component="div" className={classes["article-container"]}>
        {!loading &&
          !error &&
          !noResults &&
          articles?.map((article) => (
            <CSSTransition
              key={article.url}
              classNames={{
                enter: "",
                enterActive: classes["fade-enter-active"],
                exit: "",
                exitActive: classes["fade-exit-active"],
              }}
              timeout={700}
            >
              <Article article={article} />
            </CSSTransition>
          ))}
      </TransitionGroup>
      {loading && !error && (
        <div className={classes["lottie-container"]}>
          <Lottie style={{ maxWidth: "300px" }} animationData={loader} />
        </div>
      )}
      {!loading && error && (
        <div className={classes["lottie-container"]}>
          <h2>Well, that's embarrassing</h2>
          <p className={classes["error-message"]}>
            it seems like we have some kind of an error, I bet the devs are on
            in!
          </p>
          <Lottie
            style={{ maxWidth: "400px" }}
            // className={classes["center"]}
            options={defaultLottieOptions}
            loop={true}
            animationData={errorLottie}
          />
        </div>
      )}
      {!loading && !error && noResults && (
        <div className={classes["lottie-container"]}>
          <h2>Hmm we couldnt find anything</h2>
          <p className={classes["error-message"]}>
            please try again with different inputs
          </p>
          <Lottie
            style={{ maxWidth: "400px" }}
            options={defaultLottieOptions}
            loop={false}
            autoplay={true}
            animationData={noResultsLottie}
          />
        </div>
      )}
    </>
  );
};

export default ArticleContainer;
