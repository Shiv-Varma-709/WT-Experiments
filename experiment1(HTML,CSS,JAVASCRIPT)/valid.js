const regform=document.querySelector('#form');
const un=regform.querySelector('#nm');
regform.addEventListener('submit',function(event){
    event.preventDefault();
    const uvalue=un.value.trim();
    if(uvalue===' '){
        alert('enter valid name');
        return false;
    }
    regform.submit();

});