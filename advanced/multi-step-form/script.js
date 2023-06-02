const PlanNames = {
  arcade: "arcade",
  advanced: "advanced",
  pro: "pro",
};

const BillingPeriod = {
  Monthly: "Monthly",
  Yearly: "Yearly",
};

const MonthlyPrice = {
  Arcade: 9,
  Advanced: 12,
  Pro: 15,
};

const YearlyPrice = {
  Arcade: 90,
  Advanced: 120,
  Pro: 150,
};

const StepOne = {
  name: "",
  email: "",
  phoneNumber: "",
};

//Default Plans are set to Monthly
const Plans = {
  monthly: {
    arcade: {
      name: PlanNames.arcade,
      price: MonthlyPrice.Arcade,
      billingPeriod: BillingPeriod.Monthly,
    },
    advanced: {
      name: PlanNames.advanced,
      price: MonthlyPrice.Advanced,
      billingPeriod: BillingPeriod.Monthly,
    },
    pro: {
      name: PlanNames.pro,
      price: MonthlyPrice.Pro,
      billingPeriod: BillingPeriod.Monthly,
    },
  },
  yearly: {
    arcade: {
      name: PlanNames.arcade,
      price: YearlyPrice.Arcade,
      billingPeriod: BillingPeriod.Yearly,
    },
    advanced: {
      name: PlanNames.advanced,
      price: YearlyPrice.Advanced,
      billingPeriod: BillingPeriod.Yearly,
    },
    pro: {
      name: PlanNames.pro,
      price: YearlyPrice.Pro,
      billingPeriod: BillingPeriod.Yearly,
    },
  },
};

class Addon {
  constructor(name, description, price, billingPeriod) {
    this.name = name;
    this.description = description;
    this.price = price;
    this.billingPeriod = billingPeriod;
  }
}
const addOnNames = ["Online service", "Larger storage", "Customizable profile"];
const addOnDescriptions = [
  "Access to multiplayer games",
  "Extra 1TB of cloud save",
  "Custom theme on your profile",
];

const monthlyAddOns = [
  new Addon(addOnNames[0], addOnDescriptions[0], 1, BillingPeriod.Monthly),
  new Addon(addOnNames[1], addOnDescriptions[1], 2, BillingPeriod.Monthly),
  new Addon(addOnNames[2], addOnDescriptions[2], 2, BillingPeriod.Monthly),
];

const yearlyAddOns = [
  new Addon(addOnNames[0], addOnDescriptions[0], 10, BillingPeriod.Yearly),
  new Addon(addOnNames[1], addOnDescriptions[1], 20, BillingPeriod.Yearly),
  new Addon(addOnNames[2], addOnDescriptions[2], 20, BillingPeriod.Yearly),
];

const StepTwo = {
  plan: Plans.monthly.arcade,
  billingPeriod: BillingPeriod.Monthly,
};

