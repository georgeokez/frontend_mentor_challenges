import { BillingPeriod, Plans } from "./Utils";

export default class StepBuilder {
  StepOne = {};
  StepTwo = {};
  StepThree = {};
  StepFour = {};

  build() {
    this.StepOne = {
      name: "",
      email: "",
      phoneNumber: "",
    };

    this.StepTwo = {
      plan: Plans.arcade,
      billingPeriod: BillingPeriod[0],
    };

    this.StepThree = {
      addOns: [],
      billingPeriod: this.StepTwo.billingPeriod,
    };

    this.StepFour = {
      plan: this.StepTwo.plan,
      addOns: this.StepThree.addOns,
      total: {
        billingPeriod: this.StepTwo.billingPeriod,
        price: 0,
      },
    };

    return [this.StepOne, this.StepTwo, this.StepThree, this.StepFour];
  }
}
