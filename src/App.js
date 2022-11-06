import { useState } from "react";
import ProfileInfo from "./components/ProfileInfo";
import useFetch from "./useFetch";

// const url='https://course-api.com/react-tabs-project';
// development purpose
const url = "data.json";

const App = () => {
  const [apiData, isLoading, isError] = useFetch(url);
  const [indexValue, setIndexValue] = useState(0);

  if (isLoading) {
    return (
      <main>
        <h1 className="alert">Loading...</h1>
      </main>
    );
  }

  if (isError) {
    return (
      <main>
        <h1 className="alert">Error...</h1>
      </main>
    );
  }
  
  return (
    <main>
      <section className="container">
        <header className="title">
          <h1>Experience</h1>
          <div className="underline"></div>
        </header>
        <section className="app-wrapper">
          <nav className="company-container">
            {apiData.map((profile, index) => {
              const { company, id } = profile;
              return (
                <button
                  key={id}
                  className={
                    indexValue === index ? " btn-active" : "selection-btn"
                  }
                  onClick={() => {
                    setIndexValue(index);
                  }}
                >
                  {company}
                </button>
              );
            })}
          </nav>
          <section className="profile-container">
            <ProfileInfo profile={apiData[indexValue]} />
          </section>
        </section>
      </section>
    </main>
  );
};

export default App;
