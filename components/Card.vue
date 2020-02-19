<template>
  <div class="card">
    <div class="card_container">
      <div class="card_container_thumbnail">
        <img :src="thumbnail" :alt="title">
        <div class="card_container_thumbnail_duration"><span>{{ translateDuration }}</span></div>
      </div>
      <div class="card_container_details">
        <div class="card_container_details_title">
          <p :title="title">{{ title }}</p>
        </div>
        <div class="card_container_details_views">
          <i class="material-icons" style="font-size: 19px;margin-right: 5px;">headset</i><span>{{ views }}</span>
        </div>
        <div class="card_container_details_btns">
          <div v-for="item in translateCaptions" :key="item" class="card_container_details_btns_captions"><span>{{ item }}</span></div>
          <div class="card_container_details_btns_level"><span>{{ translateLevel }}</span></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  props: {
    thumbnail: String,
    title: String,
    views: Number,
    collectCount: Number,
    duration: Number,
    publish: Number,
    level: Number,
    captions: Array
  },
  computed: {
    translateDuration() {
      let minute = Math.floor(this.duration / 60).toString()
      if(minute.length<2) {
        minute = '0' + minute
      }
      let second = Math.floor(this.duration % 60).toString()
      if(second.length<2) {
        second = '0' + second
      }
      let str = `${minute}:${second}`
      return str
    },
    translateCaptions() {
      let ary = this.captions.map((item)=>{
        switch (item) {
          case 'cht':
            return '中文'
            break
          case 'ja':
            return '日文'
            break
          case 'vi':
            return '越南文'
            break
          case 'en':
            return '英文'
            break
          default:
            break
        }
      })
      return ary
    },
    translateLevel() {
      switch (this.level) {
        case 1:
          return '初級'
          break
        case 2:
          return '中級'
          break
        case 3:
          return '中高級'
          break 
        case 4:
          return '高級'
          break   
        default:
          break
      }
    },
    
  }
}

</script>

<style lang="sass" scoped>
// *
//   border: 1px solid red
.card
  width: 25%
  min-width: 260px
  display: flex
  justify-content: center
  align-items: center
.card_container
  margin: 10px
  width: 240px
  height: 228px
  display: flex
  flex-direction: column
  box-shadow: 0 1px 3px 0 rgba(0,0,0,0.30)
  border-radius: 4px
  background: #FFFFFF
  overflow: hidden
  &:hover
    .card_container_thumbnail img
      transform: scale(1.1)
    .card_container_details_title
      text-decoration: underline
  .card_container_thumbnail
    position: relative
    width: 100%
    height: 135px
    overflow: hidden
    cursor: pointer
    img
      width: 100%
      height: 100%
      object-fit: cover
      transition: 0.3s ease-out
    .card_container_thumbnail_duration
      position: absolute
      right: 8px
      bottom: 8px
      width: 39px
      height: 20px
      background: rgba(0, 0, 0, 0.8)
      border-radius: 2px
      color: #ffffff
      font-family: SFUIText-Medium
      font-size: 12px
      line-height: 16px
      display: flex
      justify-content: center
      align-items: center
  .card_container_details
    flex-grow: 1
    position: relative
    margin: 4px 8px 8px 8px
    .card_container_details_title
      font-family: NotoSansCJKtc-Regular
      width: 100%
      height: 40px
      overflow: hidden
      font-size: 14px
      color: #212B36
      letter-spacing: 0
      line-height: 20px
      display: -webkit-box
      -webkit-line-clamp: 2
      -webkit-box-orient: vertical
      cursor: pointer
    .card_container_details_views
      width: 100%
      margin-top: 9px
      display: flex
      align-items: center
      color: #787878
      span
        font-size: 14px
    .card_container_details_btns
      display: flex
      position: absolute
      right: 0
      bottom: 0
    .card_container_details_btns_level
      display: inline-block
      height: 21px
      padding: 2px 8px
      background: #37C597
      color: #ffffff
      font-size: 12px
      border-radius: 2px
      cursor: pointer
    .card_container_details_btns_captions
      display: inline-block
      height: 21px
      padding: 2px 8px
      background: #4283E4
      color: #ffffff
      font-size: 12px
      border-radius: 2px
      margin-right: 8px
      cursor: pointer
</style>
