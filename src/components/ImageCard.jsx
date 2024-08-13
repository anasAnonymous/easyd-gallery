
const ImageCard = ({ image }) => {
  return (
    <div>
      <div className="bg-black-400 max-w-sm rounded overflow-hidden shadow-lg hover:scale-110 transition-translate duration-300">
        <img src={image?.webformatURL ? image.webformatURL: "https://sitechecker.pro/wp-content/uploads/2023/06/404-status-code.png"} alt="" className="w-full h-48 object-cover"/>

        <div className="px-6 py-4 bg-orange-400 font-semi-bold text-gray-700 hover:text-orange-600 hover:bg-gray-300">
          <ul>
            <li>
              <strong className="text-sm lg:text-xl">{image?.user ? image.user : "N/A"}</strong>
            </li>
            <li className="text-sm lg:text-xl">
              {image?.user_id ? image.user_id : "N/A"}
            </li>
          </ul>
          
        </div>
        
      </div>
    </div>
  );
}

export default ImageCard;
