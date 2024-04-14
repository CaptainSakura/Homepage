{
  const welcome = () => {
    console.log("Welcome on my page! ;)");
  };
  const toggleHeader = () => {
    const header = document.querySelector(".js-headerPentatonix");

    const defaultText = "PTX";
    const alternativeText = "PENTATONIX";

    header.innerText =
      header.innerText === defaultText ? alternativeText : defaultText;
  };
  const init = () => {
    const changeHeaderButton = document.querySelector(".js-changeHeaderButton");
    changeHeaderButton.addEventListener("click", toggleHeader);
    welcome();
  };

  init();
}
