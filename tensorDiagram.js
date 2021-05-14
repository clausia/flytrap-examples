// by Piotr Migdał, https://p.migdal.pl/
// and Claudia Zendejas-Morales, https://claudiazm.xyz/
// inspiration from http://tensornetwork.org/diagrams/



function drawDiagram(tensors, contractions, idContainer, widthContainer, heightContainer, startColorIndex = 0) {

    // add source/target by id or name
    contractions.forEach((d) => {
        if (typeof d.source === "number") {
            d.source = tensors[d.source]
        }
        if (typeof d.target === "number") {
            d.target = tensors[d.target]
        }
    });

    const shifts = {
        up:    [0, -0.75],
        down:  [0, 0.75],
        left:  [-0.75, 0],
        right: [0.75, 0]
    };

    const colorScale = d3.scaleOrdinal()
        .range(["#763E9B", "#00882B", "#C82505", "#0165C0", "#EEEEEE"].slice(startColorIndex));

    contractions.forEach((d) => {
        if (typeof d.target === "string") {
            const dv = shifts[d.target];
            d.target = {
                x: d.source.x + dv[0],
                y: d.source.y + dv[1]
            };
            d.labelPosition = {
                x: d.source.x + 1.4 * dv[0],
                y: d.source.y + 1.4 * dv[1]
            };
        }
    });

    tensors.forEach((d) => {
        d3.selectAll('#' + d.idEqPart).style("color", colorScale(d.name));
    });

    const xScale = d3.scaleLinear()
        .domain([0, 8])
        .range([20, 500]);

    const yScale = d3.scaleLinear()
        .domain([0, 8])
        .range([60, 500]);

    const lineFunction = d3.line()
        .x((d) => xScale(d.x))
        .y((d) => yScale(d.y));

    const svg = d3.select("#" + idContainer)
        .append("svg")
        .attr("width", widthContainer)
        .attr("height", heightContainer);

    svg.selectAll(".contraction")
        .data(contractions)
        .enter()
        .append("path")
        .attr("class", "contraction")
        .attr("d", (d) => lineFunction([d.source, d.target]));

    svg.selectAll(".tensor")
        .data(tensors)
        .enter()
        .each(function(d, i) {
            let selected;
            if( d.shape === undefined ) d.shape = "circle"; //default value
            if( d.shape === "circle" ) {
                selected = d3.select(this)
                    .append("circle")
                    .attr("r", 10)
                    .attr("cx", (d) => xScale(d.x))
                    .attr("cy", (d) => yScale(d.y));
            } else if( d.shape === "square" ) {
                selected = d3.select(this)
                    .append("rect")
                    .attr("width", 20)
                    .attr("height", 20)
                    .attr("x", (d) => xScale(d.x) - 10)
                    .attr("y", (d) => yScale(d.y) - 10);
            } else if( d.shape === "triangleUp" ) {
                selected = d3.select(this)
                    .append("path")
                    .attr("d", function(d) {
                        sx = xScale(d.x) - 10; sy = yScale(d.y) + 10;
                        return 'M ' + sx +' '+ sy + ' L ' + (sx+20) + ' ' + (sy) + 'L ' + (sx+10) + ' ' + (sy-20) + ' z';
                    });
            } else if( d.shape === "triangleDown" ) {
                selected = d3.select(this)
                    .append("path")
                    .attr("d", function(d) {
                        sx = xScale(d.x) - 10; sy = yScale(d.y) - 10;
                        return 'M ' + sx +' '+ sy + ' L ' + (sx+20) + ' ' + (sy) + 'L ' + (sx+10) + ' ' + (sy+20) + ' z';
                    });
            } else if( d.shape === "triangleLeft" ) {
                selected = d3.select(this)
                    .append("path")
                    .attr("d", function(d) {
                        sx = xScale(d.x) - 10; sy = yScale(d.y);
                        return 'M ' + sx +' '+ sy + ' L ' + (sx+20) + ' ' + (sy+10) + 'L ' + (sx+20) + ' ' + (sy-10) + ' z';
                    });
            } else if( d.shape === "triangleRight" ) {
                selected = d3.select(this)
                    .append("path")
                    .attr("d", function(d) {
                        sx = xScale(d.x) - 10; sy = yScale(d.y) - 10;
                        return 'M ' + sx +' '+ sy + ' L ' + (sx) + ' ' + (sy+20) + 'L ' + (sx+20) + ' ' + (sy+10) + ' z';
                    });
            } else if( d.shape === "rectangle" ) {
                selected = d3.select(this).append("rect")
                    .attr("width", 20)
                    .attr("height", 60)
                    .attr("x", (d) => xScale(d.x) - 10)
                    .attr("y", (d) => yScale(d.y) - 15)
                    .attr("rx", 7)
                    .attr("ry", 7);
                    /*.attr("transform", function(d, i) { return "scale(" + (1 - d / 60) * 20 + ")"; })*/
            }
            if(selected)
                selected.attr("class", "tensor")
                    .style("fill", (d) => colorScale(d.name))
                    .on("mouseover", (event, d) => d3.selectAll('#' + d.idEqPart).classed('circle-sketch-highlight', true))
                    .on("mouseout", (event, d) => d3.selectAll('#' + d.idEqPart).classed('circle-sketch-highlight', false));
        });

    svg.selectAll(".tensor-label")
        .data(tensors)
        .enter()
        .append("text")
        .attr("class", "tensor-label")
        .attr("x", (d) => d.labPos === "left" || d.labPos === "leftup" ? xScale(d.x - 0.5) : xScale(d.x))
        .attr("y", (d) => d.labPos === "left" ? yScale(d.y + 0.1) : yScale(d.y - 0.4))
        .text((d) => d.name);

    svg.selectAll(".contraction-label")
        .data(contractions.filter((d) => !!d.labelPosition))
        .enter()
        .append("text")
        .attr("class", "contraction-label")
        .attr("x", (d) => xScale(d.labelPosition.x))
        .attr("y", (d) => yScale(d.labelPosition.y))
        .text((d) => d.name);

}