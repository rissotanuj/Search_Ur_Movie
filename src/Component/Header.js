import React from 'react'


export default function Header(props) {


    const titleFunction = (e)=>{
      props.setclick(current => !current);
      console.log("This is click",props.click);
      e.preventDefault();
     let value = document.getElementById("input").value;
     console.log("This is value ",value);    
    }

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="/">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Home</a>
        </li>
      
            </ul>
      <form className="d-flex" role="search">
        <input id="input" value = {props.title} className="form-control me-2" onChange={e => props.settitle(e.target.value)} type="search" placeholder="Search" aria-label="Search"/>
        <button  className="btn btn-outline-success" type="submit" onClick={titleFunction} >Search</button>
      </form>
    </div>
  </div>
</nav>
    </div>
  )
}
