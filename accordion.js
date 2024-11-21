const accordionBtns = document.querySelectorAll(".accordion");

accordionBtns.forEach((accordion, index) => {
  accordion.onclick = function () {
    this.classList.toggle("is-open");

    let content = this.nextElementSibling;
    console.log(content);

    if (content.style.maxHeight) {
      // if accordion is open, close it
      content.style.maxHeight = null;
      this.setAttribute("aria-expanded", "false");
    } else {
      // if accordion is closed, open it
      content.style.maxHeight = content.scrollHeight + "px";
      console.log(content.style.maxHeight);
      this.setAttribute("aria-expanded", "true");
    }
  };

  // Add keyboard accessibility for enter space and keyup/down
  accordion.onkeydown = function (e) {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault(); 
      this.onclick();
    } else if (e.key === "ArrowDown") {
      // Move focus to the next accordion button
      e.preventDefault();
      const next = accordionBtns[index + 1];
      if (next) next.focus();
    } else if (e.key === "ArrowUp") {
      // Move focus to the previous accordion button
      e.preventDefault();
      const prev = accordionBtns[index - 1];
      if (prev) prev.focus();
    }
  };
});

/* 1. What is the keyboard interaction missing 
-Opening/closing functionality with Enter or Space.
-Navigation functionality with up or down arrow keys.

-Ability to see which accordian you were tabbed onto.

2. What is the ARIA missing
-Aria-Expanded
-Aria-Controls
-Role="button"
-Role="region"
*/
