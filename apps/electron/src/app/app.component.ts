import { Component } from '@angular/core';
import { first } from 'rxjs/operators';
import { combineLatest } from 'rxjs';

import { TreeNode } from '@win-teardown/models';

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

    // The combineLatest here throws an error.
    combineLatest([matchingNode$]).subscribe((result) => console.log('Success!', result));
  }
}
