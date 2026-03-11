import React from 'react'
import { Link,Outlet } from 'react-router-dom'

export default function Services() {
  return (
    <div>
      <h2>Our Services</h2>
       <div className="services-menu">
        <Link to="WebDevelopment">WebDevelopment</Link>
        <Link to="AppDevelopment">AppDevelopment</Link>
        <Link to="UIUXdesign">UIUXDesign</Link>
      </div>

      <Outlet />
    </div>
  )
}
