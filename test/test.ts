import * as service from '../service/memberService'

init()

function init() {
    service.getMembers().then(data => {
        console.log(data)
    })
}