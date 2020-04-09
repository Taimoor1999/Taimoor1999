var fetchMain = document.querySelector('.main');
var fetchNext = document.querySelector('.next');
var fetchPrevious = document.querySelector('.Previous');


var index = 0;    
var ArrayPictures  = [
    "main.jpeg","main1.jpeg","main2.jpeg","music.jpeg"
]

fetchMain.style.backgroundImage = `url(${ArrayPictures[index]})`;

fetchNext.addEventListener('click',function(extraInfo)
{

if (index < ArrayPictures.length-1 )
{
    index++;
}

else{
    index = 0;

}
fetchMain.style.backgroundImage = `url(${ArrayPictures[index]})`;

});

fetchPrevious.addEventListener('click', function(){
if (index>0)
{
    --index;

}
else{
    index=  ArrayPictures.length-1;

}
fetchMain.style.backgroundImage = `url(${ArrayPictures[index]})`;

console.log('prev', index);
});

