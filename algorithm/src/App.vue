<!--
    排序算法：冒泡排序、选择排序、插入排序、希尔排序、归并排序、快速排序、堆排序等。

    查找算法：顺序查找、二分查找、哈希查找等。

    字符串匹配算法：暴力匹配、KMP算法、Boyer-Moore算法等。

    图论算法：最短路径算法、最小生成树算法、拓扑排序等。

    动态规划算法：背包问题、最长公共子序列、最长上升子序列等。

    贪心算法：最小生成树、单源最短路径等。

    分治算法：快速排序、归并排序等。

    网络流算法：最大流问题、最小割问题等。

    数学算法：欧几里得算法、素数判断、大数计算等
 -->
<script setup lang="ts">
import {ref} from "vue";
import {getArray, generateUniqueRandomIntegers} from "@/util/tools";
// 原始数据
const rawData = ref('')
// 排序后的数据
const result = ref('')

/**
 * 冒泡(升序)排序。
 * 冒泡排序是最简单的排序算法之一，其基本思想是将相邻的两个元素进行比较，如果顺序不对就交换它们的位置。该算法的时间复杂度为O(n^2)。
 * 升序 - 里面for 若前者 < 后者，交换；每循环一次，外层for长度减1
 */
const maopaoClickListener = () => {
    let length: number = 4;
    let array: number[] = generateUniqueRandomIntegers(length, 100, 1);
    rawData.value = JSON.stringify([...array])
    for (let i = 0; i < length - 1; i++) {
        let flag = false;
        for(let j = 0; j < length - 1 - i; j++) {
            if(array[j] > array[j+1]){
                let temp = array[j];
                array[j] = array[j+1];
                array[j+1] = temp;
                flag = true;
            }
        }
        if (!flag) break;
    }
    result.value = JSON.stringify([...array])
}
/**
 * 选择排序
 * 选择排序的基本思想是每次选择未排序序列中最小的元素，将其放到已排序序列的末尾。该算法的时间复杂度也为O(n^2)。
 */
const xuanzeClickListener = () => {
    let length: number = 4;
    let array: number[] = getArray(length);
    rawData.value = JSON.stringify({...array})
    for (let i = 0; i < length; i++) {
        let minIndex = i
        for (let j = i + 1; j < length; j++){
            if (array[i] > array[j]) {
                minIndex = j
            }
        }
        let temp = array[i]
        array[i] = array[minIndex]
        array[minIndex] = temp
    }
    result.value = JSON.stringify({...array})
}
/**
 * 插入排序。
 * 插入排序的基本思想是将未排序序列中的每个元素插入到已排序序列的合适位置。该算法的时间复杂度也为O(n^2)。
 */
const charuClickListener = () => {
    let length: number = 4;
    let array: number[] = getArray(length);
    rawData.value = JSON.stringify({...array})
    for (let i = 1; i < length; i++) {
        let itemI = array[i]
        for (let j = i - 1; j >= 0; j--){
            let itemJ = array[j]
            if(itemI < itemJ) {
                array[j] = itemI
                array[i] = itemJ
            }
        }
    }
    result.value = JSON.stringify({...array})
}
/**
 * 希尔排序
 */
const xierClickListener = () => {

}
/**
 * 归并排序
 */
const guibingClickListener = () => {

}
/**
 * 快速排序
 * 快速排序的基本思想是选择一个基准元素，将序列分成两部分，一部分元素比基准元素小，一部分元素比基准元素大，然后分别对这两部分进行快速排序。该算法的时间复杂度为O(nlogn)。
 */
const kuaisuClickListener = () => {

}
/**
 * 堆排序
 */
const duiClickListener = () => {

}
/**
 * 顺序查找
 */
const shunxuClickListener = () => {

}
/**
 * 二分查找
 * 二分查找，也称为折半查找，它要求数据集合必须是有序的，它的基本思想是将数据集合分成两半，
 * 如果目标元素比中间元素小，就在前半部分继续查找，否则在后半部分继续查找，直到找到目标元素或数据集合为空。二分查找的时间复杂度为O(logn)。
 */
const erfenClickListener = () => {

}
/**
 *
 */
const haxiClickListener = () => {

}
/**
 * 线性查找
 * 线性查找是最简单的查找算法之一，它的基本思想是从数据集合的第一个元素开始逐个比较，
 * 直到找到目标元素或遍历完整个数据集合。线性查找的时间复杂度为O(n)。
 */
const xianxingClickListener = () => {

}
</script>

<template>
  <div class="main">
      <div class="title">
          <span>算法示例</span>
      </div>
      <div class="content">
          排序算法：
          <button @click="maopaoClickListener">冒泡排序</button>
          <button @click="xuanzeClickListener">选择排序</button>
          <button @click="charuClickListener">插入排序</button>
          <button @click="xierClickListener">希尔排序</button>
          <button @click="guibingClickListener">归并排序</button>
          <button @click="kuaisuClickListener">快速排序</button>
          <button @click="duiClickListener">堆排序</button>
      </div>
      <div class="content">
          查找算法：
          <button @click="shunxuClickListener">顺序查找</button>
          <button @click="erfenClickListener">二分查找</button>
          <button @click="haxiClickListener">哈希查找</button>
          <button @click="xianxingClickListener">线性查找</button>
      </div>
      <div class="footer">
          <div class="result">
              原始数据：{{rawData}}
          </div>
          <div class="result">
              排序后：{{result}}
          </div>
      </div>
  </div>
</template>

<style scoped>
.main {
    display: flex;
    flex-direction: column;
    width: 80vw;
    height: 100vh;
    margin-left: 10vw;
    margin-right: 10vw;
    .title {
        width: 100%;
        height: auto;
        display: flex;
        justify-content: center;
        margin-top: 20px;
        > span {
            font-size: 30px;
            font-weight: bold;
        }
    }
    .content {
        > button {
            margin-left: 10px;
        }
    }
    .footer {
        margin-top: 20px;
        .result {
            font-size: 24px;
            color: black;
        }
    }
}
</style>
