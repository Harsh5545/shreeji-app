import React from "react";

function HomeBenefit() {
  return (
    <div className="mx-auto max-w-screen-lg py-5 px-5">
      <div className="text-center flex gap-2 flex-col">
        <h1 className="font-[400] text-3xl">Your Benefits with Turtle Boxes</h1>
        <p className="text-lg">
          Take your brand to next level with the world’s finest custom packaging
          solutions
        </p>
      </div>
      <div className="grid grid-cols-3">
        <div>
          <div className="flex items-center justify-between">
            <img alt="Satisfaction and Quality" />
            <div>
              <h1 className="text-lg font-bold">
                100% Satisfaction and Quality
              </h1>
              <p className="text-sm">
                We strive to deliver sheer quality with our services and
                products for the best customer experience.
              </p>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <img alt="Printing Brilliance" />
            <div>
              <h1 className="text-lg font-bold">Printing Brilliance</h1>
              <p className="text-sm">
                DIY packaging solutions with endless keyline variations so you
                get the packaging you desire.
              </p>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <img alt="Hidden Costs" />
            <div>
              {" "}
              <h1 className="text-lg font-bold">No Hidden Costs</h1>
              <p className="text-sm">
                An all-inclusive price quotation for the product cost, GST &
                shipping for crystal clear transactions.
              </p>
            </div>
          </div>
        </div>
        <div>
          <img alt="Benefits" />
        </div>

        <div >
          <div className="flex items-center justify-between">
            <div><h1 className="text-lg font-bold">
              Standard Artwork Check Included
            </h1>
            <p className="text-sm">
              Standard artwork check for incorrect data, color format & more to
              deliver error-free printing.
            </p></div>
            <img alt="Standard Artwork" />
          </div>

          <div className="flex items-center justify-between">
            <div>
                <h1 className="text-lg font-bold">Payment on Account</h1>
            <p className="text-sm">
              Get access to hassle-free payment methods via Debit / Credit Card
              and Internet Banking.
            </p></div>
            <img alt="Payment on Account" />
          </div>

          <div className="flex items-center justify-between">
            <div><h1 className="text-lg font-bold">Color Management</h1>
            <p className="text-sm">
              Ensuring strict color consistency across all packaging materials
              and logo designs for smooth offset printing.
            </p></div>
            <img alt="Color Management" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeBenefit;