const StepThree = {
  addOns: {
    onlineService: {},
    largerStorage: {},
    customizableProfile: {},
  },
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

let currentStep = 1;
const flowManager = new FlowManager(currentStep, [
  currentStep,
  StepOne,
  StepTwo,
  StepThree,
  StepFour,
]);

/*
console.log("Logging out all the steps");
console.log("Step One: ", StepOne);
console.log("Step Two: ", StepTwo);
console.log("Step Three: ", StepThree);
console.log("Step Four: ", StepFour);
console.log("Flow Manager: ", flowManager);
console.log("Flow Manager (Steps): ", flowManager.steps);
console.log("Flow Manager (Current Step): ", flowManager.getCurrentStep());
*/

// Side Bar
const sideBarSteps = document.querySelectorAll(".number-circle");

//Step Pages
const stepOnePage = document.querySelector(".step-1");
const stepTwoPage = document.querySelector(".step-2");
const stepThreePage = document.querySelector(".step-3");
const stepFourPage = document.querySelector(".step-4");
const finalPage = document.querySelector(".step-5");

const stepPages = [
  stepOnePage,
  stepTwoPage,
  stepThreePage,
  stepFourPage,
  finalPage,
];

// Fetch user details from page
const nextBtnStepOne = document.querySelector(
  "div.step-1 div.footer button.next"
);

const nextBtnStepTwo = document.querySelector(
  "div.step-2 div.footer button.next"
);

const prevBtnStepTwo = document.querySelector(
  "div.step-2 div.footer button.back"
);

const nextBtnStepThree = document.querySelector(
  "div.step-3 div.footer button.next"
);

const prevBtnStepThree = document.querySelector(
  "div.step-3 div.footer button.back"
);

const confirmBtnStepFour = document.querySelector(
  "div.step-4 div.footer button.confirm"
);

const prevBtnStepFour = document.querySelector(
  "div.step-4 div.footer button.back"
);

// Step 1 Components
const userNameInput = document.querySelector(
  "div.step-1 div.user-input input[name='name']"
);
const userEmailInput = document.querySelector(
  "div.step-1 div.user-input input[name='email']"
);
const userPhoneNumberInput = document.querySelector(
  "div.step-1 div.user-input input[name='phone-number']"
);
const warningLabel = document.querySelectorAll(
  "div.step-1 div.user-input p.warning"
);

nextBtnStepOne.addEventListener("click", () => {
  console.log("Next button on step 1 clicked");
  console.log("Warning Labels:", warningLabel);
  let validationErrors = 0;

  if (userNameInput.value) {
    StepOne.name = userNameInput.value;
    userNameInput.classList.remove("warning-bg");
    warningLabel[0].classList.add("hidden");
  } else {
    userNameInput.classList.add("warning-bg");
    warningLabel[0].classList.remove("hidden");
    validationErrors++;
  }

  if (userEmailInput.value) {
    StepOne.email = userEmailInput.value;
    userEmailInput.classList.remove("warning-bg");
    warningLabel[1].classList.add("hidden");
  } else {
    userEmailInput.classList.add("warning-bg");
    warningLabel[1].classList.remove("hidden");
    validationErrors++;
  }

  if (userPhoneNumberInput.value) {
    StepOne.phoneNumber = userPhoneNumberInput.value;
    userPhoneNumberInput.classList.remove("warning-bg");
    warningLabel[2].classList.add("hidden");
  } else {
    userPhoneNumberInput.classList.add("warning-bg");
    warningLabel[2].classList.remove("hidden");
    validationErrors++;
  }

  console.log("Validation: ", validationErrors);

  if (validationErrors == 0) {
    moveToNextStep(flowManager.currentStep);
  }
});

nextBtnStepTwo.addEventListener("click", () => {
  console.log("Next button on step 2 clicked");
  // write logic here
  const prices = document.querySelectorAll(
    ".step-3 .body .add-ons .add-on .price"
  );
  if (StepTwo.billingPeriod == BillingPeriod.Monthly) {
    StepThree.billingPeriod = BillingPeriod.Monthly;
    prices[0].innerHTML = "+$1/mo";
    for (let i = 1; i < prices.length; i++) {
      prices[i].innerHTML = "+$2/mo";
    }
  }

  if (StepTwo.billingPeriod == BillingPeriod.Yearly) {
    StepThree.billingPeriod = BillingPeriod.Yearly;
    prices[0].innerHTML = "+$10/yr";
    for (let i = 1; i < prices.length; i++) {
      prices[i].innerHTML = "+$20/yr";
    }
  }
  moveToNextStep(flowManager.currentStep);
});

prevBtnStepTwo.addEventListener("click", () => {
  console.log("Previous button on step 2 clicked");
  moveToPreviousStep(flowManager.currentStep);
});

nextBtnStepThree.addEventListener("click", () => {
  console.log("Next button on step 3 clicked");
  // write logic here
  moveToNextStep(flowManager.currentStep);
});

prevBtnStepThree.addEventListener("click", () => {
  console.log("Previous button on step 3 clicked");
  moveToPreviousStep(flowManager.currentStep);
});

confirmBtnStepFour.addEventListener("click", () => {
  console.log("Confirm button on step 4 clicked");
  // write logic here
  moveToNextStep(flowManager.currentStep);
});

prevBtnStepFour.addEventListener("click", () => {
  console.log("Previous button on step 4 clicked");
  // write logic here
  moveToPreviousStep(flowManager.currentStep);
});

function moveToNextStep(currentStep) {
  const indexCurrentStep = currentStep - 1;

  if (indexCurrentStep === 3) {
    stepPages[indexCurrentStep].classList.add("hidden");
    stepPages[indexCurrentStep + 1].classList.remove("hidden");
  } else {
    sideBarSteps[indexCurrentStep].classList.remove("current-step");
    sideBarSteps[indexCurrentStep + 1].classList.add("current-step");

    stepPages[indexCurrentStep].classList.add("hidden");
    stepPages[indexCurrentStep + 1].classList.remove("hidden");

    flowManager.currentStep = currentStep + 1;
    console.log("Flow manager (current-step): ", flowManager.currentStep);
  }
}

function moveToPreviousStep(currentStep) {
  const indexCurrentStep = currentStep - 1;

  sideBarSteps[indexCurrentStep].classList.remove("current-step");
  sideBarSteps[indexCurrentStep - 1].classList.add("current-step");

  stepPages[indexCurrentStep].classList.add("hidden");
  stepPages[indexCurrentStep - 1].classList.remove("hidden");

  flowManager.currentStep = currentStep - 1;
  console.log("Flow manager (current-step): ", flowManager.currentStep);
}

function addValidationChecker(validateInput) {
  validateInput.addEventListener("click", () => {});
}

// Step 2 Logic

// handle subscription selection
const subPlans = document.querySelectorAll("div.plan");

for (let i = 0; i < subPlans.length; i++) {
  subPlans[i].addEventListener("click", () => handleSubcriptionPlanClick(i));
}

const handleSubcriptionPlanClick = (index) => {
  removePrevSelection();
  selectPlan(index);
  subPlans[index].classList.add("selected");
  console.log("StepTwo Object: ", StepTwo);
};

const removePrevSelection = () => {
  for (let i = 0; i < subPlans.length; i++) {
    if (subPlans[i].classList.contains("selected")) {
      subPlans[i].classList.remove("selected");
      return;
    }
  }
};

const selectPlan = (index) => {
  switch (index) {
    case 0:
      if (StepTwo.billingPeriod == BillingPeriod.Monthly) {
        StepTwo.plan = Plans.monthly.arcade;
      } else {
        StepTwo.plan = Plans.yearly.arcade;
      }

      break;

    case 1:
      if (StepTwo.billingPeriod == BillingPeriod.Monthly) {
        StepTwo.plan = Plans.monthly.advanced;
      } else {
        StepTwo.plan = Plans.yearly.advanced;
      }

      break;

    case 2:
      if (StepTwo.billingPeriod == BillingPeriod.Monthly) {
        StepTwo.plan = Plans.monthly.pro;
      } else {
        StepTwo.plan = Plans.yearly.pro;
      }

      break;

    default:
      console.log("No Plan was selected");
  }
};

console.log("subPlans: ", subPlans);

// handle toggling
const subLabels = document.querySelectorAll(
  "div.step-2 div.body div.toggle-plan div.center-content span"
);
console.log("toggleButton: ", subLabels);

const toggleButton = document.querySelector(
  "div.step-2 div.body div.toggle-plan div.center-content div.toggle-btn"
);

toggleButton.addEventListener("click", () => {
  selectBillingPeriod();

  // default toggle is on monthly billing
  if (toggleButton.classList.contains("flick-toggle")) {
    monthlySubscription();
  } else {
    yearlySubscription();
  }

  console.log("StepTwo Object: ", StepTwo);
});

const prices = document.querySelectorAll(".plan .content .price");
const yearlyPromo = document.querySelectorAll(".plan .content .yearly-promo");

function monthlySubscription() {
  removePromoLabels();
  changePricesToMonthly();
  toggleButton.classList.remove("flick-toggle");
  subLabels[1].classList.add("light-font");
  subLabels[0].classList.remove("light-font");

  resetAddOns();
}

function yearlySubscription() {
  addPromoLabels();
  changePricesToYearly();
  toggleButton.classList.add("flick-toggle");
  if (!subLabels[0].classList.contains("light-font")) {
    subLabels[0].classList.add("light-font");
  }
  subLabels[1].classList.remove("light-font");

  resetAddOns();
}

function removePromoLabels() {
  for (let i = 0; i < yearlyPromo.length; i++) {
    yearlyPromo[i].classList.add("hidden");
  }
}

function addPromoLabels() {
  for (let i = 0; i < yearlyPromo.length; i++) {
    yearlyPromo[i].classList.remove("hidden");
  }
}

function changePricesToMonthly() {
  for (let i = 0; i < prices.length; i++) {
    switch (i) {
      case 0:
        StepTwo.plan = Plans.monthly.arcade;
        prices[0].innerHTML = "$9/mo";
        break;
      case 1:
        StepTwo.plan = Plans.monthly.advanced;
        prices[1].innerHTML = "$12/mo";
        break;
      case 2:
        StepTwo.plan = Plans.monthly.pro;
        prices[2].innerHTML = "$15/mo";
        break;
      default:
        console.log("Out of bound - should not get here");
    }
  }
}

function changePricesToYearly() {
  for (let i = 0; i < prices.length; i++) {
    switch (i) {
      case 0:
        StepTwo.plan = Plans.yearly.arcade;
        prices[0].innerHTML = "$90/yr";
        break;
      case 1:
        StepTwo.plan = Plans.yearly.advanced;
        prices[1].innerHTML = "$120/yr";
        break;
      case 2:
        StepTwo.plan = Plans.yearly.pro;
        prices[2].innerHTML = "$150/yr";
        break;
      default:
        console.log("Out of bound - should not get here");
    }
  }
}

// Note default billing period is monthly
const selectBillingPeriod = () => {
  if (StepTwo.billingPeriod == BillingPeriod.Monthly) {
    StepTwo.billingPeriod = BillingPeriod.Yearly;
  } else {
    StepTwo.billingPeriod = BillingPeriod.Monthly;
  }
};

// step 3 logic
const addOns = document.querySelectorAll(".step-3 .body .add-ons .add-on");
console.log("addOns: ", addOns);

for (let i = 0; i < addOns.length; i++) {
  addOns[i].addEventListener("click", () => handleAddOnClick(i));
}

const handleAddOnClick = (index) => {
  if (addOns[index].classList.contains("selected")) {
    addOns[index].classList.remove("selected");
    addOns[index].children[0].children[0].checked = false;
    removeAddOns(index);
    console.log("StepThree: ", StepThree);
  } else {
    addOns[index].classList.add("selected");
    addOns[index].children[0].children[0].checked = true;
    addAddOns(index);
    console.log("StepThree: ", StepThree);
  }
};

function addAddOns(index) {
  switch (index) {
    case 0:
      if (StepTwo.billingPeriod == BillingPeriod.Monthly) {
        StepThree.addOns.onlineService = monthlyAddOns[0];
      } else {
        StepThree.addOns.onlineService = yearlyAddOns[0];
      }
      break;

    case 1:
      if (StepTwo.billingPeriod == BillingPeriod.Monthly) {
        StepThree.addOns.largerStorage = monthlyAddOns[1];
      } else {
        StepThree.addOns.largerStorage = yearlyAddOns[1];
      }
      break;

    case 2:
      if (StepTwo.billingPeriod == BillingPeriod.Monthly) {
        StepThree.addOns.customizableProfile = monthlyAddOns[2];
      } else {
        StepThree.addOns.customizableProfile = yearlyAddOns[2];
      }
      break;

    default:
      console.log("Out of Bounds: Should not get here");
  }
}

function removeAddOns(index) {
  switch (index) {
    case 0:
      StepThree.addOns.onlineService = {};
      break;

    case 1:
      StepThree.addOns.largerStorage = {};
      break;

    case 2:
      StepThree.addOns.customizableProfile = {};
      break;

    default:
      console.log("Out of Bounds: Should not get here");
  }
}

function resetAddOns() {
  for (let i = 0; i < addOns.length; i++) {
    if (addOns[i].classList.contains("selected")) {
      addOns[i].classList.remove("selected");
      addOns[i].children[0].children[0].checked = false;
    }
    removeAddOns(i);
  }
}
