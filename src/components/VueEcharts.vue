<!--  -->
<template> 
<div :id="id"  ref="chartsDom" ></div>
</template>



<script setup lang='ts'>
import { onMounted, defineProps, ref ,getCurrentInstance} from 'vue'
import { nanoid } from 'nanoid'
import * as echarts from 'echarts'
const { ctx, proxy } = getCurrentInstance() as any;
const props = defineProps({
  
  options: {
    type: Object,
    default: null
  },
  width: {
    type: String,
    default: 'calc(100% - 5px)'
  },
  height: {
    type: String,
    default: '195px'
  }
})

console.log('%c [ props ]-15', 'font-size:13px; background:pink; color:#bf2c9f;', props.options)
const id = ref(`vue-echarts-${nanoid()}`) 
const style = ref({
  height: props.height,
  width: props.width
}) 
let chart: any = null
const initEcharts = () => {
  if(!chart){
    chart = echarts.init(document.getElementById(id.value)!)
  }else {
    return
  }
  if(!props.options) return
  console.log('%c [ chart ]-43', 'font-size:13px; background:pink; color:#bf2c9f;', chart)
  chart.setOption(props.options)  
  
}
onMounted(() => {
  // console.log('[ proxy ] >', proxy.$refs)
  // proxy.$refs.chartsDom.style.width=500
	// proxy.$refs.chartsDom.style.height=500


  Object.defineProperty(document.getElementById(id.value),'clientWidth',{get:function(){return 1300}})
	Object.defineProperty(document.getElementById(id.value),'clientHeight',{get:function(){return '225'}})
 


  initEcharts()
})
</script>

<style lang="scss" scoped>
  
</style>