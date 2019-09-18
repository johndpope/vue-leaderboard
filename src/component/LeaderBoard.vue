<template>
  <div class="leaderboard__wrapper">
    <div v-if="board.length >= 4" class="leaderboard__" :style="scale">
      <div
        class="row no-gutters py-4 align-items-center leaderboard__content"
        :ref="name"
      >
        <div class="col-12">
          <h2
            style="top: 0;left: 0"
            class="pt-3 text-center font-weight-bold position-fixed d-none d-md-block"
          >
            <slot></slot>
          </h2>
          <div
            class="row no-gutters justify-content-center d-none d-md-flex mb-4"
          >
            <div class="col-lg-10 col-xl-8">
              <div class="row no-gutters align-items-end">
                <div v-for="(team, index) in top3" class="col px-4">
                  <a
                    :href="
                      'https://upbox.ajt.my/businessunits/report/' + team.bu_id
                    "
                    target="_blank"
                  >
                    <div class="leaderboard__card_top text-center">
                      <span class="leaderboard__number mb-4">{{
                        handleCountTop3(index)
                      }}</span>
                      <div v-if="handleCountTop3(index) === 1">
                        <div
                          class="position-relative mx-auto"
                          style="width: 140px;height: 140px"
                        >
                          <img
                            :src="icon.success"
                            style="width: 250px;position: absolute;left: -55px;top: -55px;"
                          />
                          <avatar
                            :url="team.avatar"
                            :size="140"
                            type="border-success"
                            :bWidth="4"
                          ></avatar>
                        </div>
                      </div>
                      <div v-else>
                        <div
                          class="position-relative mx-auto"
                          style="width: 100px;height: 100px"
                        >
                          <img
                            :src="icon.warning"
                            style="width: 182px;position: absolute;left: -41px;top: -41px;"
                          />
                          <avatar
                            :url="team.avatar"
                            :size="100"
                            type="border-warning"
                            :bWidth="4"
                          ></avatar>
                        </div>
                      </div>
                      <p
                        class="mt-4 mb-0 font-weight-bold text-nowrap"
                        style="overflow: hidden;text-overflow: ellipsis"
                      >
                        {{ team.bu_name }}
                      </p>
                      <div style="line-height: 1;">
                        <p
                          v-if="sort === 'hourly'"
                          class="text-success text-nowrap m-0 font-weight-bold"
                        >
                          {{ team.hourly }}
                        </p>
                        <p
                          v-else-if="sort === 'profit'"
                          class="text-success text-nowrap m-0 font-weight-bold"
                        >
                          {{ team.profit }}
                        </p>
                      </div>
                      <p class="m-0 text-muted">TL: {{ team.team_lead }}</p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="row no-gutters d-flex d-md-none" style="margin: 0 -.5em">
            <div
              v-for="(team, index) in top3Normal"
              class=" col-md-6 col-lg-3 col-xl-2 mt-4 px-2"
              :class="{ 'mt-4': index != 0 }"
            >
              <a
                :href="
                  'https://upbox.ajt.my/businessunits/report/' + team.bu_id
                "
                target="_blank"
              >
                <div
                  class="leaderboard__card"
                  :class="{
                    'border-success': index === 0,
                    'border-warning': index !== 0
                  }"
                >
                  <div class="row no-gutters align-items-center">
                    <div class="col-12">
                      <div class="position-relative">
                        <div
                          class="position-absolute"
                          style="left: -1px;top: -28px"
                        >
                          <span class="leaderboard__number">{{
                            index + 1
                          }}</span>
                        </div>

                        <div
                          class="position-absolute"
                          style="left: 10px;top: 50%;transform: translateY(-50%);"
                        >
                          <avatar :url="team.avatar" :size="65"></avatar>
                        </div>
                        <div style="padding-left:85px;padding-right: 10px">
                          <p
                            class="m-0 text-nowrap font-weight-bold"
                            style="overflow: hidden;text-overflow: ellipsis"
                          >
                            {{ team.bu_name }}
                          </p>
                          <div style="line-height: 1">
                            <p
                              v-if="sort === 'hourly'"
                              class="text-success text-nowrap m-0 font-weight-bold"
                              style="overflow: hidden;text-overflow: ellipsis"
                            >
                              {{ team.hourly }}
                            </p>
                            <p
                              v-else-if="sort === 'profit'"
                              class="text-success text-nowrap m-0 font-weight-bold"
                              style="overflow: hidden;text-overflow: ellipsis"
                            >
                              {{ team.profit }}
                            </p>
                          </div>
                          <p
                            class="mb-0 text-muted text-nowrap"
                            style="overflow: hidden;text-overflow: ellipsis"
                          >
                            TL: {{ team.team_lead }}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
          <div class="row no-gutters" style="margin: 0 -.5em">
            <div
              v-for="(team, index) in belowTop3"
              v-for-callback="{
                key: index,
                array: belowTop3,
                callback: handleScale
              }"
              class=" col-md-6 col-lg-3 col-xl-2 mt-4 px-2"
            >
              <a
                :href="
                  'https://upbox.ajt.my/businessunits/report/' + team.bu_id
                "
                target="_blank"
              >
                <div class="leaderboard__card border-default text-left">
                  <div class="row no-gutters align-items-center">
                    <div class="col-12">
                      <div class="position-relative">
                        <div
                          class="position-absolute"
                          style="left: -1px;top: -28px"
                        >
                          <span class="leaderboard__number">{{
                            index + 4
                          }}</span>
                        </div>
                        <div
                          class="position-absolute"
                          style="left: 10px;top: 50%;transform: translateY(-50%);"
                        >
                          <avatar :url="team.avatar" :size="65"></avatar>
                        </div>
                        <div style="padding-left:85px;padding-right: 10px">
                          <p
                            class="m-0  text-nowrap font-weight-bold"
                            style="overflow: hidden;text-overflow: ellipsis"
                          >
                            {{ team.bu_name }}
                          </p>
                          <div style="line-height: 1">
                            <p
                              v-if="sort === 'hourly'"
                              class="text-success text-nowrap m-0 font-weight-bold"
                              style="overflow: hidden;text-overflow: ellipsis"
                            >
                              {{ team.hourly }}
                            </p>
                            <p
                              v-else-if="sort === 'profit'"
                              class="text-success text-nowrap m-0 font-weight-bold"
                              style="overflow: hidden;text-overflow: ellipsis"
                            >
                              {{ team.profit }}
                            </p>
                          </div>
                          <p
                            class="mb-0 text-muted text-nowrap"
                            style="overflow: hidden;text-overflow: ellipsis"
                          >
                            TL: {{ team.team_lead }}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
