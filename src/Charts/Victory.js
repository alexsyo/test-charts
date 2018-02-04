import React, { Component } from 'react';
import { Grid, Col, Heading, Button  } from 'vandebron-styleguide';
import { range } from 'lodash'

import {
  VictoryChart, VictoryBar, VictoryZoomContainer, VictoryTheme,
  VictoryTooltip, VictoryLine
} from 'victory'

class Victory extends Component {

  state = {
    plus: 0
  };

  getData = () => range(100).map(r => ({
    x: r + 1,
    y: (r % 5) + this.state.plus,
    label: 'bau'
  }));

  increase = () => {
    this.setState({
      plus: this.state.plus + 1
    })
  };

  render() {
    return (
      <div>
        <Heading>Victory</Heading>
        <Button onClick={this.increase}>click</Button>

        <VictoryChart
          animate={{
            duration: 800,
            onLoad: { duration: 800 }
          }}
          scale={{x: "linear"}}
          containerComponent={
            <VictoryZoomContainer
              allowZoom={false}
              zoomDomain={{x: [1, 20]}}
            />
          }
          theme={VictoryTheme.material}
        >
          <VictoryBar
            alignment="start"
            labelComponent={<VictoryTooltip/>}
            style={{
              data: {
                fill: 'red',
                strokeWidth: 5
              }
            }}
            data={this.getData()}
          />
        </VictoryChart>
      </div>
    );
  }
}

export default Victory;
