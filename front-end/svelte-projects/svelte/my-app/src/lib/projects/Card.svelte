

<main>
    <div class="card-container">
      <div class="card-body">
        <div class="card-content">
          <h1>
            Get <span class="card-violet-text">insights</span> that help your
            business grow.
          </h1>
          <p class="card-text m-top">
            Discover the benefits of data analytics and make <br />
            better decisions regarding revenue, customer <br />
            experience, and overall efficiency.
          </p>
          <div class="card-stats">
            <div>
              <span class="card-stats-text">10k+</span>
              <p>Companies</p>
            </div>
            <div>
              <span class="card-stats-text">314</span>
              <p>Templates</p>
            </div>
            <div>
              <span class="card-stats-text">12M+</span>
              <p>Queries</p>
            </div>
          </div>
        </div>
      </div>
      <div class="card-img-container"></div>
    </div>
  </main>

  <style>
    @import url("https://fonts.googleapis.com/css2?family=Titillium+Web&display=swap");
:root {
  --background-color: hsl(233, 47%, 7%);
  --card-background-color: hsl(244, 38%, 16%);
  --card-violet-color: hsl(277, 64%, 61%);
  --card-text-color: hsla(0, 0%, 100%, 0.75);
  --white-color: #fff;
  --light-grey: #9ca3af;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}


.card-container {
  background-color: var(--card-background-color);
  color: var(--white-color);
  border-radius: 10px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  /* margin: auto; */
  margin-top: 4rem;
  /* Changed this property */
  max-width: 70rem;
}

.card-img-container {
  background: url("../assets/image-header-desktop.jpg") no-repeat center
    center/cover;
  border-radius: 0 10px 10px 0;
  min-height: 35vh;
  width: 100%;
  position: relative;
  overflow: hidden;
}

.card-img-container::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #581c87;
  opacity: 0.5;
}

.card-body {
  margin: 0 1.2rem 0 1.2rem;
  padding: 0.2rem;
}

.card-body h1 {
  font-size: 2.3rem;
  font-weight: bold;
}

.card-content {
  padding: 5rem;
}

.card-violet-text {
  color: var(--card-violet-color);
}

.card-text {
  color: var(--card-text-color);
}

.card-stats {
  display: flex;
  flex-direction: row;
  gap: 3rem;
  margin-top: 3rem;
}

.card-stats-text {
  font-size: 1.4rem;
  font-weight: bold;
}

.card-small-text {
  color: var(--light-grey);
  font-size: 0.8rem;
  margin-left: 1rem;
  position: relative;
  bottom: 0.5rem;
  text-decoration: line-through;
}

.card-button-container {
  display: flex;
  justify-content: center;
  padding: 1rem;
}

.card-button {
  background-color: var(--card-price-color);
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 0.7rem;
  border: none;
  border-radius: 3%;
  color: var(--white-color);
  padding: 0.9rem;
  text-transform: capitalize;
  font-weight: bold;
  width: 18rem;
}

/* utilities */

.m-top {
  margin-top: 2rem;
}

.grey-text {
  color: var(--light-grey);
}

.uppercase {
  text-transform: uppercase;
}

.p-5 {
  padding: 5rem;
}

@media (max-width: 650px) {
  .card-container {
    display: flex;
    flex-direction: column-reverse;
    max-width: 20rem;
  }

  .card-img-container {
    border-radius: 10px 10px 0 0;
  }

  .card-body h1 {
    text-align: center;
    font-size: 1.5rem;
    font-weight: bold;
  }

  .card-text {
    text-align: center;
    margin: auto;
  }

  .card-content {
    padding: 1rem;
  }

  .card-stats {
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }

  .card-stats-text {
    font-size: 1.4rem;
  }
}
  </style>