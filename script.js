document.getElementById('submitBtn').addEventListener('click', function() {
    // Lấy giá trị từ các ô input
    const topic = document.getElementById('topic').value;
    const githubLink = document.getElementById('github').value;
    const clickupLink = document.getElementById('clickup').value;

    // Tạo đoạn text theo yêu cầu, thêm xuống hàng sau mỗi câu
    const outputText = `Em làm xong ${topic} rồi. Anh / chị xem giúp em ạ.\n-Github: ${githubLink}\n-Clickup: ${clickupLink}`;

    // Hiển thị đoạn text trong ô output
    document.getElementById('outputText').textContent = outputText;
});

document.getElementById('copyBtn').addEventListener('click', function() {
    // Lấy nội dung của báo cáo
    const reportText = document.getElementById('outputText').textContent;

    // Tạo một textarea tạm để sao chép nội dung
    const tempTextArea = document.createElement('textarea');
    tempTextArea.value = reportText;
    document.body.appendChild(tempTextArea);

    // Chọn nội dung trong textarea và sao chép
    tempTextArea.select();
    document.execCommand('copy');

    // Loại bỏ textarea tạm sau khi sao chép xong
    document.body.removeChild(tempTextArea);

    // Thông báo đã sao chép thành công
    alert('Copied the report!');
});
