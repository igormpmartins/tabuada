const list = (req, res) => { 
    const lista  = []

    for (let i = 1;i<=100;i++) {
        lista.push(i)
    }

    res.render('tabuada/list', {
        lista
    })
}

const tabuada = (req, res) => { 
    const num = req.params.num
    const tabuada = []

    for (let i=0;i<=100;i++) {
        tabuada.push({
            num,
            i,
            result: num * i
        })
    }

    res.render('tabuada/tabuada', {
        num: req.params.num,
        tabuada
    })
}

module.exports = {
    list, tabuada
}