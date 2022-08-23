import React, { useEffect, useRef, useState } from 'react';
import * as d3 from 'd3';
import './components/Responsive.css'
import data from './components/car.json'
const sample= data

const Chart = () => {

	var svgContainer = d3
	.select("body")
	.append("svg")
	.attr("width", 1000)
	.attr("height", 1000);
  //make the rectangle
  var rectangle = svgContainer
	.append("rect")
	.attr("x", 330)
	.attr("y", 150)
	.attr("width", 250)
	.attr("height", 430)
	.attr("rx", 20)
	.attr("fill", "black");
  var rectangle1 = svgContainer
	.append("rect")
	.attr("x", 340)
	.attr("y", 160)
	.attr("width", 230)
	.attr("height", 410)
	.attr("rx", 20)
	.attr("fill", "white");
  var rectangle2 = svgContainer
	.append("rect")
	.attr("x", 427)
	.attr("y", 535)
	.attr("width", 50)
	.attr("height", 30)
	.attr("rx", 4)
	.attr("fill", "black");

	return (
		<div id='d3demo'>
		  <svg ref={d3Chart}></svg>
		</div>
	)
}

export default Chart