export function stickyHeader(){
    let header = document.querySelector('.header');

    document.addEventListener('scroll', () => {
        if (window.scrollY >= 109) {
            header.style.position = "fixed";
        } else {
            header.style.position = "absolute";
        }
    })
}