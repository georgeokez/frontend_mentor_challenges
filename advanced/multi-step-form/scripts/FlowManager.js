export default class FlowManager {
  constructor(currentStep, steps) {
    (this.currentStep = currentStep), (this.steps = steps);
  }

  getCurrentStep() {
    return this.steps[this.currentStep];
  }
}
