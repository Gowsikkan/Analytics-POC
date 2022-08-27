import * as d3 from 'd3';


const Mobile=(height,width)=> {

  var svgContainer = d3
  .select(".svg-canvas")
  .append("svg") 
  
  svgContainer
  .append("rect")
  .attr("x", 330)
  .attr("y", 150)
  .attr("width", height) //250
  .attr("height", width) //430
  .attr("rx", 20)
  .attr("fill", "black");
  svgContainer
  .append("rect")
  .attr("x", 340)
  .attr("y", 160)
  .attr("width", height-20) //230
  .attr("height",width-20) //410
  .attr("rx", 20)
  .attr("fill", "white");
return (
  
  <div>
    <svg className="svg-canvas" width="2500px" height="2500px" />
  </div>
)
}
export default Mobile
