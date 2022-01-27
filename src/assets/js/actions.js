var buttonTop = document.getElementById('gotop')

window.onscroll = function(){ scrollTop() }

function scrollTop()
{
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        buttonTop.style.display = "block"
    }else{
        buttonTop.style.display = "none"
    }
}

function topAction()
{
    document.body.scrollTop = 0
    document.documentElement.scrollTop = 0
}