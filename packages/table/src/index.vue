<!--表格组件 -->
<template>
  <section class="sp-table">
    <section class="override-default-table">
      <el-table
        ref="spTableCom"
        v-loading="loading"
        :data="tableData"
        :size="size"
        :border="isBorder"
        :height="height"
        :max-height="maxHeight"
        :span-method="spanMethod"
        :row-class-name="rowClassName"
        :cell-style="cellStyle"
        @row-click="rowClick"
        @cell-click="cellClick"
        @select="select"
        @select-all="selectAll"
        @selection-change="selectionChange"
      >
        <el-table-column
          v-if="isSelection"
          type="selection"
          align="center"
          :label-class-name="isShowSelectAll ? '' : 'hiddenSelectAll'"
          :selectable="handleSelectable"
        />
        <el-table-column
          v-if="isIndex"
          type="index"
          :label="indexTitle"
          align="center"
        />
        <el-table-column
          v-if="isExpand"
          type="expand"
        >
          <template slot-scope="scope">
            <slot
              name="expand"
              :row="scope.row"
            />
          </template>
        </el-table-column>
        <!-- 数据栏 -->
        <el-table-column
          v-for="item in tableCols"
          :key="item.prop"
          :prop="item.prop"
          :label="item.label"
          :width="item.width"
          :min-width="item.minWidth"
          :show-overflow-tooltip="
            item.overflow ? item.overflow : false
          "
          :align="item.align ? item.align : 'center'"
          :render-header="
            item.renderHeader ? item.renderHeader : null
          "
          :fixed="item.fixed ? item.fixed : null"
        >
          <template slot-scope="scope">
            <slot
              v-if="item.slot"
              :name="item.slot"
              :row="scope.row"
            />
            <!-- html -->
            <span
              v-if="item.type === 'Html'"
              v-html="
                (item.formatter && item.formatter(scope.row)) ||
                  scope.row[item.prop]
              "
            />
            <!-- 按钮 -->
            <span v-if="item.type === 'Button'">
              <template v-for="btn in item.btnList">
                <el-button
                  v-if="btn"
                  :key="btn.id"
                  :disabled="
                    btn.isDisabled &&
                      btn.isDisabled(scope.row)
                  "
                  :type="btn.type"
                  :size="btn.size || size"
                  :icon="btn.icon"
                  :class="btn.class"
                  @click="btn.handle(scope.row)"
                >
                  {{ btn.label }}
                </el-button>
              </template>
            </span>
            <!-- 动态按钮 -->
            <span v-if="item.type === 'DynamicButton'">
              <template v-for="btn in item.btnList">
                <el-button
                  v-if="btn.whenShowCb(scope.row)"
                  :key="btn.id"
                  :disabled="
                    btn.isDisabled &&
                      btn.isDisabled(scope.row)
                  "
                  :type="btn.type || 'text'"
                  :size="btn.size || size"
                  :icon="btn.icon"
                  @click="btn.handle(scope.row)"
                >
                  {{ btn.label }}
                </el-button>
              </template>
            </span>
            <!-- 时间选择   -->
            <el-date-picker
              v-if="item.type === 'DatePicker'"
              v-model="scope.row[item.prop]"
              :class="
                item.setClass && item.setClass(scope.row, scope)
              "
              :picker-options="
                item.pickerOptions &&
                  item.pickerOptions(scope.row, scope)
              "
              :type="item.dateType ? item.dateType : 'date'"
              :placeholder="
                item.placeholder ? item.placeholder : '请选择'
              "
              :format="
                item.formatType ? item.formatType : 'yyyy-MM-dd'
              "
            />
            <!-- 输入框 文本-->
            <el-input
              v-if="item.type === 'Input'"
              v-model="scope.row[item.prop]"
              :size="item.size ? item.size : size"
              :disabled="
                item.isDisabled && item.isDisabled(scope.row)
              "
              :class="
                item.setClass && item.setClass(scope.row, scope)
              "
              @focus="item.focus && item.focus(scope.row)"
              @blur="item.blur && item.blur(scope.row)"
              @change="
                item.change && item.change(scope.row, scope)
              "
              @input="item.input && item.input(scope.row, scope)"
            />
            <!-- 输入框  数字-->
            <el-input
              v-if="item.type === 'Input.number'"
              v-model="scope.row[item.prop]"
              type="number"
              :size="size"
              :disabled="
                item.isDisabled && item.isDisabled(scope.row)
              "
              :class="
                item.setClass && item.setClass(scope.row, scope)
              "
              @focus="item.focus && item.focus(scope.row)"
              @change="
                item.change && item.change(scope.row, scope)
              "
              @input="item.input && item.input(scope.row, scope)"
            />
            <!--输入框 计数器 -->
            <el-input-number
              v-if="item.type === 'InputNumber'"
              v-model="scope.row[item.prop]"
              :precision="item.precision"
              :controls-position="item.position"
              :min="item.min"
              :max="item.max"
              @change="item.change && item.change(scope.row, scope)"
              @input.native="item.input && item.input(scope.row, scope)"
            />
            <!-- 下拉框 -->
            <el-select
              v-if="item.type === 'Select'"
              v-model="scope.row[item.prop]"
              :size="item.size ? item.size : size"
              :props="item.props"
              :disabled="
                item.isDisabled && item.isDisabled(scope.row)
              "
              @change="item.change && item.change(scope.row)"
            >
              <el-option
                v-for="op in item.options"
                :key="op[item.props.value]"
                :label="op[item.props.label]"
                :value="op[item.props.value]"
              />
            </el-select>
            <!-- 单选 -->
            <el-radio-group
              v-if="item.type === 'Radio'"
              v-model="scope.row[item.prop]"
              :disabled="
                item.isDisabled && item.isDisabled(scope.row)
              "
              @change="item.change && item.change(scope.row)"
            >
              <el-radio
                v-for="(ra, index) in item.radios"
                :key="index"
                :label="ra.value"
              >
                {{ ra.label }}
              </el-radio>
            </el-radio-group>
            <!-- 多选下拉 -->
            <el-select
              v-if="item.type === 'multipleSelect'"
              v-model="scope.row[item.prop]"
              :size="item.size ? item.size : size"
              multiple
              :props="item.props"
              @change="item.change && item.change(scope.row)"
            >
              <el-option
                v-for="op in scope.row[item.multipleSelectProp]"
                :key="op[item.props.value]"
                :label="op[item.props.label]"
                :value="op[item.props.value]"
              />
            </el-select>
            <!-- 复选框 -->
            <el-checkbox-group
              v-if="item.type === 'Checkbox'"
              v-model="scope.row[item.prop]"
              :disabled="
                item.isDisabled && item.isDisabled(scope.row)
              "
              @change="item.change && item.change(scope.row)"
            >
              <el-checkbox
                v-for="ra in item.checkboxs"
                :key="ra[item.props.value]"
                :label="ra.value"
              >
                {{ ra.label }}
              </el-checkbox>
            </el-checkbox-group>
            <!-- 评价 -->
            <el-rate
              v-if="item.type === 'Rate'"
              v-model="scope.row[item.prop]"
              :disabled="
                item.isDisabled && item.isDisabled(scope.row)
              "
              @change="item.change && item.change(scope.row)"
            />
            <!-- 开关 -->
            <el-switch
              v-if="item.type === 'Switch'"
              v-model="scope.row[item.prop]"
              :disabled="
                item.isDisabled && item.isDisabled(scope.row)
              "
              @change="item.change && item.change(scope.row)"
            />
            <!-- 图像 -->
            <img
              v-if="item.type === 'Image'"
              :src="scope.row[item.prop]"
              @click="item.handle && item.handle(scope.row)"
            >
            <!-- 滑块 -->
            <el-slider
              v-if="item.type === 'Slider'"
              v-model="scope.row[item.prop]"
              :disabled="
                item.isDisabled && item.isDisabled(scope.row)
              "
              @change="item.change && item.change(scope.row)"
            />
            <!-- 状态  -->
            <template v-for="st in item.oneByone">
              <span
                v-if="
                  item.type === 'Status' &&
                    st.key === scope.row[item.prop]
                "
                :key="st.key"
                class="Status"
                :class="st.classValue"
              />
            </template>
            <span v-if="item.type === 'Status'">
              {{
                (item.formatter &&
                  item.formatter(scope.row[item.prop])) ||
                  scope.row[item.prop]
              }}
            </span>
            <!-- 默认 -->
            <span
              v-if="!item.type"
              :style="item.itemStyle && item.itemStyle(scope.row)"
              :class="item.itemClass && item.itemClass(scope.row)"
              @click="
                item.handleClick && item.handleClick(scope.row)
              "
            >
              {{
                (item.formatter &&
                  item.formatter(scope.row[item.prop])) ||
                  scope.row[item.prop]
              }}
            </span>
          </template>
        </el-table-column>
      </el-table>
    </section>
    <!-- 分页 -->
    <section v-if="isPagination">
      <el-pagination
        class="paginationClass"
        layout="total, prev, pager, next"
        :page-sizes="paginationSizes"
        background
        :small="true"
        :page-size="pagination.page_size"
        :current-page="pagination.page"
        :total="pagination.total"
        @current-change="handleCurrentChange"
        @size-change="handleSizeChange"
      />
    </section>
  </section>
