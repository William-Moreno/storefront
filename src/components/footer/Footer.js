import React from 'react';


export default function Footer() {

  let currentYear = new Date().getFullYear();

  return (
    <div>
      <h2>&copy; {currentYear}  JavaScript 401d40</h2>
    </div>
  )
}