<template>
  <div>
    <div class="text-center" id="btn_group">
      <el-button plain @click="onClose">Close</el-button>
      <el-button type="info" @click="onPrint">Print</el-button>
    </div>
    <div class="resume-tab" id="resume">
      <el-tabs v-model="currentTab">
        <el-tab-pane
          v-for="(rItem,rKey) in tabs"
          :key="rKey"
          :label="rItem.displayName"
          :name="rItem.name"
        >
          <component id="resume-content" :is="currentTab"></component>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>
<script>
import Cv from '@views/resume/Cv'
import Autobiography from '@views/resume/Autobiography'
export default {
  name: "hello",
  components: {
    Cv, Autobiography
  },
  data() {
    return {
      tabs: [
        { name: "Cv", displayName: "Resume"},
        { name: "Autobiography", displayName: "Autobiography"}
      ],
      currentTab: 'Cv'
    }
  },
  methods: {
    onClose() {
      this.$router.go(-1)
    },
    onPrint() {
      this.printClick = true
      document
        .getElementById("btn_group")
        .setAttribute("style", "display:none;");
      document
        .getElementsByClassName("el-tabs__header")[0].setAttribute("style", "display:none;");

      window.print();
      document
        .getElementById("btn_group")
        .setAttribute("style", "display:block;");
      document
        .getElementsByClassName("el-tabs__header")[0].setAttribute("style", "display:block;");

    }
  }
}
</script>