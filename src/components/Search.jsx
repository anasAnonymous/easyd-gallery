import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
// import PropTypes from 'prop-types'

const Search = ({ searchProp }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    // setSearchTerm(event.target.value);
    // console.log("clicked!!")
    searchProp(searchTerm)
  };

  // const filteredData = data.filter((item) =>
  //   item.name.toLowerCase().includes(searchTerm.toLowerCase())   
  // );

  return (
    <div className="relative flex items-center">
      <FontAwesomeIcon onClick={handleSearch} icon={faSearch} className="absolute right-3 top-2/4 transform -translate-y-1/2 text-orange-600 cursor-pointer" />
      <input
        onChange={event => setSearchTerm(event.target.value)}
        className="w-full pl-10 py-2 border border-orange-600 rounded-md focus:outline-none focus:ring-1 focus:ring-orange-600"
        type="text"
        placeholder="Search for Media..."
        value={searchTerm}
      />

    </div>
  )
}

// Search.propTypes = {
//   searchProp : PropTypes.object,
// }

export default Search
