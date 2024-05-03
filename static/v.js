const URL = "http://127.0.0.1:8000/get_int";

const getdata = async () => {
  let response = await fetch(URL);
  let data = await response.json();
  //console.log(data);
  let intensityList = [];
  for (let item of data) {
    let inten = parseInt(item.intensity); 
    if (!isNaN(inten)) { 
      intensityList.push(inten);
  }
  }

    display(intensityList);
  //console.log(intensityList);
};

display = (dataset) => {

  const svgWidth = 3000;
  const svgHeight = 400;
  
  // Create SVG element
  const svg = d3
    .select("#bar")
    .attr("width", svgWidth)
    .attr("height", svgHeight);
  
  // Define scales
  let yScale = d3
    .scaleLinear()
    .domain([0, d3.max(dataset)])
    .range([svgHeight, 0]);
  
  let xScale = d3
    .scaleBand()
    .domain(d3.range(dataset.length))
    .range([0, svgWidth])
    .paddingInner(0.3);
  
  // Create bars
  let bars = svg
    .selectAll("rect")
    .data(dataset)
    .enter()
    .append("rect")
    .attr("x", (d, i) => xScale(i))
    .attr("y", (d) => yScale(d))
    .attr("width", xScale.bandwidth())
    .attr("height", (d) => svgHeight - yScale(d))
    .attr("fill", "steelblue");
    
  
  
  let y_axis = d3.axisLeft().scale(yScale);
  
  svg
    .append("g")
    .attr("transform", "translate(20,0)") 
    .call(y_axis);
  

};




































//   let svgWidth = 6000,
//     svgHeight = 200,
//     barPadding = 4;
//   let barWidth = svgWidth / dataset.length;

//   let svg = d3.select("svg").attr("width", svgWidth).attr("height", svgHeight);

//  // for scaling small values or use  (d*5,10)
//   let yScale = d3.scaleLinear()
//     .domain([0, d3.max(dataset)])
//     .range([0,svgHeight]);

//   let barChart = svg
//     .selectAll("rect")
//     .data(dataset)
//     .enter()
//     .append("rect")
//     .attr("y", function (d) {
//       return svgHeight -  yScale(d); // Adjust the y-coordinate
//     })
//     .attr("height", function (d) {
//       return  yScale(d);
//     })
//     .attr("width", barWidth - barPadding)
//     .attr("transform", function (d, i) {
//       let translate = [barWidth * i, 0];
//       return "translate(" + translate + ")";
//     });





// for text
// let text = svg.selectAll('text')
//     .data(dataset)
//     .enter()
//     .append("text")
//     .style("font-size", "9px")
//     .text(function(d) {
//         return d;
//     })
//     .attr('y', function(d, i){
//         return svgHeight -d*5 -2;

//     })
//     .attr('x', function(d,i) {
//         return barWidth * i;
//     })
//     .attr('fill', "#A64C38")

getdata();

  
