import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpload } from '@fortawesome/free-solid-svg-icons';

const UploadMedia = () => {
  return (
    <div className="relative flex items-center">
      <FontAwesomeIcon icon={faUpload} className="absolute right-3 top-2/4 transform -translate-y-1/2 text-orange-600 cursor-pointer" />
    </div>
  )
}

export default UploadMedia
