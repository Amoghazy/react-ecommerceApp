import homeImages from "../../assets/HomeImages/home";
export default function Why() {
  return (
    <div className="container p-5 mt-4">
      <div className="flex flex-row justify-between">
        <div className="flex-grow-0 flex-shrink-0 w-1/2">
          <h2 className="text-3xl font-bold">Why Choose Us</h2>

          <div className="flex  flex-wrap my-5">
            <div className="flex-grow-0 flex-shrink-0 w-1/2 ">
              <div className="feature">
                <div className="icon">
                  <img
                    src={homeImages.truck}
                    alt="Image"
                    className="imf-fluid"
                  />
                </div>
                <h3 className="text-base font-bold ">
                  {" "}
                  Fast &amp; Free Shipping
                </h3>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Fugit ,
                </p>
              </div>
            </div>

            <div className="flex-grow-0 flex-shrink-0 w-1/2">
              <div className="feature">
                <div className="icon">
                  <img src={homeImages.bag} alt="Image" className="imf-fluid" />
                </div>
                <h3 className="text-base font-bold ">Easyz to Shop</h3>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Fugit
                </p>
              </div>
            </div>

            <div className="flex-grow-0 flex-shrink-0 w-1/2">
              <div className="feature">
                <div className="icon">
                  <img
                    src={homeImages.support}
                    alt="Image"
                    className="imf-fluid"
                  />
                </div>
                <h3 className="text-base font-bold ">24/7 Support</h3>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Fugit c
                </p>
              </div>
            </div>

            <div className="flex-grow-0 flex-shrink-0 w-1/2">
              <div className="feature">
                <div className="icon">
                  <img
                    src={homeImages.returns}
                    alt="Image"
                    className="imf-fluid"
                  />
                </div>
                <h3 className="text-base font-bold ">Hassle Free Returns</h3>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Fugit
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex-grow-0 flex-shrink-0 w-1/2 ">
          <div className="img-wrap">
            <img src={homeImages.shop} alt="Image" className="h-96 ml-20" />
          </div>
        </div>
      </div>
    </div>
  );
}
