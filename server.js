const express = require(`express`)
const path = require(`path`)
const app = express()
const port = 8080

app.use(express.static(path.join(__dirname , `node_modules`)))


app.listen(port , function() {
    console.log(`Server running on port ${port}`)
})