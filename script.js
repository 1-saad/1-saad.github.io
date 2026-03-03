const faders = document.querySelectorAll('.fade')

const options = {
threshold:0.3
}

const observer = new IntersectionObserver(function(entries,observer){

entries.forEach(entry=>{
if(!entry.isIntersecting) return

entry.target.classList.add('show')

observer.unobserve(entry.target)

})

},options)

faders.forEach(fader=>{
observer.observe(fader)
})
