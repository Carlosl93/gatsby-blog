import React from "react"
import Link from "gatsby-link"

const menu = () => (
  <div
    style={{
      background: "#f4f4f4",
      paddingTop: "10px",
    }}
  >
    <ul
      style={{
        display: "flex",
        listStyle: "none",
        justifyContent: "space-evenly",
      }}
    >
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/services">Service</Link>
      </li>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/blog">Blog</Link>
      </li>
    </ul>
  </div>
)

export default menu
