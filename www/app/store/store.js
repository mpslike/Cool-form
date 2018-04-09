import Vue from "vue";
import Vuex from "vuex";
import createLogger from 'vuex/dist/logger'
 

export default {
    state: {
        "nowEditing" : 0 , 
        "questions": [
            {
                "title": "你平时最喜欢的休闲活动是？",
                "type": "singleoption",
                "options": ["看电视", "看电影", "打游戏", "运动"],
                "required": true
            },
            {
                "title": "你的大学毕业日期",
                "type": "datepick",
                "required": true,
                "limitdate1" : null , 
                "limitdate2" : null , 
                "dateoptions": {
                    disabledDate(date) {
                        return false;
                    }
                }
            },
            {
                "title": "你喜欢看的电视剧类型？",
                "type": "multipleoption",
                "options": ["古装剧", "现代剧", "言情剧", "武侠剧", "美剧", "韩剧"],
                "required": true
            },
            {
                "title": " 你最喜欢看的综艺节目类型？",
                "type": "selectoption",
                "options": ["音乐类型", "娱乐类型", "文化类型"],
                "required": false
            },
            {
                "title": " 你最喜欢看的电影类型",
                "type": "selectoption",
                "options": ["音乐类型", "娱乐类型", "文化类型"],
                "required": false
            }
        ]
    },
    mutations: {
        changenowEditing(state, {nowEditing}){
            state.nowEditing = nowEditing;
        },
        changeOptions(state, { v }){
            state.questions[state.nowEditing].options = v;
        },
        changeTitle(state , {v}){
            state.questions[state.nowEditing].title = v;
        },
        deloption(state , {n}){
            state.questions[state.nowEditing].options.splice(n , 1);
        },
        addoption(state, { xoption }) {
            state.questions[state.nowEditing].options.push(xoption)
        },
        changeRequired(state , {v}){
            state.questions[state.nowEditing].required = v;
        },
        changequestions(state , {v}){
            state.questions = v;
        },
        removequestion(state , {index}){
            state.questions.splice(index , 1);
        },
        insertQuestion(state, { newIndex, tixingObj}){
            //注意，只有redux和dva要求纯函数，vuex和mobx都不是纯函数，可以直接改。
            state.questions.splice(newIndex, 0, tixingObj);
        },
        changeLimitdate1(state , {v}){
            state.questions[state.nowEditing].limitdate1 = v;
            state.questions[state.nowEditing].dateoptions = {
                disabledDate(date) {
                    var exp1 = v == "" ? false : date.valueOf() < v;
                    var exp2 = state.questions[state.nowEditing].limitdate2 == "" ? false : date.valueOf() > state.questions[state.nowEditing].limitdate2;
                    return exp1 || exp2;
                }
            }
        },
        changeLimitdate2(state, { v }) {
            state.questions[state.nowEditing].limitdate2 = v;
            state.questions[state.nowEditing].dateoptions = {
                disabledDate(date) {
                    var exp1 = state.questions[state.nowEditing].limitdate1 == "" ? false : date.valueOf() < state.questions[state.nowEditing].limitdate1;
                    var exp2 = v == "" ? false : date.valueOf() > v;
                    return  exp1 || exp2;
                }
            }
        }
    },
    actions: {
        changequestion_dragstop({ commit , state }, { newIndex, oldIndex}){
            if(state.nowEditing == oldIndex){
                commit("changenowEditing", { nowEditing: newIndex});
            } 
        },
        insertQuestion({ commit, state }, { newIndex, tixingObj }) {
            //注意，只有redux和dva要求纯函数，vuex和mobx都不是纯函数，可以直接改。
            commit("insertQuestion", { newIndex, tixingObj })
            commit("changenowEditing", { nowEditing: newIndex} )
        } 
    },
    getters: {

    },
    plugins: [createLogger()]
};