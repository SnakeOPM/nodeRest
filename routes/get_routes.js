const express = require('express');
const router = express.Router();

router.get('/hru', (req, res) => {
    res.status(200).send({
        hru: 'хрю'
    })
})

module.exports = router