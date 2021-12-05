import { lazy, Suspense } from 'react'
import AppController from './AppController'
import './index.css'

const Modal = lazy(() => import('./Modal/emptymodal'))

function App() {
     const { openModal, modalRef, bookList, book } = AppController()

     return (
          <Suspense fallback={<div>Loading...</div>}>
               <section className="container">
                    <header>
                         <h1>Book List</h1>
                    </header>

                    <article className="book-container">
                         {bookList.length > 0 &&
                              bookList.map((k, i) => (
                                   <div
                                        key={i}
                                        onClick={() => openModal(modalRef, k)}
                                        className="card"
                                   >
                                        <h1>{k}</h1>
                                   </div>
                              ))}
                    </article>

                    <Modal
                         showModal={modalRef}
                         title={book.title}
                         content={book.content}
                    />
               </section>
          </Suspense>
     )
}

export default App
