
// jquery starts here
$(document).ready(function() {

    // onclick slide menu
    $('.btnSlideToggle').click(function () {
        $('.menu').slideToggle(1000)
    })

    // onclick color changes to light mode
    $('.li1').click(function () {
        $('.black1,.black2,.black3,.black4,.black5,.black6').css({
            background: 'wheat',
            color: 'black' 
        })
    })

    // onclick color changes to red mode
    $('.li2').click(function () {
        $('.black1,.black2,.black3,.black4,.black5,.black6').css({
            background: 'red',
            color: 'rgb(245, 199, 199)' 
        })
    })

    // onclick color changes to blue mode
    $('.li3').click(function () {
        $('.black1,.black2,.black3,.black4,.black5,.black6').css({
            background: 'rgb(2, 2, 138)',
            color: 'skyblue' 
        })
    })

    // onclick color changes to purple mode
    $('.li4').click(function () {
        $('.black1,.black2,.black3,.black4,.black5,.black6').css({
            background:'purple',
            color: 'pink'
        })
    })

    // onclick color changes to dark mode
    $('.li5').click(function () {
        $('.black1,.black2,.black3,.black4,.black5,.black6').css({
            background: 'black',
            color: 'aliceblue' 
        })
    })


    // onclick slide answer1
    $('.net1').click(function () {
        $('.answer1').slideToggle('fast')
    })

    // onclick slide answer2
    $('.net2').click(function () {
        $('.answer2').slideToggle('fast')
    })

    // onclick slide answer3
    $('.net3').click(function () {
        $('.answer3').slideToggle('fast')
    })

    // onclick slide answe4
    $('.net4').click(function () {
        $('.answer4').slideToggle('fast')
    })

    // onclick slide answer5
    $('.net5').click(function () {
        $('.answer5').slideToggle('fast')
    })

    // onclick slide answer6
    $('.net6').click(function () {
        $('.answer6').slideToggle('fast')
    })

   

})