<template>
  <div class="wr">
    <div class="popup-wrapper">
      <h1 class="popup_title">Налоговый вычет</h1>
      <p class="popup_text">Используйте налоговый вычет, чтобы погасить ипотеку досрочно. Размер налогового вычета составляет не более 13% от своего официального годового дохода.</p>
      <strong class="popup_label">Ваша зарплата в месяц</strong>
      <input class="popup_input" type="text" placeholder="Введите данные" v-model="cashIn" v-summ><br>
      <a class="popup_sum" @click.prevent="calculation">Рассчитать</a>
      <p class="popup_label" v-if="show">Итого можете внести в качестве досрочных:</p>
      <ul v-if="show" class="popup_pay-list">
        <li v-for="item of nalog" v-bind:key="item" class="list-item">
          <input :id="item" type="checkbox" class="pay-list_input">
          <label :for="item" class="pay-list_text">{{yearCash(item)}} рублей <span class="lt">{{inYear(item)}} {{item}}-ый год</span></label>
        </li>
      </ul>
      <div class="col">
        <p class="popup_label">Что уменьшаем?</p>
        <div class="btn-wr">
          <button class="popup_btn" :class="{popup_btn1: pay, popup_btn2: !pay}" @click="btnToggle">Платеж</button>
          <button class="popup_btn" :class="{popup_btn1: cash, popup_btn2: !cash}" @click="btnToggle">Срок</button>
        </div>
      </div>
      <button class="popup_btn-add">Добавить</button>
      <div class="close" @click="closed"></div>
    </div>
  </div>
</template>

<script>
export default {
  // props: ['close'],
  data () {
    return {
      show: false,
      pay: true,
      cash: false,
      cashIn: null,
      nalog: null,
      cashYear: null,
    }
  },
  computed: {

  },
  methods: {
    btnToggle () {
      this.cash = !this.cash
      this.pay = !this.pay
    },
    yearCash (item) {
      let summ
      if (item < this.nalog) { summ = Math.floor(this.cashYear)} else {summ = Math.floor(260000 % this.cashYear)}
      return summ
    },
    closed () {
      this.$emit('closed')
    },
    calculation () {
      this.show = true
      this.cashYear = (this.cashIn.replace(/\s+/g, '') * 12) * 0.13
      this.nalog = Math.ceil(260000/((this.cashIn.replace(/\s+/g, '') * 12) * 0.13))
    },
    inYear(item) {
      let a
      if (item === 2) { a = 'во' } else { a = 'в'}
      return a
    }
  },
  watch: {  
    cashIn () {
      
    }
  } 
}
</script>

