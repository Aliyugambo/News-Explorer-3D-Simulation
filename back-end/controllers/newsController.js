const https = require("https");
const axios = require('axios');

async function getNews (req,res) {
    try {
        var url = 'http://newsapi.org/v2/top-headlines?' +
          'country=ng&' +
          'apiKey=706fbeaf5c1e4981b8f6eeaa8d028c18';

        const news_get = await axios.get(url)
        // console.log(news_get.data);
        res.status(200).json({
            articles:news_get.data
        });
    } catch (error) {
        if(error.response){
        console.log(error);
        res.status(500).json({ 
        error: 'Internal Server Error' 
    });
        }
    }
    
};

async function searchNews(req, res) {

    const search = req.body.search;
    // console.log(req.body);
    try {
        var url = `http://newsapi.org/v2/everything?q=${search}&apiKey=706fbeaf5c1e4981b8f6eeaa8d028c18`;
        // console.log(url)
        const news_get = await axios.get(url)
        console.log(news_get.data);
        res.status(201).json({
            articles: news_get.data
        })

    } catch (error) {
        res.status(500).json({ 
        error: 'Internal Server Error' 
    });
    }
};

async function searchbyCategory(req, res) {
    const category = req.params.category;
    // console.log(category);
    try {
        var url = `http://newsapi.org/v2/top-headlines?country=ng&category=${category}&apiKey=706fbeaf5c1e4981b8f6eeaa8d028c18`;

        const news_get = await axios.get(url)
        console.log(news_get.data);
        res.status(201).json({
            articles: news_get.data
        })
    } catch (error) {
        res.status(500).json({ 
        error: 'Internal Server Error' 
    });
    }
}




module.exports = {
    getNews,
    searchNews,
    searchbyCategory
};