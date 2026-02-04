import { Coffee } from "../models/Coffee";

export const coffeeList: Coffee[] = [
  new Coffee(
    "/public/assets/coffeeImages/caramelLight.jpeg",
    "Caramel Light",
    "Ljustrostat kaffe med kolasmak",
    199,
    true
  ),
  new Coffee(
    "/public/assets/coffeeImages/chocolate.jpeg",
    "Chocolate",
    "Kraftfullt kaffe med chokladsmak",
    149,
    true
  ),
  new Coffee(
    "/public/assets/coffeeImages/vanilla.jpeg",
    "Vanilla",
    "Ljusrostat kaffe med len vaniljton",
    149,
    true
  ),
  new Coffee(
    "/public/assets/coffeeImages/cinnamon.jpeg",
    "Cinnamon",
    "Kryddigt kaffe med toner av kanel",
    129,
    false
  ),
  new Coffee(
    "/public/assets/coffeeImages/darkRoast.jpeg",
    "Dark Roast",
    "Mörkrostat kaffe med intensiv smak",
    199,
    true
  ),
  new Coffee(
    "/public/assets/coffeeImages/caramelDark.jpeg",
    "Caramel Dark",
    "Mörkrostat kaffe med kolasmak",
    199,
    false
  ),
];
