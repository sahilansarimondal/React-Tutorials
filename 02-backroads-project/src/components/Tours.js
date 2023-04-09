import React from 'react'
import Title from './Title'
import { tours } from '../data'

const Tours = () => {
  return (
    <>
      <section className="section" id="tours">
        <div className="section-title">
          <h2>
            <Title title="featured" subTitle="tours" />
          </h2>
        </div>

        <div className="section-center featured-center">
          {tours.map((tour) => {
            const {id, img, title, icon, country,date, duration, cost, text} = tour;
            return (
              <article className="tour-card" key={id}>
                <div className="tour-img-container">
                  <img src={img} className="tour-img" alt="" />
                  <p className="tour-date">{date}</p>
                </div>
                <div className="tour-info">
                  <div className="tour-title">
                    <h4>{title}</h4>
                  </div>
                  <p>
                    {text}
                  </p>
                  <div className="tour-footer">
                    <p>
                      <span>
                        <i className={icon}></i>
                      </span>{" "}
                      {country}
                    </p>
                    <p>{duration}</p>
                    <p>{cost}</p>
                  </div>
                </div>
              </article>
            );
          })}
          
        </div>
      </section>
    </>
  );
}

export default Tours
