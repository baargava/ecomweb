import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

const ListView = ({products}) => {
  return (
    <section className="section">
    <div className=" containerlist grid">
      {products.map((curElem) => {
        const { id, title, image, price, description } = curElem;
        return (
          <div className="card ">
            <figure className='figurelist'>
              <img src={image} alt={title} />
            </figure>

            <div className="card-data">
              <h3>{title}</h3>
              <h6>
               Price: {price}
              </h6>
              <h6>{description.slice(0, 90)}...</h6>

              <NavLink to={`/singleproduct/${id}`} className="btn-main">
                <button className="btn">Read More</button>
              </NavLink>
            </div>
          </div>
        );
      })}
    </div>
  </section>
  )
}


export default ListView