const home = (req, res) => {
    res.render('home', { title: 'Home' })
}

const  about = (req, res) => {
    res.send('About Page');
}


module.exports = {
    home,
    about

}