let currentQuestion = 0;
let timer = 10;

const vraag = document.querySelector("#vraag");
const knoppen = document.querySelector("#knoppen");
const loader = document.querySelector(".loader");

function speelQuiz()
{
    vraag.innerHTML = "";
    knoppen.innerHTML = "";
    loader.style.display = "none";

    vraag.innerHTML = VRAGEN[currentQuestion]["VRAAG"];

    createButtons();
}

function createButtons()
{
    VRAGEN[currentQuestion]["ANTWOORD"].forEach(element => {
        let button = document.createElement("div");

        let choice = document.createElement("img");
        choice.setAttribute("src", element.IMAGE);
        button.appendChild(choice);

        let label = document.createElement("p");
        label.innerHTML = element.LABEL;
        button.appendChild(label);

        button.addEventListener("click", processAnswer);

        knoppen.appendChild(button);
    });
}

function processAnswer()
{
    currentQuestion += 1;
    if (currentQuestion >= VRAGEN.length)
    {
        vraag.innerHTML = "GEDAAN";
        knoppen.innerHTML = "";
        redirectToDetail();
    }
    else
    {
        vraag.innerHTML = "";
        knoppen.innerHTML = "";
        loader.style.display = "block";
        setTimeout(speelQuiz, (Math.random() * 1000));
    }
}

function redirectToDetail()
{
    if (timer <= 0)
    {
        window.location.href = "index.html";
    }
    else
    {
        timer -= 1;
        setInterval(redirectToDetail, 1000);
    }
}

speelQuiz();