<template>
  <div class="chartElem">
    <highcharts
      class="chart"
      :options="chartOptions"
    ></highcharts>
  </div>
</template>

<script>
export default {
  props: {
    depoimentos: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {
    };
  },
  computed: {
    chartData: function() {
      return this.depoimentos || [];
    },
    chartOptions: function () {
      const depoimentos = this.chartData;
      return {
        chart: {
          type: 'spline'
        },
        responsive: {  
          rules: [{  
            condition: {  
              maxWidth: 1000  
            },
            chartOptions: {
              chart: {
                width: 600
              },
              legend: {  
                enabled: false  
              }  
            }  
          }, {  
            condition: {  
              maxWidth: 400  
            },
            chartOptions: {
              chart: {
                width: 350
              },
              legend: {  
                enabled: false  
              }  
            }  
          }]  
        },
        xAxis: {
          type: 'datetime'
        },
        yAxis: {
          visible: true,
          title: {
            text: ''
          },
          labels: {
            formatter: function () {
              return this.axis.defaultLabelFormatter.call(this)
            },
          },
          plotLines: [{
            value: 2,
            color: 'black',
            dashStyle: 'shortdash',
            width: 2,
            // label: {
            //   text: 'label'
            // }
          }]
        },
        title: {
          text: 'Registro de Sentimentos'
        },
        legend: {
          enabled: false
        },
        tooltip: {
            formatter: function () {
                const depoimento = depoimentos.find((d) => d.datetime === this.x);
                if(!depoimento) return '';
                return depoimento.msgSent || depoimento.nota;
            }
        },
        data: { parseDate: Date.parse },
        series: [
          {
            data: this.chartData.map(item => {
              const value = item.nota || 0;
              return [ item.datetime, value ]
            }),
            zones: [
              {
                value: 0,
                color: '#f00'
              },
              {
                value: 3,
                color: '#f00'
              },
              {
                value: 3.1,
                color: '#0f0'
              },
              {
                value: 6,
                color: '#0f0'
              },
            ],
          },
        ],
      }
    }
  }
}
</script>