.leaderboard__wrapper {
  padding: 0px 20px;
  margin: 0 auto;
}
.leaderboard__ {
  position: relative;
  height: 100vh;
  a {
    text-decoration: none;
    color: inherit;
  }
  .leaderboard__content {
    min-height: 100%;
  }
  .leaderboard__card_top {
    .leaderboard__number {
      font-size: 18px;
      border: 1px solid rgba(0, 0, 0, 0.1);
      width: 30px;
      display: inline-block;
      text-align: center;
      line-height: 1.5;
      background: yellow;
    }
  }
  .leaderboard__card {
    padding: 10px 0px;
    border: 1px solid rgba(0, 0, 0, 0.1);
    .leaderboard__number {
      font-size: 18px;
      border: 1px solid rgba(0, 0, 0, 0.1);
      width: 30px;
      display: block;
      text-align: center;
      line-height: 1.5;
      background: yellow;
    }
  }
}
</style>
<script>
import Avatar from "./Avatar.vue";
export default {
  components: {
    avatar: Avatar
  },
  props: {
    name: String,
    sortby: {
      type: String,
      default: ""
    },
    icon: Object
  },
  data() {
    return {
      scaleNumber: 1,
      sorting: this.sortby,
      buData: []
    };
  },
  mounted: function() {
    this.handleGetData();
  },
  computed: {
    sort: function() {
      return this.sorting;
    },
    board: function() {
      return this.buData;
    },
    top3: function() {
      let top3 = this.board.splice(0, 3);
      let top_1 = top3[0];
      let top_2 = top3[1];
      let top_3 = top3[2];
      return [top_2, top_1, top_3];
    },
    top3Normal: function() {
      let top3 = this.top3;
      let top_1 = top3[1];
      let top_2 = top3[0];
      let top_3 = top3[2];
      return [top_1, top_2, top_3];
    },
    belowTop3: function() {
      return this.board;
    },
    scale: function() {
      return (
        "transform:scale(" +
        this.scaleNumber +
        ")translateX(-50%);transform-origin: 0 0;left: 50%;"
      );
    }
  },
  methods: {
    reload: function() {
      this.handleGetData();
    },
    handleGetData: function() {
      let _this = this;
      this.buData = [];
      $.ajax({
        url: "https://upbox.ajt.my/api/bulist?sortby=" + this.sorting,
        type: "GET",
        dataType: "json",
        success: function(data) {
          if (data.status == "success") {
            _this.buData = data.data;
          }
        }
      });
    },
    handleChangeSort(event) {
      this.$emit("sortby", event.target.value);
      this.sorting = event.target.value;
      this.handleGetData();
    },
    handleScale() {
      this.$nextTick(() => {
        if (window.innerWidth > 1199) {
          let contentHeight = this.$refs[this.name].offsetHeight;
          let windowHeight = window.innerHeight;
          let different = contentHeight - windowHeight;
          let percent = different / contentHeight;
          if (contentHeight > windowHeight) {
            this.scaleNumber = 1 - percent;
          }
        }
      });
    },
    handleCountTop3(index) {
      switch (index) {
        case 0:
          return 2;
          break;
        case 1:
          return 1;
          break;
        case 2:
          return 3;
          break;
      }
    }
  },
  directives: {
    forCallback(el, binding) {
      let element = binding.value;
      let key = element.key;
      let len = 0;

      if (Array.isArray(element.array)) {
        len = element.array.length;
      } else if (typeof element.array === "object") {
        let keys = Object.keys(element.array);
        key = keys.indexOf(key);
        len = keys.length;
      }

      if (key == len - 1) {
        if (typeof element.callback === "function") {
          element.callback();
        }
      }
    }
  }
};
</script>
