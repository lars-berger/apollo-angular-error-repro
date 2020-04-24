import { of, Observable } from 'rxjs';
import { expand, takeWhile } from 'rxjs/operators';

export class TreeNode {
  name: string;
  parent: TreeNode = null;
  children: TreeNode[] = [];

  constructor(name: string) {
    this.name = name;
  }

  addChild(node: TreeNode): void {
    node.parent = this;
    this.children.push(node);
  }

  get ancestors$(): Observable<TreeNode> {
    return of(this.parent).pipe(
      expand((parent) => of(parent.parent)),
      takeWhile((parent) => parent !== null)
    );
  }
}
