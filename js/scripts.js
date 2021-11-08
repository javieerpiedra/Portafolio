function download(fileUrl, fileName) {
    var a = document.createElement("a");
    a.href = fileUrl;
    a.setAttribute("download", fileName);
    a.click();
}




const skillObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.remove('hidden-item');
            entry.target.classList.add('animate__fadeInRight');
        }
    });
});
skillObserver.observe(document.querySelector('.skills'));


const btnCVobserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate__swing');
        }
    });
});
btnCVobserver.observe(document.getElementById("btnCv"));