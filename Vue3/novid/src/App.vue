<script lang='ts' setup>
import { onMounted } from 'vue';
import { useStore } from '@/stores'
import * as echarts from 'echarts'
import './assets/china'
const store = useStore();
store.getList()

onMounted(() => {

  const chart = echarts.init(document.querySelector('#map') as HTMLElement)
  const data = [
    {
      name: "内蒙古",
      itemStyle: {
        areaColor: "#56b1da",
      },
      value: [110.3467, 41.4899]
    },
  ];
  const options = {
    // backgroundColor: "black",
    geo: {
      map: "china",
      aspectScale: 0.8,
      layoutCenter: ["50%", "50%"],
      layoutSize: "120%",
      itemStyle: {
        normal: {
          areaColor: {
            type: "linear-gradient",
            x: 0,
            y: 1200,
            x2: 1000,
            y2: 0,
            colorStops: [
              {
                offset: 0,
                color: "#152E6E", // 0% 处的颜色
              },
              {
                offset: 1,
                color: "#0673AD", // 50% 处的颜色
              },
            ],
            global: true, // 缺省为 false
          },
          shadowColor: "#0f5d9d",
          shadowOffsetX: 0,
          shadowOffsetY: 15,
          opacity: 0.5,
        },
        emphasis: {
          areaColor: "#0f5d9d",
        },
      },

      regions: [
        {
          name: "南海诸岛",
          itemStyle: {
            areaColor: "rgba(0, 10, 52, 1)",
            borderColor: "rgba(0, 10, 52, 1)",
            normal: {
              opacity: 0,
              label: {
                show: false,
                color: "#009cc9",
              },
            },
          },
          label: {
            show: false,
            color: "#FFFFFF",
            fontSize: 12,
          },
        },
      ],
    },
    series: [
      {
        type: "map",
        selectedMode: "multiple",
        mapType: "china",
        aspectScale: 0.8,
        layoutCenter: ["50%", "50%"], //地图位置
        layoutSize: "120%",
        zoom: 1, //当前视角的缩放比例
        // roam: true, //是否开启平游或缩放
        scaleLimit: {
          //滚轮缩放的极限控制
          min: 1,
          max: 2,
        },
        label: {
          show: false,
          color: "#FFFFFF",
          fontSize: 16,
        },
        itemStyle: {
          normal: {
            areaColor: "#0c3653",
            borderColor: "#1cccff",
            borderWidth: 1.8,
          },
          emphasis: {
            areaColor: "#56b1da",
            label: {
              show: false,
              color: "#fff",
            },
          },
        },
        data: data,
      },
      {
        name: 'Top 5',
        type: 'scatter',
        coordinateSystem: 'geo',
        //   symbol: 'image://http://ssq168.shupf.cn/data/biaoji.png',
        // symbolSize: [30,120],
        // symbolOffset:[0, '-40%'] ,
        label: {
          normal: {
            show: false,
          }
        },
        itemStyle: {
          normal: {
            color: '#D8BC37', //标志颜色
          }
        },
        data: data,
        showEffectOn: 'render',
        rippleEffect: {
          brushType: 'stroke'
        },
        hoverAnimation: true,
        zlevel: 1
      },
    ],
  };


  chart.setOption(options)

})

</script>

<template>
  <div class='box'>
    <div class="box-left"></div>
    <div class="box-center" id="map">
    </div>
    <div class="box-right"></div>

  </div>
</template>

<style lang='scss' scoped>
.box {
  height: 100%;
  display: flex;
  justify-content: space-between;
  background-color: #fff;

  &-left {
    width: 400px;
  }

  &-center {
    flex: 1;
  }

  &-right {
    width: 400px;
  }
}
</style>