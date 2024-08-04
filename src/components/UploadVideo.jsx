import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpload } from '@fortawesome/free-solid-svg-icons';

const UploadVedio = () => {
    return (
        <div className="relative flex items-center">
          <FontAwesomeIcon icon={faUpload} className="absolute right-3 top-2/4 transform -translate-y-1/2 text-orange-600 cursor-pointer" />
          {/* <input
            onChange={event => setSearchTerm(event.target.value)}
            className="w-full pl-10 py-2 border border-orange-400 rounded-md focus:outline-none focus:ring-1 focus:ring-orange-600"
            type="text"
            placeholder="Search for Media..."
            value={searchTerm}
          /> */}
    
        </div>
    
      )
}

export default UploadVedio