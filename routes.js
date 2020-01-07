const routes = require('next-routes')
                                                  
module.exports = routes()                           
.add('index')                                       
.add('blog', '/blog', 'blog')                         
.add('about', '/about', 'about')                         
.add('portfolio', '/portfolio', 'portfolio')
.add('article', '/article/:slug.:id', 'article')