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
  moveToNextStep(flowManager.currentStep);
});

prevBtnStepTwo.addEventListener("click", () => {
  console.log("Previous button on step 2 clicked");
  // write logic here
  moveToPreviousStep(flowManager.currentStep);
});

nextBtnStepThree.addEventListener("click", () => {
  console.log("Next button on step 3 clicked");
  // write logic here
  moveToNextStep(flowManager.currentStep);
});

prevBtnStepThree.addEventListener("click", () => {
  console.log("Previous button on step 3 clicked");
  // write logic here
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
