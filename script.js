{
  const welcome = () => {
    console.log("Welcome on my page! ;)");
  };

  const toggleHeader = () => {
    const header = document.querySelector(".js-headerPrimary");

    const defaultText = "PTX";
    const alternativeText = "PENTATONIX";

    header.innerText =
      header.innerText === defaultText ? alternativeText : defaultText;
  };

  const init = () => {
    const changeHeaderButton = document.querySelector(".js-section__button");
    changeHeaderButton.addEventListener("click", toggleHeader);
    welcome();
  };

  init();
}
