<template>
  <div class="content">
    <div class="content__crystals">
      <p class="content__crystals__title">
        Кристаллы Незера
      </p>
      <div class="content__crystals__items">
        <div class="content__crystals__item"
          v-for="(item, index) in crystals"
          :key="index"
        >
          <div class="content__crystals__item__bonus">
            <img class="content__crystals__item__bonus-img"
              src="../assets/Coin-final-flat-alfa.png" 
              alt="coin">
            <p class="content__crystals__item__bonus-text">
              {{ item.bonus }}
            </p>
          </div>
          <img class="content__crystals__item-img"
            :src="item.img" 
            alt="crystal">
          <p class="content__crystals__item-value">
            {{ item.value }}
          </p>
          <p class="content__crystals__item-title">
            {{ item.title }}
          </p>
          <button class="content__crystals__item-btn">
            <div class="content__crystals__item-btn-container">
              <p class="content__crystals__item-btn-text">
                Купить
              </p>
              <img class="content__crystals__item-btn-img"
                src="../assets/$.svg" 
                alt="$">
              <p class="content__crystals__item-btn-price">
                {{ item.price }}
              </p>
            </div>
          </button>
        </div>
      </div>
    </div>
    <div class="content__coins">
      <p class="content__coins__title">
        Кристаллы Незера
      </p>
      <div class="content__coins__items">
        <div class="content__coins__item"
          v-for="(item, index) in coins"
          :key="index"
        >
          <img class="content__coins__item-img"
            :src="item.img" 
            alt="crystal">
          <p class="content__coins__item-value">
            {{ item.value }}
          </p>
          <p class="content__coins__item-title">
            {{ item.title }}
          </p>
          <button class="content__coins__item-btn">
            <div class="content__coins__item-btn-container">
              <p class="content__coins__item-btn-text">
                Купить
              </p>
              <img class="content__coins__item-btn-img"
                src="../assets/crystals_cyrecy.png" 
                alt="$">
              <p class="content__coins__item-btn-price">
                {{ item.price }}
              </p>
            </div>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import crystal_1 from '../assets/one crystal 1.png'
import crystal_2 from '../assets/crystals_1 1.png'
import crystal_3 from '../assets/crystals_1 2.png'
import crystal_4 from '../assets/crystals_1 3.png'
import crystal_5 from '../assets/crystals_1 4.png'
import crystal_6 from '../assets/crystals_1 5.png'
import crystal_7 from '../assets/crystals_1 6.png'
import crystal_8 from '../assets/crystals_1 7.png'
import crystal_9 from '../assets/crystals_1 8.png'
import coins_1 from '../assets/coins_1 1.png'
import coins_2 from '../assets/coins_1 2.png'
import coins_3 from '../assets/coins_1 3.png'
import coins_4 from '../assets/coins_1 1.png'
import coins_5 from '../assets/coins_1 5.png'
import coins_6 from '../assets/coins_1 6.png'

export default {
  name: 'Content',
  data() {
    return {
      crystals: [
        {
          bonus: 'x500',
          value: 'x100',
          title: 'Handful of Coins',
          img: crystal_1,
          price: '10'
        },
        {
          bonus: 'x500',
          value: 'x500',
          title: 'Handful of Coins',
          img: crystal_2,
          price: '10'
        },
        {
          bonus: 'x750k',
          value: 'x1000',
          title: 'Handful of Coins',
          img: crystal_3,
          price: '10'
        },
        {
          bonus: 'x500',
          value: 'x1500',
          title: 'Handful of Coins',
          img: crystal_4,
          price: '10'
        },
        {
          bonus: 'x500',
          value: 'x100',
          title: 'Handful of Coins',
          img: crystal_5,
          price: '10'
        },
        {
          bonus: 'x500',
          value: 'x500',
          title: 'Handful of Coins',
          img: crystal_6,
          price: '10'
        },
        {
          bonus: 'x750k',
          value: 'x1000',
          title: 'Handful of Coins',
          img: crystal_7,
          price: '10'
        },
        {
          bonus: 'x500',
          value: 'x1500',
          title: 'Handful of Coins',
          img: crystal_8,
          price: '10'
        },
        {
          bonus: 'x500',
          value: 'x100',
          title: 'Handful of Coins',
          img: crystal_9,
          price: '10'
        }
      ],
      coins: [
        {
          value: 'x1000',
          title: 'Handful of Coins',
          img: coins_1,
          price: '10'
        },
        {
          value: 'x5000',
          title: 'Handful of Coins',
          img: coins_2,
          price: '10'
        },
        {
          value: 'x10000',
          title: 'Handful of Coins',
          img: coins_3,
          price: '10'
        },
        {
          value: 'x10000',
          title: 'Handful of Coins',
          img: coins_4,
          price: '10'
        },
        {
          value: 'x1000',
          title: 'Handful of Coins',
          img: coins_5,
          price: '10'
        },
        {
          value: 'x5000',
          title: 'Handful of Coins',
          img: coins_6,
          price: '10'
        }
      ]
    }
  },
}
</script>

