<template>
  <div id="app">
    <div class="flipmenu">
      <span v-for="item in imgs" :key="item.docId" @click="switchToPage(item.docId)">
        {{ item.title }}
      </span>
    </div>
    <div id="flipbook">
      <div v-for="item in imgs" :key="item.docId" :style="{
        backgroundImage: 'url(' + item.imgurl + ')',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'contain'
      }"></div>
    </div>
  </div>
</template>

<script>
import $ from 'jquery'
// eslint-disable-next-line no-unused-vars
import turn from '@/utils/turn.js'

const dataStructs = [
  {
    title: 'docA',
    docId: '100001',
    imgurl: 'assets/01.jpg'
  },
  {
    title: 'docB',
    docId: '100002',
    imgurl: 'assets/02.jpg'
  },
  {
    title: 'docC',
    docId: '100003',
    imgurl: 'assets/03.jpg'
  },
  {
    title: 'docD',
    docId: '100004',
    imgurl: 'assets/04.jpg'
  },
  {
    title: 'docE',
    docId: '100005',
    imgurl: 'assets/05.jpg'
  },
  {
    title: 'docF',
    docId: '100006',
    imgurl: 'assets/06.jpg'
  }
]

export default {
  name: 'App',
  data() {
    return {
      imgs: dataStructs
    }
  },
  methods: {
    onTurn() {
      $('#flipbook').turn({
        acceleration: true, //启用硬件加速,移动端有效
        display: 'double', //显示：single=单页，double=双页，默认双页
        duration: 800, // 翻页撒开鼠标，页面的延迟
        page: 1, // 默认显示第几页                 
        gradients: true, // 折叠处的光泽渐变，主要体现翻页的立体感、真实感
        autoCenter: true, //
        turnCorners: 'bl,br', // 设置可翻页的页角(都试过了，乱写 4个角都能出发卷起)， bl,br   tl,tr   bl,tr 
        height: '70%', //页面高度
        width: '60%' //翻书范围宽度，总宽度
      })
    },
    switchToPage(page) {
      $("#flipbook").turn("page", dataStructs.findIndex(item => item.docId === page)); // 点击前往目标页
    }
  },
  mounted() {
    this.onTurn()
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
}

#app {
  width: 100vw;
  height: 100vh;
  background-color: #CCC;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
}

@keyframes scaleAnimation {
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(1.2);
  }

  100% {
    transform: scale(1);
  }
}

.flipmenu {
  margin: 30px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.flipmenu span {
  cursor: pointer;
  transition: color 0.3s ease-in-out, transform 0.5s ease-in-out;
}

.flipmenu span:hover {
  color: red;
  animation: scaleAnimation 1s infinite;
}

.flipmenu span.active {
  color: blue;
}
</style>
