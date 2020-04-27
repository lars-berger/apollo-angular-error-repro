import { Component } from '@angular/core';
import { first } from 'rxjs/operators';
import { combineLatest } from 'rxjs';

import { TreeNode, simpleExportedObservable$ } from '@win-teardown/models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  ngOnInit() {
    /******** Example 1: original reproduction of error ********/
    const node1 = new TreeNode('node1');
    const node2 = new TreeNode('node2');
    node1.addChild(node2);

    const matchingNode$ = node2.ancestors$.pipe(first((node: TreeNode) => node.name === 'node1'));

    // The combineLatest here throws an error.
    combineLatest([matchingNode$]).subscribe((result) => console.log('Success!', result));

    /******** Example 2: simplified reproduction of error ********/
    // The combineLatest here also throws an error.
    combineLatest([simpleExportedObservable$]).subscribe((result) => console.log('Success!', result));
  }
}
