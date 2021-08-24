<template>
  <section class="app">
    <header class="app__header">
      <button class="app__header__btn app__header__btn--back">
        <div class="app__header__btn__container">
          <img class="app__header__btn-svg"
            src="./assets/back_svg.svg" 
            alt="back">
          <p class="app__header__btn-text">
            BACK
          </p>
        </div>
      </button>
      <div class="app__header__container">
        <div class="app__header__item">
          <img class="app__header__item__img app__header__item__img--coins"
            src="./assets/coins_1.png"
            alt="coins">
          <div class="app__header__item__content">
            <p class="app__header__item__content__value">
              {{ coins }}
            </p>
            <p class="app__header__item__content__title">
              Coins
            </p>
          </div>
          <img class="app__header__item__plus"
            src="./assets/btn_plus.svg"
            alt="plus">
        </div>
        <div class="app__header__item">
          <img class="app__header__item__img app__header__item__img--crystals"
            src="./assets/crystals_1.png"
            alt="crystals">
          <div class="app__header__item__content">
            <p class="app__header__item__content__value">
              {{ crystals }}
            </p>
            <p class="app__header__item__content__title">
              Crystals
            </p>
          </div>
          <img class="app__header__item__plus"
            src="./assets/btn_plus.svg"
            alt="plus">
        </div>
      </div>
      <button class="app__header__btn app__header__btn--home">
        <div class="app__header__btn__container">
          <img class="app__header__btn-svg"
            src="./assets/home_svg.svg" 
            alt="home">
          <p class="app__header__btn-text">
            HOME
          </p>
        </div>
      </button>
    </header>
    <main class="app__main">
      <nav class="app__nav">
        <button class="app__nav__btn"
          :class="{ 'app__nav__btn--active': this.$route.name === item.patchName}"
          v-for="(item, index) in menu"
          :key="index"
          @click="toPatchName(item.patchName)"
        >
          <p class="app__nav__btn-text">
            {{ item.name }}
          </p>
          <div class="app__nav__btn-line"
            :class="{ 'app__nav__btn-line--active': this.$route.name === item.patchName}"
          >
            <div class="app__nav__btn-line-sub"></div>
          </div>
        </button>
      </nav>
      <div class="app__main__content"
        @scroll="isScroll"
      >
        <router-view></router-view>
        <div class="app__main__content__footer"
          v-if="!disableBlur"
        >
          <div class="app__main__content__footer-blur"></div>
        </div>
      </div>
    </main>
  </section>
</template>

<script>

export default {
  name: 'App',
  components: {
  },
  data() {
    return {
      coins: '100 254',
      crystals: '1 254',
      menu: [
        {
          name: 'Монстр Боксы',
          patchName: 'monsterBoxes'
        },
        {
          name: 'Банк',
          patchName: 'bank'
        },
        {
          name: 'Наборы',
          patchName: 'sets'
        },
        {
          name: 'Спецпредложения',
          patchName: 'specialOffers'
        },
        {
          name: 'Промокоды',
          patchName: 'promocodit'
        }
      ],
      disableBlur: false
    }
  },
  methods: {
    toPatchName(patchName){
      this.$router.push({ name: patchName})
    },
    isScroll( event ) {
      if (event.target.scrollTop == event.target.scrollHeight - event.target.clientHeight) {
        this.disableBlur = true;
      } else {
        this.disableBlur = false;
      }
    }
  },
}
</script>

<style lang="scss">

* {
  margin: 0;
  box-sizing: border-box;
  scrollbar-width: thin;
}

html {
  overflow: hidden;
}
::-webkit-scrollbar {
    height: 6px;
    width: 6px;
    background: rgba($color: #000000, $alpha: 0.4);
}

::-webkit-scrollbar-thumb {
    background: rgba($color: grey, $alpha: 0.6);
    -webkit-border-radius: 1ex;
    -webkit-box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.75);
}

