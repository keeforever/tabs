import React from "react";
import { FaAngleDoubleRight } from "react-icons/fa";

const ProfileInfo = ({ profile }) => {
  const { title, company, dates, duties } = profile;

  return (
    <article>
      <header>
        <h1 className="profile-name">{title}</h1>
        <h4 className="profile-company">{company}</h4>
        <p className="profile-dates">{dates}</p>
      </header>
      <section className="duty-container">
        {duties.map((duty, index) => {
          return (
            <div key={index} className="duty">
              <span>
                <FaAngleDoubleRight style={{ color: "#2caeba" }} />
              </span>
              <p>{duty}</p>
            </div>
          );
        })}
      </section>
    </article>
  );
};

export default ProfileInfo;
