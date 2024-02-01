// 뒤로가기
const back = document.getElementById('back')
back.addEventListener('click', (e)=>{ window.history.back();})

// 질문리스트
const list = document.getElementById('list')
list.addEventListener('click', (e)=>{
    window.location.href = './list.html'
})

// 전송버튼 클릭
const send = document.getElementById('send')
send.addEventListener('click', (e)=> {
    const input = document.getElementById('input').value
    const chatting = document.getElementById('chatting')
    const user = document.createElement('div')

    user.innerHTML = `<div class="contentU">${'한국인이라면 깻잎 잡아주는게 기본 아니야?'}</div>`
})


var newDiv = document.createElement('div');
            
            // 생성한 div에 내용 추가
            newDiv.innerHTML = '새로운 HTML 요소';

            // 해당 div에 새로운 div 요소 추가
            document.getElementById('myDiv').appendChild(newDiv);