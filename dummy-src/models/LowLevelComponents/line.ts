// dot dash 

class LineNode extends Node {
    constructor(id: string, label: string, x: number = 0, y: number = 0) {
      super(id, label, x, y);
    }
  
    /*
    render(): JSX.Element {
      return (
        <g transform={`translate(${this.x}, ${this.y})`}>
          <rect
            width={100}
            height={30}
            fill="lightgreen"
            stroke="black"
            onClick={() => this.toggleExpand()}
          />
          <text x={10} y={20}>{this.label}</text>
          }
          {this.renderChildren()}
        </g>
      );
    }
      */
}
  