const sinon = require('sinon')
const controller = require('./index')

describe('Testes Index', ()=> {

    it('Testing index', ()=> {

        const res = {
            render: () => {}
        }

        const myMock = sinon.mock(res)
        myMock.expects('render').once().withArgs('home')
        controller.home({}, res)

    })

})
