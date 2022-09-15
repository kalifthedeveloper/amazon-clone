import React from "react";
import './Home.css'; 
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <img
        className="home__image"
        src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
        alt="banner"
      />

      {/* product title, id, price, rating, image */}
      <div className="home__row">
      <Product
                    id={12312}
                    title="Spalding 54 In. Shatter-proof Polycarbonate Exacta height® Portable Basketball Hoop System"
                    price={248.00}
                    rating={5}
                    image="https://i5.walmartimages.com/asr/c1432f78-daf5-4c75-9bc3-0e637efc62d9.69a4bc450c9b24b33a98ae5ba0fbb7a0.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF"
                />
                 <Product
                    id={12312}
                    title="WILSON Evolution Game Basketball Official NBA Game Ball Certified By Adam Silver"
                    price={69.95}
                    rating={5}
                    image="https://m.media-amazon.com/images/I/91vdgs5FY4L._AC_SX679_.jpg"
                />
      </div>
      <div className="home__row">
      <Product
                    id={12312}
                    title="[Рrе-ordеr | Dеlivеry dаtе : 05/25/2022 ] Sоny Plаystаtion 5 Disс Editiоn РS 5 Consоle 1 TВ + РS5 Charging Statiоn"
                    rating={5}
                    image="https://m.media-amazon.com/images/I/51+WZVDZT0L._AC_SX679_.jpg"
                />
                 <Product
                    id={12312}
                    title="NBA 2K22 - PlayStation 5- Powered by 2K Sports"
                    price={69.95}
                    rating={2}
                    image="https://m.media-amazon.com/images/I/71pVkhf7GrL._SX522_.jpg"
                />
                 <Product
                    id={12312}
                    title="WILSON Evolution Game Basketball Official NBA Game Ball Certified By Adam Silver"
                    price={69.95}
                    rating={5}
                    image="https://m.media-amazon.com/images/I/91vdgs5FY4L._AC_SX679_.jpg"
                />
      </div>

      <div className="home__row">
      <Product
                    id={12312}
                    title="WILSON Evolution Game Basketball Official NBA Game Ball Certified By Adam Silver"
                    price={69.95}
                    rating={3}
                    image="https://m.media-amazon.com/images/I/91vdgs5FY4L._AC_SX679_.jpg"
                />
      </div>
      
      {/* product */}
    </div>
  );
}

export default Home;
