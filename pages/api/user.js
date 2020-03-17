// pages/api/user.js

export default (req, res) => {
    //req를 받아서 res페이지를 만들어줌
    res.statusCode = 200
    res.setHeader('Content-Type', 'application/json')
    res.end(JSON.stringify({ name: 'John Doe' }))
}