// Define a base abstract class for visual nodes
export abstract class Node {
    // Common properties for all nodes
    id: string;
    label: string;
    x: number;
    y: number;
    children: Node[];
    isExpanded: boolean;
  
    constructor(id: string, label: string, x: number = 0, y: number = 0) {
      this.id = id;
      this.label = label;
      this.x = x;
      this.y = y;
      this.children = [];
      this.isExpanded = true; // Default to expanded
    }

    //abstract render(): JSX.Element;

    // Method to add a child node
    addChild(child: Node): void {
      this.children.push(child);
    }
  
    // Method to set the position of the node
    setPosition(x: number, y: number): void {
      this.x = x;
      this.y = y;
    }
  }
  
enum Position {
    ABSOLUTE,
    RELATIVE
}