<script>
import {
  Chart as ChartJS,
  ArcElement,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
DoughnutController,
} from 'chart.js';

import { Doughnut, Line } from 'vue-chartjs'
import * as chartConfig from './chartConfig.ts'

ChartJS.register(
  ArcElement,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);
export default {
  name: 'App',
  components: {
    Doughnut,
    Line,
    DoughnutController
},
  data() {
    return chartConfig
  }
}
</script>
  

<template>
  <div>
    <div class="graphPanel">
        <Doughnut :data="data" :options="options" style="width: 600px;"/>
    </div>
    <div class="graphPanel" style="background-image:none;">
        <Line :data="dat" :options="opt" style="width: 600px;"/>
    </div>
  </div>
</template>

<style scoped>

.graphPanel{
    margin-top: 125px;
    margin-bottom: 65px;
    width: 600px;
    height: 600px;
    background-image: url("../../assets/images/total/Vector.png");
    background-repeat: no-repeat;
    background-position-x: 50%;
    background-position-y: 50%;
}
.graphPage{
    display: flex;
    flex-direction: column;
}


</style>

