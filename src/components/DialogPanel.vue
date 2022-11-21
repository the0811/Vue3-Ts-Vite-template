<!--  -->
<template>
  <!-- <el-dialog center :visible="dialogVisible" @close="close" :close-on-click-modal="false" :width="width || '80%'">
    <span slot="title" class="head" :style="headStyle">{{ title }}</span>
    <slot></slot>

  </el-dialog> -->


  <!-- <el-dialog center :visible="dialogVisible"  :close-on-click-modal="false" :width="width || '80%'">
    <span slot="title" >{{ title }}</span>
 

  </el-dialog> -->
  <!-- <el-rate v-model="value2" :colors="colors" /> -->
  <!-- {{title}} -->
  {{dialogVisible}}
<!-- 5555 -->

<el-dialog
right
    v-model="dialogVisible"
    title="Tips"
    width="30%"
    :before-close="handleClose"
    :close-on-click-modal="false"
    :append-to-body="true"
    draggable
  >
  <span slot="title" class="head" :style="headStyle">{{ title }}</span>
  <slot></slot>
   
  </el-dialog>




<el-button type="primary">999</el-button>

</template>

<script setup>
// import "@/utils/ds-directives-dialog-drag";
import { ref, reactive } from 'vue' 
// const props = defineProps({//子组件通过defineProps接收，定义类型
//   dialogVisible: {
//     type: Boolean,
//     default: false
//   },
//   title: {
//     type: String,
//     default: '0分钟'
//   },
//   width: {
//     type: String,
//     default: '0分钟'
//   }
// })
const props = defineProps(['dialogVisible','title','width'])
console.log(props);

 
</script>

<style lang="scss" scoped>
:deep(.el-dialog) {
  display: flex;
  display: -ms-flex;
  /* 兼容IE */
  flex-direction: column;
  -ms-flex-direction: column;
  /* 兼容IE */
  margin: 0 !important;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-height: calc(100% - 30px);
  max-width: calc(100% - 30px);
  border-radius: 5px;

  .el-dialog__body {
    max-height: 100%;
    flex: 1;
    -ms-flex: 1 1 auto;
    /* 兼容IE */
    overflow-y: auto;
    overflow-x: hidden;
  }

  .el-dialog__header {
    background: #008dff;
    height: 42px;
    line-height: 42px;
    padding: 0 0 0 10px;
    text-align: left;
    font-size: 18px;
    border-radius: 5px 5px 0 0;
    // border-bottom: 1px solid #A6E1FF;
    color: #fff;
    position: relative;

    .el-dialog__headerbtn {
      top: 11px;
      position: absolute;
      right: 8px;

      .el-dialog__close {
        top: 10px;
        float: right;
        color: #fff;
        font-size: 22px;
      }
    }
  }

  .el-dialog__body {
    padding: 0;
    border-radius: 0 0 5px 5px;
    overflow-y: auto;
  }

  .el-dialog__wrapper {
    overflow: hidden;
  }
}
</style>