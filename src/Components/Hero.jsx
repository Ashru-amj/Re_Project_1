const Hero = () =>{
    return(
       <main className="hero container">
        <div className="hero-content">
          <h1>YOUR FEET  DESERVE THE BEST</h1>
          <p>YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.</p>

          <div className="hero-btn">
             <button>Shop Now</button>
             <button className="category">Category</button>
          </div>
          <div className="shopping">
            <p>Also Available On</p>
          </div>
           <div className="brand-icons" >
              <img src="/photos/flipkart.png" alt="" /> 
              <img src="/photos/amazon.png" alt="" />
           </div>
        </div>
        <div className="hero-image">
          <img src="/photos/shoe_image.png"/>
        </div>
       </main>
    );
};
export default Hero;