const drawerButton = document.querySelector(".drawer-button");
drawerButton.addEventListener("click", () => {
  const isOpen =
    drawerButton.getAttribute("aria-expanded") === "true" ? false : true;
  drawerButton.setAttribute("aria-expanded", isOpen);

  const menuPanel = document.getElementById(
    drawerButton.getAttribute("aria-controls")
  );
  menuPanel.setAttribute("aria-hidden", !isOpen);
});
