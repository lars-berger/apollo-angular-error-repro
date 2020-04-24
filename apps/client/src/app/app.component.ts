import { Component, ChangeDetectionStrategy } from '@angular/core';

import { TreeNode } from '@win-teardown/models';
import { first } from 'rxjs/operators';
import { combineLatest } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  ngOnInit() {
    const node1 = new TreeNode('node1');
    const node2 = new TreeNode('node2');
    node1.addChild(node2);

    const matchingNode$ = node2.ancestors$.pipe(first((node: TreeNode) => node.name === 'node1'));

    combineLatest([matchingNode$]).subscribe((result) => console.log('Success!', result));
  }
}
