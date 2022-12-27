let [btn, res] = ['btn', 'res'].map(id => document.getElementById(id));
let temp = null;
 
btn.addEventListener('click', e => {
    res.insertAdjacentHTML('beforeEnd', `<div class="sqr"></div>`);
});
 
res.addEventListener('click', e => {
    let t = e.target;
    if(!t.classList.contains('sqr')) return;
    if(t === temp) {
        t.style.backgroundColor = '';
        temp = null;
        return;
    }
    if(temp) {
        temp.before(t.cloneNode());
        t.replaceWith(temp);
    } else {
        t.style.backgroundColor = 'green';
        temp = t;
    }
});