import {
  BarPlot,
  Dataframe,
  HistoPlot,
  ScatterPlot,
  Scene,
  createRoot,
  loadData,
} from "@abartonicek/plotscape5";

const mpgJSON = await loadData(
  "https://raw.githubusercontent.com/bartonicek/plotscape5/master/public/mpg.json"
);

const schemeMpg = {
  cyl: "discrete",
  manufacturer: "discrete",
  hwy: "numeric",
  displ: "numeric",
} as const;

const dataMpg = Dataframe.parseCols(mpgJSON, schemeMpg);
const app = document.querySelector("#app") as HTMLDivElement;

// createRoot is exported directly from Solid JS
createRoot(() => {
  const scene = new Scene(app, dataMpg);
  const plot1 = new BarPlot(scene, (d) => ({ var1: d.cyl }));
  const plot2 = new BarPlot(scene, (d) => ({ var1: d.manufacturer }));
  const plot3 = new HistoPlot(scene, (d) => ({ var1: d.hwy }));
  const plot4 = new ScatterPlot(scene, (d) => ({
    var1: d.displ,
    var2: d.hwy,
  }));
});
