const result = document.getElementById('result');
const button = document.getElementById('button');

button.addEventListener('click', getRandomDog);

function getRandomDog() 
{
    fetch('https://dog.ceo/api/breeds/image/random')
        .then(res => res.json())
        .then
        (
            data =>
            {
                result.innerHTML = `<img src="${data.message}" />`
            }
        )

}