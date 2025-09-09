import MainImg from "./images/image-victor.jpg"
import "./profile.css";

export default function ProfileCard() {
  return (
    <>
    <div className="bg-color">
      <div className='card-container'>
      <div className="card-body">
        <img src={MainImg} alt="victor crest" />
        <div className="card-text">
          <h3>Victor Crest <span>26</span></h3>
          <p>London</p>
        </div>
        <hr />
        <div>
          <div className="card-stats">
            <div className="stat">
              <h4>80K</h4>
              <p>Followers</p>
            </div>
            <div className="stat">
              <h4>803K</h4>
              <p>Likes</p>
            </div>
            <div className="stat">
              <h4>1.4K</h4>
              <p>Photos</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
    </>
  )
}
