import React from 'react'

function Navbar(props) {
  const handleTheme = (event) => {
    if (event.target.value == 'on') {
      console.log(true)
    }
  }
  return (
    <>
      <nav className={`navbar navbar-expand-lg bg-${props.Mode}`}>
        <div className={`container-fluid text-${props.Mode=='dark'?'light':'dark'}`}>
          <a className={`navbar-brand text-${props.Mode=='dark'?'light':'dark'}`} href="/">{props.title}</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className={`navbar-nav me-auto mb-2 mb-lg-0 text-${props.Mode=='dark'?'light':'dark'}`}>
              <li className="nav-item">
                <a className={`nav-link active text-${props.Mode=='dark'?'light':'dark'}`} aria-current="page" href="/">Home</a>
              </li>
              <li className="nav-item">
                <a className={`nav-link active text-${props.Mode=='dark'?'light':'dark'}`} href="/">{props.AboutText}</a>
              </li>
            </ul>
            <div className="form-check form-switch">
              <input className="form-check-input" onClick={props.ToggleMode} type="checkbox" role="switch" id="flexSwitchCheckChecked"/>
                <label className="form-check-label" htmlFor="flexSwitchCheckChecked">{props.Mode==='dark'?"Enable Light Mode":"Enable Dark Mode"}</label>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar