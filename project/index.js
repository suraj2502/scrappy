const axios = require('axios');
const cheerio = require('cheerio');
const { html } = require('cheerio');
const list=require('./Model/List');
const url="https://news.ycombinator.com/";
var db;

axios.get(url).then(response=>{
    let getdata=html=>{
        data=[]
        
        const $=cheerio.load(html);
        $('table.itemlist tr td:nth-child(3)').each((i,elem)=>{
            data.push({
                title:$(elem).text(),
                link:$(elem).find('a.storylink').attr('href')
               
            });
         
        });
 
       return data;
    }
    list.create(getdata(response.data))
    
     console.log(getdata(response.data))
}).catch(error=>{
    console.log(error);
})

