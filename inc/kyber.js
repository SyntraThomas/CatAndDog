let language = "NL";

const menu = document.querySelector("#mainmenu");
const languageChoose = document.querySelector("#language");
const knoppen = document.querySelector("#knoppen");

languageChoose.addEventListener("change", function(e)
{
    e.preventDefault();
    language = this.value;
    fillWebsite();
});

function fillWebsite()
{
    menu.innerHTML = "";
    knoppen.innerHTML = "";

    LABELS[language]["MENU"].forEach(element => {
        let linkElement = document.createElement("a");
        linkElement.setAttribute("href", element.LINK);
        linkElement.innerHTML = element.LABEL;
        linkElement.setAttribute("class", element.CLASS);
        menu.appendChild(linkElement);
    });

    createButtons();
}

function createButtons()
{
    let knop = document.createElement("button");
    knop.innerHTML = LABELS[language]["ADDEXP"];
    knop.addEventListener("click", addExpense);
    knoppen.appendChild(knop);

    knop = document.createElement("button");
    knop.innerHTML = LABELS[language]["ADDINC"];
    knop.addEventListener("click", addIncome);
    knoppen.appendChild(knop);
}

function addExpense()
{
    alert("Adding an expense");
}

function addIncome()
{
    alert("Adding an income");
}

fillWebsite();