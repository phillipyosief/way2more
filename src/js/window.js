const minimize = document.getElementById('minimize')
const close = document.getElementById('close')
const webapp = document.getElementById('webapp')
const searchBTN = document.getElementById('searchbutton')

document.addEventListener('DOMContentLoaded', function () {

    minimize.addEventListener('click', function(event) {
        console.log('minimize');
    })

    close.addEventListener('click', function(event) {
        console.log('close');
        window.close()
    })

    searchBTN.addEventListener('click', function (event){
        var input = document.getElementById('searchinput').value
        console.log(input)
    })

});


