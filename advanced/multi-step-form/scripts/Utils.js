export const Plans = {
  arcade: {
    name: "arcade",
    price: 9,
  },
  advanced: {
    name: "advanced",
    price: 12,
  },
  pro: {
    name: "Pro",
    price: 15,
  },
};

export const BillingPeriod = ["Monthly", "Yearly"];

class Addon {
  constructor(name, description, price, selected) {
    this.name = name;
    this.description = description;
    this.price = price;
    this.selected = selected;
  }
}

const onlineService = new Addon(
  "Online service",
  "Access to multiplayer games",
  1,
  false
);
const largerStorage = new Addon(
  "Larger storage",
  "Extra 1TB of cloud profile",
  2,
  false
);
const customizableProfile = new Addon(
  "Customizable Profile",
  "Custom theme on your profile",
  2,
  false
);

export const AddOns = {
  onlineService,
  largerStorage,
  customizableProfile,
};
