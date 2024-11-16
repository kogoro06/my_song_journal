module.exports = {
  content: [
    './app/views/**/*.html.erb',
    './app/helpers/**/*.rb',
    './app/assets/stylesheets/**/*.css',
    './app/javascript/**/*.js'
  ],
  theme: {
    extend: {
      // Tailwind CSSのテーマカスタマイズ
      colors: {
        customblue: '#174397',  // カスタムカラーの追加例
        customred: "#fe5458",
      },
      spacing: {
        '72': '18rem',           // カスタムの余白サイズの追加
      },
      borderRadius: {
        'xl': '1.5rem',          // カスタムのボーダー半径
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: false,
  },
}