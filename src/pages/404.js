import React from "react"
import { Link } from "gatsby"
import Seo from "../components/Seo"

const Error = () => {
  return (
    <>
      <main className="error-page">
        <div className="error-container">
          <h1>oops! it is a dead end.</h1>
          <p>The page you're looking for is now beyound my reach.</p>
          <p>Let's get you..</p>
          <Link to="/" className="btn">
            Back Home in a jiffy
          </Link>
        </div>
      </main>
    </>
  )
}

export default Error
