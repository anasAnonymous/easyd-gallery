// import React from "react";
// import PropTypes from 'prop-types'
// https://www.linkedin.com/pulse/props-missing-validation-eslint-arijit-kumar-das-ycsbc/

const ImageCard = ({ image }) => {
  return (
    <div>
      <div className="bg-black-400, max-w-sm, rounded overflow-hidden shadow-lg hover:scale-110 transition-translate duration-300">
        <img src={image?.webformatURL ? image.webformatURL: "https://sitechecker.pro/wp-content/uploads/2023/06/404-status-code.png"} alt="" />
        {/* <img src="https://pixabay.com/get/g3d734647c5201804de1c5b8fbd493ae8560296cb4370cc18c6814a762cafd155f33162842e7289fa28e039f1f5830405f94e958732ab5fdf088365a1a9bc76f1_640.jpg" alt="" /> */}
        {/* <img src="https://sitechecker.pro/wp-content/uploads/2023/06/404-status-code.png" alt="" className="w-full" /> */}
              {/* <img src={MediaObj.Image !== "N/A" ? MediaObj.Image : 'https://via.placeholder.com/400'} alt="" /> */}
        <div className="px-6 py-4 bg-orange-400 font-semi-bold text-gray-700 hover:text-orange-600 hover:bg-gray-300 text-sm">
          {/* <div className="font-semi-bold text-gray-600 hover:text-orange-600 text-xl mb-2"> */}
          <ul>
            <li>
              <strong>{image?.user ? image.user : "N/A"}</strong>
            </li>
            <li>
              {image?.user_id ? image.user_id : "N/A"}
            </li>
          </ul>
          {/* </div> */}
          
        </div>
      </div>
    </div>
  );
}

// ImageCard.propTypes = {
//   image : PropTypes.object,
// }

export default ImageCard;
