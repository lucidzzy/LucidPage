//Direcionamento ao insta
const url = 'https://www.instagram.com/lucidzzy/'
const insta = document.querySelector('#insta')

function openInNewTab(url) {
    const win = window.open(url, '_blank')
    win.focus()
}
insta.addEventListener('click', () => {
    openInNewTab(url)
})
