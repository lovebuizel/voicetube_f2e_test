<template>
  <div>
    <h1 class="title">VoiceTube 前端作業</h1>
    <div class="container">
      <div class="optionBar">
        <div class="sort">
          <span class="sort_title">排序</span>
          <div v-for="item in sortArray" :key="item.number" class="sort_btn" :class="[sortType===item.number ? 'sort_btn-active' : '']" @click="changeSort(item.number)">{{ item.name }}</div>
        </div>
        <div class="filter">
          <span class="filter_title">長度</span>
          <div v-for="item in filterArray" :key="item.number" class="filter_btn" :class="[filterType===item.number ? 'filter_btn-active' : '']" @click="changeFilter(item.number)">{{ item.name }}</div>
        </div>
      </div>
      <hr class="hrClass">
      <Card v-for="item in data" :key="item.id" 
        :thumbnail="item.thumbnail"
        :title="item.title"
        :views="item.views"
        :collectCount="item.collectCount"
        :duration="item.duration"
        :publish="item.publish"
        :level="item.level"
        :captions="item.captions"
      />
      <p v-if="data.length == 0" class="noResult">沒有篩選結果</p>
    </div>
  </div>
</template>

<script>
import Card from '~/components/Card.vue'

export default {
  async asyncData({ $axios }) {
    const fetchData = await $axios.$get('https://us-central1-lithe-window-713.cloudfunctions.net/frontendQuiz')
    if(fetchData.status) {
      return { fetchData: fetchData.data }
    } else {
      return { fetchData: []}
    }
  },
  components: {
    Card
  },
  data() {
    return {
      sortArray: [
        { name: '發佈時間', number: 1},
        { name: '觀看次數', number: 2},
        { name: '收藏次數', number: 3}
      ],
      filterArray: [
        { name: '不限', number: 1},
        { name: '4 分鐘以下', number: 2},
        { name: '5 - 10 分鐘', number: 3},
        { name: '超過 10 分鐘', number: 4},
      ],
      sortType: 1,
      filterType: 1
    }
  },
  computed: {
    data() {
      let newData = JSON.parse(JSON.stringify(this.fetchData))

      switch (this.filterType) {
        case 1:
          break
        case 2:
          newData = newData.filter(item => item.duration < 240)
          break
        case 3:
          newData = newData.filter(item => item.duration > 300 && item.duration < 600)
          break
        case 4:
          newData = newData.filter(item => item.duration >= 600)
          break
        default:
          break
      }

      switch (this.sortType) {
        case 1:
          newData.sort((a, b) => {
            return b.publish - a.publish;
          })
          break
        case 2:
          newData.sort((a, b) => {
            return b.views - a.views;
          })
          break
        case 3:
          newData.sort((a, b) => {
            return b.collectCount - a.collectCount;
          })
          break
        default:
          break
      }

      return newData
    }
  },
  methods: {
    changeSort(newType) {
      if(newType !== this.sortType) {
        this.sortType = newType
      }
    },
    changeFilter(newType) {
      if(newType !== this.filterType) {
        this.filterType = newType
      }
    }
  }
}
</script>

<style lang="sass" scoped>
.title
  text-align: center
  margin-top: 2rem
  font-family: sans-serif, '微軟正黑體'
.optionBar
  width: 100%
  display: flex
  flex-wrap: wrap
  margin: 56px 24px 0 24px

.sort, .filter
  margin: 0 40px 10px 8px

.sort_title, .filter_title
  margin-right: 24px
  font-family: NotoSansCJKtc-Medium
  font-size: 14px
  color: #787878
  letter-spacing: 0
  line-height: 21px
  user-select: none

.sort_btn, .filter_btn
  display: inline-block
  margin-right: 8px
  padding: 4px 8px
  background: transparent
  color: #787878
  font-family: NotoSansCJKtc-Regular
  font-size: 12px
  letter-spacing: 0
  line-height: 16px
  border-radius: 4px
  cursor: pointer
  user-select: none

.sort_btn-active, .filter_btn-active
  background: #4283E4
  color: #ffffff

.hrClass
  width: 100%
  margin-top: 10px
  margin-bottom: 31px
  border: none
  border-top: 1px solid #D8D8D8

.container
  margin: 0 auto
  max-width: 1366px
  min-height: 100vh
  display: flex
  justify-content: space-evenly
  align-content: flex-start
  flex-wrap: wrap

.noResult
  font-size: 14px
  color: #787878
</style>
