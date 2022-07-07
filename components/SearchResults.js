import React from "react";
import Parser from "html-react-parser";

export default function SearchResults({ results }) {
  return (
    <div className="w-full mx-auto px-3 sm:pl-[5%]">
      <p className="text-gray-600 text-sm mb-5 mt-3 md:pl-[14%] lg:pl-52">
        About {results.searchInformation.formattedTotalResults} results (
        {results.searchInformation.formattedSearchTime} )
      </p>

      {results.items.map((result) => (
        <div className="max-w-xl mb-8" key={result.link}>
          <div className="group">
            <a href={result.link} className="text-sm truncate">
              {result.formattedUrl}
            </a>

            <a
              href={result.link}
              className="group-hover:underline decoration-blue-800"
            >
              <h2 className="truncate text-xl font-medium text-blue-800">
                {result.title}
              </h2>
            </a>
          </div>

          <p className="text-gray-600">{Parser(result.htmlSnippet)}</p>
        </div>
      ))}
    </div>
  );
}