import { Draggable, Project, ProjectStatus } from '../models';
import Component from './base-component';
import { autobind } from '../util';
import { projectState } from '../state';

// ProjectItem Class
export class ProjectItem extends Component<HTMLUListElement, HTMLLIElement>
  implements Draggable {
  private project: Project;

  get persons() {
    if (this.project.people === 1) {
      return '1 person';
    }
    return `${this.project.people} persons`;
  }

  constructor(hostId: string, project: Project) {
    super('single-project', hostId, false, project.id);
    this.project = project;

    this.configure();
    this.renderContent();
  }

  @autobind
  dragStartHandler(event: DragEvent) {
    const dataTransfer = event.dataTransfer!;
    dataTransfer.setData('text/plain', this.project.id);
    dataTransfer.effectAllowed = 'move';
  }

  // eslint-disable-next-line class-methods-use-this, @typescript-eslint/no-unused-vars
  dragEndHandler(_event: DragEvent) {
    // Required by Draggable interface
  }

  @autobind
  finishProjectHandler(event: Event) {
    event.stopPropagation();
    projectState.moveProject(this.project.id, ProjectStatus.Finished);
  }

  configure() {
    this.element.addEventListener('dragstart', this.dragStartHandler);
    this.element.addEventListener('dragend', this.dragEndHandler);

    const finishButton = this.element.querySelector('.finish-project-btn') as HTMLButtonElement;
    if (finishButton) {
      finishButton.addEventListener('click', this.finishProjectHandler);
    }
  }

  renderContent() {
    this.element.querySelector('h2')!.textContent = this.project.title;
    this.element.querySelector('h3')!.textContent = `${this.persons} assigned`;
    this.element.querySelector('p')!.textContent = this.project.description;

    const finishButton = this.element.querySelector('.finish-project-btn') as HTMLButtonElement;
    if (finishButton) {
      finishButton.classList.toggle('show', this.project.status === ProjectStatus.Active);
    }
  }
}
