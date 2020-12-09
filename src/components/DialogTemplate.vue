<template>
  <el-dialog
    :title="title"
    :visible.sync="isOpenDialog"
    width="80%"
    center
    :destroy-on-close="true"
    @close="closeDialog"
  >
    <el-row>
      <el-col :span="12" :xl="12" :lg="12" :md="24" :sm="24" :xs="24">
        <el-carousel :interval="4000" indicator-position="outside" :autoplay="true">
          <el-carousel-item v-for="(urlItem,urlKey) in imgUrls" :key="urlKey">
            <el-image :src="urlItem" cover></el-image>
          </el-carousel-item>
        </el-carousel>
      </el-col>
      <el-col :span="12">
        <el-row class="project-description">
          <el-col>
            <div v-html="background"></div>
          </el-col>
        </el-row>
        <el-row class="project-description">
          <el-col>
            <el-tag :type="'info'" effect="dark" v-for="(tItem,tKey) in tags" :key="tKey">{{tItem}}</el-tag>
          </el-col>
        </el-row>
      </el-col>
    </el-row>
  </el-dialog>
</template>
<script>
export default {
  name: "Dialog",
  props: {
    id: {
      type: String,
      default: ""
    },
    title: {
      type: String,
      default: "Title"
    },
    isOpen: {
      type: Boolean,
      default: false
    },
    imgUrls: {
      type: Array,
      default: () => {
        []
      }
    },
    background: {
      type: String,
      default: ""
    },
    tags: {
      type: Array,
      default: () => {
        []
      }
    }
  },
  data() {
    return {
      isOpenDialog: false
    }
  },
  watch: {
    "isOpen"() {
      this.isOpenDialog = this.isOpen;
    }
  },
  methods: {
    closeDialog() {
      this.$emit('closeDialog', this.id);
    }
  },
  created() {

  }
}
</script>