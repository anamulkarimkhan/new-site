import React from 'react'

function Footer() {
  return (
    <div>
      <h1>Sign up for monthly insights & special offers</h1>
      <form action="/action_page.php">
        <label for="fname">First name:</label>
        <input type="text" id="fname" name="fname" value="First name:"></input>
        <label for="lname">Last name:</label>
        <input type="text" id="lname" name="lname" value="Last name:"></input>
        <label for="email">Email:</label>
        <input type="email" id="email" name="email" value="Email:"></input>
        <input type="submit" value="Subscribe"></input>
      </form> 






      <h5>Copyright © Netregistry Pty Ltd ABN</h5>
    </div>
  )
}

export default Footer
