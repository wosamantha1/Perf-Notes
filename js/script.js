```javascript
document.addEventListener("DOMContentLoaded", () => {

  /* Mobile navigation */

  const menuButton = document.querySelector(".menu-btn");
  const navigation = document.querySelector(".nav-links");

  if (menuButton && navigation) {
    menuButton.addEventListener("click", () => {
      navigation.classList.toggle("open");
    });
  }


  /* Resource search */

  const search = document.querySelector("[data-search]");

  if (search) {

    search.addEventListener("input", () => {

      const query = search.value
        .toLowerCase()
        .trim();

      document.querySelectorAll(".resource").forEach(resource => {

        const text = resource.textContent.toLowerCase();

        resource.style.display =
          text.includes(query) ? "flex" : "none";

      });


      document.querySelectorAll(".group").forEach(group => {

        const visibleResources =
          [...group.querySelectorAll(".resource")]
          .some(resource => resource.style.display !== "none");

        group.style.display =
          visibleResources ? "block" : "none";

      });

    });

  }

});
```
