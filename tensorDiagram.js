// by Piotr Migdał, https://p.migdal.pl/
// and Claudia Zendejas-Morales, https://claudiazm.xyz/
// inspiration from http://tensornetwork.org/diagrams/


function drawDiagram(tensors, contractions, idContainer, widthContainer, heightContainer, startColorIndex = 0) {


    // **********************************************************
    //                      Definitions
    // **********************************************************


    // define distance and directions for index directions
    const shifts = {
        up:    [ 0.00, -0.75],
        down:  [ 0.00,  0.75],
        left:  [-0.75,  0.00],
        right: [ 0.75,  0.00]
    };

    // define a color scale to assign colors to nodes
    const colorScale = d3.scaleOrdinal()
        .range(["#763E9B", "#00882B", "#C82505", "#0165C0", "#EEEEEE"].slice(startColorIndex));

    const xScale = d3.scaleLinear()
        .domain([0, 8])
        .range([20, 500]);

    const yScale = d3.scaleLinear()
        .domain([0, 8])
        .range([60, 500]);

    const lineFunction = d3.line()
        .x((d) => xScale(d.x))
        .y((d) => yScale(d.y));


    // **********************************************************
    //                      Rearrangements
    // **********************************************************


    // add source/target by id or name, also determine the shift according to the position specified
    contractions.forEach((d) => {
        if (typeof d.source !== "number" || typeof d.target !== "number") {
            throw ".:. Source and target in contractions must be numbers"; //cannot continue
        }
        if (typeof d.source === "number") {
            d.source = tensors[d.source]
        }
        if (typeof d.target === "number") {
            d.target = tensors[d.target]
        }
    });


    // **********************************************************
    //                    Elements in formula
    // **********************************************************


    // add same color to elements in formula as indicated w/idEqPart parameter
    tensors.forEach((d) => {
        d3.selectAll('#' + d.idEqPart).style("color", colorScale(d.name));
    });


    // **********************************************************
    //                   Container for diagram
    // **********************************************************


    // select the container in which the diagram will be drawn
    const svg = d3.select("#" + idContainer)
        .append("svg")
        .attr("width", widthContainer)
        .attr("height", heightContainer);


    // **********************************************************
    //                         Drawing
    // **********************************************************


    // draw contractions

    let already_drawn_contraction = []; // remember indexes (indicated as contractions) already drawn

    svg.selectAll(".contraction") // lines and 'loops'
        .data(contractions)
        .enter()
        .each(function(d, i) {
            already_drawn_contraction.push(d.name);
            d3.select(this)
                .append("path")
                .attr("class", "contraction")
                .attr("d", (d) => lineFunction([d.source, d.target]));
        });


    // draw nodes w/indices (loose ends)

    svg.selectAll(".tensor")
        .data(tensors)
        .enter()
        .each(function(d, i) {

            // first draw pending indices (the ones that are not drawn before, not in already_drawn_contraction)
            const indicesToDraw = []
            d.indices.forEach(function(index){
                if(!already_drawn_contraction.includes(index.name)) {
                    const dv = shifts[index.pos];
                    index.source = {
                        x: d.x,
                        y: d.y
                    };
                    index.target = {
                        x: d.x + dv[0],
                        y: d.y + dv[1]
                    };
                    index.labelPosition = {
                        x: d.x + 1.4 * dv[0],
                        y: d.y + 1.4 * dv[1]
                    };
                    indicesToDraw.push(index);
                }
            });
            svg.selectAll("#idx"+d.name) // identify in a particular way the indices of this node
                .data(indicesToDraw)
                .enter()
                .each(function(idx, i) {
                    //console.log(d);

                    // draw loose ends
                    d3.select(this)
                        .append("path")
                        .attr("class", "contraction")
                        //.style("stroke", "red")                                       //  <- quitar, solo es pa ver
                        .attr("d", (idx) => lineFunction([idx.source, idx.target]));

                    //draw indices names
                    d3.select(this).append("text")
                        .attr("class", "contraction-label")
                        .attr("x", (idx) => xScale(idx.labelPosition.x))
                        .attr("y", (idx) => yScale(idx.labelPosition.y))
                        .text((idx) => idx.name);
                });

            // second draw nodes
            let selected = d3.select(this);
            let shape = drawShape(selected, d, xScale, yScale);
            if(shape)
                shape.attr("class", "tensor")
                    .style("fill", (d) => colorScale(d.name))
                    .on("mouseover", (event, d) => d3.selectAll('#' + d.idEqPart).classed('circle-sketch-highlight', true))
                    .on("mouseout", (event, d) => d3.selectAll('#' + d.idEqPart).classed('circle-sketch-highlight', false));

            // third draw tensor names
            selected.append("text")
                .attr("class", "tensor-label")
                .attr("x", (d) => d.labPos === "left" || d.labPos === "leftup" ? xScale(d.x - 0.5) : xScale(d.x))
                .attr("y", (d) => d.labPos === "left" ? yScale(d.y + 0.1) : yScale(d.y - 0.4))
                .text((d) => d.name);

        });

}

function drawShape(selected, d, xScale, yScale) {
    let shape;
    if( d.shape === undefined ) d.shape = "circle"; //default value
    if( d.shape === "circle" ) {
        shape = selected
            .append("circle")
            .attr("r", 10)
            .attr("cx", (d) => xScale(d.x))
            .attr("cy", (d) => yScale(d.y));
    } else if( d.shape === "square" ) {
        shape = selected
            .append("rect")
            .attr("width", 20)
            .attr("height", 20)
            .attr("x", (d) => xScale(d.x) - 10)
            .attr("y", (d) => yScale(d.y) - 10);
    } else if( d.shape === "triangleUp" ) {
        shape = selected
            .append("path")
            .attr("d", function(d) {
                const sx = xScale(d.x) - 10;
                const sy = yScale(d.y) + 10;
                return 'M ' + sx +' '+ sy + ' L ' + (sx+20) + ' ' + (sy) + 'L ' + (sx+10) + ' ' + (sy-20) + ' z';
            });
    } else if( d.shape === "triangleDown" ) {
        shape = selected
            .append("path")
            .attr("d", function(d) {
                const sx = xScale(d.x) - 10;
                const sy = yScale(d.y) - 10;
                return 'M ' + sx +' '+ sy + ' L ' + (sx+20) + ' ' + (sy) + 'L ' + (sx+10) + ' ' + (sy+20) + ' z';
            });
    } else if( d.shape === "triangleLeft" ) {
        shape = selected
            .append("path")
            .attr("d", function(d) {
                const sx = xScale(d.x) - 10;
                const sy = yScale(d.y);
                return 'M ' + sx +' '+ sy + ' L ' + (sx+20) + ' ' + (sy+10) + 'L ' + (sx+20) + ' ' + (sy-10) + ' z';
            });
    } else if( d.shape === "triangleRight" ) {
        shape = selected
            .append("path")
            .attr("d", function(d) {
                const sx = xScale(d.x) - 10;
                const sy = yScale(d.y) - 10;
                return 'M ' + sx +' '+ sy + ' L ' + (sx) + ' ' + (sy+20) + 'L ' + (sx+20) + ' ' + (sy+10) + ' z';
            });
    } else if( d.shape === "rectangle" ) {
        shape = selected
            .append("rect")
            .attr("width", 20)
            .attr("height", 60)
            .attr("x", (d) => xScale(d.x) - 10)
            .attr("y", (d) => yScale(d.y) - 15)
            .attr("rx", 7)
            .attr("ry", 7);
        /*.attr("transform", function(d, i) { return "scale(" + (1 - d / 60) * 20 + ")"; })*/
    }
    return shape;
}