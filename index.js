document.body.ondragstart = () => {
  return false;
};
const hoverAnimation = (items) => {
  items.forEach((item) =>
    item.addEventListener("mouseover", () => {
      items.forEach(
        (element) => element !== item && element.classList.add("item--inactive")
      );
    })
  );

  items.forEach((item) =>
    item.addEventListener("mouseout", () => {
      items.forEach(
        (element) =>
          element !== item && element.classList.remove("item--inactive")
      );
    })
  );
};

const process_items = [...document.getElementsByClassName("process__item")];
hoverAnimation(process_items);

process_items.forEach((item) =>
  item.addEventListener("click", () => {
    process_items.forEach((element) =>
      element.classList.remove("process__item--active")
    );
    item.classList.add("process__item--active");
  })
);

const offer_items = [...document.getElementsByClassName("options__item")];
hoverAnimation(offer_items);

offer_items.forEach((item) =>
  item.addEventListener("click", () => {
    offer_items.forEach((element) =>
      element.classList.remove("options__item--active")
    );
    item.classList.add("options__item--active");
  })
);

const social_btns = [...document.getElementsByClassName("socails__btn")];
hoverAnimation(social_btns);
