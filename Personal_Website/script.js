$(window).ready(function(){
    var i = false
    setInterval(function(){
        i = !i
        document.title=["Abdulla K", "Personal Website"][i ? 1 : 0]
    }, 1000);
    
})