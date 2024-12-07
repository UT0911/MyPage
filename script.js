// プロフィールデータを配列で管理
const profiles = [
    {
        accountLink: "https://x.com/UuTt0911",
        icon: "icons/shukusho.jpg",
        name: "縮小垢",
        text: "主に親しい人や弊学生のみ通しています。"
    },
    {
        accountLink: "https://x.com/0911TU",
        icon: "icons/kagi.jpg",
        name: "鍵垢",
        text: "愚痴、不満など。通す人は厳選します。"
    },
    {
        accountLink: "https://x.com/UThololistener",
        icon: "icons/oshi.jpg",
        name: "仕事用垢",
        text: "推し活用アカウントです。同担拒否の方は注意。"
    },
    {
        accountLink: "https://x.com/UTGAMEROOM",
        icon: "icons/game.jpg",
        name: "ゲーム垢",
        text: "ゲーム関係の投稿をしています。"
    }
];

// HTMLを動的に生成して挿入
const profilesContainer = document.getElementById('profiles');
profiles.forEach(profile => {
    const profileHTML = `
        <div class="flame">
          <a class="accountLink" href="${profile.accountLink}">
            <div class="account">
              <div class="icon">
                <img src="${profile.icon}" alt="${profile.name}">
              </div>
              <div>
                <p class="name">${profile.name}</p>
                <p class="text">${profile.text}</p>
              </div>
            </div>
          </a>
        </div>
      `;
    profilesContainer.innerHTML += profileHTML;
});