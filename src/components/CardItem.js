import React from 'react'
import { Link } from "react-router-dom"

function CardItem() {
  return (
    <>
    <li className="card__item">
      <Link className="cards__item__link">
        <figure className="cards__items__pic-wrap">
        <img src="/" alt="Travel Image" className="cards__items__img">
        </img>
        </figure>
      </Link>
    </li>
    </>
  )
}

export default CardItem