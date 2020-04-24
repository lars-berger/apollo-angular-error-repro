import { of, Observable } from 'rxjs';
import { expand, takeWhile } from 'rxjs/operators';

export enum NodeType {
  GROUP,
  CLASS,
  PART,
  STATE,
  PROPERTY,
}

export class StyleTreeNode {
  name: string;
  parent: StyleTreeNode = null;
  children: StyleTreeNode[] = [];

  constructor(name: string) {
    this.name = name;
  }

  addChild(node: StyleTreeNode): void {
    node.parent = this;
    this.children.push(node);
  }

  get ancestors$(): Observable<StyleTreeNode> {
    return of(this.parent).pipe(
      expand((parent) => of(parent.parent)),
      takeWhile((parent) => parent !== null)
    );
  }
}
