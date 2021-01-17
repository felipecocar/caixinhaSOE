import Vue from 'vue';
import HighchartsVue from "highcharts-vue";
import Highcharts from "highcharts/highcharts";
import dataModule from "highcharts/modules/data";

dataModule(Highcharts);

Vue.use(HighchartsVue);