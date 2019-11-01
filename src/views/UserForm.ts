export class UserForm {
  constructor(public parent: Element) {}

  eventsMap(): { [key: string]: () => void } {
    return {
      'click:button': this.onButtonClick
    };
  }

  onButtonClick(): void {
    console.log('hi there');
  }

  template(): string {
    return `
      <div class="container mt-5">
        <h1 class="text-center mb-3">User Form</h1>
        <input class="form-control"/>
      </div>
    `;
  }

  render(): void {
    const templateElement = document.createElement('template');
    templateElement.innerHTML = this.template();

    this.parent.append(templateElement.content);
  }
}
