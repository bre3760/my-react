import React from 'react';
import Plot from 'react-plotly.js';

class Heatmap extends React.Component {
     constructor(props) {
         super(props);
     }

  render() {
    return (
        <div className="heatmap">
      <Plot
        data={[
          {
            // z: this.props.ntrips,
            // x: this.props.time,
            // y: this.props.cities,
            z: this.props.values,
            x: this.props.timeLine,
            y: this.props.cities,
            colorscale: 'Hot',
            type: 'heatmap'
          }
        ]}
        layout={{width: 1200,
                height: 600,
                title: 'Available data',
                yaxis: {
                    title: 'Cities and Datasources',
                    automargin: true,
                    titlefont: {
                      family: 'Arial, sans-serif',
                      size: 16,
                      color: 'black'
                    },
                    showticklabels: true,
                    tickangle: 'auto',
                    tickfont: {
                      family: 'Old Standard TT, serif',
                      size: 14,
                      color: 'grey'
                    },
                    exponentformat: 'e',
                    showexponent: 'all'
                  },
                xaxis: {
                    title: 'Date',
                    titlefont: {
                      family: 'Arial, sans-serif',
                      size: 16,
                      color: 'black'
                    },
                    showticklabels: true,
                    tickangle: '315',
                    tickfont: {
                      family: 'Old Standard TT, serif',
                      size: 14,
                      color: 'grey'
                    },
                    exponentformat: 'e',
                    showexponent: 'all'
                  }
        }}
      />
        </div>
    );
  }
}export default Heatmap;