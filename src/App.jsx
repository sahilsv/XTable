import { useState } from "react";
import "./App.css";

function App() {
  const givenData = [
    { date: "2022-09-01", views: 100, article: "Article 1" },
    { date: "2023-09-01", views: 100, article: "Article 1" },
    { date: "2023-09-02", views: 150, article: "Article 2" },
    { date: "2023-09-02", views: 120, article: "Article 3" },
    { date: "2020-09-03", views: 200, article: "Article 4" },
  ];

  const [data, setData] = useState(givenData);

  const handleSortByDate = () => {
    const sortedByDate = [...data].sort((a, b) => {
      return new Date(b.date) - new Date(a.date);
    });
    setData(sortedByDate);
  };

  const handleSortByViews = () => {
    const sortedByViews = [...data].sort((a, b) => {
      return b.views - a.views;
    });
    setData(sortedByViews);
  };

  return (
    <>
      <header>Date and Views Table</header>
      <div>
        <button type="button" onClick={handleSortByDate}>
          Sort by Date
        </button>
        <button type="button" onClick={handleSortByViews}>
          Sort by Views
        </button>
      </div>
      <div>
        <table>
          <thead>
            <tr>
              <td>Date</td>
              <td>Views</td>
              <td>Article</td>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => {
              return (
                <tr>
                  <td>{item.date}</td>
                  <td>{item.views}</td>
                  <td>{item.article}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default App;
