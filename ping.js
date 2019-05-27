const http = require('http')

module.exports = {
    startInterval: function() {
        const interval = 60000
        console.log(`Setting interval to ${interval / 1000} seconds...`)
        setInterval(ping, interval)
        console.log('Sending initial ping...')
        ping()

        function ping() {
            console.log('ping')
            http.get('http://wayl-crawler.herokuapp.com')
            http.get('http://capoeira-song-bot.herokuapp.com')
        }
    }
}