const express = require('express')
const app = express()
const fs = require('fs')
const cors = require('cors')

const readFile = (file) => {
     return fs.readFileSync(__dirname + `/books/` + file).toString()
}

app.use(express.json())
app.use(cors())

app.get('/', (req, res) => {
     res.json({
          message: 'kindle app',
     })
})

app.get('/list/books', async (req, res, next) => {
     try {
          const paths = ['sample_book 1.txt', 'sample_book 2']

          res.status(200).json(paths)
     } catch (error) {
          next(error)
     }
})

app.get('/book/:name', async (req, res, next) => {
     try {
          res.status(200).json({
               title: req.params.name,
               content: readFile(req.params.name),
          })
     } catch (error) {
          next(error)
     }
})

app.use(require('./errorhandler').ErrorHandler)
app.use(require('./errorhandler').notFound)

const PORT = 5050
app.listen(PORT, () => {
     console.log(`server is running on port ${PORT}`)
})
