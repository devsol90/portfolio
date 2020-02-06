const path = require('path');
// const BrowserSyncPlugin = require('browser-sync-webpack-plugin'); // 설치한 모듈을 가져온다

module.exports = {
  mode: 'development',
  // mode: 'production',
  entry: path.join(__dirname, 'src/index.jsx'),
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.jsx$/,
        use: 'babel-loader',
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  watch: true,
  // plugins: [
  //   new BrowserSyncPlugin({
  //     host: 'localhost', // localhost로 사용
  //     port: 3000, // 포트 3000을 사용  (이미 사용중이면 1씩 증가된 포트로 사용)
  //     files: ['./public/*.html'], // 해당 경로 내 html 파일이 자동으로 동기화 (이 부분이 없으면 html파일 변경사항은 자동 동기화 안됨)
  //     server: {
  //       baseDir: ['public'],
  //     }, // server의 Base 디렉토리를 dist로 지정
  //   }),
  // ],
};
