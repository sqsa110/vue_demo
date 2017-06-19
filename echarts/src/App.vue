<template>
  <div id="app">
    <div class="histogram"></div>
    <div class="piechart"></div>
  </div>
</template>

<script>
import echarts from 'echarts'
let option = {
  backgroundColor: '#fff',
  title: {
    text: '广告详情',
    textAlign: 'center',
    textBaseline: 'top',
    padding: 5,
    borderWidth: 1,
    borderColor: '#ccc',
    left: 'center'
  },
  visualMap: {
    show: false,
    min: 80,
    max: 600,
    inRange: {
      colorLightness: [1, 0]
    }
  },
  tooltip: {
    trigger: 'item',
    formatter: '{a} <br />{b}: {c} ({d}%)'
  },
  series: [
    {
      name: '访问来源',
      type: 'pie',
      radius: '55%',
      data: [
        {value: 235, name: '视频广告'},
        {value: 330, name: '联盟广告'},
        {value: 310, name: '邮件营销'},
        {value: 335, name: '直接访问'},
        {value: 400, name: '搜索引擎'}
      ],
      roseType: 'angle',
      label: {
        normal: {
          textStyle: {
            color: 'rgba(0,0,0,0.3)'
          }
        }
      },
      labelLine: {
        normal: {
          lineStyle: {
            color: 'rgba(0,0,0,0.3)'
          }
        }
      },
      itemStyle: {
        normal: {
          color: '#0066ff',
          shadowBlur: 100,
          shadowColor: 'rgba(0,0,0,0.5)'
        }
      }
    }
  ]
}
let option2 = {
  title: {
    text: '测试',
    textAlign: 'center',
    textBaseline: 'top',
    padding: 5,
    borderWidth: 1,
    borderColor: '#ccc',
    left: '70%'
  },
  tooltip: {
    trigger: 'item'
  },
  grid: {
    right: '2%',
    left: '25%',
    bottom: '15%',
    top: '10%'
  },
  legend: {
    data: [{
      name: '销量',
      icon: 'image://../static/img/timg.jpg',
      textStyle: {
        fontWeight: 'bold',
        color: 'red'
      }
    }, '销量一', '价格', '价格一'],
    orient: 'vertical',
    //    backgroundColor : '#eee',
    //    borderColor : 'rgba(178,34,34,0.8)',
    //    borderWidth : 4,
    //    padding : 5,
    itemGap: 10,
    left: '1%',
    top: 'center',
    textStyle: {color: 'red'},
    selected: {
      '销量一': false,
      '价格一': false
    }
  },
  xAxis: {
    data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
  },
  yAxis: [
    {
      type: 'value',
      axisLavel: {
        formatter: '{value} 件'
      }
    },
    {
      type: 'value',
      axisLabel: {
        formatter: '￥{value}'
      },
      splitLine: {show: false}
    }
  ],
  series: [
    {
      name: '销量',
      type: 'bar',
      data: [5, 20, 36, 10, 10, 20]
    },
    {
      name: '销量一',
      type: 'bar',
      data: [5, 20, 36, 10, 10, 20]
    },
    {
      name: '价格',
      type: 'line',
      yAxisIndex: 0,
      data: [50, 10, 36, 25, 30, 20]
    },
    {
      name: '价格一',
      type: 'line',
      data: []
    }
  ]
}

export default {
  name: 'app',
  data () {
    return {
      histogram_option: option,
      piechart_option: option2
    }
  },
  components: {
  },
  mounted () {
    console.log('mounted')

    var myChart = echarts.init(document.getElementsByClassName('histogram'))
    myChart.setOption(this.histogram_option)

    var myChart2 = echarts.init(document.getElementsByClassName('piechart'))
    myChart2.setOption(this.piechart_option)

  }
}
</script>

<style>

</style>
