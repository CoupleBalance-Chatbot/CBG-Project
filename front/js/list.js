// 데이터패치
try {
    fetch(`https://port-0-cbg-project-ghdys32blrzmx1y1.sel5.cloudtype.app/question/getAll`)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            console.log(data)
            const listWrap = document.querySelector('.Quelist');
            let html = '';
            console.log(data);
            if (data.length === 0) {
                html += `
            <li class="no-data">
              <p>등록된 질문 리스트가 존재하지 않습니다</p>
            </li>
          `;
            } else {
                data.forEach((el) => {
                    html += `
            <h3>${el.title}</h3>
                <div>
                    <p>
                        ${el.question}
                    </p>
                </div>
              
            `;
                });
            }
            listWrap.innerHTML = html;
        });
} catch (error) {
    console.error('데이터 패치 중 오류 발생:', error.message);
}

