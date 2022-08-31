import * as d3 from 'd3';


const mobileInput=(height,width,points)=> {
  
var dataset1 = points
var cls=20
var width1=width-cls
var height1=height-cls

//var scale= d3.scaleLinear()
//          .domain([0,800])
//          .range([100,500])

var svgContainer = d3
. select(".svg-canvas")
.append("svg") 

svgContainer
  .append("rect")
  .attr("x", 330)
  .attr("y", 150)
  .attr("width",width) //250
  .attr("height",height) //430
  .attr("rx", cls)
  .attr("fill", "black");
svgContainer
  .append("rect")
  .attr("x", 340)
  .attr("y", 160)
  .attr("width",(d) => { return width1; }) //230
  .attr("height",(d) => { return height1; }) //410
  .attr("rx", 20) 
  .attr("fill", "white");

  svgContainer
  .selectAll("dot")
  .data(dataset1)
  .enter()
  .append("circle")
  .attr("cx", function (d) { return d[0]; } )
  .attr("cy", function (d) { return d[1]; } )
  .attr("r", 2)
  .attr("transform", "translate(" + width + "," + (height/2) + ")")
  .style("fill", "#CC0000");

return (
  <div>
    <svg className="svg-canvas" width="1500px" height="1500px" />
  </div>
)
}

export default mobileInput 