<style lang="scss">
.content{
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  &__crystals{
    width: 100%;
    border-bottom: 1px solid rgba($color: #9794C6, $alpha: 0.1);
    padding: 25px 25px 20px 25px;
    @media (max-width: 425px) {
      padding: 10px 10px 10px 10px;
    }
    &__title{
      font-family: 'LeksaSansPro';
      font-style: normal;
      font-weight: bold;
      font-size: 30px;
      line-height: 37px;
      text-align: center;
      color: #FFFFFF;
      margin-bottom: 20px;
      @media (max-width: 768px){
        font-size: 24px;
        line-height: 32px;
      }
      @media (max-width: 425px) {
        display: none;
      }
    }
    &__items{
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr;
      width: 100%;
      @media (max-width: 768px){
        grid-template-columns: 1fr 1fr 1fr;
      }
      @media (max-width: 425px) {
        grid-template-columns: 1fr 1fr;
      }
    }
    &__item{
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;
      position: relative;
      overflow: hidden;
      width: 218px;
      height: 300px;
      margin: 10px 0;
      background: url('../assets/bg_card.svg');
      background-repeat: no-repeat;
      background-size: 101.5% 101.5%;
      background-position: 50% 50%;
      filter: drop-shadow(0px 10px 20px rgba(0, 0, 0, 0.25));
      &:first-of-type .content__crystals__item-img{
        margin: 40px 0 30px 0;
        @media (max-width: 425px) {
          margin: 20px 0 10px 0;
        }
      }
      @media (max-width: 425px) {
        width: 124.1px;
        height: 171px;
      }
      &-img{
        margin: 20px 0 10px 0;
        @media (max-width: 425px) {
          width: 87px;
          height: 48px;
        }
      }
      &-value{
        font-family: 'Roboto';
        font-style: normal;
        font-weight: bold;
        font-size: 30px;
        line-height: 160%;
        text-align: center;
        color: #FFFFFF;
        @media (max-width: 425px) {
          font-size: 20px;
        }
      }
      &-title{
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 160%;
        text-align: center;
        color: #FFFFFF;
        @media (max-width: 425px) {
          font-size: 11px;
        }
      }
      &-btn{
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 25px;
        padding: 15px 30px;
        width: 154.71px;
        height: 47px;
        border: none;
        background: linear-gradient(90deg, #682FBD 0%, #CB4CBC 100%);
        padding: 2px;
        border-radius: 146px;
        transition: all 0.2s linear;
        @media (max-width: 425px) {
          margin-top: 5px;
          width: 98px;
          height: 27px;
        }
        &:hover{
          background: linear-gradient(90deg, #682FCF 0%, #CB4CCF 100%);
          & .content__crystals__item-btn-container{
            background: linear-gradient(90deg, #24233F 0%, #3C3B5F 100%);
          }
        }
        &-container{
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, #242333 0%, #3C3B53 100%);
          border-radius: 146px;
          transition: all 0.2s linear;
        }
        &-text{
          font-family: 'Roboto';
          font-style: normal;
          font-weight: bold;
          font-size: 14px;
          line-height: 16px;
          text-align: center;
          color: #FFFFFF;
          margin-right: 20px;
          @media (max-width: 425px) {
            margin-right: 10px;
            font-size: 11px;
            line-height: 13px
          }
        }
        &-img{
          @media (max-width: 425px) {
            width: 14px;
            height: 14px;
          }
        }
        &-price{
          margin-left: 5px;
          font-family: 'Roboto';
          font-style: normal;
          font-weight: 500;
          font-size: 14px;
          line-height: 16px;
          color: #FFFFFF;
          @media (max-width: 425px) {
            margin-left: 0;
            font-size: 11px;
            line-height: 13px
          }
        }
      }
      &__bonus{
        width: 120px;
        height: 25px;
        position: absolute;
        display: flex;
        justify-content: center;
        align-items: center;
        left: -30px;
        top: 15px;
        transform: rotate(-43.67deg);
        background: linear-gradient(53.76deg, #FF4910 10.28%, #FF4910 87.14%);
        @media (max-width: 425px) {
          width: 100px;
          height: 20px;
          left: -25px;
          top: 10px;
        }
        &-img{
          width: 25px;
          height: 25px;
          @media (max-width: 425px) {
            width: 20px;
            height: 20px;
          }
        }
        &-text{
          font-family: 'Roboto';
          font-style: normal;
          font-weight: bold;
          font-size: 13px;
          line-height: 160%;
          text-align: center;
          color: #FFFFFF;
          text-shadow: 0px 1px 1px rgba(0, 0, 0, 0.45);
          @media (max-width: 425px) {
            font-size:  11px;
          }
        }
      }
    }
  }
  &__coins{
    width: 100%;
    padding: 25px 25px 20px 25px;
    @media (max-width: 425px) {
      padding: 10px 10px 10px 10px;
    }
    &__title{
      font-family: 'LeksaSansPro';
      font-style: normal;
      font-weight: bold;
      font-size: 30px;
      line-height: 37px;
      text-align: center;
      color: #FFFFFF;
      margin-bottom: 20px;
      @media (max-width: 768px){
        font-size: 24px;
        line-height: 32px;
      }
      @media (max-width: 425px) {
        display: none;
      }
    }
    &__items{
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr;
      width: 100%;
      @media (max-width: 768px){
        grid-template-columns: 1fr 1fr 1fr;
      }
      @media (max-width: 425px) {
        grid-template-columns: 1fr 1fr;
      }
    }
    &__item{
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;
      position: relative;
      overflow: hidden;
      width: 218px;
      height: 300px;
      margin: 10px 0;
      background: url('../assets/bg_card.svg');
      background-repeat: no-repeat;
      background-size: 101.5% 101.5%;
      background-position: 50% 50%;
      filter: drop-shadow(0px 10px 20px rgba(0, 0, 0, 0.25));
      @media (max-width: 425px) {
        width: 124.1px;
        height: 171px;
      }
      &-img{
        margin: 20px 0 10px 0;
        @media (max-width: 425px) {
          width: 87px;
          height: 48px;
        }
      }
      &-value{
        font-family: 'Roboto';
        font-style: normal;
        font-weight: bold;
        font-size: 30px;
        line-height: 160%;
        text-align: center;
        color: #FFFFFF;
        @media (max-width: 425px) {
          font-size: 20px;
        }
      }
      &-title{
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 22,4px;
        text-align: center;
        color: #FFFFFF;
        @media (max-width: 425px) {
          font-size: 11px;
        }
      }
      &-btn{
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 25px;
        padding: 15px 30px;
        width: 154.71px;
        height: 47px;
        border: none;
        background: linear-gradient(90deg, #682FBD 0%, #CB4CBC 100%);
        padding: 2px;
        border-radius: 146px;
        transition: all 0.2s linear;
        @media (max-width: 425px) {
          margin-top: 5px;
          width: 98px;
          height: 27px;
        }
        &:hover{
          background: linear-gradient(90deg, #682FCF 0%, #CB4CCF 100%);
          & .content__coins__item-btn-container{
            background: linear-gradient(90deg, #24233F 0%, #3C3B5F 100%);
          }
        }
        &-container{
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, #242333 0%, #3C3B53 100%);
          border-radius: 146px;
          transition: all 0.2s linear;
        }
        &-text{
          font-family: 'Roboto';
          font-style: normal;
          font-weight: bold;
          font-size: 14px;
          line-height: 16px;
          text-align: center;
          color: #FFFFFF;
          margin-right: 20px;
          @media (max-width: 425px) {
            margin-right: 10px;
            font-size: 11px;
            line-height: 13px
          }
        }
        &-img{
          @media (max-width: 425px) {
            width: 17px;
            height: 17px;
          }
        }
        &-price{
          margin-left: 5px;
          font-family: 'Roboto';
          font-style: normal;
          font-weight: 500;
          font-size: 14px;
          line-height: 16px;
          color: #FFFFFF;
          @media (max-width: 425px) {
            margin-left: 0;
            font-size: 11px;
            line-height: 13px
          }
        }
      }
    }
  }
}

</style>