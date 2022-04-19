<template>
  <div class="container pt-7 pt-md-8 pb-9 pb-md-12">
    <h2 class="text-center mb-7 mb-md-7">常見問題</h2>
    <img
      class="object-fit-cover img-h-lg mb-7"
      src="@/assets/images/package.jpg"
      alt="banner"
    />
    <div class="row justify-content-center">
      <div class="col-md-6">
        <div class="accordion" id="accordionQquestion">
          <div class="accordion-item">
            <h3 class="accordion-header" id="headingOne">
              <button
                class="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >Q：只能選擇宅配嗎？</button>
            </h3>
            <div
              id="collapseOne"
              class="accordion-collapse collapse show"
              aria-labelledby="headingOne"
              data-bs-parent="#accordionQquestion"
            >
              <div class="accordion-body">
                是的，為了確保到貨的時間，默認情況下，統一使用宅配出貨。
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h3 class="accordion-header" id="headingTwo">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >Q：運費怎麼計算？</button>
            </h3>
            <div
              id="collapseTwo"
              class="accordion-collapse collapse"
              aria-labelledby="headingTwo"
              data-bs-parent="#accordionQquestion"
            >
              <div class="accordion-body">
                商品內容包含運費囉！提醒您，我們最低出貨金額是 600 元，未到達出貨金額會取消訂單。
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h3 class="accordion-header" id="headingThree">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
              Q：收到的多肉植株出現問題，可以退費嗎？
              </button>
            </h3>
            <div
              id="collapseThree"
              class="accordion-collapse collapse"
              aria-labelledby="headingThree"
              data-bs-parent="#accordionQquestion"
            >
              <div class="accordion-body">
                不提供退費，請提供錄影檔或照片，確認問題之後，會提供補寄的服務。<br>
                從到貨時間起算 4 天內，若確認多肉發生問題，如枯死、送錯貨物，請立即聯絡我們，會重新補寄一次出錯的部分。<br>
                但若是超過 4 天的情況下，恕不受理。
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h3 class="accordion-header" id="headingFour">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseFour"
                aria-expanded="false"
                aria-controls="collapseFour"
              >
              Q：修改、取消訂單問題
              </button>
            </h3>
            <div
              id="collapseFour"
              class="accordion-collapse collapse"
              aria-labelledby="headingFour"
              data-bs-parent="#accordionQquestion"
            >
              <div class="accordion-body">
                可透過官網聯繫我們，或是私訊粉絲團，收到訊息後，會立刻為您處理。
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h3 class="accordion-header" id="headingFive">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseFive"
                aria-expanded="false"
                aria-controls="collapseFive"
              >
              Q：訂單送出後，大概多久時間可以收到商品？
              </button>
            </h3>
            <div
              id="collapseFive"
              class="accordion-collapse collapse"
              aria-labelledby="headingFive"
              data-bs-parent="#accordionQquestion"
            >
              <div class="accordion-body">
                植栽若有現貨，立即為您出貨，大約 1-2 天可以收到商品。<br>
                若產品需要客製化或是店內不含庫存，我們會以郵件通知。<br>
                另外提醒，為了確保植株出貨的健康，周末不會出貨，若有特殊需求，請留言或是聯絡我們。
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
