import {useState, useEffect} from "react";
import ImageCard from './components/ImageCard'
import Search from "./components/Search";
import UploadMedia from "./components/UploadMedia";
import UploadVedio from "./components/UploadVideo";
import DeleteMedia from "./components/DeleteMedia";

const MediaPage = () => {
    const [images, setImages] = useState([])
    const [searchKeyword, setSearchKeyword] = useState('')
    const [isLoading, setIsLoading] = useState(true)
    const [pageNo, setPageNo] = useState(1)
  
    const pixabay_key = '45203465-dd64bd109ab9ab2d23ee2b71b'
    useEffect(() => {
      fetch(`https://pixabay.com/api/?key=${pixabay_key}&q=${searchKeyword}&image_type=photo&pretty=true&per_page=8&page=${pageNo}`)
      .then (response => response.json())
      .then (data => {
        setImages((prev) => [...prev, ...data.hits])
        setIsLoading(false)
        console.log(data)
      })
      .catch(error => console.log(error))
  
    }, [pageNo]) 

    useEffect(() => {
      fetch(`https://pixabay.com/api/?key=${pixabay_key}&q=${searchKeyword}&image_type=photo&pretty=true&per_page=8&page=${pageNo}`)
      .then (response => response.json())
      .then (data => {
        setImages(data.hits)
        setIsLoading(false)
        console.log(data)
      })
      .catch(error => console.log(error))
  
    }, [searchKeyword]) 

    const handleScroll = async () => {
        console.log("Scroll Top : " + document.documentElement.scrollTop)
        console.log("Window Height : " + window.innerHeight)
        console.log("Scroll Height : " + document.documentElement.scrollHeight)
        const check = document.documentElement.scrollTop + window.innerHeight + 1
        try {
            { check >= document.documentElement.scrollHeight ? 
            setPageNo((prevPage) => prevPage+1) 
            : 
            console.log("uhhh : " + pageNo)}
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])
    
    return (
        <div> 
    
          <div className="flex flex-col sm:flex-row py-4">
            <div className="px-2 sm:w-9/12">
              <Search searchProp={setSearchKeyword} />
            </div>
              
            <div className="flex space-x-4 mx-2 my-1 sm:w-3/12 sm:my-0 border border-orange-600 rounded-md">
              <div className="flex-1 my-5">
                <UploadMedia />
              </div>
              <div className="flex-1 my-5">
                <UploadVedio />
              </div>
              <div className="flex-1 my-5">
                <DeleteMedia />
              </div>
            </div>
              
          </div>
        
    
          { isLoading 
          ? 
          <h1 className="text-5xl text-center mx-auto mt-32">Loading ...</h1>
          :
          <div className="grid grid-cols-1 gap-2 sm:grid-cols-3 sm:gap-3 lg:grid-cols-4 lg:gap-4">
              { !!images.length && images.map(image => (
                <ImageCard key={image.id} image={image} />
              ))}{ <ImageCard /> }
          </div>
          }
    
        </div>
    
    
      );
}

export default MediaPage