<style scoped>

  .popup-wrapper {
    font-family: "LabGrotesque";
    position: relative;
    margin-left: auto;
    margin-right: auto;
    padding: 16px;
    width: 320px;
    min-height:568px;

    text-align: left;
    box-sizing: border-box;
    background-color: white;
    display: flex;
    flex-direction: column;
  }

  .close {
    /* content: ""; */
    display: block;
    position: absolute;
    width: 12px;
    height: 12px;
    background: url(../assets/close.svg);
    top: 28px;
    right: 28px;
    cursor: pointer;
  }

  .popup_input {
    padding:8px;
    padding-left: 10px;
    margin-top: 8px;
    outline-color: #DFE3E6;
    border: 1px solid #DFE3E6;
    border-radius: 3px;
  }

  .popup_input:hover {
    border: 1px solid black;
  }

  .popup_input::placeholder {
    color: #BEC5CC;
  }

  @media (min-width: 768px) {
    .popup_input {
      margin-top: 8px;
      padding-top: 12px;
      padding-bottom: 12px;
    }
    .close {
      width: 18px;
      height: 18px; 
      background-size: cover;
      background-repeat: no-repeat;
    }
  }

  .popup_title {
    font-size: 18px;
    font-weight: 500;
  }

  @media (min-width: 768px) {
    .popup_title {
      font-size: 28px;
      line-height: 40px;
      font-weight: 500;
      margin: 0;
  }
  }

  .popup_text {
    font-size: 12px;
    font-weight: 900;
    font-family: "LabGrotesque light";
    color: #808080;
  }

  @media (min-width: 768px) {
    .popup_text {
      font-size: 14px;
      line-height: 24px;
      margin-bottom: 24px;
    }
  }

  .popup_label {
    font-size: 14px;
    font-weight: 500;
  }

  .popup_sum {
    font-size: 14px;
    font-weight: 500;
    color: red;
    text-decoration: none;
    cursor: pointer;
  }

  .popup_sum:hover {
    color: #F53A31;
  }

  .popup_btn {
    font-family: "LabGrotesque light";
    border: none;
    outline: none;
    padding: 10px;
    border-radius: 25px;
    background-color: #EEF0F2;
    margin-right: 8px;
  }

  .popup_btn1 {
    background: linear-gradient(255.35deg, #DC3131 0.83%, rgba(255, 79, 79, 0) 108.93%), #FF5E56;
    color: white;
  }

  .popup_btn2:hover {
    background-color: #DFE3E6;
  }

  .popup_btn-add {
    background: linear-gradient(255.35deg, #DC3131 0.83%, rgba(255, 79, 79, 0) 108.93%), #FF5E56;
    font-family: "LabGrotesque light";
    color: white;
    padding-top: 12px;
    padding-bottom: 12px;
    border-radius: 5px;
    border: none;
    outline: none;
    box-shadow: 0px 0px 24px rgba(234, 0, 41, 0.33);
    margin-top: auto;
  }

  .popup_btn-add:hover {
    background-color: #EA0029;
  }

  .popup_btn-add:active {
    background-color: #EA0029;
  }

  @media (min-width: 768px) {
    .popup_btn-add {
      width: 389px;
      height: 56px;
      margin-left: auto;
      margin-right: auto; 
      margin-top: 40px;
      box-sizing: border-box;
    }
  }

   @media (min-width: 1440px) {
    .popup_btn-add {
      width: 488px;
      height: 56px;
      margin-left: auto;
      margin-right: auto; 
      margin-top: 40px;
      box-sizing: border-box;
    }
  }


  .btn-wr {
    margin-bottom: auto;
  }

  .pay-list_text {
    font-family: "LabGrotesque light";
    display: block;
    padding-left: 32px;
  }

  .pay-list_text::before {
    position: absolute;
    height: 20px;
    width: 20px;
    content: "";
    display: block;
    left: 0;
    background: url(../assets/VectorDis.svg);
  }

  .pay-list_input:checked + .pay-list_text::before {
    background: url(../assets/VectorAct.svg);
  }

  .pay-list_input {
    font-family: "LabGrotesque light";
    display: none;
    /* position: absolute; */
  }

  .popup_pay-list {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  .list-item {
    padding: 16px 0 16px 0;
    position: relative;
  }

  .list-item::after {
    content: "";
    display: block;
    position: absolute;
    width: 288px;
    height: 1px;
    background-color: #DFE3E6;
    top: 50px;
  }

  @media (min-width: 768px) {
    .popup-wrapper {
      font-family: "LabGrotesque";
      position: relative;
      margin-left: auto;
      margin-right: auto;
      padding: 32px;
      width: 453px;
      text-align: left;
      box-sizing: border-box;
      background-color: white;
      display: flex;
      flex-direction: column;
      border-radius: 30px;
      min-height: 476px;
    }
  }

  @media (min-width: 768px) {
    .wr {
      background-color:rgba(0, 0, 0, 0.30);
      background-size:cover;
      padding-top: 120px;
      height: 100vh;
    }
  }

  @media (min-width: 768px) {
    .col {
      display: flex;
      justify-content: space-between;
      padding-right: 87px;
      margin-top: 24px;
      height: 36px;
    }
  }

   @media (min-width: 1440px) {
    .popup-wrapper {
      font-family: "LabGrotesque";
      position: relative;
      margin-left: auto;
      margin-right: auto;
      padding: 32px;
      width: 552px;
      text-align: left;
      box-sizing: border-box;
      background-color: white;
      display: flex;
      flex-direction: column;
      border-radius: 30px;
      min-height: 476px;
    }
    .col {
      padding-right: 198px;
    }
  }

  .lt {
    opacity: 0.5;
  }
</style>