const URL_sec = "http://127.0.0.1:8000/get_int";

const getsec = async () => {
  let response = await fetch(URL_sec);
  let data = await response.json();
  let SecSet = new Set();
  for (let item of data) {
    if (item.sector) {
      // Check if sector is not empty
      SecSet.add(item.sector);
    }
  }
  let SecList = Array.from(SecSet);

  let sectorCounts = [];
  for (let i of SecList) {
    let count = 0;
    for (let j of data) {
      if (j.sector === i) {
        count++;
      }
    }

    let obj = {
      category: i,
      value: count,
    };
    sectorCounts.push(obj);
  }

  display_sec(sectorCounts);
};

const display_sec = (data) => {
  const margin = { top: 50, right: 100, bottom: 50, left: 50 };
  const width = 800 - margin.left - margin.right;
  const height = 400 - margin.top - margin.bottom;
  const radius = Math.min(width, height) / 2;

  // Color scale
  const color = d3.scaleOrdinal(d3.schemeCategory10);

  // Set up pie layout
  const pie = d3
    .pie()
    .value((d) => d.value)
    .sort(null);

  // Arc generator
  const arc = d3.arc().innerRadius(0).outerRadius(radius);

  // hover
  const hoverArc = d3
    .arc()
    .innerRadius(0)
    .outerRadius(radius * 1.2);

  // Create SVG element
  const svg = d3
    .select("#chart")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr(
      "transform",
      `translate(${width / 2 + margin.left},${height / 2 + margin.top} )`
    );

  // Draw pie chart
  const arcs = svg
    .selectAll("arc")
    .data(pie(data))
    .enter()
    .append("g")
    .attr("class", "arc");

  arcs
    .append("path")
    .attr("d", arc)
    .attr("fill", (d, i) => color(i))
    .on("mouseover", function (d, i) {
      d3.select(this)
        // .style("fill-opacity", 1)
        .transition()
        .duration(500)
        .attr("d", hoverArc);
      d3.select(this.parentNode).selectAll("text").style("opacity", 3);
    })
    .on("mouseout", function (d, i) {
      d3.select(this)
        // .style("fill-opacity", 0.9)
        .transition()
        .duration(300)
        .attr("d", arc);
      d3.select(this.parentNode).selectAll("text").style("opacity", 0);
    });

  arcs
    .append("text")
    .attr("transform", function (d) {
      const angle = (d.startAngle + d.endAngle) / 2 - Math.PI / 2;
      const x = Math.cos(angle) * (radius * 1.2); // Adjust the radius for text placement
      const y = Math.sin(angle) * (radius * 1.2); // Adjust the radius for text placement
      return `translate(${x},${y} )`;
    })
    .style("font-size", 20)
    .style("font-weight", 400)
    .style("opacity", 0)
    .attr("text-anchor", "middle")
    .text((d) => d.data.category);

 
};

getsec();
