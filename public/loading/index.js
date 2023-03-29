/**
 * 初始化加载效果的svg格式logo
 * @param {string} id - 元素id
 */
function initSvgLogo(id) {
  const svgStr = `<svg t="1680102574686" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5025" width="100" height="100"><path d="M705.92 915.84H320c-28.16 0-51.2-23.04-51.2-51.2V630.4c0-28.16 23.04-51.2 51.2-51.2h385.92c28.16 0 51.2 23.04 51.2 51.2v234.88c0 27.52-23.04 50.56-51.2 50.56z" fill="#EEF6FF" p-id="5026"></path><path d="M705.92 928.64H320c-35.2 0-64-28.8-64-64V630.4c0-35.2 28.8-64 64-64h385.92c35.2 0 64 28.8 64 64v234.88c0 35.2-28.8 63.36-64 63.36zM320 592c-21.12 0-38.4 17.28-38.4 38.4v234.88c0 21.12 17.28 38.4 38.4 38.4h385.92c21.12 0 38.4-17.28 38.4-38.4V630.4c0-21.12-17.28-38.4-38.4-38.4H320z" fill="#708DB7" p-id="5027"></path><path d="M515.2 163.2C418.56 163.2 339.2 242.56 339.2 338.56V518.4h352V338.56c0-96-79.36-175.36-176-175.36z" fill="#E8E6FF" p-id="5028"></path><path d="M704 531.2H326.4V338.56c0-103.68 84.48-188.16 188.8-188.16S704 234.88 704 338.56V531.2z m-352-25.6h326.4V338.56c0-89.6-72.96-162.56-163.2-162.56S352 248.96 352 338.56V505.6z" fill="#708DB7" p-id="5029"></path><path d="M456.32 518.4h112v60.8H456.32z" fill="#EEF6FF" p-id="5030"></path><path d="M581.76 592H443.52V505.6h137.6v86.4z m-112.64-25.6h86.4V531.2H469.12v35.2z" fill="#708DB7" p-id="5031"></path><path d="M714.88 431.36c-12.8 0-23.04-10.24-23.04-23.04v-38.4c0-12.8 10.24-23.04 23.04-23.04s23.04 10.24 23.04 23.04v38.4c0 12.8-10.24 23.04-23.04 23.04z" fill="#EEF6FF" p-id="5032"></path><path d="M714.88 444.16c-19.84 0-35.84-16-35.84-35.84v-38.4c0-19.84 16-35.84 35.84-35.84s35.84 16 35.84 35.84v38.4c0 19.84-16 35.84-35.84 35.84z m0-83.84c-5.76 0-10.24 4.48-10.24 10.24v38.4c0 5.76 4.48 10.24 10.24 10.24s10.24-4.48 10.24-10.24v-38.4c0-5.76-4.48-10.24-10.24-10.24z" fill="#708DB7" p-id="5033"></path><path d="M312.32 421.12c-12.8 0-23.04-10.24-23.04-23.04v-38.4c0-12.8 10.24-23.04 23.04-23.04s23.04 10.24 23.04 23.04v38.4c0 12.8-10.88 23.04-23.04 23.04z" fill="#EEF6FF" p-id="5034"></path><path d="M312.32 433.92c-19.84 0-35.84-16-35.84-35.84v-38.4c0-19.84 16-35.84 35.84-35.84s35.84 16 35.84 35.84v38.4c0 19.84-16.64 35.84-35.84 35.84z m0-83.84c-5.76 0-10.24 4.48-10.24 10.24v38.4c0 5.76 4.48 10.24 10.24 10.24s10.24-4.48 10.24-10.24v-38.4c0-5.76-5.12-10.24-10.24-10.24z" fill="#708DB7" p-id="5035"></path><path d="M795.52 763.52h-25.6c-7.04 0-12.8-5.76-12.8-12.8v-46.08c0-14.08-2.56-25.6 11.52-25.6h26.88c14.08 0 25.6 11.52 25.6 25.6v33.28c0 14.08-11.52 25.6-25.6 25.6z" fill="#EEF6FF" p-id="5036"></path><path d="M795.52 776.32h-25.6c-14.08 0-25.6-11.52-25.6-25.6v-46.08-5.12c0-8.96-0.64-19.2 6.4-26.24 4.48-4.48 10.24-6.4 17.92-6.4h26.88c21.12 0 38.4 17.28 38.4 38.4v33.28c0 20.48-17.28 37.76-38.4 37.76z m-26.24-84.48v58.88h25.6c7.04 0 12.8-5.76 12.8-12.8v-33.28c0-7.04-5.76-12.8-12.8-12.8h-25.6z" fill="#708DB7" p-id="5037"></path><path d="M816.64 734.08l-0.64-25.6v12.8-12.8c5.12 0 48-3.2 48-58.24V454.4h25.6v196.48c0 81.28-72.32 83.2-72.96 83.2z" fill="#708DB7" p-id="5038"></path><path d="M228.48 763.52h25.6c7.04 0 12.8-5.76 12.8-12.8v-58.88c0-7.04-5.76-12.8-12.8-12.8h-25.6c-14.08 0-25.6 11.52-25.6 25.6v33.28c0 14.08 11.52 25.6 25.6 25.6z" fill="#EEF6FF" p-id="5039"></path><path d="M254.08 776.32h-25.6c-21.12 0-38.4-17.28-38.4-38.4v-33.28c0-21.12 17.28-38.4 38.4-38.4h25.6c14.08 0 25.6 11.52 25.6 25.6v58.88c0 14.08-11.52 25.6-25.6 25.6z m-25.6-84.48c-7.04 0-12.8 5.76-12.8 12.8v33.28c0 7.04 5.76 12.8 12.8 12.8h25.6v-58.88h-25.6zM519.04 140.16c-23.68 0-43.52-19.2-43.52-43.52s19.2-43.52 43.52-43.52 43.52 19.2 43.52 43.52-19.84 43.52-43.52 43.52z m0-61.44c-9.6 0-17.92 8.32-17.92 17.92s8.32 17.92 17.92 17.92 17.92-8.32 17.92-17.92-8.32-17.92-17.92-17.92z" fill="#708DB7" p-id="5040"></path><path d="M505.6 134.4h25.6v32h-25.6z" fill="#708DB7" p-id="5041"></path><path d="M512.64 305.92m-69.12 0a69.12 69.12 0 1 0 138.24 0 69.12 69.12 0 1 0-138.24 0Z" fill="#FFF27D" p-id="5042"></path><path d="M512.64 387.84c-44.8 0-81.92-36.48-81.92-81.92S467.2 224 512.64 224s81.92 36.48 81.92 81.92-37.12 81.92-81.92 81.92z m0-138.24c-30.72 0-56.32 24.96-56.32 56.32s24.96 56.32 56.32 56.32 56.32-24.96 56.32-56.32-25.6-56.32-56.32-56.32z" fill="#708DB7" p-id="5043"></path><path d="M604.16 433.28m-10.24 0a10.24 10.24 0 1 0 20.48 0 10.24 10.24 0 1 0-20.48 0Z" fill="#708DB7" p-id="5044"></path><path d="M422.4 659.2H339.2c-7.04 0-12.8-5.76-12.8-12.8s5.76-12.8 12.8-12.8h83.2c7.04 0 12.8 5.76 12.8 12.8s-5.76 12.8-12.8 12.8z" fill="#708DB7" p-id="5045"></path><path d="M512.64 305.92m-16 0a16 16 0 1 0 32 0 16 16 0 1 0-32 0Z" fill="#708DB7" p-id="5046"></path><path d="M876.8 473.6c-27.52 0-51.2-21.76-51.2-46.72 0-7.04 5.76-12.8 12.8-12.8s12.8 5.76 12.8 12.8c0 10.88 12.16 21.12 25.6 21.12s25.6-10.24 25.6-21.12c0-7.04 5.76-12.8 12.8-12.8s12.8 5.76 12.8 12.8c0 24.96-23.68 46.72-51.2 46.72z" fill="#708DB7" p-id="5047"></path><path d="M194.56 734.08c-0.64 0-72.96-2.56-72.96-83.84V454.4h25.6v196.48c0 55.04 42.88 57.6 48 58.24l-0.64 24.96z" fill="#708DB7" p-id="5048"></path><path d="M131.2 473.6c-27.52 0-51.2-21.76-51.2-46.72 0-7.04 5.76-12.8 12.8-12.8s12.8 5.76 12.8 12.8c0 10.88 12.16 21.12 25.6 21.12s25.6-10.24 25.6-21.12c0-7.04 5.76-12.8 12.8-12.8s12.8 5.76 12.8 12.8c0 24.96-23.04 46.72-51.2 46.72z" fill="#708DB7" p-id="5049"></path><path d="M583.04 837.12m-23.68 0a23.68 23.68 0 1 0 47.36 0 23.68 23.68 0 1 0-47.36 0Z" fill="#FFF27D" p-id="5050"></path><path d="M583.04 873.6c-19.84 0-36.48-16-36.48-36.48s16-36.48 36.48-36.48 36.48 16 36.48 36.48-16.64 36.48-36.48 36.48z m0-46.72c-5.76 0-10.88 4.48-10.88 10.88s4.48 10.88 10.88 10.88 10.88-4.48 10.88-10.88-5.12-10.88-10.88-10.88z" fill="#708DB7" p-id="5051"></path><path d="M672.64 837.12m-23.68 0a23.68 23.68 0 1 0 47.36 0 23.68 23.68 0 1 0-47.36 0Z" fill="#FF9797" p-id="5052"></path><path d="M672.64 873.6c-19.84 0-36.48-16-36.48-36.48s16-36.48 36.48-36.48 36.48 16 36.48 36.48-16.64 36.48-36.48 36.48z m0-46.72c-5.76 0-10.88 4.48-10.88 10.88s4.48 10.88 10.88 10.88 10.88-4.48 10.88-10.88-5.12-10.88-10.88-10.88z" fill="#708DB7" p-id="5053"></path></svg>`
  const appEl = document.querySelector(id)
  const div = document.createElement('div')
  div.innerHTML = svgStr
  if (appEl) {
    appEl.appendChild(div)
  }
}

function addThemeColorCssVars() {
  const key = '__THEME_COLOR__'
  const defaultColor = '#316c72'
  const themeColor = window.localStorage.getItem(key) || defaultColor
  const cssVars = `--primary-color: ${themeColor}`
  document.documentElement.style.cssText = cssVars
}

addThemeColorCssVars()

initSvgLogo('#loadingLogo')
