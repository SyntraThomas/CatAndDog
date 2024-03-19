let currentPage = 0;
const navigation = document.querySelector("#main-nav");

const pages = [
    { id: 0,
        link: "index.html",
        label: 'Home'
    }
    , 
    {
        id: 1,
        link: "story.html",
        label: 'Het verhaal'
    }
    ,
    {
        id: 2,
        link: "background.html",
        label: 'Over hen'
    }

];
const linkClasses = ['py-2','px-4','mx-2','border-b-4','border-pink-600','text-white','uppercase','font-bold','hover:bg-pink-600','hover:border-white','transition','ease-in-out','duration-300'];

function generateNav()
{
    navigation.innerHTML = '';
    for (let index = 0; index < pages.length; index++) {
        const element = pages[index];

        const link = document.createElement("a");
        link.setAttribute("href", element.link);
        link.setAttribute("class", linkClasses.join(" "));  
        link.innerHTML = element.label;

        if (currentPage == element.id)
        {
            link.classList.add('bg-pink-600', 'border-white');
        }

        link.addEventListener("click", function(event)
        {
            event.preventDefault();
            currentPage = element.id;
            generateNav();
            generateContent();
        });

        navigation.appendChild(link);
    }
}

function generateContent()
{
    document.querySelector('main').innerHTML = '';
    document.querySelector('main').innerHTML = content[currentPage];
}