import { User, UserProps } from './../models/User';
import { View } from './View';

export class UserForm extends View<User, UserProps> {
  eventsMap(): { [key: string]: () => void } {
    return {
      'click:.set-age': this.onSetAgeClick,
      'click:.set-name': this.onSetNameClick,
      'click:.save-model': this.onSaveClick
    };
  }

  onSaveClick = (): void => {
    this.model.save();
  };

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
        <div class="mb-4">
          <input type="text" class="form-control" placeholder=${this.model.get(
            'name'
          )} />
        </div>
        <button class="btn btn-primary set-name">Change Name</button>
        <button class="btn btn-primary set-age">Set Random Age</button>
        <button class="btn btn-primary save-model">Save User</button>
      </div>
    `;
  }
}
