import sprite from "../../assets/sprite.svg";

export const CategoryData = (item) => {
  const categoryData = [
    {
      icon: `${sprite}#users`,
      category: `${item.adults} adults`,
    },
    {
      icon: `${sprite}#trans`,
      category: `${item.transmission}`,
    },
    {
      icon: `${sprite}#fuel`,
      category: `${item.engine}`,
    },
    {
      icon: `${sprite}#kitchen`,
      category: `${item.details.kitchen > 0 ? `Kitchen` : null}`,
    },
    {
      icon: `${sprite}#beds`,
      category: `${item.details.beds} beds`,
    },
    {
      icon: `${sprite}#ac`,
      category: `${item.details.airConditioner > 0 ? `AC` : null}`,
    },
  ];

  return categoryData;
};
