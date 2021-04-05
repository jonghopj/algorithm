<template>
  <div id="payment">
    <v-row>
      <!-- 왼쪽 카드 -->
      <v-col cols="12" md="8">
        <v-divider></v-divider>
        <p class="mb-6 mt-6">주문 고객 test</p>

        <v-divider></v-divider>
        <p class="mt-6 mb-6">배송지 정보</p>

        <!-- 받으시는분-->

        <v-text-field
          label="받으시는분"
          outlined
          dense
          v-model="receiver"
          hide-details
          class="row-input"
        ></v-text-field>

        <!-- 연락처 -->
        <v-text-field
          label="연락처"
          v-model="contact"
          outlined
          dense
          hide-details
          class="row-input"
        ></v-text-field>

        <!-- 배송지 정보 -->
        <div class="address mt-5">
          <p class="mb-5">배송주소</p>
          <v-text-field
            label="예)문래동,강서타워 선유로"
            outlined
            v-model="address1"
            dense
            hide-details
            class="row-input"
          ></v-text-field>
          <v-text-field
            label="나머지 주소"
            outlined
            v-model="address2"
            dense
            hide-details
            class="row-input"
          ></v-text-field>
          <v-checkbox label="이 주소를 기본 주소로 사용"></v-checkbox>
          <v-text-field
            label="배송 메모를 작성해 주세요."
            outlined
            dense
            v-model="memo"
            hide-details
            class="row-input"
          ></v-text-field>

          <!-- 장바구니 바로가기 -->
          <div class="moveToCart mt-5">
            <v-btn class="row-btn" color="primary" @click="moveToCart">
              장바구니 바로가기
            </v-btn>
          </div>
        </div>
      </v-col>
      <!-- 오른쪽 카드 -->

      <v-col class="rightCard" cols="12" md="4">
        <v-card>
          <v-card-text>
            <div class="rightCard">
              <div class="prePrice1">주문 예정 금액</div>
              <div class="rightP">
                <!-- 상품 금액 -->
                <div class="goodPrice">
                  <p>상품 금액</p>

                  {{ total }} 원
                </div>
                <!-- 상품 이름 -->

                <p class="pp">상품 이름</p>

                <div
                  class="productName"
                  v-for="(i, index) in cartData"
                  :key="index"
                >
                  {{ i.name }}
                </div>

                <p class="pp">예상 배송비</p>
                <p class="pp">상품 할인 금액</p>
                <p class="pp">주문 할인 금액</p>
                <div class="totalPrice">
                  <P class="pp">총 결제 예정 금액</P>

                  <p class="pp">{{ total }} 원</p>
                </div>
              </div>
              <p>
                <v-btn
                  class="row-btn mt-5"
                  color="primary"
                  @click="finalPayment"
                  block
                >
                  결제하기
                </v-btn>
              </p>
            </div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <!-- 모달 -->
    <Modal :modal="modal" :modalText="modalText" @close="modal = false" />
    <!-- 로컬 모달 -->
    <v-dialog
      v-model="modal1"
      persistent
      max-width="360"
      content-class="common-modal"
    >
      <v-card>
        <!-- 모달 내용 -->
        <v-card-text>
          <p>{{ modalText }}</p>
        </v-card-text>

        <!-- 모달 버튼 -->
        <!-- <v-card-actions class="justify-center"> -->
        <v-card-actions>
          <!-- 확인 버튼 -->
          <v-btn dark>
            확인
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
// import CartData from "@/utils/product/product-data";
import Modal from "@/components/Modal";
export default {
  components: {
    Modal,
  },
  data: () => ({
    cartData: null,
    dataIndex: 0,
    receiver: "",
    contact: "",
    address1: "",
    address2: "",
    modal: false,
    modalText: "",
    memo: "",
    modal1: false,
  }),
  created() {
    this.cartData = JSON.parse(localStorage.getItem("cartData"));
    this.cartData?.map((val) => console.log(val.price));
    this.cartData?.map((val) => console.log(val.name));
  },

  methods: {
    // 장바구니로 바로가기
    moveToCart() {
      this.$router.push("/cart");
    },
    // 유효성 검사
    finalPayment() {
      if (this.receiver === "") {
        // alert 받으시는분을  입력해주세요.""
        this.modal = true;
        this.modalText = "받으시는분 이름을 입력해주세요.";
        return;
      }

      if (this.contact === "") {
        // alert 연락처를  입력해주세요.""
        this.modal = true;
        this.modalText = "받으시는분의 연락처를 입력해주세요.";
        return;
      }
      if (this.contact.length < 10 || this.contact.length > 11) {
        // alert("아이디는 4~8자리로 생성해주세요.");
        this.modal = true;
        this.modalText = "전화번호는 010 을 포함한 7~8 자리로 입력해주세요.";
        return;
      }

      if (this.address1 === "") {
        // alert 받으시는분의 주소를  입력해주세요.""
        this.modal = true;
        this.modalText = "받으시는분의 주소를 입력해주세요.";
        return;
      }

      if (this.address2 === "") {
        // alert 나머지 주소를  입력해주세요.""
        this.modal = true;
        this.modalText = "나머지 주소를 입력해주세요.";
        return;
      }

      {
        this.$router.push("/");
      }

      // 결과값
      var result = {
        name: this.receiver,
        contactNumber: this.contact,
        address1: this.address1,
        address2: this.address2,
        memo: this.memo,
      };
      console.log(result);
    },
  },
  computed: {
    total() {
      let sum = 0;
      for (let i = 0; i < this.cartData.length; i++) {
        sum += this.cartData[i].price;
      }
      return sum;
    },
  },
};
</script>

<style lang="scss" scoped>
#payment {
  margin: 40px 40px;
  .row {
    .moveToCart {
      text-align: center;
    }
  }

  .row-input {
    margin-bottom: 10px;
  }

  .rightCard {
    // background-color: darkgoldenrod;

    .rightCard {
      // background-color: yellow;
      // 주문 예정 금액
      .prePrice1 {
        margin-bottom: 14px;
      }
      // 오른쪽 P
      .rightP {
        // background-color: grey;
        margin-top: 4px;
        .pp {
          margin-top: 8px;
        }
        .goodPrice {
          display: flex;
          justify-content: space-between;
          margin-bottom: 14px;
        }
        .pp {
          margin-bottom: 14px;
        }
        .productName {
          text-align: right;
        }

        .totalPrice {
          display: flex;
          justify-content: space-between;
        }
      }
    }
  }
}
</style>
