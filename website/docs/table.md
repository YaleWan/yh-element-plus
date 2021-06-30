## Table 表格


### 常规使用
````html demo:vue
<template>
    <c-table
      :loading="loading"
      :table-cols="tableCols"
      :table-data="tableData"
      :pagination="pagination"
      :is-pagination="true"
    />

</template>
<script>
  export default {
    data() {
      return {
        pagination: {
          page_size: 20,
          page: 1,
          total: 4
        },
        loading: true,
        tableData: [],
        tableCols: [
          { prop: 'name', label: '姓名' },
          {
            prop: 'address',
            label: '地址',
          },
        ]

      };
    },
    created(){
      this.getData()
    },
    methods:{
        getData(val){
            this.loading = true
            setTimeout(() => {
              this.tableData =[{
                  date: '2016-05-02',
                  name: '王小虎',
                  address: '上海市普陀区金沙江路 1518 弄'
                }, {
                  date: '2016-05-04',
                  name: '王小虎',
                  address: '上海市普陀区金沙江路 1517 弄'
                }, {
                  date: '2016-05-01',
                  name: '王小虎',
                  address: '上海市普陀区金沙江路 1519 弄'
                }, {
                  date: '2016-05-03',
                  name: '王小虎',
                  address: '上海市普陀区金沙江路 1516 弄'
                }]
                this.loading = false

            }, 2000);
        }
    }
  };
</script>
````

