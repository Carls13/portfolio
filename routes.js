const routes = require('next-routes')
                                                  
module.exports = routes()                           
.add('index')                                       
.add('the-corner', '/the-corner', 'the-corner')                         
.add('service', '/service/:slug.:id', 'service')
.add('article', '/article/:slug.:id', 'article')