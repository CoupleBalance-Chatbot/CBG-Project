document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('ok').addEventListener('click', function() {
        window.location.href = "./chat.html";
    });

    document.getElementById('no').addEventListener('click', function() {
        window.location.href = "./chat.html";
    });

    document.getElementById('back').addEventListener('click', function() {
        window.location.href = "./loading.html";
    });

    document.getElementById('inner-footer').addEventListener('click', function() {
        window.location.href = "./list.html";
    });


    var name = '깻잎 논쟁'
    var ques = '나와 내 애인, 내 친구와 식사 중 깻잎을 떼느라 애먹는 친구의 깻잎을 내 애인이 떼준다. 당신의 선택은?'
    document.getElementById('Quecontent').innerHTML = `<h2><${name}></h2><p>당신의 선택은?</p>`
    document.getElementById('content-box').innerHTML = `<p>${ques}</p>`

})


