<template>
  <div id="cart">
    <!-- 페이지 제목 -->
    <h4 class="mb-5 head">장바구니</h4>

    <!-- 큰 디브 -->
    <v-row>
      <!-- 왼쪽 카드 -->
      <v-col cols="12" md="8">
        <!-- 장바구니 리스트 -->
        <v-card v-for="(i, index) in cartData" :key="index" class="mb-2">
          <v-card-text style="padding:0 4px">
            <!-- 닫기 -->
            <div class="cancel">
              <v-btn text fab @click="removeProduct(i)">
                <v-icon>mdi-close</v-icon>
              </v-btn>
            </div>
          </v-card-text>

          <v-card-text>
            <!-- 내용 -->
            <div class="bottom-box">
              <v-row>
                <!-- 왼쪽 -->
                <v-col class="12" md="8">
                  <v-row>
                    <!-- 왼쪽 사진 -->
                    <v-col cols="12" md="2">
                      <v-img :src="i.img[0]"></v-img>
                    </v-col>
                    <!-- 왼쪽 정보 -->
                    <v-col cols="12" md="10">
                      <!-- 상품명 -->
                      <p class="mb-2">
                        {{ i.name }}
                      </p>

                      <!-- 사이즈 -->
                      <p class="mb-2">{{ i.size }}mm</p>

                      <!-- 수량 -->
                      <p>{{ i.count }}개</p>
                    </v-col>
                  </v-row>
                </v-col>

                <!-- 오른쪽 -->
                <v-col class="12" md="4">
                  <p>{{ i.price }}원</p>
                </v-col>
              </v-row>
            </div>
          </v-card-text>
        </v-card>
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
                  <p class="pp">상품 금액</p>
                  <p
                    class="pp 
                  "
                  >
                    {{ total }} 원
                  </p>
                </div>

                <p class="pp">예상 배송비</p>
                <p class="pp">상품 할인 금액</p>
                <p class="pp">주문 할인 금액</p>
                <div class="totalPrice">
                  <P class="pp">총 결제 예정 금액</P>
                  <p class="pp">{{ total }} 원</p>
                </div>

                <v-btn
                  color="primary"
                  class="mb-3 mt-3"
                  block
                  @click="moveToPayment"
                  >주문 하기</v-btn
                >
              </div>
            </div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <!-- 공통 모달 -->
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
          <v-btn dark @click="moveToKids">
            확인
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
// import CartData from "@/utils/product-data";
import Modal from "@/components/Modal";

export default {
  components: {
    Modal,
  },
  data: () => ({
    // cartData: CartData,
    cartData: null,
    dataIndex: 0,
    modal: false,
    modalText: "",
    modal1: false,
  }),
  created() {
    // 종호
    // console.log(localStorage.getItem("cartItem"), "???");
    // let cartItem = localStorage.getItem("cartItem");
    // let arr = cartItem.split(",");
    // console.log(arr, "arr");
    // 진영
    // console.log(localStorage.getItem("cartData"));
    this.cartData = JSON.parse(localStorage.getItem("cartData"));
    // console.log(this.cartData);
    // console.log("ssup");
    // console.log(JSON.parse(this.cartData));
    // this.cartData.map((val) => console.log(val.price));
    // console.log(Array.isArray(this.cartData));
    this.cartData?.map((val) => console.log(val.price));
    var arrayFromStorage = JSON.parse(localStorage.getItem("cartData"));
    var arrayLength = arrayFromStorage.length;
    console.log(arrayLength);
    if (arrayLength === 0) {
      this.$router.push("products");
    }
  },

  methods: {
    // 상품의 닫기 버튼을 클릭했을 때

    removeProduct(val) {
      //1 장바구니 데이터 가져오기
      var arr = JSON.parse(localStorage.getItem("cartData"));

      //2 제거 를 누른 객체의 ID와 장바구니 배열중의 ID 와 비교해서 인덱스 확보

      var selectedId = val.id;
      // console.log(selectedId);

      for (let i = 0; i < arr.length; i++) {
        if (arr[i].id === selectedId) {
          this.dataIndex = i;
        }
      }
      // console.log(this.dataIndex);

      // 3 가져울 데이터에서 제거
      arr.splice(this.dataIndex, 1);
      // console.log(arr);

      // 4 로컬 스토리지에 stItem
      localStorage.setItem("cartData", JSON.stringify(arr));

      //5 업데이트
      this.cartData = JSON.parse(localStorage.getItem("cartData"));
      console.log(this.cartData);

      // 카트가 비었을시 프로덕트로 이동

      var arrayFromStorage = JSON.parse(localStorage.getItem("cartData"));
      var arrayLength = arrayFromStorage.length;
      // console.log(arrayLength);
      if (arrayLength === 0) {
        this.modal1 = true;
        // this.modalClose = this.$router.push("/kids");
        this.modalText =
          "장바구니가 비어있습니다 상품을 장바구니에 넣은뒤 이용해주세요.";
      }
    },
    moveToKids() {
      this.$router.push("/kids");
    },

    moveToPayment() {
      this.$router.push("/payment");
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
#cart {
  // background-color: crimson;
  // 헤드
  .head {
    text-align: center;
  }
  // 오른쪽 카드
  .rightCard {
    // background-color: darkgoldenrod;
    .rightCard {
      // background-color: yellow;
      // 주문 예정 금액
      .prePrice1 {
        // background-color: greenyellow;
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
