# zt-card 选择卡片

## 效果

<ZTBtn />

## 代码

```html
<script setup>
  import { ref } from 'vue'

  const a = [
    {
      bgcolor: '#D4ECFF',
      color: '#41C2FE',
      iconName: 'iconFpaFunctionFresh',
      id: 33342,
      programDesc: '程序描述下面小字体',
      programName: '浴巾',
      programTitle: '程序描述上面大字体',
      selectIndex: 0,
      unitIndex: 0,
      washType: 2,
      weight: '1000'
    },
    {
      bgcolor: '#D4ECFF',
      color: '#41C2FE',
      iconName: 'iconFpaFunctionFresh',
      id: 33343,
      programDesc: '程序描述下面小字体1',
      programName: '浴巾11',
      programTitle: '程序描述上面大字体1',
      selectIndex: 1,
      unitIndex: 0,
      washType: 2,
      weight: '1000'
    }
  ]
  const programInfo = ref({
    bgcolor: '#D4ECFF',
    color: '#41C2FE',
    iconName: 'iconFpaFunctionFresh',
    id: 33342,
    programDesc: '程序描述下面小字体',
    programName: '浴巾',
    programTitle: '程序描述上面大字体',
    selectIndex: 0,
    unitIndex: 0,
    washType: 2,
    weight: '1000'
  })
  const selectIndex = ref(0)
  const selectCard = index => {
    selectIndex.value = index
  }
</script>

<template>
  <fpa-card
    :select-id="selectIndex"
    :card-data="a"
    :program-info="programInfo"
    @select="selectCard"
  />
</template>
```

:::

<script setup lang='ts'>
  import { ref } from 'vue'

  const a = [
    {
      bgcolor: '#D4ECFF',
      color: '#41C2FE',
      iconName: 'iconFpaFunctionFresh',
      id: 33342,
      programDesc: '程序描述下面小字体',
      programName: '浴巾',
      programTitle: '程序描述上面大字体',
      selectIndex: 0,
      unitIndex: 0,
      washType: 2,
      weight: '1000'
    }
  ]
  const programInfo = ref({
    bgcolor: '#D4ECFF',
    color: '#41C2FE',
    iconName: 'iconFpaFunctionFresh',
    id: 33342,
    programDesc: '程序描述下面小字体',
    programName: '浴巾',
    programTitle: '程序描述上面大字体',
    selectIndex: 0,
    unitIndex: 0,
    washType: 2,
    weight: '1000'
  })
  const selectIndex = ref(0)
  const selectCard = index => {
    selectIndex.value = index
  }
</script>
<style lang="less" scoped>
  /* .box {
    background-color: #fff;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
    .fpa-card {
      margin-bottom: 20px;
    }
  } */
</style>
