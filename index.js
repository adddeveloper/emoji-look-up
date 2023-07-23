var emojis;
fetch('data.json')
.then(res=>res.json())
.then(data => {
    emojis = data;
    const searchInput = document.getElementById('searchInput');
    const emojiInfo = document.getElementById('emojiInfo');

    searchInput.addEventListener('input', () => {
        const searchTerm = searchInput.value.trim().toLowerCase();
        const matchingEmojis = emojis.filter(emoji => emoji.name.toLowerCase().includes(searchTerm));
        displayEmojis(matchingEmojis);
    });

    function displayEmojis(emojisArray) {
        if (emojisArray.length === 0) {
            emojiInfo.innerHTML = "No emojis found.";
            return;
        }
        let html = '';
        emojisArray.forEach(emoji => {
            const htmlCodes = emoji.htmlCode.join(', ');
            const unicodeChars = emoji.unicode.join(', ');
            html += `<div class="card">
                        <p><strong>Name:</strong> ${emoji.name}</p>
                        <p><strong>Category:</strong> ${emoji.category}</p>
                        <p><strong>Group:</strong> ${emoji.group}</p>
                        <p><strong>HTML Codes:</strong> ${htmlCodes}</p>
                        <p><strong>Unicode Characters:</strong> ${unicodeChars}</p>
                    </div>`;
        });
        emojiInfo.innerHTML = html;
    }
    displayEmojis(emojis)
})
