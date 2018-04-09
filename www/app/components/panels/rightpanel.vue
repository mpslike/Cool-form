<template>
    <div>
        <Row>
            <Col>
                <h3>更改标题：</h3>
                <Input v-model="title"></Input>
                <Checkbox v-model="required">必选</Checkbox>
            </Col>
        </Row>

        <Section v-if="type == 'singleoption' || type == 'multipleoption' || type == 'selectoption'">
            <Row>
                <Col>
                    <h3>更改选项：</h3>
                    <draggable v-model="options">
                        <div class="bar" v-for="(item , index) in options" :key="item">
                            {{item}} 
                            <span @click="deloption(index)"><Icon type="close"></Icon></span>
                        </div>
                    </draggable>
                </Col>
            </Row>
            <Row>
                <Col span="18">
                    <Input v-model="xoption"></Input>
                </Col>
                <Col span="3">
                    <Button @click="addoptions">添加</Button>
                </Col>
            </Row>
        </Section>

        <section v-if="type=='datepick'">
            <Row>
                <Col>
                    <h3>允许选择的最早日期：</h3>
                    <DatePicker v-model="limitdate1"></DatePicker>
                </Col>
            </Row>
            <Row>
                <Col>
                    <h3>允许选择的最晚日期：</h3>
                    <DatePicker v-model="limitdate2"></DatePicker>
                </Col>
            </Row>
        </section>
    </div>
</template>

<script>
  
    export default {
        data(){
            return {
                xoption : ""
            }
        },
        computed : {
            type(){
                return this.$store.state.questions[this.$store.state.nowEditing].type
            },
            options : {
                get(){
                    return this.$store.state.questions[this.$store.state.nowEditing].options
                },
                set(v){
                    this.$store.commit("changeOptions" , {v});
                }
            },
            limitdate1 : {
                get(){
                    return this.$store.state.questions[this.$store.state.nowEditing].limitdate1
                },
                set(v){
                    this.$store.commit("changeLimitdate1" , {v});
                }
            },
            limitdate2 : {
                get(){
                    return this.$store.state.questions[this.$store.state.nowEditing].limitdate2
                },
                set(v){
                    this.$store.commit("changeLimitdate2" , {v});
                }
            },
            title : {
                get(){
                    return this.$store.state.questions[this.$store.state.nowEditing].title
                },
                set(v){
                    this.$store.commit("changeTitle" , {v});
                }
            },
            required : {
                get(){
                    return this.$store.state.questions[this.$store.state.nowEditing].required
                },
                set(v){
                    this.$store.commit("changeRequired" , {v});
                }
            }
        },
        methods : {
            deloption(n){
                this.$store.commit("deloption" , {n});
            },
            addoptions(){
                this.$store.commit("addoption" , {xoption : this.xoption});
                this.xoption = "";
            }
        }
    }
</script>

<style>
    .bar{
        border:1px solid #eee;
        padding:10px;
        margin-bottom:4px;
    }
</style>
