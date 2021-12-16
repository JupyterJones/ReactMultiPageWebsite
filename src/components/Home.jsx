import React from "react";
// Assuming Halloween-900x400p.png is in the same folder as JS file ./
import hallo from './Halloween-900x400p.png';

// ...later

function Home() {
  return (
    <div className="home">
      <div class="container">
        <div class="row align-items-center my-5">
          <div class="col-lg-7">
            <img
              class="img-fluid rounded mb-4 mb-lg-0"
              src={hallo} alt="halloween"
              alt=""
            />
          </div>
          <div class="col-lg-5">
            <h1 class="font-weight-light">Home </h1>
            <p>Because an image was needed I searched to find an online public domain picture.
               This image came from a Google Search for public domain images. It was on the site https://www.pngtosvg.com/.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
