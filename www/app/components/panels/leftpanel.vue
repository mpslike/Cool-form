<template>
    <div>
        <draggable :options="options" @end="enddrag">
            <p class="tixingp" data-tixing="singleoption">
                单选题
            </p>
            <p class="tixingp" data-tixing="multipleoption">
                多选题
            </p>
            <p class="tixingp" data-tixing="selectoption">
                下拉题
            </p>
            <p class="tixingp" data-tixing="datepick">
                日期题
            </p>
        </draggable>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                options : {
                    sort: false ,
                    group : {
                        name : "leftpanel" ,
                        pull : "clone"
                    }
                }
            }
        },
        methods : {
            enddrag(event){
                //拖拽过来的瞬间，将这个DOM删除掉
                $(event.item).remove();
                //新的位置的序号
                var newIndex = event.newIndex;
                //题型
                var tixing = $(event.clone).data("tixing");
                //发出请求
                var tixingObj =  {
                    "title": "新的题目",
                    "type": tixing,
                    "options": ["A选项"],
                    "required": true
                };
                this.$store.dispatch("insertQuestion" , {newIndex , tixingObj});
            }
        }
    }
</script>

<style>
    .tixingp{
        width:100px;
        height:40px;
        text-align:center;
        border:1px solid #eee;
        line-height:40px;
    }
</style>
