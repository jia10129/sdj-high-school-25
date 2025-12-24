// upload.js
function uploadFiles(category) {
    const fileInput = document.getElementById(category + 'File');
    const fileList = document.getElementById(category + 'List');
    const files = fileInput.files;

    if (files.length > 0) {
        for (let i = 0; i < files.length; i++) {
            const file = files[i];
            const fileName = file.name;
            const uploadDate = new Date().toLocaleDateString();

            const listItem = document.createElement('li');
            listItem.innerHTML = `
                <span>${fileName}</span>
                <span>업로드 날짜: ${uploadDate}</span>
            `;
            fileList.appendChild(listItem);
        }
    } else {
        alert('선택된 파일이 없습니다.');
    }
}
