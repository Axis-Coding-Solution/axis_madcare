import React from "react";

function Map() {
  const iframeStyle = {
    width: "100%",
    height: "600px",
    border: "0",
    margin: "0",
    padding: "0",
  };
  return (
    <>
      <div className=" mt-20">
        <div className="mt-10 xl:mt-0 ">
          <div style={{ width: "100%" }}>
            <iframe
              title="map"
              style={iframeStyle}
              srcDoc={`<iframe src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=1%20Grafton%20Street,%20Dublin,%20Ireland+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed" width="100%" height="600" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>`}
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
}

export default Map;
