const PORT = 8000
const axios = require('axios')
const cheerio = require('cheerio')
const express = require('express')
const app = express()
const url = 'http://www.nasdaqomxnordic.com/index/index_info'
/*const cors = require('cors')
app.use(cors())

const url = 'https://www.theguardian.com/uk'

app.get('/', function (req, res) {
    res.json('This is my webscraper')
})

app.get('/results', (req, res) => {
    axios(url)
        .then(response => {
            const html = response.data
            const $ = cheerio.load(html)
            const articles = []

            $('.fc-item__title', html).each(function () { //<-- cannot be a function expression
                const title = $(this).text()
                const url = $(this).find('a').attr('href')
                articles.push({
                    title,
                    url
                })
            })
            res.json(articles)
        }).catch(err => console.log(err))

})*/

/*axios.get(url)
     .then(response =>{
         const html=response.data
         //console.log(html)
        const $ = cheerio.load(html)
        //console.log($)
        const elementSelector='#changeDataTable > tbody > tr'
        $(elementSelector).each((parentIndx,parenetEleme)=> {

            console.log(parentIndx)

        })

       /* $('table.tablesorter',html).each(function(){

             const title = $(this).find('tbody').find('td').attr('title')
             const pris=  $(this).find('tbody').find('tr.odd').find('td').text()

             console.logt(pris)
             console.logurl(title)



        })

     })*/


     async function getTable(){
         try{
             const siteUrl='https://datatables.net/'
             const {data} = await axios ({
                 method : "GET",
                 url : siteUrl,
             })
             //console.log(data)
             const $ = cheerio.load(data)
             const elementSelector='#example > tbody > tr'
            $(elementSelector).each((parentIndx,parenetEleme)=> {

           // console.log(parentIndx)
            console.log(parenetEleme)

        })
            // console.log($)

         }catch (err){
             console.error(err)

         }
     }
     getTable()
app.listen(PORT, () => console.log(`server running on PORT ${PORT}`))


/*turorial references : 
https://www.youtube.com/watch?v=5YCuUCRS_Ks

*/