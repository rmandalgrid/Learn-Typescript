import Cmp from './base-component';
import * as Validation from '../util';
import { autobind as Autobind } from '../util';
import { projectState } from '../state';

// ProjectInput Class
export class ProjectInput extends Cmp<HTMLDivElement, HTMLFormElement> {
  titleInputElement: HTMLInputElement;

  descriptionInputElement: HTMLInputElement;

  peopleInputElement: HTMLInputElement;

  errorMessageElement: HTMLDivElement;

  constructor() {
    super('project-input', 'app', true, 'user-input');
    this.titleInputElement = this.element.querySelector(
      '#title',
    ) as HTMLInputElement;
    this.descriptionInputElement = this.element.querySelector(
      '#description',
    ) as HTMLInputElement;
    this.peopleInputElement = this.element.querySelector(
      '#people',
    ) as HTMLInputElement;
    this.errorMessageElement = this.element.querySelector(
      '#error-message',
    ) as HTMLDivElement;
    this.configure();
  }

  configure() {
    this.element.addEventListener('submit', this.submitHandler);
  }

  // eslint-disable-next-line class-methods-use-this
  renderContent() {}

  private gatherUserInput(): [string, string, number] | undefined {
    const enteredTitle = this.titleInputElement.value;
    const enteredDescription = this.descriptionInputElement.value;
    const enteredPeople = this.peopleInputElement.value;

    const titleValidatable: Validation.Validatable = {
      value: enteredTitle,
      required: true,
    };
    const descriptionValidatable: Validation.Validatable = {
      value: enteredDescription,
      required: true,
      minLength: 5,
    };
    const peopleValidatable: Validation.Validatable = {
      value: +enteredPeople,
      required: true,
      min: 1,
      max: 5,
    };

    if (
      !Validation.validate(titleValidatable)
      || !Validation.validate(descriptionValidatable)
      || !Validation.validate(peopleValidatable)
    ) {
      this.showError('Invalid input, please try again!');
      return undefined;
    }
    this.hideError();
    return [enteredTitle, enteredDescription, +enteredPeople];
  }

  private clearInputs() {
    this.titleInputElement.value = '';
    this.descriptionInputElement.value = '';
    this.peopleInputElement.value = '';
  }

  private showError(message: string) {
    this.errorMessageElement.textContent = message;
    this.errorMessageElement.style.display = 'block';
  }

  private hideError() {
    this.errorMessageElement.style.display = 'none';
  }

  @Autobind
  private submitHandler(event: Event) {
    event.preventDefault();
    const userInput = this.gatherUserInput();
    if (userInput) {
      const [title, desc, people] = userInput;
      projectState.addProject(title, desc, people);
      this.clearInputs();
    }
  }
}
