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

nextBtnStepOne.addEventListener("click", () => nextBtnStepOneHandleCall());

const nextBtnStepOneHandleCall = () => {
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
};

nextBtnStepTwo.addEventListener("click", () => nextBtnStepTwoHandleCall());

const nextBtnStepTwoHandleCall = () => {
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
};

prevBtnStepTwo.addEventListener("click", () => prevBtnStepTwoHandleCall());

const prevBtnStepTwoHandleCall = () => {
  moveToPreviousStep(flowManager.currentStep);
};

nextBtnStepThree.addEventListener("click", () => nextBtnStepThreeHandleCall());

const nextBtnStepThreeHandleCall = () => {
  // write logic here
  moveToNextStep(flowManager.currentStep);
};

prevBtnStepThree.addEventListener("click", () => prevBtnStepThreeHandleCall());

const prevBtnStepThreeHandleCall = () => {
  moveToPreviousStep(flowManager.currentStep);
};

confirmBtnStepFour.addEventListener("click", () =>
  confirmBtnStepFourHandleCall()
);

const confirmBtnStepFourHandleCall = () => {
  // write logic here
  moveToNextStep(flowManager.currentStep);
};

prevBtnStepFour.addEventListener("click", () => prevBtnStepFourHandleCall());

const prevBtnStepFourHandleCall = () => {
  // write logic here
  moveToPreviousStep(flowManager.currentStep);
};

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
  }
}

function moveToPreviousStep(currentStep) {
  const indexCurrentStep = currentStep - 1;

  sideBarSteps[indexCurrentStep].classList.remove("current-step");
  sideBarSteps[indexCurrentStep - 1].classList.add("current-step");

  stepPages[indexCurrentStep].classList.add("hidden");
  stepPages[indexCurrentStep - 1].classList.remove("hidden");

  flowManager.currentStep = currentStep - 1;
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
  setPlanLabelsForStep4();
  subPlans[index].classList.add("selected");
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
    setPlanLabelsForStep4();
    displayAddonsInStep4();
  } else {
    yearlySubscription();
    setPlanLabelsForStep4();
    displayAddonsInStep4();
  }
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
        prices[0].innerHTML = "$9/mo";
        break;
      case 1:
        prices[1].innerHTML = "$12/mo";
        break;
      case 2:
        prices[2].innerHTML = "$15/mo";
        break;
      default:
        console.log("Out of bound - should not get here");
    }
  }

  modifyPlan(StepTwo.plan.name);
}

