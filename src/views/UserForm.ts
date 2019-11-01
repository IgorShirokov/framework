import { User } from './../models/User';
import { View } from './View';

export class UserForm extends View {
  eventsMap(): { [key: string]: () => void } {
    return {
      'click:.set-age': this.onSetAgeClick,
      'click:.set-name': this.onSetNameClick
    };
  }

  onSetAgeClick = (): void => {
    this.model.setRandomAge();
  };

  onSetNameClick = (): void => {
    const input = this.parent.querySelector('input');
    if (input) {
      const name = input.value;
      this.model.set({ name });
    }
  };

  template(): string {
    return `
      <div class="container mt-5">
        <h1 class="text-center mb-3">User Form</h1>
        <div class="form-group">        
          <span class="ml-2 font-weight-bold">USER NAME:</span>
          <span class="ml-2">${this.model.get('name')}</span>
          <span class="ml-2 font-weight-bold">USER AGE:</span>
          <span class="ml-2"> ${this.model.get('age')}</span>
        </div>
        <div class="form-group">
          <input type="text" class="form-control"/>
        </div>
        <button class="btn btn-primary set-name">Change Name</button>
        <button class="btn btn-primary set-age">Set Random Age</button>
      </div>
    `;
  }
}
