//">HI, Its OCHE and its soo nice to meet you</h1>, document.getElementById("root"))

//const h1 = document.createElement("h1")
//h1.textContent = "I first tell you say your papa de mad, bbuh u shall think say i de lie"
//h1.className = "header"
//document.getElementById("root").append(h1)
function Header() {
return (
  <img src="./React-icon.svg.png" width="70px"></img>
)
}
function Ul() {
  return (
          <ul>  
            <li>Makes JavaScript coding easier</li>
            <li>Template designing made easy</li>
            <li>Provides amazing developer tools</li>
            <li>Extremely competent</li>
         </ul>
  )
}
function TemporaryName() {
      return (
        <div>
          <nav className="nav">
          <Header />
          <ul className="nav-items">
            <li>price</li>
            <li>location</li>
            <li>time</li>
            </ul>
            </nav>
        <h1>Reasons why i am excited to learn react</h1>
        <Ul />
        <footer>
          <small>@ oche 2022</small>
        </footer>
        </div>
      )
}
ReactDOM.render(<TemporaryName />, document.getElementById("root"))