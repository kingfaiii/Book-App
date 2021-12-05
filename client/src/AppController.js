import axios from 'axios'
import { useRef, useEffect, useState } from 'react'

const axiosInstance = axios.create({
     baseURL: 'http://localhost:5050',
})

const AppController = () => {
     const modalRef = useRef('')
     const [bookList, setBookList] = useState([])
     const [book, setBook] = useState({})

     useEffect(() => {
          getBookList().then((d) => {
               setBookList(d)
          })
     }, [])

     const openModal = async (ref, book) => {
          if (ref.current === null) {
               return
          } else {
               ref.current.style.display = 'block'

               const bookInfo = await getBook(book)

               setBook(bookInfo)
          }
     }

     const getBookList = async () => {
          const { data, status } = await axiosInstance.get('/list/books')

          return status === 200 ? data : null
     }

     const getBook = async (book) => {
          const { data, status } = await axiosInstance.get(`/book/${book}`)

          return status === 200 ? data : null
     }

     return {
          openModal,
          getBookList,
          getBook,
          modalRef,
          bookList,
          book,
     }
}

export default AppController
