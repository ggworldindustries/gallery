var config = {}

// Update to have your correct username and password
config.mongoURI = {
    production: 'mongodb+srv://gideongachie:33813398@gallery.nn9xf.mongodb.net/darkroom?retryWrites=true&w=majority&appName=gallery',
    development: 'mongodb+srv://gideongachie:33813398@gallery.nn9xf.mongodb.net/darkroom-dev?retryWrites=true&w=majority&appName=gallery',
    test: 'mongodb+srv://gideongachie:33813398@gallery.nn9xf.mongodb.net/darkroom-test?retryWrites=true&w=majority&appName=gallery',
}
module.exports = config;
 