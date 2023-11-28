<template>
  <div class="tabs">
    <div class="fix_it">
      <ul class="tabs__header">
        <li
          class="tab"
          v-for="title in tabTitles"
          :key="title"
          @click="selectedTitle = title"
          :class="{ 'active-tab': title === selectedTitle }">
          {{ title }}
        </li>
      </ul>
      <div class="tabs__spacer"></div>
    </div>
    <div class="tabs__content">
      <slot />
    </div>
  </div>
</template>

<script>
import { ref, provide } from "vue";
export default {
  setup(props, { slots }) {
    const tabTitles = ref(slots.default().map((tab) => tab.props.title));
    const selectedTitle = ref(tabTitles.value[0]);
    provide("selectedTitle", selectedTitle);
    return {
      selectedTitle,
      tabTitles,
    };
  },
};
</script>

<style scoped>
.tab {
  cursor: pointer;
}

.tab:hover {
  color: #06172d;
}

.tabs {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.tabs__header {
  display: flex;
  color: #515d6c;
  font-family: "Roboto", sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 129%;
  gap: 90px;
}

.fix_it {
  position: sticky;
  top: 0;
  background-color: #fff;
  z-index: 2;
}

.tabs__spacer {
  height: 47px;
  background-color: #fff;
}

.tabs__header li {
  list-style-type: none;
  padding: 10px;
}

.tabs__header li.active-tab {
  color: #06172d;
  font-family: "Roboto", sans-serif;
  font-weight: 700;
  padding-bottom: 2px;
  border-bottom: 2px solid #06172d;
}

.tabs__content {
  max-height: calc(100% - 40px);
  overflow-y: auto;
}
</style>
