const scrollHeader = () =>{
    const header = document.getElementById('header')
    this.scrollY >= 100 ? header.classList.add('bg-header') 
                       : header.classList.remove('bg-header')
}
window.addEventListener('scroll', scrollHeader)


const scrollTransform = () =>{
    const transform = document.getElementById('header')
    this.scrollY >= 140 ? transform.classList.add('transform') 
                       : transform.classList.remove('transform')
}
window.addEventListener('scroll', scrollTransform)