function changePricesToYearly() {
  for (let i = 0; i < prices.length; i++) {
    switch (i) {
      case 0:
        prices[0].innerHTML = "$90/yr";
        break;
      case 1:
        prices[1].innerHTML = "$120/yr";
        break;
      case 2:
        prices[2].innerHTML = "$150/yr";
        break;
      default:
        console.log("Out of bound - should not get here");
    }
  }

  modifyPlan(StepTwo.plan.name);
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
let totalAddonPrice = 0;

for (let i = 0; i < addOns.length; i++) {
  addOns[i].addEventListener("click", () => handleAddOnClick(i));
}

const handleAddOnClick = (index) => {
  if (addOns[index].classList.contains("selected")) {
    addOns[index].classList.remove("selected");
    addOns[index].children[0].children[0].checked = false;
    removeAddOns(index);
    displayAddonsInStep4();
  } else {
    addOns[index].classList.add("selected");
    addOns[index].children[0].children[0].checked = true;
    addAddOns(index);
    displayAddonsInStep4();
  }
};

function addAddOns(index) {
  switch (index) {
    case 0:
      if (StepTwo.billingPeriod == BillingPeriod.Monthly) {
        StepThree.addOns.onlineService = monthlyAddOns[0];
        setTotalPrice(StepThree.addOns.onlineService.price);
        totalAddonPrice += StepThree.addOns.onlineService.price;
      } else {
        StepThree.addOns.onlineService = yearlyAddOns[0];
        setTotalPrice(StepThree.addOns.onlineService.price);
        totalAddonPrice += StepThree.addOns.onlineService.price;
      }
      break;

    case 1:
      if (StepTwo.billingPeriod == BillingPeriod.Monthly) {
        StepThree.addOns.largerStorage = monthlyAddOns[1];
        setTotalPrice(StepThree.addOns.largerStorage.price);
        totalAddonPrice += StepThree.addOns.largerStorage.price;
      } else {
        StepThree.addOns.largerStorage = yearlyAddOns[1];
        setTotalPrice(StepThree.addOns.largerStorage.price);
        totalAddonPrice += StepThree.addOns.largerStorage.price;
      }
      break;

    case 2:
      if (StepTwo.billingPeriod == BillingPeriod.Monthly) {
        StepThree.addOns.customizableProfile = monthlyAddOns[2];
        setTotalPrice(StepThree.addOns.customizableProfile.price);
        totalAddonPrice += StepThree.addOns.customizableProfile.price;
      } else {
        StepThree.addOns.customizableProfile = yearlyAddOns[2];
        setTotalPrice(StepThree.addOns.customizableProfile.price);
        totalAddonPrice += StepThree.addOns.customizableProfile.price;
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
      if (StepTwo.billingPeriod == BillingPeriod.Monthly) {
        setTotalPrice(-1);
        totalAddonPrice -= 1;
      } else {
        setTotalPrice(-10);
        totalAddonPrice -= 10;
      }

      break;

    case 1:
      StepThree.addOns.largerStorage = {};
      if (StepTwo.billingPeriod == BillingPeriod.Monthly) {
        setTotalPrice(-2);
        totalAddonPrice -= 2;
      } else {
        setTotalPrice(-20);
        totalAddonPrice -= 20;
      }

      break;

    case 2:
      StepThree.addOns.customizableProfile = {};
      if (StepTwo.billingPeriod == BillingPeriod.Monthly) {
        setTotalPrice(-2);
        totalAddonPrice -= 2;
      } else {
        setTotalPrice(-20);
        totalAddonPrice -= 20;
      }

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
  totalAddonPrice = 0;
}

function modifyPlan(planName) {
  switch (planName) {
    case PlanNames.arcade:
      selectPlan(0);
      break;
    case PlanNames.advanced:
      selectPlan(1);
      break;
    case PlanNames.pro:
      selectPlan(2);
      break;
    default:
      console("Out of bounds - should not get here");
  }
}

// Step 4 logic
// fetch all DOM elements for step 4

const planLabel = document.querySelector(
  ".step-4 .body .items-selected .item:nth-child(1) .label .bold"
);
const changeBtn = document.querySelector(
  ".step-4 .body .items-selected .item:nth-child(1) .label .change-btn"
);
const planPriceLabel = document.querySelector(
  ".step-4 .body .items-selected .item:nth-child(1) > p"
);
const items = document.querySelectorAll(".step-4 .body .items-selected .item");
const totalPrice = document.querySelectorAll(".step-4 .body .total p");
let totalCalculatedPrice = 0;

//view step 4 objects

function setPlanLabelsForStep4() {
  const planStep4 = StepTwo.plan.name;

  planLabel.innerHTML =
    planStep4.charAt(0).toUpperCase() +
    planStep4.slice(1) +
    " <span>(" +
    StepTwo.billingPeriod +
    ")</span>";

  let priceText = "$" + StepTwo.plan.price;
  let billingText =
    StepTwo.billingPeriod == BillingPeriod.Monthly ? "/mo" : "/yr";

  planPriceLabel.innerHTML = priceText + billingText;
  setTotalPrice(0);
}
setPlanLabelsForStep4();

changeBtn.addEventListener("click", () => {
  moveToPreviousStep(flowManager.currentStep);
  moveToPreviousStep(flowManager.currentStep);
  mobileNextBtn.innerHTML = "Next Step";
  mobileNextBtn.classList.remove("add-confirm-bg-color");
});

function displayAddonsInStep4() {
  let counter = 1;
  let noSelectedAddOns = 0;

  for (const [key, value] of Object.entries(StepThree.addOns)) {
    if (value && value.constructor !== Object) {
      let priceText = "+$" + value.price;
      let billingText =
        value.billingPeriod == BillingPeriod.Monthly ? "/mo" : "/yr";
      items[counter].children[1].innerHTML = priceText + billingText;

      if (items[counter].classList.contains("hidden")) {
        items[counter].classList.remove("hidden");
      }
      noSelectedAddOns++;
    } else {
      if (!items[counter].classList.contains("hidden")) {
        items[counter].classList.add("hidden");
      }
    }
    counter++;
  }

  if (noSelectedAddOns !== 0) {
    items[4].classList.add("hidden");
  } else {
    items[4].classList.remove("hidden");
  }

  noSelectedAddOns = 0;
  counter = 0;
}

function setTotalPrice(addonPrice) {
  if (addonPrice != 0) {
    totalCalculatedPrice += addonPrice;
  } else {
    totalCalculatedPrice = StepTwo.plan.price;

    if (totalAddonPrice !== 0) {
      totalCalculatedPrice += totalAddonPrice;
    }
  }

  let priceText = "$" + totalCalculatedPrice;

  let billingText =
    StepTwo.billingPeriod == BillingPeriod.Monthly ? "/mo" : "/yr";
  totalPrice[0].innerHTML =
    "Total " + "<span>(per " + StepTwo.billingPeriod.toLowerCase() + ")</span>";
  totalPrice[1].innerHTML = priceText + billingText;
}

// handle mobile view logic
const mobileBtnContainer = document.querySelector(".mobile-btns");
const mobileBackBtn = document.querySelector(".mobile-btns .back");
const mobileNextBtn = document.querySelector(".mobile-btns .next");

if (flowManager.currentStep === 1) {
  mobileBackBtn.classList.add("hidden");
  mobileNextBtn.classList.add("float-right");
}

mobileBackBtn.addEventListener("click", () => {
  switch (flowManager.currentStep) {
    case 2:
      prevBtnStepTwoHandleCall();
      mobileBackBtn.classList.add("hidden");
      mobileBtnContainer.classList.remove("add-space-between");
      break;
    case 3:
      prevBtnStepThreeHandleCall();
      break;
    case 4:
      prevBtnStepFourHandleCall();
      mobileNextBtn.innerHTML = "Next Step";
      mobileNextBtn.classList.remove("add-confirm-bg-color");
      break;

    default:
      console.log("Out of bounds - should not get here");
  }
});

mobileNextBtn.addEventListener("click", () => {
  switch (flowManager.currentStep) {
    case 1:
      nextBtnStepOneHandleCall();
      mobileBackBtn.classList.remove("hidden");
      mobileBtnContainer.classList.add("add-space-between");
      break;
    case 2:
      nextBtnStepTwoHandleCall();
      break;
    case 3:
      nextBtnStepThreeHandleCall();
      console.log("mobileNextBtn.innerHTML: ", mobileNextBtn.innerHTML);
      mobileNextBtn.innerHTML = "Confrim";
      mobileNextBtn.classList.add("add-confirm-bg-color");
      break;
    case 4:
      confirmBtnStepFourHandleCall();
      mobileBtnContainer.classList.add("hidden");
      break;

    default:
      console.log("Out of bounds - should not get here");
  }
});
