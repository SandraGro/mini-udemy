import React from "react";
import "./suggestionBox.scss";
import { Link } from "react-router-dom";

function SuggestionBox(props) {
  const { suggestions } = props;
  return (
    <ul
      className={`${
        suggestions.length ? "visible " : ""
      }suggestion-box suggestion-box-list`}
    >
      {suggestions.map((suggestion, index) => (
        <Link key={`suggestionItem-${index}`}  to={`/course/${suggestion.slug}`}>
          <li key={`suggestion-${index}`}>
            <span>{suggestion.category} | </span>
            <span>{suggestion.title}. </span>
            <span>{suggestion.author}</span>
            <hr></hr>
          </li>
        </Link>
      ))}
    </ul>
  );
}

export default SuggestionBox;
