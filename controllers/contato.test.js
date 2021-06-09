const sinon = require('sinon')
const controller = require('./contato')

describe('Testes Contato', ()=> {

    it('Testing Contato', ()=> {

        const res = {
            render: () => {}
        }

        const myMock = sinon.mock(res)
        myMock.expects('render').once().withArgs('contato')
        controller.contato({}, res)

    })

})
