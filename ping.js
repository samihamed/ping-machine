const http = require('http')

module.exports = {
    startInterval: function() {
        // NOTE: Set interval (60000 miliseconds equal 1 minute)
        const interval = 60000
        console.log(`Setting interval to ${interval / 1000} seconds...`)
        setInterval(ping, interval)
        console.log('Sending initial ping...')
        // NOTE: Literally poetic
        ping()

        function ping() {
            // NOTE: Swap below url with target url 
            // const url = 'https://www.example.org'
            // http.get(url)

            // NOTE: Doing it with config variables
            http.get(process.env.target_url)
        }
    }
}