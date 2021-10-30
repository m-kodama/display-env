const options = {
  showLabel: true,
}

window.onload = ()  => {
  const checkbox = document.getElementById('show-checkbox');

  // 現在の設定値を取得
  chrome.storage.local.get('options', data => {
    Object.assign(options, data.options);
    checkbox.checked = options.showLabel;
  });

  // スイッチのイベント設定
  checkbox.addEventListener('change', (event) => {
    options.showLabel = event.target.checked;
    chrome.storage.local.set({options});
  });
}