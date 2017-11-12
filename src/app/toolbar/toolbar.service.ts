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

  constructor(title?: string) {
    this.title = title;
  }
}
