// 対象となるURLと表示するラベルの設定
const settings = [
  {
    url: 'https://www.google.co.jp/',
    text: 'DEV',
    color: '#fff',
    backgroundColor: 'rgba(178, 61, 213, .52)'
  },
  {
    url: 'https://qiita.com/',
    text: 'STG',
    color: '#fff',
    backgroundColor: 'rgba(18, 95, 239, .52)'
  },
];

window.onload = () => {
  const setting = settings.find((setting) => new RegExp(setting.url).test(location.href));
  if (setting === undefined) {
    return;
  }

  // DOMの生成
  const label = createLabel(setting);

  // DOMの追加
  const body = document.getElementsByTagName('body');
  label.id = '__display-env-label'
  body[0].appendChild(label);
};

/**
 * ラベルDOMの生成
 * @param setting ラベルの設定
 * @returns DOM Element
 */
const createLabel = (setting) => {
  const label = document.createElement('div');
  label.innerHTML = setting.text;
  const s = label.style;
  s.padding = '8px 32px'
  s.backgroundColor = setting.backgroundColor;
  s.fontSize = '14px';
  s.color = setting.color;
  s.position = 'fixed';
  s.top = '64px';
  s.right = '0px';
  s.zIndex = '2147483647'
  s.borderRadius = '8px 0px 0px 8px';
  s.pointerEvents = 'none';

  return label;
};