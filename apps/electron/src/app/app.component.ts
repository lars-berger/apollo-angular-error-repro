import { Component, ChangeDetectionStrategy } from '@angular/core';

import { PropertyService } from './core/services/property.service';
import { StyleTreeNode } from '@win-teardown/models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  tree: any[] = [];

  constructor(private propertyService: PropertyService) {}

  ngOnInit() {
    const x = new StyleTreeNode('asdf');
    x.addChild(new StyleTreeNode('fdsa'));

    this.tree.push(x);
  }

  doSomething$(node: StyleTreeNode) {
    return this.propertyService.doSomething$(node);
  }
}
