import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './components/Header/Header'
import Timer from './components/Timer/Timer'

function App() {
  const [bookmarks, setBookmarks] = useState([])
  const [readingTime, setReadingTime] = useState(0)

  const handleAddToBookmark = (blog) => {
    const isExist = bookmarks.find((item) => item.id == blog.id)
    if(isExist){
      return alert('already exist')
    }else{
      const newBookmarks = [...bookmarks, blog]
    setBookmarks(newBookmarks)
    }
  }
  const handleMarkAsRead = (id, time) => {
    setReadingTime(readingTime + time)
    const remainingBookmarks = bookmarks.filter(bookmark => bookmark.id !== id)
    setBookmarks(remainingBookmarks)

  }
  return (
    <>
      <Header></Header>
      <Timer></Timer>
      <div className='md:flex w-3/4 mx-auto'>
        <Blogs handleMarkAsRead={handleMarkAsRead} handleAddToBookmark={handleAddToBookmark}></Blogs>
        <Bookmarks readingTime={readingTime} bookmarks={bookmarks}></Bookmarks>
      </div>
    </>
  )
}

export default App
