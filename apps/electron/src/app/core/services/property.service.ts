import { Injectable } from '@angular/core';
import { map, first } from 'rxjs/operators';
import { Observable, combineLatest } from 'rxjs';

import { StyleTreeNode } from '@win-teardown/models';

@Injectable({
  providedIn: 'root',
})
export class PropertyService {
  constructor() {}

  getParentFromChildNode$(node: StyleTreeNode) {
    return node.ancestors$.pipe(first((node: StyleTreeNode) => node.name === 'asdf'));
  }

  doSomething$(node: StyleTreeNode): Observable<any[]> {
    return combineLatest([this.getParentFromChildNode$(node)]).pipe(
      map(([node]) => {
        return [];
      })
    );
  }
}