::-webkit-scrollbar-corner {
    background:  rgba($color: #000000, $alpha: 0.8);
}

.app{
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  background-color: rgba(22, 21, 31, 1);
  overflow: auto;
  height: 100vh;
  width: 100%;
  &__header{
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    height: 90px;
    background-image: url('./assets/bg top 1.png'), linear-gradient(180deg, #07050A 0%, rgba(0, 0, 0, 0) 100%);
    background-size: 100% 100%;
    background-repeat: no-repeat;
    &__btn{
      cursor: pointer;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 140px;
      height: 54px;
      border-radius: 50px;
      border: none;
      padding: 2px;
      transition: all 0.2s linear;
      @media (max-width: 768px){
        width: 120px;
        height: 50px;
      }
      @media (max-width: 425px) {
        width: 60px;
        height: 50px;
      }
      &:hover{
        background: rgba($color: #9794C6, $alpha: 0.1);
        & .app__header__btn__container{
          background: rgba($color: #000, $alpha: 0.2);
        }
      }
      &__container{
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        background: linear-gradient(90deg, rgba($color: #000, $alpha: 0.4) 0%, rgba($color: #000, $alpha: 0) 87%);
        border-radius: 50px;
      }
      &--back{
        background: linear-gradient(90deg, rgba($color: #9794C6, $alpha: 0.1) 0%, rgba($color: #9794C6, $alpha: 0) 87%);
        & .app__header__btn__container{
          background: linear-gradient(90deg, rgba($color: #000, $alpha: 0.4) 0%, rgba($color: #000, $alpha: 0) 87%);
        }
      }
      &--home{
        background: linear-gradient(-90deg, rgba($color: #9794C6, $alpha: 0.1) 0%, rgba($color: #9794C6, $alpha: 0) 87%);
        & .app__header__btn__container{
          background: linear-gradient(-90deg, rgba($color: #000, $alpha: 0.4) 0%, rgba($color: #000, $alpha: 0) 87%);
        }
      }
      &-text{
        font-family: 'LeksaSansPro';
        font-style: normal;
        font-weight: bold;
        font-size: 18px;
        line-height: 22px;
        color: white;
        margin-left: 10px;
        @media (max-width: 425px) {
          display: none;
        }
      }
    }
    &__container{
      display: flex;
      justify-content: center;
      align-items: center;
    }
    &__item{
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 180px;
      height: 44px;
      background: rgba($color: #0D0B0F, $alpha: 0.5);
      border-radius: 100px;
      margin: 0 40px;
      padding-right: 20px;
      @media (max-width: 768px){
        width: 160px;
        height: 50px;
        margin: 0 20px;
      }
      @media (max-width: 425px) {
        width: 70px;
        height: 20px;
        margin: 0 20px;
      }
      &__img{
        &--coins{
          margin-left: -20px;
          @media (max-width: 768px){
            width: auto;
            height: 60px;
          }
          @media (max-width: 425px) {
            height: 30px;
          }
        }
        &--crystals{
          margin-left: -30px;
          @media (max-width: 768px){
            width: auto;
            height: 60px;
          }
          @media (max-width: 425px) {
            height: 30px;
            margin-left: -20px;
          }
        }
      }
      &__plus{
        cursor: pointer;
        transition: all 0.2s linear;
        border-radius: 50%;
        margin: -17.5px;
        &:hover{
          background: radial-gradient(rgba($color: #21CC14, $alpha: 0.4) 0%, rgba($color: #21CC14, $alpha: 0) 65%) ;
        }
        @media (max-width: 425px) {
          height: 50px;
          width: 50px;
          margin: -17.5px -40px -17.5px 0;
        }
      }
      &__content{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        &__value{
          font-family: 'LeksaSansPro';
          font-style: normal;
          font-weight: bold;
          font-size: 18px;
          line-height: 22px;
          color: #FFFFFF;
          @media (max-width: 768px){
            font-size: 16px;
            line-height: 18px;
          }
          @media (max-width: 425px) {
            font-size: 10px;
            line-height: 10px;
          }
        }
        &__title{
          font-family: 'Roboto';
          font-style: normal;
          font-weight: 500;
          font-size: 10px;
          line-height: 12px;
          color: #B9B7EA;
          @media (max-width: 768px){
            font-size: 8px;
            line-height: 10px;
          }
          @media (max-width: 425px) {
            display: none;
          }
        }
      }
    }
  }
  &__main{
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    height: 100%;
    padding-top: 10px;
    background-image: url('./assets/bg.png');
    @media (max-width: 425px) {
      padding-top: 0;
      background-image: url('./assets/mobile_bg.png');
    }
    background-size: 100% 100%;
    background-repeat: no-repeat;
    &__content{
      position: relative;
      width: 980px;
      height: 73vh;
      flex-shrink: 0;
      background: #242333;
      box-shadow: 0px 20px 30px rgba(0, 0, 0, 0.5);
      border-radius: 0px 0px 10px 10px;
      margin-bottom: 30px;
      overflow-y: auto;
      overflow-x: hidden;
      @media (max-width: 768px){
        width: 740px;
      }
      @media (max-width: 425px) {
        width: 280px;
        margin-top: 10px;
        border-radius: 10px 10px 10px 10px;
      }
      &__footer{
        position: absolute;
        right: 0;
        bottom: 0;
        &-blur{
          position: fixed;
          width: 975px;
          height: 156px;
          background: linear-gradient(180deg, rgba($color: #282A42, $alpha: 0) 0%, rgba($color: #282A42, $alpha: 1) 100%);
          border-radius: 0px 0px 10px 10px;
          transform: translateX(-100%) translateY(-100%);
          @media (max-width: 768px){
            width: 735px;
          }
          @media (max-width: 425px) {
            width: 275px;
          }
        }
      }
    }
  }
  &__nav{
    display: flex;
    justify-content: flex-start;
    align-items: center;
    @media (max-width: 425px) {
      width: 100%;
    }
    &__btn{
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      width: 188px;
      height: 54px;
      background: #212031;
      border-radius: 10px 10px 0px 0px;
      margin: 0 5px;
      padding: 0;
      border: none;
      transition: all 0.2s linear;
      @media (max-width: 768px){
        width: 140px;
        height: 50px;
        margin: 0 5px;
      }
      @media (max-width: 425px) {
        height: 50px;
        margin: 0;
        border-radius: 0;
      }
      &:hover{
        background: #323145;
        .app__nav__btn-text{
          color: #FFFFFF
        }
      }
      &-text{
        margin-top: 15px;
        font-family: 'LeksaSansPro';
        font-style: normal;
        font-weight: bold;
        font-size: 20px;
        line-height: 25px;
        text-align: center;
        color: rgba($color: #9794C6, $alpha: 0.5);
        transition: all 0.2s linear;
        overflow-wrap: anywhere;
        hyphens: auto;
        @media (max-width: 768px){
          font-size: 14px;
          line-height: 14px;
        }
        @media (max-width: 425px) {
          margin: 10px 10px 0 10px;
        }
      }
      &--active{
        background: #323145;
        & .app__nav__btn-text{
          color: #FFFFFF;
        }
      }
      &-line{
        margin-top: auto;
        height: 3px;
        width: 0;
        transition: all 0.2s linear;
        background: linear-gradient(90deg, rgba($color: #F52CBF, $alpha: 0.2) 0%, rgba($color: #FF7C46, $alpha: 0.2) 100%);
        &-sub{
          height: 3px;
          background: linear-gradient(90deg, #F52CBF 0%, #FF7C46 100%);
        }
        &--active{
          padding: 0 20px;
          width: 100%;
        }
      }
    }
  }
}
</style>
