import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

@Injectable()
export class ToolbarService {

  toolbarSettings: BehaviorSubject<ToolbarSettings>;

  constructor() {
    this.toolbarSettings = new BehaviorSubject(new ToolbarSettings());
  }

}

export class ToolbarSettings {
  title: string;
  backEnabled: boolean;

  constructor(title?: string, backEnabled?: boolean) {
    this.title = title;
    this.backEnabled = backEnabled;
  }
}
