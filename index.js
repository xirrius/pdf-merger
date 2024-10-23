const express = require('express')
const app = express()
const path = require('path')
const multer  = require('multer')
const mergePDF = require('./test-pdf')
const upload = multer({ dest: 'uploads/' })
const port = 3000

app.get('/', (req, res) => {
  res.sendFile(path.join( __dirname, "templates/index.html"));
})
app.use('/static', express.static('public'))
app.post('/merge', upload.array('pdfs', 2), async function(req, res, next) {
  console.log(req.files)
  const d = await mergePDF(path.join(__dirname, req.files[0].path), path.join(__dirname, req.files[1].path));
  // const d = await mergePDF(req.files);
  res.redirect(`http://localhost:3000/static/${d}.pdf`)
})

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})
