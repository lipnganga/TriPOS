const home = (req, res) => {
    res.render('home', { title: 'Home' })
}

const  about = (req, res) => {
    res.render ('about')
}


module.exports = {
    home,
    about

}