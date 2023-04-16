import {Link} from "react-router-dom"
function LandingPageButton() {    
  return <Link to="/about" class="nav-link">
        <button class="btn btn-primary" > 
            <span style={{"font-size": "24px"}}>
                Learn More!
            </span>
        </button>
    </Link>
}
function LandingFrameMessage() {
  const style = {
        margin: "auto",
        padding: "15% 15% 15% 15%",
        color: "white",
    }    
    return <div style={style}>
        
        <div style={{"font-size": "96px"}}>
            Welcome to Pizza Planet!
        </div>
        
        <div style={{"font-size": "36px"}}>
           Come in and see what all the "Buzz" is about.
           Use the navigation menu at the top.
        </div>        
        <br />        
        <LandingPageButton />    
      </div>
}function LandingFrame() {
    const style = {
        "background-image": `url("images/HomePage.jpg")`,
        "background-repeat": "no-repeat",
        "background-size": "cover",
        position: "absolute",
        height: "100%",
        width: "100%"
    }    
    return <div style={style}>
        <LandingFrameMessage />
    </div>
}function HomePage() {
    return <div>
        <LandingFrame />
    </div>
}export default HomePage