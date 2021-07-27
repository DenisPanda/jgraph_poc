import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import mx from "../../mxgraph.init";
import { mxGraph, mxGraphModel, mxClient, mxRubberband } from "mxgraph";

@Component({
  selector: "app-graph-hello",
  templateUrl: "./graph-hello.component.html",
  styleUrls: ["./graph-hello.component.scss"],
})
export class GraphHelloComponent implements OnInit {
  @ViewChild("mxGraphContainer", { static: true })
  graphC!: ElementRef<HTMLDivElement>;

  browserIsSupported: boolean = false;
  graph!: mxGraph;
  model!: mxGraphModel;
  mxClient = (window as any).mxClient as typeof mxClient;
  mxRubberband = (window as any).mxRubberband as typeof mxRubberband;

  constructor() {}

  ngOnInit(): void {
    console.log("Container", this.graphC);

    if (this.isSupported()) {
      this.graph = new mx.mxGraph(this.graphC.nativeElement);
      new this.mxRubberband(this.graph);

      const parent = this.graph.getDefaultParent();
      this.graph.getModel().beginUpdate();

      try
      {
         const v1 = this.graph.insertVertex(parent, null,
                  'Hello,', 20, 20, 80, 30);
         const v2 = this.graph.insertVertex(parent, null,
                  'World!', 200, 150, 80, 30);
         const e1 = this.graph.insertEdge(parent, null, '', v1, v2);
      }
      finally
      {
         // Updates the display
         this.graph.getModel().endUpdate();
      }

    } else {
      console.error("Browser isn't supported");
    }
  }

  isSupported(): boolean {
    const val = this.mxClient.isBrowserSupported();

    this.browserIsSupported = !!val;

    return val;
  }
}
