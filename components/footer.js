import React from 'react'

const Footer = () => {
  const footerStyle = {
    flexShrink: 0,
    marginTop: 'auto',
    backgroundColor: "#f2f2f2",
    color: "#333",
    padding: "5px 0",
    textAlign: "center"
  }

  return (
    <footer style={footerStyle}>
      <p>&#169;</p>
    </footer>
  )
}

export default Footer
