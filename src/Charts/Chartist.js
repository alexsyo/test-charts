import React, { Component } from 'react';
import { Grid, Col, Heading, Button  } from 'vandebron-styleguide';
import { range } from 'lodash'

import ChartistGraph from "react-chartist";
import Chartist from 'chartist'
import 'chartist/dist/chartist.min.css'

class ChartistComponent extends Component {

  state = {
    plus: 0
  };

  getData = () => ({
    labels: range(20),
    series: [
      range(100).map(r => (r % 5) + this.state.plus)
    ]
  });

  increase = () => {
    this.setState({
      plus: this.state.plus + 1
    })
  };

  options = {
    height: '600px',
    high: 10,
    low: 0,
    scaleMinSpace: 200
  };

  render() {
    return (
      <div>
        <Heading>react-chartist</Heading>
        <Button onClick={this.increase}>click</Button>
        <ChartistGraph
          data={this.getData()}
          type="Bar"
          options={this.options}
          listener={{
            draw: data => {
              if(data.type === 'bar') {
                data.element.animate({
                  y2: {
                    begin: 0,
                    dur: 500,
                    from: data.y1,
                    to: data.y2,
                    easing: Chartist.Svg.Easing.easeOutSine,
                  }});
              }
            }
          }}
        />
      </div>
    );
  }
}

export default ChartistComponent;
