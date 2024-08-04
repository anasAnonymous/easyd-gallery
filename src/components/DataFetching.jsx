import { useState, useEffect } from "react"
import axios from "axios"
import { list } from "postcss"

const DataFetching = () => {
    const [posts, setPosts] = useState({})
    const [id, setId] = useState(1)
    const [btn, setBtn] = useState(1)

    const handleClick = () => {
        setBtn(id)
    }

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${btn}`)
            .then((res) => {
                console.log(res)
                setPosts(res.data)
            })
            .catch((e) => {
                console.log(e)
            })

    }, [btn])
  return (
    <div>
        <input type="text" value={id} onChange={e => setId(e.target.value)} />
        <button type="button" onClick={handleClick}>check</button>
        <div>
            {posts.title}
        </div>
      {/* <ul>
        {
            posts.map(post => <li key={post.id}>{post.title}</li>)
        }
      </ul> */}
    </div>
  )
}

export default DataFetching
