(function () {
  window.toggleBlock = function (navElement, navLink, collapsedBlock, activeClass, activeNavClass, inactiveNavClass, activeBlockClass, buttonClose, buttonOpenClass) {
    navLink.addEventListener('click', function (event) {
      event.preventDefault();

      if (!navLink.classList.contains(activeNavClass)) {
        navLink.classList.add(activeNavClass);
      }

      if (navLink.classList.contains(activeNavClass)) {
        navElement.classList.add(activeClass);
        collapsedBlock.classList.add(activeBlockClass);
        buttonClose.classList.add(buttonOpenClass);
      }
    });

    buttonClose.addEventListener('click', function () {
      navElement.classList.remove(activeClass);
      navLink.classList.remove(activeNavClass);
      navLink.classList.add(inactiveNavClass);
      collapsedBlock.classList.remove(activeBlockClass);
      buttonClose.classList.remove(buttonOpenClass);
    });
  };
})();
