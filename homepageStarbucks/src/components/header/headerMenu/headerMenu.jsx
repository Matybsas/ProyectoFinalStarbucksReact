import React from 'react'

function HeaderMenu(name, link) {
  return (
    <ul>
    <li>{name}{link}</li>
    </ul>
  )
}

export default HeaderMenu