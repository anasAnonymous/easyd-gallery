import {useState, useEffect} from "react";
import ImageCard from './components/ImageCard'
import Search from "./components/Search";
import UploadMedia from "./components/UploadMedia";
import UploadVedio from "./components/UploadVideo";
import DeleteMedia from "./components/DeleteMedia";

const MediaPage = () => {
    const [images, setImages] = useState([])
    // const images = "https://sitechecker.pro/wp-content/uploads/2023/06/404-status-code.png"
    const [searchKeyword, setSearchKeyword] = useState('')
    const [isLoading, setIsLoading] = useState(true)
    const [pageNo, setPageNo] = useState(1)
  
    const pixabay_key = '45203465-dd64bd109ab9ab2d23ee2b71b'
    useEffect(() => {
      // https://prathapreddy-mudium.medium.com/vite-react-project-uncaught-referenceerror-process-is-not-defined-at-aa624e343a88
      fetch(`https://pixabay.com/api/?key=${pixabay_key}&q=${searchKeyword}&image_type=photo&pretty=true&per_page=8&page=${pageNo}`)
      .then (response => response.json())
      .then (data => {
        setImages((prev) => [...prev, ...data.hits])
        setIsLoading(false)
        console.log(data)
      })
      .catch(error => console.log(error))
  
    }, [searchKeyword, pageNo]) 

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
    
          <div className="flex flex-row py-4">
            <div className="pr-1 w-9/12">
              <Search searchProp={setSearchKeyword} />
            </div>
            <div className="flex w-3/12 border border-orange-600 rounded-md">
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
          <div className="grid grid-cols-4 gap-4">
              { !!images.length && images.map(image => (
                <ImageCard key={image.id} image={image} />
              ))}{ <ImageCard /> }
          </div>
          }
    
        </div>
    
    
      );
}

export default MediaPage
