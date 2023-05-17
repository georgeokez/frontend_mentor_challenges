import FlowManager from "./FlowManager";
import StepBuilder from "./StepBuilder";

// Initialise app
// creating each step using the StepFactory
//manage each state using the FlowManager

//FlowManager = Set<Number,Steps>;

/*
const StepOne = {
  name: "",
  email: "",
  phoneNumber: "",
};

const Plans = {
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

const BillingPeriod = ["Monthly", "Yearly"];

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

const StepTwo = {
  plan: Plans.arcade,
  billingPeriod: BillingPeriod[0],
};

const StepThree = {
  addOns: [],
  billingPeriod: StepTwo.billingPeriod,
};

const StepFour = {
  plan: StepTwo.plan,
  addOns: StepThree.addOns,
  total: {
    billingPeriod: StepTwo.billingPeriod,
    price: 0,
  },
};

class FlowManager {
  constructor(currentStep, steps) {
    (this.currentStep = currentStep), (this.steps = steps);
  }

  getCurrentStep() {
    return this.steps[this.currentStep];
  }
}
*/

const stepBuilder = new StepBuilder();

const [StepOne, StepTwo, StepThree, StepFour] = stepBuilder.build();

let currentStep = 1;
const flowManager = new FlowManager(currentStep, [
  currentStep,
  StepOne,
  StepTwo,
  StepThree,
  StepFour,
]);

console.log("Logging out all the steps");
console.log("Step One: ", StepOne);
console.log("Step Two: ", StepTwo);
console.log("Step Three: ", StepThree);
console.log("Step Four: ", StepFour);
console.log("Flow Manager: ", flowManager);
console.log("Flow Manager (Steps): ", flowManager.steps);
console.log("Flow Manager (Current Step): ", flowManager.getCurrentStep());