</template>

<script>
export default {
  name: 'CTable',
  props: {
    // 表格型号：mini,medium,small
    size: { type: String, default: 'mini' },
    // 是否显示边框
    isBorder: { type: Boolean, default: true },
    // 是否显示加载状态
    loading: { type: Boolean, default: false },
    // 最大高度，超出时显示滚动条
    maxHeight: { type: [Number, String], default: null },
    // 固定高度
    height: { type: [Number, String], default: null },
    // 表格数据
    tableData: { type: Array, default: () => [] },
    // 表格列配置
    tableCols: { type: Array, default: () => [] },
    // 是否显示表格复选框
    isSelection: { type: Boolean, default: false },
    // 是否显示表头的全选框 true:显示 false:不显示
    isShowSelectAll: { type: Boolean, default: true },
    // Function的返回值决定某一行是否可以勾选 入参(row,index) true可以被勾选 false不可以被勾选
    handleSelectable: { type: Function, default: null },
    // 表格合并的方法
    spanMethod: { type: Function, default: null },
    // 行的className的方法
    rowClassName: { type: Function, default: null },
    // 单元格className的方法
    cellStyle: { type: Function, default: null },
    // 是否显示表格索引
    isIndex: { type: Boolean, default: false },
    // 是否显示表格是否折叠
    isExpand: { type: Boolean, default: false },
    // index表头显示文字
    indexTitle: { type: String, default: '#' },
    // 是否显示分页
    isPagination: { type: Boolean, default: false },
    // 分页数据
    pagination: {
      type: Object,
      default: () => ({ page_size: 10, page: 1, total: 0 })
    },
    // 分页每页显示个数选择器的选项设置
    paginationSizes: { type: Array, default: () => [10, 20, 40, 50, 100] }
  },
  data() {
    return {}
  },
  computed: {},
  methods: {
    // 表格勾选
    select(selection, row) {
      this.$emit('select', selection, row)
    },
    // 全选
    selectAll(selection) {
      this.$emit('selectAll', selection)
    },
    selectionChange(selection) {
      this.$emit('selectionChange', selection)
    },
    // 翻页
    handleCurrentChange(val) {
      // eslint-disable-next-line vue/no-mutating-props
      this.pagination.page = val
      this.$emit('refresh')
    },
    // 清空选项
    handleResetSelect(val) {
      this.$refs.spTableCom.clearSelection()
    },
    // 改变大小时
    handleSizeChange(val) {
      // eslint-disable-next-line vue/no-mutating-props
      this.pagination.page = 1
      // eslint-disable-next-line vue/no-mutating-props
      this.pagination.page_size = val
      this.$emit('refresh')
    },
    rowClick(row, column, event) {
      this.$emit('rowClick', row, column, event)
    },
    // 单元格点击事件
    cellClick(...args) {
      this.$emit('cellClick', ...args)
    }
  }
}
</script>
