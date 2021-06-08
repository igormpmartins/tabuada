const controller = require('./tabuada')
const sinon = require('sinon')

describe('Tests tabuada', ()=> {

    it('Testing list', ()=> {

        const lista  = []

        for (let i = 1;i<=100;i++) {
            lista.push(i)
        }

        const req = {}

        const res = {
            render: ()=> {}
        }

        const myMock = sinon.mock(res)
        myMock.expects('render').once().withArgs('tabuada/list', {lista})
        controller.list(req, res)

    })

    it('Testing tabuada', ()=> {

        const tabuada = []
        const num = 5

        for (let i=0;i<=100;i++) {
            tabuada.push({
                num,
                i,
                result: num * i
            })
        }        

        const req = {
            params: {num}
        }

        const res = {
            render: ()=> {}
        }

        const myMock = sinon.mock(res)
        myMock.expects('render').once().withArgs('tabuada/tabuada', {num, tabuada})
        controller.tabuada(req, res)

    })

})

