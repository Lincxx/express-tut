const authorize = (req, res, next) => {
    const {user} = req.query;
    if (user === 'john') {
        //we are added on the user to the req
        req.user = {name: 'john', id:3}
        next()
    } else  {
        res.status(401).send('Unauthorized')
    }
    console.log('you get in')
    next()
}

module.exports = authorize