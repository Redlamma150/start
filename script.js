let h1=document.querySelector('h1');
h1.addEventListener('click', function(e) {
    e.preventDefault();
    alert('This is a click event on the h1 heading');
});

p{
    font-size: 20px;
    text-align: center;
    background-color: lightgray;
    color: pink;
}