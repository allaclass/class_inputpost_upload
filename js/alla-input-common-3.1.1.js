/* -------------------------------------------- */
/* 제  목 : alla-input-common-3.0.1.js        */
/* 작성일 : 2021.04.20 (table-renewal)        */
/* 업데이트 : 2021.10.27 : 문제 부정문 변환 */
/* 작성자 : 김현수                                 */
/* -------------------------------------------- */


// around variable
var txt = document.getElementById('contents');
var rst = document.getElementById('result');
var fnl = document.getElementById('final');

var array_lv1 = [];
var array_lv2 = [];
var array_title = [];
var array_answer = [];

var txt_info = document.getElementById('txt_info');
var txt_title = document.getElementById('txt_title');
var txt_object = document.getElementById('txt_object');
var txt_kind = document.getElementById('txt_kind');
var txt_year = document.getElementById('txt_year');
var txt_seme = document.getElementById('txt_seme');
var txt_grade = document.getElementById('txt_grade');
var txt_prof = document.getElementById('txt_prof');
var txt_range = document.getElementById('txt_range');
var txt_snum = document.getElementById('txt_snum');
var txt_enum = document.getElementById('txt_enum');
var txt_count = document.getElementById('txt_count');
var txt_thumb = document.getElementById('txt_thumb');
var txt_answer = document.getElementById('txt_answer');

var div_postView = document.getElementById('postView');

var src_thumb = "";
var src_notice_header = "";
var src_guide = "";
var src_title = "";
var src_example_txt = "";
var src_example_txt_add = "";
var src_example_img = "";
var src_example_img_add = "";
var src_group_question_quiz = "";
var src_group_question_end = "";
var src_question_quiz = "";
var src_question_answer = "";
var src_question_check = "";
var src_answer_table_header = "";
var src_answer_table_contents = "";
var src_answer_table_footer = "";
var src_shortcut = "";
var src_notice_footer = "";

// txt_info.value = "[과목명] \n[종  류] \n[연  도] \n[학  기] \n[학  년] \n[교수명] \n[셤범위] \n[시작넘] \n[종료넘] \n[썸네일] \n[정  답] ";

// txt_info data
function info_input(){
    var infoData = txt_info.value;
    var infoObject = infoData.indexOf('[과목명]');
    var infoKind = infoData.indexOf('[종  류]');
    var infoYear = infoData.indexOf('[연  도]');
    var infoSeme = infoData.indexOf('[학  기]');
    var infoGrade = infoData.indexOf('[학  년]');
    var infoProf = infoData.indexOf('[교수명]');
    var infoRange = infoData.indexOf('[셤범위]');
    var infoSNum = infoData.indexOf('[시작넘]');
    var infoENum = infoData.indexOf('[종료넘]');
    var infoThumb = infoData.indexOf('[썸네일]');
    var infoAnswer = infoData.indexOf('[정  답]');
    var infoLength = infoData.length;

    var infoObjectData = (infoData.substring(infoObject+5, infoKind)).replace(/(^\s*)|(\s*$)/gi, "");
    var infoKindData = (infoData.substring(infoKind+6, infoYear)).replace(/(^\s*)|(\s*$)/gi, "");
    var infoYearData = (infoData.substring(infoYear+6, infoSeme)).replace(/(^\s*)|(\s*$)/gi, "");
    var infoSemeData = (infoData.substring(infoSeme+6, infoGrade)).replace(/(^\s*)|(\s*$)/gi, "");
    var infoGradeData = (infoData.substring(infoGrade+6, infoProf)).replace(/(^\s*)|(\s*$)/gi, "");
    var infoProfData = (infoData.substring(infoProf+5, infoRange)).replace(/(^\s*)|(\s*$)/gi, "");
    var infoRangeData = (infoData.substring(infoRange+5, infoSNum)).replace(/(^\s*)|(\s*$)/gi, "");
    var infoSNumData = (infoData.substring(infoSNum+5, infoENum)).replace(/(^\s*)|(\s*$)/gi, "");
    var infoENumData = (infoData.substring(infoENum+5, infoThumb)).replace(/(^\s*)|(\s*$)/gi, "");
    var infoThumbData = (infoData.substring(infoThumb+5, infoAnswer)).replace(/(^\s*)|(\s*$)/gi, "");
    var infoAnswerData = (infoData.substring(infoAnswer+6, infoLength)).replace(/(^\s*)|(\s*$)/gi, "");

    txt_object.value = infoObjectData;
    txt_kind.value = infoKindData;
    txt_year.value = infoYearData;
    txt_seme.value = infoSemeData;
    txt_grade.value = infoGradeData;
    txt_prof.value = infoProfData;
    txt_range.value = infoRangeData;
    txt_snum.value = infoSNumData;
    txt_enum.value = infoENumData;
    txt_thumb.value = infoThumbData;
    txt_answer.value = infoAnswerData;

    post_title();
    question_count();
}


// array_lv1_input
function array_lv1_input(){
    var gNum = 0;
    
    // html source
    final_reset(); // 테스트 필요함
    html_thumb();
    html_notice_header();
    html_guide();
    html_title();

    for(var i=0; i<100; i++){
        // sNum(start number), nNum(next number), eNum(end number)
        var sNum = parseInt(document.getElementById('txt_snum').value)+i+gNum;
        var nNum = sNum + 1;
        var eNum = parseInt(document.getElementById('txt_enum').value);
        // sText(search start text), nText(search next text)
        var sText = String(sNum)+'.';
        var nText = String(nNum)+'.';
        // gIndex(group text index), sIndex(start text index), nIndex(next text index), eIndex(end text index)
        var gsIndex = txt.value.indexOf('/'+String(sNum)+'/');
        var gnIndex = txt.value.indexOf('/'+String(nNum)+'/');
        var sIndex = txt.value.indexOf(sText);
        var nIndex = txt.value.indexOf(nText);
        var eIndex = txt.value.length;

        

        // execute
        if(gsIndex>=0){     // 그룹문제문
            // variable
            var origin = txt.value.substring(gsIndex, sIndex);
            // variable - exe
            var number = String(sNum);
            var number_txt = '/'+String(number)+'/';
            var number_length = number_txt.length;
            if((origin.indexOf('/보기문'))>0){  // 보기문
                if((origin.indexOf('/추가보기문'))>0){  // 보기문 / 추가보기문
                    var example_txt_1s = origin.indexOf('/보기문');
                    var example_txt_2s = origin.indexOf('/추가보기문');
                    var question = (origin.substring(number_length, example_txt_1s)).replace(/(^\s*)|(\s*$)/gi, "");
                    question = question.replaceAll(' 먼 ', ' /부정먼/.부정 ');
                    question = question.replaceAll(' 않은 ', ' /부정않은/.부정 ');
                    question = question.replaceAll(' 않는 ', ' /부정않는/.부정 ');
                    question = question.replaceAll(' 아닌 ', ' /부정아닌/.부정 ');
                    question = question.replaceAll(' 어려운 ', ' /부정어려운/.부정 ');
                    question = question.replaceAll(' 틀린 ', ' /부정틀린/.부정 ');
                    question = question.replaceAll(' 부적절한 ', ' /부정부적절한/.부정 ');
                    question = question.replaceAll(' 못한 ', ' /부정못한/.부정 ');
                    question = question.replaceAll(' 잘못 ', ' /부정잘못/.부정 ');
                    question = question.replaceAll(' 잘못된 ', ' /부정잘못된/.부정 ');
                    question = question.replaceAll(' 없는 ', ' /부정없는/.부정 ');
                    question = question.replaceAll(' 다른 ', ' /부정다른/.부정 ');
                    var example_1 = (origin.substring(example_txt_1s+4, example_txt_2s)).replace(/(^\s*)|(\s*$)/gi, "");
                    var example_2 = (origin.substring(example_txt_2s+6, origin.length)).replace(/(^\s*)|(\s*$)/gi, "");
                    // variable - result
                    var result = '/'+number+'/\n'+question+'\n/보기문\n'+example_1+'\n/추가보기문\n'+example_2+'\n\n';
                    var consolelog = 'number : /' + number + '/\nquestion : ' + question + '\nexample_txt : ' + example_1 + '\nexample_txt_add : ' + example_2+'\n\n';
                    var type = 'type : Group Question / example_txt / example_txt_add\n';
                    // console test
                    console.log('Group Question / example_txt / example_txt_add');
                    // console.log(result);
                    console.log(consolelog);
                    // html source
                    html_group_question_quiz(question);
                    html_example_txt(example_1);
                    html_example_txt_add(example_2);
                    html_group_question_end();
                }else if((origin.indexOf('/추가보기그림'))>0){  // 보기문 / 추가보기그림
                    var example_txt_1s = origin.indexOf('/보기문');
                    var example_img_2s = origin.indexOf('/추가보기그림');
                    var question = (origin.substring(number_length, example_txt_1s)).replace(/(^\s*)|(\s*$)/gi, "");
                    question = question.replaceAll(' 먼 ', ' /부정먼/.부정 ');
                    question = question.replaceAll(' 않은 ', ' /부정않은/.부정 ');
                    question = question.replaceAll(' 않는 ', ' /부정않는/.부정 ');
                    question = question.replaceAll(' 아닌 ', ' /부정아닌/.부정 ');
                    question = question.replaceAll(' 어려운 ', ' /부정어려운/.부정 ');
                    question = question.replaceAll(' 틀린 ', ' /부정틀린/.부정 ');
                    question = question.replaceAll(' 부적절한 ', ' /부정부적절한/.부정 ');
                    question = question.replaceAll(' 못한 ', ' /부정못한/.부정 ');
                    question = question.replaceAll(' 잘못 ', ' /부정잘못/.부정 ');
                    question = question.replaceAll(' 잘못된 ', ' /부정잘못된/.부정 ');
                    question = question.replaceAll(' 없는 ', ' /부정없는/.부정 ');
                    question = question.replaceAll(' 다른 ', ' /부정다른/.부정 ');
                    var example_1 = (origin.substring(example_txt_1s+4, example_img_2s)).replace(/(^\s*)|(\s*$)/gi, "");
                    var example_2 = (origin.substring(example_img_2s+7, origin.length)).replace(/(^\s*)|(\s*$)/gi, "");
                    // variable - result
                    var result = '/'+number+'/\n'+question+'\n/보기문\n'+example_1+'\n/추가보기그림\n'+example_2+'\n\n';
                    var consolelog = 'number : /' + number + '/\nquestion : ' + question + '\nexample_txt : ' + example_1 + '\nexample_img_add : ' + example_2+'\n\n';
                    var type = 'type : Group Question / example_txt / example_img_add\n';
                    // console test
                    console.log('Group Question / example_txt / example_img_add');
                    // console.log(result);
                    console.log(consolelog);
                    // html source
                    html_group_question_quiz(question);
                    html_example_txt(example_1);
                    html_example_img_add(example_2);
                    html_group_question_end();
                }else{  // 보기문만
                    var example_txt_1s = origin.indexOf('/보기문');
                    var question = (origin.substring(number_length, example_txt_1s)).replace(/(^\s*)|(\s*$)/gi, "");
                    question = question.replaceAll(' 먼 ', ' /부정먼/.부정 ');
                    question = question.replaceAll(' 않은 ', ' /부정않은/.부정 ');
                    question = question.replaceAll(' 않는 ', ' /부정않는/.부정 ');
                    question = question.replaceAll(' 아닌 ', ' /부정아닌/.부정 ');
                    question = question.replaceAll(' 어려운 ', ' /부정어려운/.부정 ');
                    question = question.replaceAll(' 틀린 ', ' /부정틀린/.부정 ');
                    question = question.replaceAll(' 부적절한 ', ' /부정부적절한/.부정 ');
                    question = question.replaceAll(' 못한 ', ' /부정못한/.부정 ');
                    question = question.replaceAll(' 잘못 ', ' /부정잘못/.부정 ');
                    question = question.replaceAll(' 잘못된 ', ' /부정잘못된/.부정 ');
                    question = question.replaceAll(' 없는 ', ' /부정없는/.부정 ');
                    question = question.replaceAll(' 다른 ', ' /부정다른/.부정 ');
                    var example_1 = (origin.substring(example_txt_1s+4, origin.length)).replace(/(^\s*)|(\s*$)/gi, "");
                    // variable - result
                    var result = '/'+number+'/\n'+question+'\n/보기문\n'+example_1+'\n\n';
                    var consolelog = 'number : /' + number + '/\nquestion : ' + question + '\nexample_txt : ' + example_1+'\n\n';
                    var type = 'type : Group Question / example_txt\n';
                    // console test
                    console.log('Group Question / example_txt');
                    // console.log(result);
                    console.log(consolelog);
                    // html source
                    html_group_question_quiz(question);
                    html_example_txt(example_1);
                    html_group_question_end();
                }
            }else if((origin.indexOf('/보기그림'))>0){  // 보기그림
                if((origin.indexOf('/추가보기그림'))>0){  // 보기그림 / 추가보기그림
                    var example_img_1s = origin.indexOf('/보기그림');
                    var example_img_2s = origin.indexOf('/추가보기그림');
                    var question = (origin.substring(number_length, example_img_1s)).replace(/(^\s*)|(\s*$)/gi, "");
                    question = question.replaceAll(' 먼 ', ' /부정먼/.부정 ');
                    question = question.replaceAll(' 않은 ', ' /부정않은/.부정 ');
                    question = question.replaceAll(' 않는 ', ' /부정않는/.부정 ');
                    question = question.replaceAll(' 아닌 ', ' /부정아닌/.부정 ');
                    question = question.replaceAll(' 어려운 ', ' /부정어려운/.부정 ');
                    question = question.replaceAll(' 틀린 ', ' /부정틀린/.부정 ');
                    question = question.replaceAll(' 부적절한 ', ' /부정부적절한/.부정 ');
                    question = question.replaceAll(' 못한 ', ' /부정못한/.부정 ');
                    question = question.replaceAll(' 잘못 ', ' /부정잘못/.부정 ');
                    question = question.replaceAll(' 잘못된 ', ' /부정잘못된/.부정 ');
                    question = question.replaceAll(' 없는 ', ' /부정없는/.부정 ');
                    question = question.replaceAll(' 다른 ', ' /부정다른/.부정 ');
                    var example_1 = (origin.substring(example_img_1s+5, example_img_2s)).replace(/(^\s*)|(\s*$)/gi, "");
                    var example_2 = (origin.substring(example_img_2s+7, origin.length)).replace(/(^\s*)|(\s*$)/gi, "");
                    // variable - result
                    var result = '/'+number+'/\n'+question+'\n/보기그림\n'+example_1+'\n/추가보기그림\n'+example_2+'\n\n';
                    var consolelog = 'number : /' + number + '/\nquestion : ' + question + '\nexample_img : ' + example_1 + '\nexample_img_add : ' + example_2+'\n\n';
                    // console test
                    console.log('Group Question / example_img / example_img_add');
                    // console.log(result);
                    console.log(consolelog);
                    // html source
                    html_group_question_quiz(question);
                    html_example_img(example_1);
                    html_example_img_add(example_2);
                    html_group_question_end();
                }else if((origin.indexOf('/추가보기문'))>0){  // 보기그림 / 추가보기문
                    var example_img_1s = origin.indexOf('/보기그림');
                    var example_txt_2s = origin.indexOf('/추가보기문');
                    var question = (origin.substring(number_length, example_img_1s)).replace(/(^\s*)|(\s*$)/gi, "");
                    question = question.replaceAll(' 먼 ', ' /부정먼/.부정 ');
                    question = question.replaceAll(' 않은 ', ' /부정않은/.부정 ');
                    question = question.replaceAll(' 않는 ', ' /부정않는/.부정 ');
                    question = question.replaceAll(' 아닌 ', ' /부정아닌/.부정 ');
                    question = question.replaceAll(' 어려운 ', ' /부정어려운/.부정 ');
                    question = question.replaceAll(' 틀린 ', ' /부정틀린/.부정 ');
                    question = question.replaceAll(' 부적절한 ', ' /부정부적절한/.부정 ');
                    question = question.replaceAll(' 못한 ', ' /부정못한/.부정 ');
                    question = question.replaceAll(' 잘못 ', ' /부정잘못/.부정 ');
                    question = question.replaceAll(' 잘못된 ', ' /부정잘못된/.부정 ');
                    question = question.replaceAll(' 없는 ', ' /부정없는/.부정 ');
                    question = question.replaceAll(' 다른 ', ' /부정다른/.부정 ');
                    var example_1 = (origin.substring(example_img_1s+5, example_txt_2s)).replace(/(^\s*)|(\s*$)/gi, "");
                    var example_2 = (origin.substring(example_txt_2s+6, origin.length)).replace(/(^\s*)|(\s*$)/gi, "");
                    // variable - result
                    var result = '/'+number+'/\n'+question+'\n/보기그림\n'+example_1+'\n/추가보기문\n'+example_2+'\n\n';
                    var consolelog = 'number : /' + number + '/\nquestion : ' + question + '\nexample_img : ' + example_1 + '\nexample_txt_add : ' + example_2+'\n\n';
                    // console test
                    console.log('Group Question / example_img / example_txt_add');
                    // console.log(result);
                    console.log(consolelog);
                    // html source
                    html_group_question_quiz(question);
                    html_example_img(example_1);
                    html_example_txt_add(example_2);
                    html_group_question_end();
                }else{  // 보기그림만
                    var example_img_1s = origin.indexOf('/보기그림');
                    var question = (origin.substring(number_length, example_img_1s)).replace(/(^\s*)|(\s*$)/gi, "");
                    question = question.replaceAll(' 먼 ', ' /부정먼/.부정 ');
                    question = question.replaceAll(' 않은 ', ' /부정않은/.부정 ');
                    question = question.replaceAll(' 않는 ', ' /부정않는/.부정 ');
                    question = question.replaceAll(' 아닌 ', ' /부정아닌/.부정 ');
                    question = question.replaceAll(' 어려운 ', ' /부정어려운/.부정 ');
                    question = question.replaceAll(' 틀린 ', ' /부정틀린/.부정 ');
                    question = question.replaceAll(' 부적절한 ', ' /부정부적절한/.부정 ');
                    question = question.replaceAll(' 못한 ', ' /부정못한/.부정 ');
                    question = question.replaceAll(' 잘못 ', ' /부정잘못/.부정 ');
                    question = question.replaceAll(' 잘못된 ', ' /부정잘못된/.부정 ');
                    question = question.replaceAll(' 없는 ', ' /부정없는/.부정 ');
                    question = question.replaceAll(' 다른 ', ' /부정다른/.부정 ');
                    var example_1 = (origin.substring(example_img_1s+5, origin.length)).replace(/(^\s*)|(\s*$)/gi, "");
                    // variable - result
                    var result = '/'+number+'/\n'+question+'\n/보기그림\n'+example_1+'\n\n';
                    var consolelog = 'number : /' + number + '/\nquestion : ' + question + '\nexample_img : ' + example_1+'\n\n';
                    // console test
                    console.log('Group Question / example_img');
                    // console.log(result);
                    console.log(consolelog);
                    // html source
                    html_group_question_quiz(question);
                    html_example_img(example_1);
                    html_group_question_end();
                }
            }else{  // 일반형 (보기문 없음)
                var question = (origin.substring(number_length, origin.length)).replace(/(^\s*)|(\s*$)/gi, "");
                question = question.replaceAll(' 먼 ', ' /부정먼/.부정 ');
                question = question.replaceAll(' 않은 ', ' /부정않은/.부정 ');
                question = question.replaceAll(' 않는 ', ' /부정않는/.부정 ');
                question = question.replaceAll(' 아닌 ', ' /부정아닌/.부정 ');
                question = question.replaceAll(' 어려운 ', ' /부정어려운/.부정 ');
                question = question.replaceAll(' 틀린 ', ' /부정틀린/.부정 ');
                question = question.replaceAll(' 부적절한 ', ' /부정부적절한/.부정 ');
                question = question.replaceAll(' 못한 ', ' /부정못한/.부정 ');
                question = question.replaceAll(' 잘못 ', ' /부정잘못/.부정 ');
                question = question.replaceAll(' 잘못된 ', ' /부정잘못된/.부정 ');
                question = question.replaceAll(' 없는 ', ' /부정없는/.부정 ');
                question = question.replaceAll(' 다른 ', ' /부정다른/.부정 ');
                question = question.replaceAll(' 않은 ', ' /부정않은/.부정 ');
                // variable - result
                var result = '/'+number+'/\n'+question+'\n\n';
                var consolelog = 'number : /' + number + '/\nquestion : ' + question+'\n\n';
                // console test
                console.log('Group Question');
                // console.log(result);
                console.log(consolelog);
                // html source
                html_group_question_quiz(question);
                html_group_question_end();
            }
            // input array
            array_lv1[i] = result;
            array_lv2[i] = consolelog;
            // sNum edit
            gNum = gNum - 1;
            // used contents delete
            var txt2 = txt.value;
            var txt3 = txt2.replace(origin, '');
            txt.value = txt3;
        }else{
            if(gnIndex>=0){     // 그룹문제문 앞에 문제
                // .replace(/(^\s*)|(\s*$)/gi, "");
                // variable
                var origin = txt.value.substring(sIndex, gnIndex);
                var number_e = origin.indexOf('.');
                var answer_1s = origin.indexOf('①');
                var answer_2s = origin.indexOf('②');
                var answer_3s = origin.indexOf('③');
                var answer_4s = origin.indexOf('④');
                var answer_4e = origin.length;
                // variable - exe
                var number = String(sNum);
                if((origin.indexOf('/보기문'))>0){  // 보기문
                    if((origin.indexOf('/추가보기문'))>0){  // 보기문 / 추가보기문
                        var example_txt_1s = origin.indexOf('/보기문');
                        var example_txt_2s = origin.indexOf('/추가보기문');
                        var question = (origin.substring(number_e+1, example_txt_1s)).replace(/(^\s*)|(\s*$)/gi, "");
                        question = question.replaceAll(' 먼 ', ' /부정먼/.부정 ');
                        question = question.replaceAll(' 않은 ', ' /부정않은/.부정 ');
                        question = question.replaceAll(' 않는 ', ' /부정않는/.부정 ');
                        question = question.replaceAll(' 아닌 ', ' /부정아닌/.부정 ');
                        question = question.replaceAll(' 어려운 ', ' /부정어려운/.부정 ');
                        question = question.replaceAll(' 틀린 ', ' /부정틀린/.부정 ');
                        question = question.replaceAll(' 부적절한 ', ' /부정부적절한/.부정 ');
                        question = question.replaceAll(' 못한 ', ' /부정못한/.부정 ');
                        question = question.replaceAll(' 잘못 ', ' /부정잘못/.부정 ');
                        question = question.replaceAll(' 잘못된 ', ' /부정잘못된/.부정 ');
                        question = question.replaceAll(' 없는 ', ' /부정없는/.부정 ');
                        question = question.replaceAll(' 다른 ', ' /부정다른/.부정 ');
                        var example_1 = (origin.substring(example_txt_1s+4, example_txt_2s)).replace(/(^\s*)|(\s*$)/gi, "");
                        var example_2 = (origin.substring(example_txt_2s+6, answer_1s)).replace(/(^\s*)|(\s*$)/gi, "");
                        var answer_1 = (origin.substring(answer_1s+1, answer_2s)).replace(/(^\s*)|(\s*$)/gi, "");
                        var answer_2 = (origin.substring(answer_2s+1, answer_3s)).replace(/(^\s*)|(\s*$)/gi, "");
                        var answer_3 = (origin.substring(answer_3s+1, answer_4s)).replace(/(^\s*)|(\s*$)/gi, "");
                        var answer_4 = (origin.substring(answer_4s+1, answer_4e)).replace(/(^\s*)|(\s*$)/gi, "");
                        // variable - result
                        var result = number+'.\n'+question+'\n/보기문\n'+example_1+'\n/추가보기문\n'+example_2+'\n① '+answer_1+'\n② '+answer_2+'\n③ '+answer_3+'\n④ '+answer_4+'\n\n';
                        var consolelog = 'number : ' + number + '\nquestion : ' + question + '\nexample_txt : ' + example_1 + '\nexample_txt_add : ' + example_2 + '\n① : ' + answer_1 + '\n② : ' + answer_2 + '\n③ : ' + answer_3 + '\n④ : ' + answer_4+'\n\n';
                        // console test
                        console.log('Group Prev Question / example_txt / example_txt_add');
                        // console.log(result);
                        console.log(consolelog);
                        // html source (보기문/추가보기문)
                        html_question_quiz(number, question);
                        html_example_txt(example_1);
                        html_example_txt_add(example_2);
                        html_question_answer(number, answer_1, answer_2, answer_3, answer_4);
                    }else if((origin.indexOf('/추가보기그림'))>0){  // 보기문 / 추가보기그림
                        var example_txt_1s = origin.indexOf('/보기문');
                        var example_img_2s = origin.indexOf('/추가보기그림');
                        var question = (origin.substring(number_e+1, example_txt_1s)).replace(/(^\s*)|(\s*$)/gi, "");
                        question = question.replaceAll(' 먼 ', ' /부정먼/.부정 ');
                        question = question.replaceAll(' 않은 ', ' /부정않은/.부정 ');
                        question = question.replaceAll(' 않는 ', ' /부정않는/.부정 ');
                        question = question.replaceAll(' 아닌 ', ' /부정아닌/.부정 ');
                        question = question.replaceAll(' 어려운 ', ' /부정어려운/.부정 ');
                        question = question.replaceAll(' 틀린 ', ' /부정틀린/.부정 ');
                        question = question.replaceAll(' 부적절한 ', ' /부정부적절한/.부정 ');
                        question = question.replaceAll(' 못한 ', ' /부정못한/.부정 ');
                        question = question.replaceAll(' 잘못 ', ' /부정잘못/.부정 ');
                        question = question.replaceAll(' 잘못된 ', ' /부정잘못된/.부정 ');
                        question = question.replaceAll(' 없는 ', ' /부정없는/.부정 ');
                        question = question.replaceAll(' 다른 ', ' /부정다른/.부정 ');
                        var example_1 = (origin.substring(example_txt_1s+4, example_img_2s)).replace(/(^\s*)|(\s*$)/gi, "");
                        var example_2 = (origin.substring(example_img_2s+7, answer_1s)).replace(/(^\s*)|(\s*$)/gi, "");
                        var answer_1 = (origin.substring(answer_1s+1, answer_2s)).replace(/(^\s*)|(\s*$)/gi, "");
                        var answer_2 = (origin.substring(answer_2s+1, answer_3s)).replace(/(^\s*)|(\s*$)/gi, "");
                        var answer_3 = (origin.substring(answer_3s+1, answer_4s)).replace(/(^\s*)|(\s*$)/gi, "");
                        var answer_4 = (origin.substring(answer_4s+1, answer_4e)).replace(/(^\s*)|(\s*$)/gi, "");
                        // variable - result
                        var result = number+'.\n'+question+'\n/보기문\n'+example_1+'\n/추가보기그림\n'+example_2+'\n① '+answer_1+'\n② '+answer_2+'\n③ '+answer_3+'\n④ '+answer_4+'\n\n';
                        var consolelog = 'number : ' + number + '\nquestion : ' + question + '\nexample_txt : ' + example_1 + '\nexample_img_add : ' + example_2 + '\n① : ' + answer_1 + '\n② : ' + answer_2 + '\n③ : ' + answer_3 + '\n④ : ' + answer_4+'\n\n';
                        // console test
                        console.log('Group Prev Question / example_txt / example_img_add');
                        // console.log(result);
                        console.log(consolelog);
                        // html source (보기문/추가보기그림)
                        html_question_quiz(number, question);
                        html_example_txt(example_1);
                        html_example_img_add(example_2);
                        html_question_answer(number, answer_1, answer_2, answer_3, answer_4);
                    }else{  // 보기문만
                        var example_txt_1s = origin.indexOf('/보기문');
                        var question = (origin.substring(number_e+1, example_txt_1s)).replace(/(^\s*)|(\s*$)/gi, "");
                        question = question.replaceAll(' 먼 ', ' /부정먼/.부정 ');
                        question = question.replaceAll(' 않은 ', ' /부정않은/.부정 ');
                        question = question.replaceAll(' 않는 ', ' /부정않는/.부정 ');
                        question = question.replaceAll(' 아닌 ', ' /부정아닌/.부정 ');
                        question = question.replaceAll(' 어려운 ', ' /부정어려운/.부정 ');
                        question = question.replaceAll(' 틀린 ', ' /부정틀린/.부정 ');
                        question = question.replaceAll(' 부적절한 ', ' /부정부적절한/.부정 ');
                        question = question.replaceAll(' 못한 ', ' /부정못한/.부정 ');
                        question = question.replaceAll(' 잘못 ', ' /부정잘못/.부정 ');
                        question = question.replaceAll(' 잘못된 ', ' /부정잘못된/.부정 ');
                        question = question.replaceAll(' 없는 ', ' /부정없는/.부정 ');
                        question = question.replaceAll(' 다른 ', ' /부정다른/.부정 ');
                        var example_1 = (origin.substring(example_txt_1s+4, answer_1s)).replace(/(^\s*)|(\s*$)/gi, "");
                        var answer_1 = (origin.substring(answer_1s+1, answer_2s)).replace(/(^\s*)|(\s*$)/gi, "");
                        var answer_2 = (origin.substring(answer_2s+1, answer_3s)).replace(/(^\s*)|(\s*$)/gi, "");
                        var answer_3 = (origin.substring(answer_3s+1, answer_4s)).replace(/(^\s*)|(\s*$)/gi, "");
                        var answer_4 = (origin.substring(answer_4s+1, answer_4e)).replace(/(^\s*)|(\s*$)/gi, "");
                        // variable - result
                        var result = number+'.\n'+question+'\n/보기문\n'+example_1+'\n① '+answer_1+'\n② '+answer_2+'\n③ '+answer_3+'\n④ '+answer_4+'\n\n';
                        var consolelog = 'number : ' + number + '\nquestion : ' + question + '\nexample_txt : ' + example_1 + '\n① : ' + answer_1 + '\n② : ' + answer_2 + '\n③ : ' + answer_3 + '\n④ : ' + answer_4+'\n\n';
                        // console test
                        console.log('Group Prev Question / example_txt');
                        // console.log(result);
                        console.log(consolelog);
                        // html source (보기문)
                        html_question_quiz(number, question);
                        html_example_txt(example_1);
                        html_question_answer(number, answer_1, answer_2, answer_3, answer_4);
                    }
                }else if((origin.indexOf('/보기그림'))>0){  // 보기그림
                    if((origin.indexOf('/추가보기그림'))>0){  // 보기그림 / 추가보기그림
                        var example_img_1s = origin.indexOf('/보기그림');
                        var example_img_2s = origin.indexOf('/추가보기그림');
                        var question = (origin.substring(number_e+1, example_img_1s)).replace(/(^\s*)|(\s*$)/gi, "");
                        question = question.replaceAll(' 먼 ', ' /부정먼/.부정 ');
                        question = question.replaceAll(' 않은 ', ' /부정않은/.부정 ');
                        question = question.replaceAll(' 않는 ', ' /부정않는/.부정 ');
                        question = question.replaceAll(' 아닌 ', ' /부정아닌/.부정 ');
                        question = question.replaceAll(' 어려운 ', ' /부정어려운/.부정 ');
                        question = question.replaceAll(' 틀린 ', ' /부정틀린/.부정 ');
                        question = question.replaceAll(' 부적절한 ', ' /부정부적절한/.부정 ');
                        question = question.replaceAll(' 못한 ', ' /부정못한/.부정 ');
                        question = question.replaceAll(' 잘못 ', ' /부정잘못/.부정 ');
                        question = question.replaceAll(' 잘못된 ', ' /부정잘못된/.부정 ');
                        question = question.replaceAll(' 없는 ', ' /부정없는/.부정 ');
                        question = question.replaceAll(' 다른 ', ' /부정다른/.부정 ');
                        var example_1 = (origin.substring(example_img_1s+5, example_img_2s)).replace(/(^\s*)|(\s*$)/gi, "");
                        var example_2 = (origin.substring(example_img_2s+7, answer_1s)).replace(/(^\s*)|(\s*$)/gi, "");
                        var answer_1 = (origin.substring(answer_1s+1, answer_2s)).replace(/(^\s*)|(\s*$)/gi, "");
                        var answer_2 = (origin.substring(answer_2s+1, answer_3s)).replace(/(^\s*)|(\s*$)/gi, "");
                        var answer_3 = (origin.substring(answer_3s+1, answer_4s)).replace(/(^\s*)|(\s*$)/gi, "");
                        var answer_4 = (origin.substring(answer_4s+1, answer_4e)).replace(/(^\s*)|(\s*$)/gi, "");
                        // variable - result
                        var result = number+'.\n'+question+'\n/보기그림\n'+example_1+'\n/추가보기그림\n'+example_2+'\n① '+answer_1+'\n② '+answer_2+'\n③ '+answer_3+'\n④ '+answer_4+'\n\n';
                        var consolelog = 'number : ' + number + '\nquestion : ' + question + '\nexample_img : ' + example_1 + '\nexample_img_add : ' + example_2 + '\n① : ' + answer_1 + '\n② : ' + answer_2 + '\n③ : ' + answer_3 + '\n④ : ' + answer_4+'\n\n';
                        // console test
                        console.log('Group Prev Question / example_img / example_img_add');
                        // console.log(result);
                        console.log(consolelog);
                        // html source (보기그림/추가보기그림)
                        html_question_quiz(number, question);
                        html_example_img(example_1);
                        html_example_img_add(example_2);
                        html_question_answer(number, answer_1, answer_2, answer_3, answer_4);
                    }else if((origin.indexOf('/추가보기문'))>0){  // 보기그림 / 추가보기문
                        var example_img_1s = origin.indexOf('/보기그림');
                        var example_txt_2s = origin.indexOf('/추가보기문');
                        var question = (origin.substring(number_e+1, example_img_1s)).replace(/(^\s*)|(\s*$)/gi, "");
                        question = question.replaceAll(' 먼 ', ' /부정먼/.부정 ');
                        question = question.replaceAll(' 않은 ', ' /부정않은/.부정 ');
                        question = question.replaceAll(' 않는 ', ' /부정않는/.부정 ');
                        question = question.replaceAll(' 아닌 ', ' /부정아닌/.부정 ');
                        question = question.replaceAll(' 어려운 ', ' /부정어려운/.부정 ');
                        question = question.replaceAll(' 틀린 ', ' /부정틀린/.부정 ');
                        question = question.replaceAll(' 부적절한 ', ' /부정부적절한/.부정 ');
                        question = question.replaceAll(' 못한 ', ' /부정못한/.부정 ');
                        question = question.replaceAll(' 잘못 ', ' /부정잘못/.부정 ');
                        question = question.replaceAll(' 잘못된 ', ' /부정잘못된/.부정 ');
                        question = question.replaceAll(' 없는 ', ' /부정없는/.부정 ');
                        question = question.replaceAll(' 다른 ', ' /부정다른/.부정 ');
                        var example_1 = (origin.substring(example_img_1s+5, example_txt_2s)).replace(/(^\s*)|(\s*$)/gi, "");
                        var example_2 = (origin.substring(example_txt_2s+6, answer_1s)).replace(/(^\s*)|(\s*$)/gi, "");
                        var answer_1 = (origin.substring(answer_1s+1, answer_2s)).replace(/(^\s*)|(\s*$)/gi, "");
                        var answer_2 = (origin.substring(answer_2s+1, answer_3s)).replace(/(^\s*)|(\s*$)/gi, "");
                        var answer_3 = (origin.substring(answer_3s+1, answer_4s)).replace(/(^\s*)|(\s*$)/gi, "");
                        var answer_4 = (origin.substring(answer_4s+1, answer_4e)).replace(/(^\s*)|(\s*$)/gi, "");
                        // variable - result
                        var result = number+'.\n'+question+'\n/보기그림\n'+example_1+'\n/추가보기문\n'+example_2+'\n① '+answer_1+'\n② '+answer_2+'\n③ '+answer_3+'\n④ '+answer_4+'\n\n';
                        var consolelog = 'number : ' + number + '\nquestion : ' + question + '\nexample_img : ' + example_1 + '\nexample_txt_add : ' + example_2 + '\n① : ' + answer_1 + '\n② : ' + answer_2 + '\n③ : ' + answer_3 + '\n④ : ' + answer_4+'\n\n';
                        // console test
                        console.log('Group Prev Question / example_img / example_txt_add');
                        // console.log(result);
                        console.log(consolelog);
                        // html source (보기그림/추가보기문)
                        html_question_quiz(number, question);
                        html_example_img(example_1);
                        html_example_txt_add(example_2);
                        html_question_answer(number, answer_1, answer_2, answer_3, answer_4);
                    }else{  // 보기그림만
                        var example_img_1s = origin.indexOf('/보기그림');
                        var question = (origin.substring(number_e+1, example_img_1s)).replace(/(^\s*)|(\s*$)/gi, "");
                        question = question.replaceAll(' 먼 ', ' /부정먼/.부정 ');
                        question = question.replaceAll(' 않은 ', ' /부정않은/.부정 ');
                        question = question.replaceAll(' 않는 ', ' /부정않는/.부정 ');
                        question = question.replaceAll(' 아닌 ', ' /부정아닌/.부정 ');
                        question = question.replaceAll(' 어려운 ', ' /부정어려운/.부정 ');
                        question = question.replaceAll(' 틀린 ', ' /부정틀린/.부정 ');
                        question = question.replaceAll(' 부적절한 ', ' /부정부적절한/.부정 ');
                        question = question.replaceAll(' 못한 ', ' /부정못한/.부정 ');
                        question = question.replaceAll(' 잘못 ', ' /부정잘못/.부정 ');
                        question = question.replaceAll(' 잘못된 ', ' /부정잘못된/.부정 ');
                        question = question.replaceAll(' 없는 ', ' /부정없는/.부정 ');
                        question = question.replaceAll(' 다른 ', ' /부정다른/.부정 ');
                        var example_1 = (origin.substring(example_img_1s+5, answer_1s)).replace(/(^\s*)|(\s*$)/gi, "");
                        var answer_1 = (origin.substring(answer_1s+1, answer_2s)).replace(/(^\s*)|(\s*$)/gi, "");
                        var answer_2 = (origin.substring(answer_2s+1, answer_3s)).replace(/(^\s*)|(\s*$)/gi, "");
                        var answer_3 = (origin.substring(answer_3s+1, answer_4s)).replace(/(^\s*)|(\s*$)/gi, "");
                        var answer_4 = (origin.substring(answer_4s+1, answer_4e)).replace(/(^\s*)|(\s*$)/gi, "");
                        // variable - result
                        var result = number+'.\n'+question+'\n/보기그림\n'+example_1+'\n① '+answer_1+'\n② '+answer_2+'\n③ '+answer_3+'\n④ '+answer_4+'\n\n';
                        var consolelog = 'number : ' + number + '\nquestion : ' + question + '\nexample_img : ' + example_1 + '\n① : ' + answer_1 + '\n② : ' + answer_2 + '\n③ : ' + answer_3 + '\n④ : ' + answer_4+'\n\n';
                        // console test
                        console.log('Group Prev Question / example_img');
                        // console.log(result);
                        console.log(consolelog);
                        // html source (보기그림)
                        html_question_quiz(number, question);
                        html_example_img(example_1);
                        html_question_answer(number, answer_1, answer_2, answer_3, answer_4);
                    }
                }else{  // 일반형 (보기문 없음)
                    var question = (origin.substring(number_e+1, answer_1s)).replace(/(^\s*)|(\s*$)/gi, "");
                    question = question.replaceAll(' 먼 ', ' /부정먼/.부정 ');
                    question = question.replaceAll(' 않은 ', ' /부정않은/.부정 ');
                    question = question.replaceAll(' 않는 ', ' /부정않는/.부정 ');
                    question = question.replaceAll(' 아닌 ', ' /부정아닌/.부정 ');
                    question = question.replaceAll(' 어려운 ', ' /부정어려운/.부정 ');
                    question = question.replaceAll(' 틀린 ', ' /부정틀린/.부정 ');
                    question = question.replaceAll(' 부적절한 ', ' /부정부적절한/.부정 ');
                    question = question.replaceAll(' 못한 ', ' /부정못한/.부정 ');
                    question = question.replaceAll(' 잘못 ', ' /부정잘못/.부정 ');
                    question = question.replaceAll(' 잘못된 ', ' /부정잘못된/.부정 ');
                    question = question.replaceAll(' 없는 ', ' /부정없는/.부정 ');
                    question = question.replaceAll(' 다른 ', ' /부정다른/.부정 ');
                    question = question.replaceAll(' 않은 ', ' /부정않은/.부정 ');
                    var answer_1 = (origin.substring(answer_1s+1, answer_2s)).replace(/(^\s*)|(\s*$)/gi, "");
                    var answer_2 = (origin.substring(answer_2s+1, answer_3s)).replace(/(^\s*)|(\s*$)/gi, "");
                    var answer_3 = (origin.substring(answer_3s+1, answer_4s)).replace(/(^\s*)|(\s*$)/gi, "");
                    var answer_4 = (origin.substring(answer_4s+1, answer_4e)).replace(/(^\s*)|(\s*$)/gi, "");
                    // variable - result
                    var result = number+'.\n'+question+'\n① '+answer_1+'\n② '+answer_2+'\n③ '+answer_3+'\n④ '+answer_4+'\n\n';
                    var consolelog = 'number : ' + number + '\nquestion : ' + question + '\n① : ' + answer_1 + '\n② : ' + answer_2 + '\n③ : ' + answer_3 + '\n④ : ' + answer_4+'\n\n';
                    // console test
                    console.log('Group Prev Question');
                    // console.log(result);
                    console.log(consolelog);
                    // html source (노말)
                    html_question_quiz(number, question);
                    html_question_answer(number, answer_1, answer_2, answer_3, answer_4);
                }
                // input array
                array_lv1[i] = result;
                array_lv2[i] = consolelog;
                // used contents delete
                var txt2 = txt.value;
                var txt3 = txt2.replace(origin, '');
                txt.value = txt3;
            }else{
                if(sNum==eNum){     // 맨 마지막 문제
                    // variable
                    var origin = txt.value.substring(sIndex, eIndex);
                    var number_e = origin.indexOf('.');
                    var answer_1s = origin.indexOf('①');
                    var answer_2s = origin.indexOf('②');
                    var answer_3s = origin.indexOf('③');
                    var answer_4s = origin.indexOf('④');
                    var answer_4e = origin.length;
                    // variable - exe
                    var number = String(sNum);
                    if((origin.indexOf('/보기문'))>0){  // 보기문
                        if((origin.indexOf('/추가보기문'))>0){  // 보기문 / 추가보기문
                            var example_txt_1s = origin.indexOf('/보기문');
                            var example_txt_2s = origin.indexOf('/추가보기문');
                            var question = (origin.substring(number_e+1, example_txt_1s)).replace(/(^\s*)|(\s*$)/gi, "");
                            question = question.replaceAll(' 먼 ', ' /부정먼/.부정 ');
                            question = question.replaceAll(' 않은 ', ' /부정않은/.부정 ');
                            question = question.replaceAll(' 않는 ', ' /부정않는/.부정 ');
                            question = question.replaceAll(' 아닌 ', ' /부정아닌/.부정 ');
                            question = question.replaceAll(' 어려운 ', ' /부정어려운/.부정 ');
                            question = question.replaceAll(' 틀린 ', ' /부정틀린/.부정 ');
                            question = question.replaceAll(' 부적절한 ', ' /부정부적절한/.부정 ');
                            question = question.replaceAll(' 못한 ', ' /부정못한/.부정 ');
                            question = question.replaceAll(' 잘못 ', ' /부정잘못/.부정 ');
                            question = question.replaceAll(' 잘못된 ', ' /부정잘못된/.부정 ');
                            question = question.replaceAll(' 없는 ', ' /부정없는/.부정 ');
                            question = question.replaceAll(' 다른 ', ' /부정다른/.부정 ');
                            var example_1 = (origin.substring(example_txt_1s+4, example_txt_2s)).replace(/(^\s*)|(\s*$)/gi, "");
                            var example_2 = (origin.substring(example_txt_2s+6, answer_1s)).replace(/(^\s*)|(\s*$)/gi, "");
                            var answer_1 = (origin.substring(answer_1s+1, answer_2s)).replace(/(^\s*)|(\s*$)/gi, "");
                            var answer_2 = (origin.substring(answer_2s+1, answer_3s)).replace(/(^\s*)|(\s*$)/gi, "");
                            var answer_3 = (origin.substring(answer_3s+1, answer_4s)).replace(/(^\s*)|(\s*$)/gi, "");
                            var answer_4 = (origin.substring(answer_4s+1, answer_4e)).replace(/(^\s*)|(\s*$)/gi, "");
                            // variable - result
                            var result = number+'.\n'+question+'\n/보기문\n'+example_1+'\n/추가보기문\n'+example_2+'\n① '+answer_1+'\n② '+answer_2+'\n③ '+answer_3+'\n④ '+answer_4+'\n\n';
                            var consolelog = 'number : ' + number + '\nquestion : ' + question + '\nexample_txt : ' + example_1 + '\nexample_txt_add : ' + example_2 + '\n① : ' + answer_1 + '\n② : ' + answer_2 + '\n③ : ' + answer_3 + '\n④ : ' + answer_4+'\n\n';
                            // console test
                            console.log('Final Question / example_txt / example_txt_add');
                            // console.log(result);
                            // html source (보기문/추가보기문)
                            html_question_quiz(number, question);
                            html_example_txt(example_1);
                            html_example_txt_add(example_2);
                            html_question_answer(number, answer_1, answer_2, answer_3, answer_4);
                            console.log(consolelog);
                        }else if((origin.indexOf('/추가보기그림'))>0){  // 보기문 / 추가보기그림
                            var example_txt_1s = origin.indexOf('/보기문');
                            var example_img_2s = origin.indexOf('/추가보기그림');
                            var question = (origin.substring(number_e+1, example_txt_1s)).replace(/(^\s*)|(\s*$)/gi, "");
                            question = question.replaceAll(' 먼 ', ' /부정먼/.부정 ');
                            question = question.replaceAll(' 않은 ', ' /부정않은/.부정 ');
                            question = question.replaceAll(' 않는 ', ' /부정않는/.부정 ');
                            question = question.replaceAll(' 아닌 ', ' /부정아닌/.부정 ');
                            question = question.replaceAll(' 어려운 ', ' /부정어려운/.부정 ');
                            question = question.replaceAll(' 틀린 ', ' /부정틀린/.부정 ');
                            question = question.replaceAll(' 부적절한 ', ' /부정부적절한/.부정 ');
                            question = question.replaceAll(' 못한 ', ' /부정못한/.부정 ');
                            question = question.replaceAll(' 잘못 ', ' /부정잘못/.부정 ');
                            question = question.replaceAll(' 잘못된 ', ' /부정잘못된/.부정 ');
                            question = question.replaceAll(' 없는 ', ' /부정없는/.부정 ');
                            question = question.replaceAll(' 다른 ', ' /부정다른/.부정 ');
                            var example_1 = (origin.substring(example_txt_1s+4, example_img_2s)).replace(/(^\s*)|(\s*$)/gi, "");
                            var example_2 = (origin.substring(example_img_2s+7, answer_1s)).replace(/(^\s*)|(\s*$)/gi, "");
                            var answer_1 = (origin.substring(answer_1s+1, answer_2s)).replace(/(^\s*)|(\s*$)/gi, "");
                            var answer_2 = (origin.substring(answer_2s+1, answer_3s)).replace(/(^\s*)|(\s*$)/gi, "");
                            var answer_3 = (origin.substring(answer_3s+1, answer_4s)).replace(/(^\s*)|(\s*$)/gi, "");
                            var answer_4 = (origin.substring(answer_4s+1, answer_4e)).replace(/(^\s*)|(\s*$)/gi, "");
                            // variable - result
                            var result = number+'.\n'+question+'\n/보기문\n'+example_1+'\n/추가보기그림\n'+example_2+'\n① '+answer_1+'\n② '+answer_2+'\n③ '+answer_3+'\n④ '+answer_4+'\n\n';
                            var consolelog = 'number : ' + number + '\nquestion : ' + question + '\nexample_txt : ' + example_1 + '\nexample_img_add : ' + example_2 + '\n① : ' + answer_1 + '\n② : ' + answer_2 + '\n③ : ' + answer_3 + '\n④ : ' + answer_4+'\n\n';
                            // console test
                            console.log('Final Question / example_txt / example_img_add');
                            // console.log(result);
                            console.log(consolelog);
                            // html source (보기문/추가보기그림)
                            html_question_quiz(number, question);
                            html_example_txt(example_1);
                            html_example_img_add(example_2);
                            html_question_answer(number, answer_1, answer_2, answer_3, answer_4);
                        }else{  // 보기문만
                            var example_txt_1s = origin.indexOf('/보기문');
                            var question = (origin.substring(number_e+1, example_txt_1s)).replace(/(^\s*)|(\s*$)/gi, "");
                            question = question.replaceAll(' 먼 ', ' /부정먼/.부정 ');
                            question = question.replaceAll(' 않은 ', ' /부정않은/.부정 ');
                            question = question.replaceAll(' 않는 ', ' /부정않는/.부정 ');
                            question = question.replaceAll(' 아닌 ', ' /부정아닌/.부정 ');
                            question = question.replaceAll(' 어려운 ', ' /부정어려운/.부정 ');
                            question = question.replaceAll(' 틀린 ', ' /부정틀린/.부정 ');
                            question = question.replaceAll(' 부적절한 ', ' /부정부적절한/.부정 ');
                            question = question.replaceAll(' 못한 ', ' /부정못한/.부정 ');
                            question = question.replaceAll(' 잘못 ', ' /부정잘못/.부정 ');
                            question = question.replaceAll(' 잘못된 ', ' /부정잘못된/.부정 ');
                            question = question.replaceAll(' 없는 ', ' /부정없는/.부정 ');
                            question = question.replaceAll(' 다른 ', ' /부정다른/.부정 ');
                            var example_1 = (origin.substring(example_txt_1s+4, answer_1s)).replace(/(^\s*)|(\s*$)/gi, "");
                            var answer_1 = (origin.substring(answer_1s+1, answer_2s)).replace(/(^\s*)|(\s*$)/gi, "");
                            var answer_2 = (origin.substring(answer_2s+1, answer_3s)).replace(/(^\s*)|(\s*$)/gi, "");
                            var answer_3 = (origin.substring(answer_3s+1, answer_4s)).replace(/(^\s*)|(\s*$)/gi, "");
                            var answer_4 = (origin.substring(answer_4s+1, answer_4e)).replace(/(^\s*)|(\s*$)/gi, "");
                            // variable - result
                            var result = number+'.\n'+question+'\n/보기문\n'+example_1+'\n① '+answer_1+'\n② '+answer_2+'\n③ '+answer_3+'\n④ '+answer_4+'\n\n';
                            var consolelog = 'number : ' + number + '\nquestion : ' + question + '\nexample_txt : ' + example_1 + '\n① : ' + answer_1 + '\n② : ' + answer_2 + '\n③ : ' + answer_3 + '\n④ : ' + answer_4+'\n\n';
                            // console test
                            console.log('Final Question / example_txt');
                            // console.log(result);
                            console.log(consolelog);
                            // html source (보기문)
                            html_question_quiz(number, question);
                            html_example_txt(example_1);
                            html_question_answer(number, answer_1, answer_2, answer_3, answer_4);
                        }
                    }else if((origin.indexOf('/보기그림'))>0){  // 보기그림
                        if((origin.indexOf('/추가보기그림'))>0){  // 보기그림 / 추가보기그림
                            var example_img_1s = origin.indexOf('/보기그림');
                            var example_img_2s = origin.indexOf('/추가보기그림');
                            var question = (origin.substring(number_e+1, example_img_1s)).replace(/(^\s*)|(\s*$)/gi, "");
                            question = question.replaceAll(' 먼 ', ' /부정먼/.부정 ');
                            question = question.replaceAll(' 않은 ', ' /부정않은/.부정 ');
                            question = question.replaceAll(' 않는 ', ' /부정않는/.부정 ');
                            question = question.replaceAll(' 아닌 ', ' /부정아닌/.부정 ');
                            question = question.replaceAll(' 어려운 ', ' /부정어려운/.부정 ');
                            question = question.replaceAll(' 틀린 ', ' /부정틀린/.부정 ');
                            question = question.replaceAll(' 부적절한 ', ' /부정부적절한/.부정 ');
                            question = question.replaceAll(' 못한 ', ' /부정못한/.부정 ');
                            question = question.replaceAll(' 잘못 ', ' /부정잘못/.부정 ');
                            question = question.replaceAll(' 잘못된 ', ' /부정잘못된/.부정 ');
                            question = question.replaceAll(' 없는 ', ' /부정없는/.부정 ');
                            question = question.replaceAll(' 다른 ', ' /부정다른/.부정 ');
                            var example_1 = (origin.substring(example_img_1s+5, example_img_2s)).replace(/(^\s*)|(\s*$)/gi, "");
                            var example_2 = (origin.substring(example_img_2s+7, answer_1s)).replace(/(^\s*)|(\s*$)/gi, "");
                            var answer_1 = (origin.substring(answer_1s+1, answer_2s)).replace(/(^\s*)|(\s*$)/gi, "");
                            var answer_2 = (origin.substring(answer_2s+1, answer_3s)).replace(/(^\s*)|(\s*$)/gi, "");
                            var answer_3 = (origin.substring(answer_3s+1, answer_4s)).replace(/(^\s*)|(\s*$)/gi, "");
                            var answer_4 = (origin.substring(answer_4s+1, answer_4e)).replace(/(^\s*)|(\s*$)/gi, "");
                            // variable - result
                            var result = number+'.\n'+question+'\n/보기그림\n'+example_1+'\n/추가보기그림\n'+example_2+'\n① '+answer_1+'\n② '+answer_2+'\n③ '+answer_3+'\n④ '+answer_4+'\n\n';
                            var consolelog = 'number : ' + number + '\nquestion : ' + question + '\nexample_img : ' + example_1 + '\nexample_img_add : ' + example_2 + '\n① : ' + answer_1 + '\n② : ' + answer_2 + '\n③ : ' + answer_3 + '\n④ : ' + answer_4+'\n\n';
                            // console test
                            console.log('Final Question / example_img / example_img_add');
                            // console.log(result);
                            console.log(consolelog);
                            // html source (보기그림/추가보기그림)
                            html_question_quiz(number, question);
                            html_example_img(example_1);
                            html_example_img_add(example_2);
                            html_question_answer(number, answer_1, answer_2, answer_3, answer_4);
                        }else if((origin.indexOf('/추가보기문'))>0){  // 보기그림 / 추가보기문
                            var example_img_1s = origin.indexOf('/보기그림');
                            var example_txt_2s = origin.indexOf('/추가보기문');
                            var question = (origin.substring(number_e+1, example_img_1s)).replace(/(^\s*)|(\s*$)/gi, "");
                            question = question.replaceAll(' 먼 ', ' /부정먼/.부정 ');
                            question = question.replaceAll(' 않은 ', ' /부정않은/.부정 ');
                            question = question.replaceAll(' 않는 ', ' /부정않는/.부정 ');
                            question = question.replaceAll(' 아닌 ', ' /부정아닌/.부정 ');
                            question = question.replaceAll(' 어려운 ', ' /부정어려운/.부정 ');
                            question = question.replaceAll(' 틀린 ', ' /부정틀린/.부정 ');
                            question = question.replaceAll(' 부적절한 ', ' /부정부적절한/.부정 ');
                            question = question.replaceAll(' 못한 ', ' /부정못한/.부정 ');
                            question = question.replaceAll(' 잘못 ', ' /부정잘못/.부정 ');
                            question = question.replaceAll(' 잘못된 ', ' /부정잘못된/.부정 ');
                            question = question.replaceAll(' 없는 ', ' /부정없는/.부정 ');
                            question = question.replaceAll(' 다른 ', ' /부정다른/.부정 ');
                            var example_1 = (origin.substring(example_img_1s+5, example_txt_2s)).replace(/(^\s*)|(\s*$)/gi, "");
                            var example_2 = (origin.substring(example_txt_2s+6, answer_1s)).replace(/(^\s*)|(\s*$)/gi, "");
                            var answer_1 = (origin.substring(answer_1s+1, answer_2s)).replace(/(^\s*)|(\s*$)/gi, "");
                            var answer_2 = (origin.substring(answer_2s+1, answer_3s)).replace(/(^\s*)|(\s*$)/gi, "");
                            var answer_3 = (origin.substring(answer_3s+1, answer_4s)).replace(/(^\s*)|(\s*$)/gi, "");
                            var answer_4 = (origin.substring(answer_4s+1, answer_4e)).replace(/(^\s*)|(\s*$)/gi, "");
                            // variable - result
                            var result = number+'.\n'+question+'\n/보기그림\n'+example_1+'\n/추가보기문\n'+example_2+'\n① '+answer_1+'\n② '+answer_2+'\n③ '+answer_3+'\n④ '+answer_4+'\n\n';
                            var consolelog = 'number : ' + number + '\nquestion : ' + question + '\nexample_img : ' + example_1 + '\nexample_txt_add : ' + example_2 + '\n① : ' + answer_1 + '\n② : ' + answer_2 + '\n③ : ' + answer_3 + '\n④ : ' + answer_4+'\n\n';
                            // console test
                            console.log('Final Question / example_img / example_txt_add');
                            // console.log(result);
                            console.log(consolelog);
                            // html source (보기그림/추가보기문)
                            html_question_quiz(number, question);
                            html_example_img(example_1);
                            html_example_txt_add(example_2);
                            html_question_answer(number, answer_1, answer_2, answer_3, answer_4);
                        }else{  // 보기그림만
                            var example_img_1s = origin.indexOf('/보기그림');
                            var question = (origin.substring(number_e+1, example_img_1s)).replace(/(^\s*)|(\s*$)/gi, "");
                            question = question.replaceAll(' 먼 ', ' /부정먼/.부정 ');
                            question = question.replaceAll(' 않은 ', ' /부정않은/.부정 ');
                            question = question.replaceAll(' 않는 ', ' /부정않는/.부정 ');
                            question = question.replaceAll(' 아닌 ', ' /부정아닌/.부정 ');
                            question = question.replaceAll(' 어려운 ', ' /부정어려운/.부정 ');
                            question = question.replaceAll(' 틀린 ', ' /부정틀린/.부정 ');
                            question = question.replaceAll(' 부적절한 ', ' /부정부적절한/.부정 ');
                            question = question.replaceAll(' 못한 ', ' /부정못한/.부정 ');
                            question = question.replaceAll(' 잘못 ', ' /부정잘못/.부정 ');
                            question = question.replaceAll(' 잘못된 ', ' /부정잘못된/.부정 ');
                            question = question.replaceAll(' 없는 ', ' /부정없는/.부정 ');
                            question = question.replaceAll(' 다른 ', ' /부정다른/.부정 ');
                            var example_1 = (origin.substring(example_img_1s+5, answer_1s)).replace(/(^\s*)|(\s*$)/gi, "");
                            var answer_1 = (origin.substring(answer_1s+1, answer_2s)).replace(/(^\s*)|(\s*$)/gi, "");
                            var answer_2 = (origin.substring(answer_2s+1, answer_3s)).replace(/(^\s*)|(\s*$)/gi, "");
                            var answer_3 = (origin.substring(answer_3s+1, answer_4s)).replace(/(^\s*)|(\s*$)/gi, "");
                            var answer_4 = (origin.substring(answer_4s+1, answer_4e)).replace(/(^\s*)|(\s*$)/gi, "");
                            // variable - result
                            var result = number+'.\n'+question+'\n/보기그림\n'+example_1+'\n① '+answer_1+'\n② '+answer_2+'\n③ '+answer_3+'\n④ '+answer_4+'\n\n';
                            var consolelog = 'number : ' + number + '\nquestion : ' + question + '\nexample_img : ' + example_1 + '\n① : ' + answer_1 + '\n② : ' + answer_2 + '\n③ : ' + answer_3 + '\n④ : ' + answer_4+'\n\n';
                            // console test
                            console.log('Final Question / example_img');
                            // console.log(result);
                            console.log(consolelog);
                            // html source (보기그림)
                            html_question_quiz(number, question);
                            html_example_img(example_1);
                            html_question_answer(number, answer_1, answer_2, answer_3, answer_4);
                        }
                    }else{  // 일반형 (보기문 없음)
                        var question = (origin.substring(number_e+1, answer_1s)).replace(/(^\s*)|(\s*$)/gi, "");
                        question = question.replaceAll(' 먼 ', ' /부정먼/.부정 ');
                        question = question.replaceAll(' 않은 ', ' /부정않은/.부정 ');
                        question = question.replaceAll(' 않는 ', ' /부정않는/.부정 ');
                        question = question.replaceAll(' 아닌 ', ' /부정아닌/.부정 ');
                        question = question.replaceAll(' 어려운 ', ' /부정어려운/.부정 ');
                        question = question.replaceAll(' 틀린 ', ' /부정틀린/.부정 ');
                        question = question.replaceAll(' 부적절한 ', ' /부정부적절한/.부정 ');
                        question = question.replaceAll(' 못한 ', ' /부정못한/.부정 ');
                        question = question.replaceAll(' 잘못 ', ' /부정잘못/.부정 ');
                        question = question.replaceAll(' 잘못된 ', ' /부정잘못된/.부정 ');
                        question = question.replaceAll(' 없는 ', ' /부정없는/.부정 ');
                        question = question.replaceAll(' 다른 ', ' /부정다른/.부정 ');
                        question = question.replaceAll(' 않은 ', ' /부정않은/.부정 ');
                        var answer_1 = (origin.substring(answer_1s+1, answer_2s)).replace(/(^\s*)|(\s*$)/gi, "");
                        var answer_2 = (origin.substring(answer_2s+1, answer_3s)).replace(/(^\s*)|(\s*$)/gi, "");
                        var answer_3 = (origin.substring(answer_3s+1, answer_4s)).replace(/(^\s*)|(\s*$)/gi, "");
                        var answer_4 = (origin.substring(answer_4s+1, answer_4e)).replace(/(^\s*)|(\s*$)/gi, "");
                        // variable - result
                        var result = number+'.\n'+question+'\n① '+answer_1+'\n② '+answer_2+'\n③ '+answer_3+'\n④ '+answer_4+'\n\n';
                        var consolelog = 'number : ' + number + '\nquestion : ' + question + '\n① : ' + answer_1 + '\n② : ' + answer_2 + '\n③ : ' + answer_3 + '\n④ : ' + answer_4+'\n\n';
                        // console test
                        console.log('Final Question');
                        // console.log(result);
                        console.log(consolelog);
                        // html source (노말)
                        html_question_quiz(number, question);
                        html_question_answer(number, answer_1, answer_2, answer_3, answer_4);
                    }
                    // input array
                    array_lv1[i] = result;
                    array_lv2[i] = consolelog;
                    // used contents delete
                    var txt2 = txt.value;
                    var txt3 = txt2.replace(origin, '');
                    txt.value = txt3;
                    // break;
                    break;
                }else{      // 정상적인 문제
                    // variable
                    var origin = txt.value.substring(sIndex, nIndex);
                    var number_e = origin.indexOf('.');
                    var answer_1s = origin.indexOf('①');
                    var answer_2s = origin.indexOf('②');
                    var answer_3s = origin.indexOf('③');
                    var answer_4s = origin.indexOf('④');
                    var answer_4e = origin.length;
                    // variable - exe
                    var number = String(sNum);
                    if((origin.indexOf('/보기문'))>0){  // 보기문
                        if((origin.indexOf('/추가보기문'))>0){  // 보기문 / 추가보기문
                            var example_txt_1s = origin.indexOf('/보기문');
                            var example_txt_2s = origin.indexOf('/추가보기문');
                            var question = (origin.substring(number_e+1, example_txt_1s)).replace(/(^\s*)|(\s*$)/gi, "");
                            question = question.replaceAll(' 먼 ', ' /부정먼/.부정 ');
                            question = question.replaceAll(' 않은 ', ' /부정않은/.부정 ');
                            question = question.replaceAll(' 않는 ', ' /부정않는/.부정 ');
                            question = question.replaceAll(' 아닌 ', ' /부정아닌/.부정 ');
                            question = question.replaceAll(' 어려운 ', ' /부정어려운/.부정 ');
                            question = question.replaceAll(' 틀린 ', ' /부정틀린/.부정 ');
                            question = question.replaceAll(' 부적절한 ', ' /부정부적절한/.부정 ');
                            question = question.replaceAll(' 못한 ', ' /부정못한/.부정 ');
                            question = question.replaceAll(' 잘못 ', ' /부정잘못/.부정 ');
                            question = question.replaceAll(' 잘못된 ', ' /부정잘못된/.부정 ');
                            question = question.replaceAll(' 없는 ', ' /부정없는/.부정 ');
                            question = question.replaceAll(' 다른 ', ' /부정다른/.부정 ');
                            var example_1 = (origin.substring(example_txt_1s+4, example_txt_2s)).replace(/(^\s*)|(\s*$)/gi, "");
                            var example_2 = (origin.substring(example_txt_2s+6, answer_1s)).replace(/(^\s*)|(\s*$)/gi, "");
                            var answer_1 = (origin.substring(answer_1s+1, answer_2s)).replace(/(^\s*)|(\s*$)/gi, "");
                            var answer_2 = (origin.substring(answer_2s+1, answer_3s)).replace(/(^\s*)|(\s*$)/gi, "");
                            var answer_3 = (origin.substring(answer_3s+1, answer_4s)).replace(/(^\s*)|(\s*$)/gi, "");
                            var answer_4 = (origin.substring(answer_4s+1, answer_4e)).replace(/(^\s*)|(\s*$)/gi, "");
                            // variable - result
                            var result = number+'.\n'+question+'\n/보기문\n'+example_1+'\n/추가보기문\n'+example_2+'\n① '+answer_1+'\n② '+answer_2+'\n③ '+answer_3+'\n④ '+answer_4+'\n\n';
                            var consolelog = 'number : ' + number + '\nquestion : ' + question + '\nexample_txt : ' + example_1 + '\nexample_txt_add : ' + example_2 + '\n① : ' + answer_1 + '\n② : ' + answer_2 + '\n③ : ' + answer_3 + '\n④ : ' + answer_4+'\n\n';
                            // console test
                            console.log('Normal Question / example_txt / example_txt_add');
                            // console.log(result);
                            console.log(consolelog);
                            // html source (보기문/추가보기문)
                            html_question_quiz(number, question);
                            html_example_txt(example_1);
                            html_example_txt_add(example_2);
                            html_question_answer(number, answer_1, answer_2, answer_3, answer_4);
                        }else if((origin.indexOf('/추가보기그림'))>0){  // 보기문 / 추가보기그림
                            var example_txt_1s = origin.indexOf('/보기문');
                            var example_img_2s = origin.indexOf('/추가보기그림');
                            var question = (origin.substring(number_e+1, example_txt_1s)).replace(/(^\s*)|(\s*$)/gi, "");
                            question = question.replaceAll(' 먼 ', ' /부정먼/.부정 ');
                            question = question.replaceAll(' 않은 ', ' /부정않은/.부정 ');
                            question = question.replaceAll(' 않는 ', ' /부정않는/.부정 ');
                            question = question.replaceAll(' 아닌 ', ' /부정아닌/.부정 ');
                            question = question.replaceAll(' 어려운 ', ' /부정어려운/.부정 ');
                            question = question.replaceAll(' 틀린 ', ' /부정틀린/.부정 ');
                            question = question.replaceAll(' 부적절한 ', ' /부정부적절한/.부정 ');
                            question = question.replaceAll(' 못한 ', ' /부정못한/.부정 ');
                            question = question.replaceAll(' 잘못 ', ' /부정잘못/.부정 ');
                            question = question.replaceAll(' 잘못된 ', ' /부정잘못된/.부정 ');
                            question = question.replaceAll(' 없는 ', ' /부정없는/.부정 ');
                            question = question.replaceAll(' 다른 ', ' /부정다른/.부정 ');
                            var example_1 = (origin.substring(example_txt_1s+4, example_img_2s)).replace(/(^\s*)|(\s*$)/gi, "");
                            var example_2 = (origin.substring(example_img_2s+7, answer_1s)).replace(/(^\s*)|(\s*$)/gi, "");
                            var answer_1 = (origin.substring(answer_1s+1, answer_2s)).replace(/(^\s*)|(\s*$)/gi, "");
                            var answer_2 = (origin.substring(answer_2s+1, answer_3s)).replace(/(^\s*)|(\s*$)/gi, "");
                            var answer_3 = (origin.substring(answer_3s+1, answer_4s)).replace(/(^\s*)|(\s*$)/gi, "");
                            var answer_4 = (origin.substring(answer_4s+1, answer_4e)).replace(/(^\s*)|(\s*$)/gi, "");
                            // variable - result
                            var result = number+'.\n'+question+'\n/보기문\n'+example_1+'\n/추가보기그림\n'+example_2+'\n① '+answer_1+'\n② '+answer_2+'\n③ '+answer_3+'\n④ '+answer_4+'\n\n';
                            var consolelog = 'number : ' + number + '\nquestion : ' + question + '\nexample_txt : ' + example_1 + '\nexample_img_add : ' + example_2 + '\n① : ' + answer_1 + '\n② : ' + answer_2 + '\n③ : ' + answer_3 + '\n④ : ' + answer_4+'\n\n';
                            // console test
                            console.log('Normal Question / example_txt / example_img_add');
                            // console.log(result);
                            console.log(consolelog);
                            // html source (보기문/추가보기그림)
                            html_question_quiz(number, question);
                            html_example_txt(example_1);
                            html_example_img_add(example_2);
                            html_question_answer(number, answer_1, answer_2, answer_3, answer_4);
                        }else{  // 보기문만
                            var example_txt_1s = origin.indexOf('/보기문');
                            var question = (origin.substring(number_e+1, example_txt_1s)).replace(/(^\s*)|(\s*$)/gi, "");
                            question = question.replaceAll(' 먼 ', ' /부정먼/.부정 ');
                            question = question.replaceAll(' 않은 ', ' /부정않은/.부정 ');
                            question = question.replaceAll(' 않는 ', ' /부정않는/.부정 ');
                            question = question.replaceAll(' 아닌 ', ' /부정아닌/.부정 ');
                            question = question.replaceAll(' 어려운 ', ' /부정어려운/.부정 ');
                            question = question.replaceAll(' 틀린 ', ' /부정틀린/.부정 ');
                            question = question.replaceAll(' 부적절한 ', ' /부정부적절한/.부정 ');
                            question = question.replaceAll(' 못한 ', ' /부정못한/.부정 ');
                            question = question.replaceAll(' 잘못 ', ' /부정잘못/.부정 ');
                            question = question.replaceAll(' 잘못된 ', ' /부정잘못된/.부정 ');
                            question = question.replaceAll(' 없는 ', ' /부정없는/.부정 ');
                            question = question.replaceAll(' 다른 ', ' /부정다른/.부정 ');
                            var example_1 = (origin.substring(example_txt_1s+4, answer_1s)).replace(/(^\s*)|(\s*$)/gi, "");
                            var answer_1 = (origin.substring(answer_1s+1, answer_2s)).replace(/(^\s*)|(\s*$)/gi, "");
                            var answer_2 = (origin.substring(answer_2s+1, answer_3s)).replace(/(^\s*)|(\s*$)/gi, "");
                            var answer_3 = (origin.substring(answer_3s+1, answer_4s)).replace(/(^\s*)|(\s*$)/gi, "");
                            var answer_4 = (origin.substring(answer_4s+1, answer_4e)).replace(/(^\s*)|(\s*$)/gi, "");
                            // variable - result
                            var result = number+'.\n'+question+'\n/보기문\n'+example_1+'\n① '+answer_1+'\n② '+answer_2+'\n③ '+answer_3+'\n④ '+answer_4+'\n\n';
                            var consolelog = 'number : ' + number + '\nquestion : ' + question + '\nexample_txt : ' + example_1 + '\n① : ' + answer_1 + '\n② : ' + answer_2 + '\n③ : ' + answer_3 + '\n④ : ' + answer_4+'\n\n';
                            // console test
                            console.log('Normal Question / example_txt');
                            // console.log(result);
                            console.log(consolelog);
                            // html source (보기문)
                            html_question_quiz(number, question);
                            html_example_txt(example_1);
                            html_question_answer(number, answer_1, answer_2, answer_3, answer_4);
                        }
                    }else if((origin.indexOf('/보기그림'))>0){  // 보기그림
                        if((origin.indexOf('/추가보기그림'))>0){  // 보기그림 / 추가보기그림
                            var example_img_1s = origin.indexOf('/보기그림');
                            var example_img_2s = origin.indexOf('/추가보기그림');
                            var question = (origin.substring(number_e+1, example_img_1s)).replace(/(^\s*)|(\s*$)/gi, "");
                            question = question.replaceAll(' 먼 ', ' /부정먼/.부정 ');
                            question = question.replaceAll(' 않은 ', ' /부정않은/.부정 ');
                            question = question.replaceAll(' 않는 ', ' /부정않는/.부정 ');
                            question = question.replaceAll(' 아닌 ', ' /부정아닌/.부정 ');
                            question = question.replaceAll(' 어려운 ', ' /부정어려운/.부정 ');
                            question = question.replaceAll(' 틀린 ', ' /부정틀린/.부정 ');
                            question = question.replaceAll(' 부적절한 ', ' /부정부적절한/.부정 ');
                            question = question.replaceAll(' 못한 ', ' /부정못한/.부정 ');
                            question = question.replaceAll(' 잘못 ', ' /부정잘못/.부정 ');
                            question = question.replaceAll(' 잘못된 ', ' /부정잘못된/.부정 ');
                            question = question.replaceAll(' 없는 ', ' /부정없는/.부정 ');
                            question = question.replaceAll(' 다른 ', ' /부정다른/.부정 ');
                            var example_1 = (origin.substring(example_img_1s+5, example_img_2s)).replace(/(^\s*)|(\s*$)/gi, "");
                            var example_2 = (origin.substring(example_img_2s+7, answer_1s)).replace(/(^\s*)|(\s*$)/gi, "");
                            var answer_1 = (origin.substring(answer_1s+1, answer_2s)).replace(/(^\s*)|(\s*$)/gi, "");
                            var answer_2 = (origin.substring(answer_2s+1, answer_3s)).replace(/(^\s*)|(\s*$)/gi, "");
                            var answer_3 = (origin.substring(answer_3s+1, answer_4s)).replace(/(^\s*)|(\s*$)/gi, "");
                            var answer_4 = (origin.substring(answer_4s+1, answer_4e)).replace(/(^\s*)|(\s*$)/gi, "");
                            // variable - result
                            var result = number+'.\n'+question+'\n/보기그림\n'+example_1+'\n/추가보기그림\n'+example_2+'\n① '+answer_1+'\n② '+answer_2+'\n③ '+answer_3+'\n④ '+answer_4+'\n\n';
                            var consolelog = 'number : ' + number + '\nquestion : ' + question + '\nexample_img : ' + example_1 + '\nexample_img_add : ' + example_2 + '\n① : ' + answer_1 + '\n② : ' + answer_2 + '\n③ : ' + answer_3 + '\n④ : ' + answer_4+'\n\n';
                            // console test
                            console.log('Normal Question / example_img / example_img_add');
                            // console.log(result);
                            console.log(consolelog);
                            // html source (보기그림/추가보기그림)
                            html_question_quiz(number, question);
                            html_example_img(example_1);
                            html_example_img_add(example_2);
                            html_question_answer(number, answer_1, answer_2, answer_3, answer_4);
                        }else if((origin.indexOf('/추가보기문'))>0){  // 보기그림 / 추가보기문
                            var example_img_1s = origin.indexOf('/보기그림');
                            var example_txt_2s = origin.indexOf('/추가보기문');
                            var question = (origin.substring(number_e+1, example_img_1s)).replace(/(^\s*)|(\s*$)/gi, "");
                            question = question.replaceAll(' 먼 ', ' /부정먼/.부정 ');
                            question = question.replaceAll(' 않은 ', ' /부정않은/.부정 ');
                            question = question.replaceAll(' 않는 ', ' /부정않는/.부정 ');
                            question = question.replaceAll(' 아닌 ', ' /부정아닌/.부정 ');
                            question = question.replaceAll(' 어려운 ', ' /부정어려운/.부정 ');
                            question = question.replaceAll(' 틀린 ', ' /부정틀린/.부정 ');
                            question = question.replaceAll(' 부적절한 ', ' /부정부적절한/.부정 ');
                            question = question.replaceAll(' 못한 ', ' /부정못한/.부정 ');
                            question = question.replaceAll(' 잘못 ', ' /부정잘못/.부정 ');
                            question = question.replaceAll(' 잘못된 ', ' /부정잘못된/.부정 ');
                            question = question.replaceAll(' 없는 ', ' /부정없는/.부정 ');
                            question = question.replaceAll(' 다른 ', ' /부정다른/.부정 ');
                            var example_1 = (origin.substring(example_img_1s+5, example_txt_2s)).replace(/(^\s*)|(\s*$)/gi, "");
                            var example_2 = (origin.substring(example_txt_2s+6, answer_1s)).replace(/(^\s*)|(\s*$)/gi, "");
                            var answer_1 = (origin.substring(answer_1s+1, answer_2s)).replace(/(^\s*)|(\s*$)/gi, "");
                            var answer_2 = (origin.substring(answer_2s+1, answer_3s)).replace(/(^\s*)|(\s*$)/gi, "");
                            var answer_3 = (origin.substring(answer_3s+1, answer_4s)).replace(/(^\s*)|(\s*$)/gi, "");
                            var answer_4 = (origin.substring(answer_4s+1, answer_4e)).replace(/(^\s*)|(\s*$)/gi, "");
                            // variable - result
                            var result = number+'.\n'+question+'\n/보기그림\n'+example_1+'\n/추가보기문\n'+example_2+'\n① '+answer_1+'\n② '+answer_2+'\n③ '+answer_3+'\n④ '+answer_4+'\n\n';
                            var consolelog = 'number : ' + number + '\nquestion : ' + question + '\nexample_img : ' + example_1 + '\nexample_txt_add : ' + example_2 + '\n① : ' + answer_1 + '\n② : ' + answer_2 + '\n③ : ' + answer_3 + '\n④ : ' + answer_4+'\n\n';
                            // console test
                            console.log('Normal Question / example_img / example_txt_add');
                            // console.log(result);
                            console.log(consolelog);
                            // html source (보기그림/추가보기문)
                            html_question_quiz(number, question);
                            html_example_img(example_1);
                            html_example_txt_add(example_2);
                            html_question_answer(number, answer_1, answer_2, answer_3, answer_4);
                        }else{  // 보기그림만
                            var example_img_1s = origin.indexOf('/보기그림');
                            var question = (origin.substring(number_e+1, example_img_1s)).replace(/(^\s*)|(\s*$)/gi, "");
                            question = question.replaceAll(' 먼 ', ' /부정먼/.부정 ');
                            question = question.replaceAll(' 않은 ', ' /부정않은/.부정 ');
                            question = question.replaceAll(' 않는 ', ' /부정않는/.부정 ');
                            question = question.replaceAll(' 아닌 ', ' /부정아닌/.부정 ');
                            question = question.replaceAll(' 어려운 ', ' /부정어려운/.부정 ');
                            question = question.replaceAll(' 틀린 ', ' /부정틀린/.부정 ');
                            question = question.replaceAll(' 부적절한 ', ' /부정부적절한/.부정 ');
                            question = question.replaceAll(' 못한 ', ' /부정못한/.부정 ');
                            question = question.replaceAll(' 잘못 ', ' /부정잘못/.부정 ');
                            question = question.replaceAll(' 잘못된 ', ' /부정잘못된/.부정 ');
                            question = question.replaceAll(' 없는 ', ' /부정없는/.부정 ');
                            question = question.replaceAll(' 다른 ', ' /부정다른/.부정 ');
                            var example_1 = (origin.substring(example_img_1s+5, answer_1s)).replace(/(^\s*)|(\s*$)/gi, "");
                            var answer_1 = (origin.substring(answer_1s+1, answer_2s)).replace(/(^\s*)|(\s*$)/gi, "");
                            var answer_2 = (origin.substring(answer_2s+1, answer_3s)).replace(/(^\s*)|(\s*$)/gi, "");
                            var answer_3 = (origin.substring(answer_3s+1, answer_4s)).replace(/(^\s*)|(\s*$)/gi, "");
                            var answer_4 = (origin.substring(answer_4s+1, answer_4e)).replace(/(^\s*)|(\s*$)/gi, "");
                            // variable - result
                            var result = number+'.\n'+question+'\n/보기그림\n'+example_1+'\n① '+answer_1+'\n② '+answer_2+'\n③ '+answer_3+'\n④ '+answer_4+'\n\n';
                            var consolelog = 'number : ' + number + '\nquestion : ' + question + '\nexample_img : ' + example_1 + '\n① : ' + answer_1 + '\n② : ' + answer_2 + '\n③ : ' + answer_3 + '\n④ : ' + answer_4+'\n\n';
                            // console test
                            console.log('Normal Question / example_img');
                            // console.log(result);
                            console.log(consolelog);
                            // html source (보기그림)
                            html_question_quiz(number, question);
                            html_example_img(example_1);
                            html_question_answer(number, answer_1, answer_2, answer_3, answer_4);
                        }
                    }else{  // 일반형 (보기문 없음)
                        var question = (origin.substring(number_e+1, answer_1s)).replace(/(^\s*)|(\s*$)/gi, "");
                        question = question.replaceAll(' 먼 ', ' /부정먼/.부정 ');
                        question = question.replaceAll(' 않은 ', ' /부정않은/.부정 ');
                        question = question.replaceAll(' 않는 ', ' /부정않는/.부정 ');
                        question = question.replaceAll(' 아닌 ', ' /부정아닌/.부정 ');
                        question = question.replaceAll(' 어려운 ', ' /부정어려운/.부정 ');
                        question = question.replaceAll(' 틀린 ', ' /부정틀린/.부정 ');
                        question = question.replaceAll(' 부적절한 ', ' /부정부적절한/.부정 ');
                        question = question.replaceAll(' 못한 ', ' /부정못한/.부정 ');
                        question = question.replaceAll(' 잘못 ', ' /부정잘못/.부정 ');
                        question = question.replaceAll(' 잘못된 ', ' /부정잘못된/.부정 ');
                        question = question.replaceAll(' 없는 ', ' /부정없는/.부정 ');
                        question = question.replaceAll(' 다른 ', ' /부정다른/.부정 ');
                        question = question.replaceAll(' 않은 ', ' /부정않은/.부정 ');
                        var answer_1 = (origin.substring(answer_1s+1, answer_2s)).replace(/(^\s*)|(\s*$)/gi, "");
                        var answer_2 = (origin.substring(answer_2s+1, answer_3s)).replace(/(^\s*)|(\s*$)/gi, "");
                        var answer_3 = (origin.substring(answer_3s+1, answer_4s)).replace(/(^\s*)|(\s*$)/gi, "");
                        var answer_4 = (origin.substring(answer_4s+1, answer_4e)).replace(/(^\s*)|(\s*$)/gi, "");
                        // variable - result
                        var result = number+'.\n'+question+'\n① '+answer_1+'\n② '+answer_2+'\n③ '+answer_3+'\n④ '+answer_4+'\n\n';
                        var consolelog = 'number : ' + number + '\nquestion : ' + question + '\n① : ' + answer_1 + '\n② : ' + answer_2 + '\n③ : ' + answer_3 + '\n④ : ' + answer_4+'\n\n';
                        // console test
                        console.log('Normal Question');
                        // console.log(result);
                        console.log(consolelog);
                        // html source (노말)
                        html_question_quiz(number, question);
                        html_question_answer(number, answer_1, answer_2, answer_3, answer_4);
                    }
                    // input array
                    array_lv1[i] = result;
                    array_lv2[i] = consolelog;
                    // used contents delete
                    var txt2 = txt.value;
                    var txt3 = txt2.replace(origin, '');
                    txt.value = txt3;
                }
            }
        }
    }

    // html source
    html_question_check();
    html_answer_table_header();
    html_answer_table_input();
    html_answer_table_contents();
    html_answer_table_footer();
    html_shortcut();
    html_notice_footer();
    post_view();
}

// array_lv1_output
function array_lv1_output(){
    txt.value = '';
    rst.value = '';
    for(var i=0; i<array_lv1.length; i++){
        rst.value += array_lv1[i];
    }
    txt.value = rst.value;
    rst.value = '';
}

// array_lv1_button
function btn_lv1(){
    array_lv1_input();
    array_lv1_output();
}

// array_lv2_output
function array_lv2_output(){
    txt.value = '';
    rst.value = '';
    for(var i=0; i<array_lv2.length; i++){
        rst.value += array_lv2[i];
    }
    txt.value = rst.value;
    rst.value = '';
}
// array_lv2_button
function btn_lv2(){
    array_lv1_input();
    array_lv2_output();
}

// --------------------------------------------------------------------------------------
// ----------------------------------- AUTO CONVERTOR -----------------------------------
// --------------------------------------------------------------------------------------


// auto post_title
function post_title(){
    txt_title.value = '방송대 '+txt_object.value+' '+txt_kind.value+'시험 20'+txt_year.value+'년도 '+txt_seme.value+'학기 '+txt_grade.value+'학년 / 올에이클래스 모의고사';
}

// auto question_count
function question_count(){
    txt_count.value = parseInt(txt_enum.value)-parseInt(txt_snum.value)+1;
}

// --------------------------------------------------------------------------------------
// ----------------------------------- HTML CONVERTOR -----------------------------------
// --------------------------------------------------------------------------------------


//replaceAll prototype 선언
String.prototype.replaceAll = function(org, dest) {
    return this.split(org).join(dest);
}

// fnl.value reset 테스트 필요함

function final_reset(){
    fnl.value = '';
}

// html_thumb
function html_thumb(){
    src_thumb = '';
    src_thumb += '<!-- 썸네일 영역 -->\n';
    src_thumb += '<div class="allaThumbnailWrap">\n';
    src_thumb += '\t'+txt_thumb.value+'\n';
    src_thumb += '</div>\n';
    src_thumb += '<!-- // 썸네일 영역 -->\n';
    src_thumb += '<!-- ------------------------------------------------------------------------------------ -->\n\n';
    fnl.value += src_thumb;
}

// html_notice_header
function html_notice_header(){
    src_notice_header = '';
    src_notice_header += '<!-- 공지사항 Header 영역 -->\n';
    src_notice_header += '<div class="allaNoticeHeaderWrap">\n';
    src_notice_header += '</div>\n';
    src_notice_header += '<!-- ------------------------------------------------------------------------------------ -->\n\n';
    fnl.value += src_notice_header;
}

// html_guide
function html_guide(){
    src_guide = '';
    src_guide += '<!-- 가이드 영역 -->\n';
    src_guide += '<div class="allaGuideWrap">\n';
    src_guide += '\t<img src="" alt="올에이클래스 이용안내 이미지">\n';
    src_guide += '</div>\n';
    src_guide += '<!-- ------------------------------------------------------------------------------------ -->\n\n';
    fnl.value += src_guide;
}

// html_title
function html_title(){
    src_title = '';
    src_title += '<!-- 타이틀 영역 -->\n';
    src_title += '<table class="allaTitleWrap">\n';
    src_title += '\t<tbody>\n';
    src_title += '\t\t<colgroup><col width="100px"><col></colgroup>\n';
    src_title += '\t\t<tr><td colspan="3"><span class="ibold">20'+txt_year.value+'</span>&nbsp;학년도&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="ibold">'+txt_seme.value+'</span>&nbsp;학기&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="ibold">'+txt_grade.value+'</span>&nbsp;학년&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="ibold">'+txt_count.value+'</span>&nbsp;문항</td></tr>\n';
    src_title += '\t\t<tr><td colspan="3">'+txt_object.value+'</td></tr>\n';
    src_title += '\t\t<tr><td>시험종류&nbsp;&nbsp;&nbsp;:</td><td>'+txt_kind.value+'시험</td></tr>\n';
    src_title += '\t\t<tr><td>출제위원&nbsp;&nbsp;&nbsp;:</td><td>'+txt_prof.value+'</td></tr>\n';
    src_title += '\t\t<tr><td>출제범위&nbsp;&nbsp;&nbsp;:</td><td>'+txt_range.value+'</td></tr>\n';
    src_title += '\t\t<tr><td>자료출처&nbsp;&nbsp;&nbsp;:</td><td>한국방송통신대학교</td></tr>\n';
    src_title += '\t\t<tr><td>웹앱제작&nbsp;&nbsp;&nbsp;:</td><td>올에이클래스 김현수<span>(방송대 컴퓨터과학과)</span></td></tr>\n';
    src_title += '\t</tbody>\n';
    src_title += '</table>\n';
    src_title += '<!-- ------------------------------------------------------------------------------------ -->\n\n';
    fnl.value += src_title;
}

// html_group_question_quiz
function html_group_question_quiz(question){
    // replace (effect)
    question = question.replaceAll('/부정', '<span class="iub">');
    question = question.replaceAll('/.부정', '</span>');
    question = question.replaceAll('/밑줄', '<span class="iunder">');
    question = question.replaceAll('/.밑줄', '</span>');
    question = question.replaceAll('/굵게', '<span class="ibold">');
    question = question.replaceAll('/.굵게', '</span>');
    question = question.replaceAll('/기움', '<i>');
    question = question.replaceAll('/.기움', '</i>');
    question = question.replaceAll('/줄', '<br>');
    question = question.replaceAll('/빈칸', '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;');
    question = question.replaceAll('/윗첨자', '<sup>');
    question = question.replaceAll('/.윗첨자', '</sup>');
    question = question.replaceAll('/아랫첨자', '<sub>');
    question = question.replaceAll('/.아랫첨자', '</sub>');
    question = question.replaceAll('/이미지', '<img src="');
    question = question.replaceAll('/.이미지', '">');
    // replace (main)
    src_group_question_quiz = '';
    src_group_question_quiz += '<!-- 그룹 문제 -->\n';
    src_group_question_quiz += '<form>\n';
    src_group_question_quiz += '\t<table class="allaBasicWrap">\n';
    src_group_question_quiz += '\t\t<tbody>\n';
    src_group_question_quiz += '\t\t\t<!-- 질의 -->\n';
    src_group_question_quiz += '\t\t\t<tr class="allaGroupQuestionLine">\n';
    src_group_question_quiz += '\t\t\t\t<td>\n';
    src_group_question_quiz += '\t\t\t\t\t<span class="allaQuestionNumber">※</span>'+question+'\n';
    src_group_question_quiz += '\t\t\t\t</td>\n';
    src_group_question_quiz += '\t\t\t</tr>\n';
    fnl.value += src_group_question_quiz;
}

// html_group_question_end
function html_group_question_end(){
    src_group_question_end = '';
    src_group_question_end += '\t\t</tbody>\n';
    src_group_question_end += '\t</table>\n';
    src_group_question_end += '</form>\n';
    src_group_question_end += '<!-- //그룹 문제-->\n';
    src_group_question_end += '<!-- ------------------------------------------------------------------------------------ -->\n\n';
    fnl.value += src_group_question_end;
}

// html_question_quiz
function html_question_quiz(number, question){
    if(parseInt(number)<10){
        // replace (Text Effect)
        question = question.replaceAll('/부정', '<span class="iub">');
        question = question.replaceAll('/.부정', '</span>');
        question = question.replaceAll('/밑줄', '<span class="iunder">');
        question = question.replaceAll('/.밑줄', '</span>');
        question = question.replaceAll('/굵게', '<span class="ibold">');
        question = question.replaceAll('/.굵게', '</span>');
        question = question.replaceAll('/기움', '<i>');
        question = question.replaceAll('/.기움', '</i>');
        question = question.replaceAll('/줄', '<br>');
        question = question.replaceAll('/빈칸', '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;');
        question = question.replaceAll('/윗첨자', '<sup>');
        question = question.replaceAll('/.윗첨자', '</sup>');
        question = question.replaceAll('/아랫첨자', '<sub>');
        question = question.replaceAll('/.아랫첨자', '</sub>');
        question = question.replaceAll('/이미지', '<img src="');
        question = question.replaceAll('/.이미지', '">');
        // replace (main)
        src_question_quiz = '';
        src_question_quiz += '<!-- 문제 : 0'+number+' -->\n';
        src_question_quiz += '<form>\n';
        src_question_quiz += '\t<table class="allaBasicWrap" id="allaBasicWrap0'+number+'">\n';
        src_question_quiz += '\t\t<tbody>\n';
        src_question_quiz += '\t\t\t<!-- 질의 -->\n';
        src_question_quiz += '\t\t\t<tr class="allaQuestionLine">\n';
        src_question_quiz += '\t\t\t\t<td colspan="2">\n';
        src_question_quiz += '\t\t\t\t\t<span class="allaQuestionNumber">0'+number+'</span>'+question+'\n';
        src_question_quiz += '\t\t\t\t</td>\n';
        src_question_quiz += '\t\t\t</tr>\n';
        fnl.value += src_question_quiz;
    }else{
        // replace (Text Effect)
        question = question.replaceAll('/부정', '<span class="iub">');
        question = question.replaceAll('/.부정', '</span>');
        question = question.replaceAll('/밑줄', '<span class="iunder">');
        question = question.replaceAll('/.밑줄', '</span>');
        question = question.replaceAll('/굵게', '<span class="ibold">');
        question = question.replaceAll('/.굵게', '</span>');
        question = question.replaceAll('/기움', '<i>');
        question = question.replaceAll('/.기움', '</i>');
        question = question.replaceAll('/줄', '<br>');
        question = question.replaceAll('/빈칸', '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;');
        question = question.replaceAll('/윗첨자', '<sup>');
        question = question.replaceAll('/.윗첨자', '</sup>');
        question = question.replaceAll('/아랫첨자', '<sub>');
        question = question.replaceAll('/.아랫첨자', '</sub>');
        question = question.replaceAll('/이미지', '<img src="');
        question = question.replaceAll('/.이미지', '">');
        // replace (main)
        src_question_quiz = '';
        src_question_quiz += '<!-- 문제 : '+number+' -->\n';
        src_question_quiz += '<form>\n';
        src_question_quiz += '\t<table class="allaBasicWrap" id="allaBasicWrap'+number+'">\n';
        src_question_quiz += '\t\t<tbody>\n';
        src_question_quiz += '\t\t\t<!-- 질의 -->\n';
        src_question_quiz += '\t\t\t<tr class="allaQuestionLine">\n';
        src_question_quiz += '\t\t\t\t<td colspan="2">\n';
        src_question_quiz += '\t\t\t\t\t<span class="allaQuestionNumber">'+number+'</span>'+question+'\n';
        src_question_quiz += '\t\t\t\t</td>\n';
        src_question_quiz += '\t\t\t</tr>\n';
        fnl.value += src_question_quiz;
    }
}

// html_example_txt
function html_example_txt(example_1){
    // replace (Text Effect)
    example_1 = example_1.replaceAll('/부정', '<span class="iub">');
    example_1 = example_1.replaceAll('/.부정', '</span>');
    example_1 = example_1.replaceAll('/밑줄', '<span class="iunder">');
    example_1 = example_1.replaceAll('/.밑줄', '</span>');
    example_1 = example_1.replaceAll('/굵게', '<span class="ibold">');
    example_1 = example_1.replaceAll('/.굵게', '</span>');
    example_1 = example_1.replaceAll('/기움', '<i>');
    example_1 = example_1.replaceAll('/.기움', '</i>');
    example_1 = example_1.replaceAll('/줄', '<br>');
    example_1 = example_1.replaceAll('/빈칸', '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;');
    example_1 = example_1.replaceAll('/윗첨자', '<sup>');
    example_1 = example_1.replaceAll('/.윗첨자', '</sup>');
    example_1 = example_1.replaceAll('/아랫첨자', '<sub>');
    example_1 = example_1.replaceAll('/.아랫첨자', '</sub>');
    example_1 = example_1.replaceAll('/이미지', '<img src="');
    example_1 = example_1.replaceAll('/.이미지', '">');
    // replace (main)
    src_example_txt = '';
    src_example_txt += '\t\t\t<!-- 보기문 -->\n';
    src_example_txt += '\t\t\t<tr class="allaExampleLine_Txt">\n';
    src_example_txt += '\t\t\t\t<td colspan="2">\n';
    src_example_txt += '\t\t\t\t\t'+example_1+'\n';
    src_example_txt += '\t\t\t\t</td>\n';
    src_example_txt += '\t\t\t</tr>\n';
    src_example_txt += '\t\t\t<tr class="allaBlankLine">\n';
    src_example_txt += '\t\t\t\t<td colspan="2"></td>\n';
    src_example_txt += '\t\t\t</tr>\n';
    fnl.value += src_example_txt;
}

// html_example_txt_add
function html_example_txt_add(example_2){
    // replace (Text Effect)
    example_2 = example_2.replaceAll('/부정', '<span class="iub">');
    example_2 = example_2.replaceAll('/.부정', '</span>');
    example_2 = example_2.replaceAll('/밑줄', '<span class="iunder">');
    example_2 = example_2.replaceAll('/.밑줄', '</span>');
    example_2 = example_2.replaceAll('/굵게', '<span class="ibold">');
    example_2 = example_2.replaceAll('/.굵게', '</span>');
    example_2 = example_2.replaceAll('/기움', '<i>');
    example_2 = example_2.replaceAll('/.기움', '</i>');
    example_2 = example_2.replaceAll('/줄', '<br>');
    example_2 = example_2.replaceAll('/빈칸', '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;');
    example_2 = example_2.replaceAll('/윗첨자', '<sup>');
    example_2 = example_2.replaceAll('/.윗첨자', '</sup>');
    example_2 = example_2.replaceAll('/아랫첨자', '<sub>');
    example_2 = example_2.replaceAll('/.아랫첨자', '</sub>');
    example_2 = example_2.replaceAll('/이미지', '<img src="');
    example_2 = example_2.replaceAll('/.이미지', '">');
    // replace (main)
    src_example_txt_add = '';
    src_example_txt_add += '\t\t\t<!-- 추가보기문 -->\n';
    src_example_txt_add += '\t\t\t<tr class="allaExampleLine_Txt">\n';
    src_example_txt_add += '\t\t\t\t<td colspan="2">\n';
    src_example_txt_add += '\t\t\t\t\t'+example_2+'\n';
    src_example_txt_add += '\t\t\t\t</td>\n';
    src_example_txt_add += '\t\t\t</tr>\n';
    src_example_txt_add += '\t\t\t<tr class="allaBlankLine">\n';
    src_example_txt_add += '\t\t\t\t<td colspan="2"></td>\n';
    src_example_txt_add += '\t\t\t</tr>\n';
    fnl.value += src_example_txt_add;
}

// html_example_img
function html_example_img(example_1){
    // replace (Text Effect)
    example_1 = example_1.replaceAll('/부정', '<span class="iub">');
    example_1 = example_1.replaceAll('/.부정', '</span>');
    example_1 = example_1.replaceAll('/밑줄', '<span class="iunder">');
    example_1 = example_1.replaceAll('/.밑줄', '</span>');
    example_1 = example_1.replaceAll('/굵게', '<span class="ibold">');
    example_1 = example_1.replaceAll('/.굵게', '</span>');
    example_1 = example_1.replaceAll('/기움', '<i>');
    example_1 = example_1.replaceAll('/.기움', '</i>');
    example_1 = example_1.replaceAll('/줄', '<br>');
    example_1 = example_1.replaceAll('/빈칸', '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;');
    example_1 = example_1.replaceAll('/윗첨자', '<sup>');
    example_1 = example_1.replaceAll('/.윗첨자', '</sup>');
    example_1 = example_1.replaceAll('/아랫첨자', '<sub>');
    example_1 = example_1.replaceAll('/.아랫첨자', '</sub>');
    example_1 = example_1.replaceAll('/이미지', '<img src="');
    example_1 = example_1.replaceAll('/.이미지', '">');
    // replace (main)
    src_example_img = '';
    src_example_img += '\t\t\t<!-- 보기그림 -->\n';
    src_example_img += '\t\t\t<tr class="allaExampleLine_Img">\n';
    src_example_img += '\t\t\t\t<td colspan="2">\n';
    // src_example_img += '\t\t\t\t\t<img src="'+example_1+'" alt="보기그림">\n';
    src_example_img += '\t\t\t\t\t'+example_1+'\n';
    src_example_img += '\t\t\t\t</td>\n';
    src_example_img += '\t\t\t</tr>\n';
    src_example_img += '\t\t\t<tr class="allaBlankLine">\n';
    src_example_img += '\t\t\t\t<td colspan="2"></td>\n';
    src_example_img += '\t\t\t</tr>\n';
    fnl.value += src_example_img;
}

// html_example_img_add
function html_example_img_add(example_2){
    // replace (Text Effect)
    example_2 = example_2.replaceAll('/부정', '<span class="iub">');
    example_2 = example_2.replaceAll('/.부정', '</span>');
    example_2 = example_2.replaceAll('/밑줄', '<span class="iunder">');
    example_2 = example_2.replaceAll('/.밑줄', '</span>');
    example_2 = example_2.replaceAll('/굵게', '<span class="ibold">');
    example_2 = example_2.replaceAll('/.굵게', '</span>');
    example_2 = example_2.replaceAll('/기움', '<i>');
    example_2 = example_2.replaceAll('/.기움', '</i>');
    example_2 = example_2.replaceAll('/줄', '<br>');
    example_2 = example_2.replaceAll('/빈칸', '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;');
    example_2 = example_2.replaceAll('/윗첨자', '<sup>');
    example_2 = example_2.replaceAll('/.윗첨자', '</sup>');
    example_2 = example_2.replaceAll('/아랫첨자', '<sub>');
    example_2 = example_2.replaceAll('/.아랫첨자', '</sub>');
    example_2 = example_2.replaceAll('/이미지', '<img src="');
    example_2 = example_2.replaceAll('/.이미지', '">');
    // replace (main)
    src_example_img = '';
    src_example_img += '\t\t\t<!-- 추가보기그림 -->\n';
    src_example_img += '\t\t\t<tr class="allaExampleLine_Img">\n';
    src_example_img += '\t\t\t\t<td colspan="2">\n';
    // src_example_img += '\t\t\t\t\t<img src="'+example_2+'" alt="추가보기그림">\n';
    src_example_img += '\t\t\t\t\t'+example_2+'\n';
    src_example_img += '\t\t\t\t</td>\n';
    src_example_img += '\t\t\t</tr>\n';
    src_example_img += '\t\t\t<tr class="allaBlankLine">\n';
    src_example_img += '\t\t\t\t<td colspan="2"></td>\n';
    src_example_img += '\t\t\t</tr>\n';
    fnl.value += src_example_img;
}

// html_question_answer
function html_question_answer(number, answer_1, answer_2, answer_3, answer_4){
    // replace (Answer_1 Text Effect)
    answer_1 = answer_1.replaceAll('/부정', '<span class="iub">');
    answer_1 = answer_1.replaceAll('/.부정', '</span>');
    answer_1 = answer_1.replaceAll('/밑줄', '<span class="iunder">');
    answer_1 = answer_1.replaceAll('/.밑줄', '</span>');
    answer_1 = answer_1.replaceAll('/굵게', '<span class="ibold">');
    answer_1 = answer_1.replaceAll('/.굵게', '</span>');
    answer_1 = answer_1.replaceAll('/기움', '<i>');
    answer_1 = answer_1.replaceAll('/.기움', '</i>');
    answer_1 = answer_1.replaceAll('/줄', '<br>');
    answer_1 = answer_1.replaceAll('/빈칸', '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;');
    answer_1 = answer_1.replaceAll('/윗첨자', '<sup>');
    answer_1 = answer_1.replaceAll('/.윗첨자', '</sup>');
    answer_1 = answer_1.replaceAll('/아랫첨자', '<sub>');
    answer_1 = answer_1.replaceAll('/.아랫첨자', '</sub>');
    answer_1 = answer_1.replaceAll('/이미지', '<img src="');
    answer_1 = answer_1.replaceAll('/.이미지', '">');
    // replace (Answer_2 Text Effect)
    answer_2 = answer_2.replaceAll('/부정', '<span class="iub">');
    answer_2 = answer_2.replaceAll('/.부정', '</span>');
    answer_2 = answer_2.replaceAll('/밑줄', '<span class="iunder">');
    answer_2 = answer_2.replaceAll('/.밑줄', '</span>');
    answer_2 = answer_2.replaceAll('/굵게', '<span class="ibold">');
    answer_2 = answer_2.replaceAll('/.굵게', '</span>');
    answer_2 = answer_2.replaceAll('/기움', '<i>');
    answer_2 = answer_2.replaceAll('/.기움', '</i>');
    answer_2 = answer_2.replaceAll('/줄', '<br>');
    answer_2 = answer_2.replaceAll('/빈칸', '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;');
    answer_2 = answer_2.replaceAll('/윗첨자', '<sup>');
    answer_2 = answer_2.replaceAll('/.윗첨자', '</sup>');
    answer_2 = answer_2.replaceAll('/아랫첨자', '<sub>');
    answer_2 = answer_2.replaceAll('/.아랫첨자', '</sub>');
    answer_2 = answer_2.replaceAll('/이미지', '<img src="');
    answer_2 = answer_2.replaceAll('/.이미지', '">');
    // replace (Answer_3 Text Effect)
    answer_3 = answer_3.replaceAll('/부정', '<span class="iub">');
    answer_3 = answer_3.replaceAll('/.부정', '</span>');
    answer_3 = answer_3.replaceAll('/밑줄', '<span class="iunder">');
    answer_3 = answer_3.replaceAll('/.밑줄', '</span>');
    answer_3 = answer_3.replaceAll('/굵게', '<span class="ibold">');
    answer_3 = answer_3.replaceAll('/.굵게', '</span>');
    answer_3 = answer_3.replaceAll('/기움', '<i>');
    answer_3 = answer_3.replaceAll('/.기움', '</i>');
    answer_3 = answer_3.replaceAll('/줄', '<br>');
    answer_3 = answer_3.replaceAll('/빈칸', '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;');
    answer_3 = answer_3.replaceAll('/윗첨자', '<sup>');
    answer_3 = answer_3.replaceAll('/.윗첨자', '</sup>');
    answer_3 = answer_3.replaceAll('/아랫첨자', '<sub>');
    answer_3 = answer_3.replaceAll('/.아랫첨자', '</sub>');
    answer_3 = answer_3.replaceAll('/이미지', '<img src="');
    answer_3 = answer_3.replaceAll('/.이미지', '">');
    // replace (Answer_4 Text Effect)
    answer_4 = answer_4.replaceAll('/부정', '<span class="iub">');
    answer_4 = answer_4.replaceAll('/.부정', '</span>');
    answer_4 = answer_4.replaceAll('/밑줄', '<span class="iunder">');
    answer_4 = answer_4.replaceAll('/.밑줄', '</span>');
    answer_4 = answer_4.replaceAll('/굵게', '<span class="ibold">');
    answer_4 = answer_4.replaceAll('/.굵게', '</span>');
    answer_4 = answer_4.replaceAll('/기움', '<i>');
    answer_4 = answer_4.replaceAll('/.기움', '</i>');
    answer_4 = answer_4.replaceAll('/줄', '<br>');
    answer_4 = answer_4.replaceAll('/빈칸', '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;');
    answer_4 = answer_4.replaceAll('/윗첨자', '<sup>');
    answer_4 = answer_4.replaceAll('/.윗첨자', '</sup>');
    answer_4 = answer_4.replaceAll('/아랫첨자', '<sub>');
    answer_4 = answer_4.replaceAll('/.아랫첨자', '</sub>');
    answer_4 = answer_4.replaceAll('/이미지', '<img src="');
    answer_4 = answer_4.replaceAll('/.이미지', '">');
    // replace (main)
    if(parseInt(number)<10){
        src_question_answer = '';
        src_question_answer += '\t\t\t<!-- 객관식 1번 -->\n';
        src_question_answer += '\t\t\t<tr class="allaAnswerLine">\n';
        src_question_answer += '\t\t\t\t<td class="allaAnswerRadioImg">\n';
        src_question_answer += '\t\t\t\t\t<label for="radio-0'+number+'-1">\n';
        src_question_answer += '\t\t\t\t\t\t<input type="radio" id="radio-0'+number+'-1" name="question-0'+number+'" value="1">\n';
        src_question_answer += '\t\t\t\t\t\t<img>\n';
        src_question_answer += '\t\t\t\t\t</label>\n';
        src_question_answer += '\t\t\t\t</td>\n';
        src_question_answer += '\t\t\t\t<td class="allaAnswerContents">\n';
        src_question_answer += '\t\t\t\t\t<label for="radio-0'+number+'-1">\n';
        src_question_answer += '\t\t\t\t\t\t'+answer_1+'\n';
        src_question_answer += '\t\t\t\t\t</label>\n';
        src_question_answer += '\t\t\t\t</td>\n';
        src_question_answer += '\t\t\t</tr>\n';
        src_question_answer += '\t\t\t<!-- 객관식 2번 -->\n';
        src_question_answer += '\t\t\t<tr class="allaAnswerLine">\n';
        src_question_answer += '\t\t\t\t<td class="allaAnswerRadioImg">\n';
        src_question_answer += '\t\t\t\t\t<label for="radio-0'+number+'-2">\n';
        src_question_answer += '\t\t\t\t\t\t<input type="radio" id="radio-0'+number+'-2" name="question-0'+number+'" value="2">\n';
        src_question_answer += '\t\t\t\t\t\t<img>\n';
        src_question_answer += '\t\t\t\t\t</label>\n';
        src_question_answer += '\t\t\t\t</td>\n';
        src_question_answer += '\t\t\t\t<td class="allaAnswerContents">\n';
        src_question_answer += '\t\t\t\t\t<label for="radio-0'+number+'-2">\n';
        src_question_answer += '\t\t\t\t\t\t'+answer_2+'\n';
        src_question_answer += '\t\t\t\t\t</label>\n';
        src_question_answer += '\t\t\t\t</td>\n';
        src_question_answer += '\t\t\t</tr>\n';
        src_question_answer += '\t\t\t<!-- 객관식 3번 -->\n';
        src_question_answer += '\t\t\t<tr class="allaAnswerLine">\n';
        src_question_answer += '\t\t\t\t<td class="allaAnswerRadioImg">\n';
        src_question_answer += '\t\t\t\t\t<label for="radio-0'+number+'-3">\n';
        src_question_answer += '\t\t\t\t\t\t<input type="radio" id="radio-0'+number+'-3" name="question-0'+number+'" value="3">\n';
        src_question_answer += '\t\t\t\t\t\t<img>\n';
        src_question_answer += '\t\t\t\t\t</label>\n';
        src_question_answer += '\t\t\t\t</td>\n';
        src_question_answer += '\t\t\t\t<td class="allaAnswerContents">\n';
        src_question_answer += '\t\t\t\t\t<label for="radio-0'+number+'-3">\n';
        src_question_answer += '\t\t\t\t\t\t'+answer_3+'\n';
        src_question_answer += '\t\t\t\t\t</label>\n';
        src_question_answer += '\t\t\t\t</td>\n';
        src_question_answer += '\t\t\t</tr>\n';
        src_question_answer += '\t\t\t<!-- 객관식 4번 -->\n';
        src_question_answer += '\t\t\t<tr class="allaAnswerLine">\n';
        src_question_answer += '\t\t\t\t<td class="allaAnswerRadioImg">\n';
        src_question_answer += '\t\t\t\t\t<label for="radio-0'+number+'-4">\n';
        src_question_answer += '\t\t\t\t\t\t<input type="radio" id="radio-0'+number+'-4" name="question-0'+number+'" value="4">\n';
        src_question_answer += '\t\t\t\t\t\t<img>\n';
        src_question_answer += '\t\t\t\t\t</label>\n';
        src_question_answer += '\t\t\t\t</td>\n';
        src_question_answer += '\t\t\t\t<td class="allaAnswerContents">\n';
        src_question_answer += '\t\t\t\t\t<label for="radio-0'+number+'-4">\n';
        src_question_answer += '\t\t\t\t\t\t'+answer_4+'\n';
        src_question_answer += '\t\t\t\t\t</label>\n';
        src_question_answer += '\t\t\t\t</td>\n';
        src_question_answer += '\t\t\t</tr>\n';
        src_question_answer += '\t\t\t<!-- 객관식 5번 -->\n';
        src_question_answer += '\t\t\t<tr class="allaAnswerLine">\n';
        src_question_answer += '\t\t\t\t<td class="allaAnswerRadioImg">\n';
        src_question_answer += '\t\t\t\t\t<label for="radio-0'+number+'-5">\n';
        src_question_answer += '\t\t\t\t\t\t<input type="radio" id="radio-0'+number+'-5" name="question-0'+number+'" value="5">\n';
        src_question_answer += '\t\t\t\t\t\t<img>\n';
        src_question_answer += '\t\t\t\t\t</label>\n';
        src_question_answer += '\t\t\t\t</td>\n';
        src_question_answer += '\t\t\t\t<td class="allaAnswerContents">\n';
        src_question_answer += '\t\t\t\t\t<label for="radio-0'+number+'-5">\n';
        src_question_answer += '\t\t\t\t\t\t모름\n';
        src_question_answer += '\t\t\t\t\t</label>\n';
        src_question_answer += '\t\t\t\t</td>\n';
        src_question_answer += '\t\t\t</tr>\n';
        src_question_answer += '\t\t\t<!-- 메인 문제 채점 -->\n';
        src_question_answer += '\t\t\t<tr class="allaCheckLine">\n';
        src_question_answer += '\t\t\t\t<td colspan="2">\n';
        src_question_answer += '\t\t\t\t\t<button type="button">다시채점</button>\n';
        src_question_answer += '\t\t\t\t</td>\n';
        src_question_answer += '\t\t\t</tr>\n';
        src_question_answer += '\t\t</tbody>\n';
        src_question_answer += '\t</table>\n';
        src_question_answer += '</form>\n';
        src_question_answer += '<!-- //문제 : 0'+number+' -->\n';
        src_question_answer += '<!-- ------------------------------------------------------------------------------------ -->\n\n';
        fnl.value += src_question_answer;
    }else{
        src_question_answer = '';
        src_question_answer += '\t\t\t<!-- 객관식 1번 -->\n';
        src_question_answer += '\t\t\t<tr class="allaAnswerLine">\n';
        src_question_answer += '\t\t\t\t<td class="allaAnswerRadioImg">\n';
        src_question_answer += '\t\t\t\t\t<label for="radio-'+number+'-1">\n';
        src_question_answer += '\t\t\t\t\t\t<input type="radio" id="radio-'+number+'-1" name="question-'+number+'" value="1">\n';
        src_question_answer += '\t\t\t\t\t\t<img>\n';
        src_question_answer += '\t\t\t\t\t</label>\n';
        src_question_answer += '\t\t\t\t</td>\n';
        src_question_answer += '\t\t\t\t<td class="allaAnswerContents">\n';
        src_question_answer += '\t\t\t\t\t<label for="radio-'+number+'-1">\n';
        src_question_answer += '\t\t\t\t\t\t'+answer_1+'\n';
        src_question_answer += '\t\t\t\t\t</label>\n';
        src_question_answer += '\t\t\t\t</td>\n';
        src_question_answer += '\t\t\t</tr>\n';
        src_question_answer += '\t\t\t<!-- 객관식 2번 -->\n';
        src_question_answer += '\t\t\t<tr class="allaAnswerLine">\n';
        src_question_answer += '\t\t\t\t<td class="allaAnswerRadioImg">\n';
        src_question_answer += '\t\t\t\t\t<label for="radio-'+number+'-2">\n';
        src_question_answer += '\t\t\t\t\t\t<input type="radio" id="radio-'+number+'-2" name="question-'+number+'" value="2">\n';
        src_question_answer += '\t\t\t\t\t\t<img>\n';
        src_question_answer += '\t\t\t\t\t</label>\n';
        src_question_answer += '\t\t\t\t</td>\n';
        src_question_answer += '\t\t\t\t<td class="allaAnswerContents">\n';
        src_question_answer += '\t\t\t\t\t<label for="radio-'+number+'-2">\n';
        src_question_answer += '\t\t\t\t\t\t'+answer_2+'\n';
        src_question_answer += '\t\t\t\t\t</label>\n';
        src_question_answer += '\t\t\t\t</td>\n';
        src_question_answer += '\t\t\t</tr>\n';
        src_question_answer += '\t\t\t<!-- 객관식 3번 -->\n';
        src_question_answer += '\t\t\t<tr class="allaAnswerLine">\n';
        src_question_answer += '\t\t\t\t<td class="allaAnswerRadioImg">\n';
        src_question_answer += '\t\t\t\t\t<label for="radio-'+number+'-3">\n';
        src_question_answer += '\t\t\t\t\t\t<input type="radio" id="radio-'+number+'-3" name="question-'+number+'" value="3">\n';
        src_question_answer += '\t\t\t\t\t\t<img>\n';
        src_question_answer += '\t\t\t\t\t</label>\n';
        src_question_answer += '\t\t\t\t</td>\n';
        src_question_answer += '\t\t\t\t<td class="allaAnswerContents">\n';
        src_question_answer += '\t\t\t\t\t<label for="radio-'+number+'-3">\n';
        src_question_answer += '\t\t\t\t\t\t'+answer_3+'\n';
        src_question_answer += '\t\t\t\t\t</label>\n';
        src_question_answer += '\t\t\t\t</td>\n';
        src_question_answer += '\t\t\t</tr>\n';
        src_question_answer += '\t\t\t<!-- 객관식 4번 -->\n';
        src_question_answer += '\t\t\t<tr class="allaAnswerLine">\n';
        src_question_answer += '\t\t\t\t<td class="allaAnswerRadioImg">\n';
        src_question_answer += '\t\t\t\t\t<label for="radio-'+number+'-4">\n';
        src_question_answer += '\t\t\t\t\t\t<input type="radio" id="radio-'+number+'-4" name="question-'+number+'" value="4">\n';
        src_question_answer += '\t\t\t\t\t\t<img>\n';
        src_question_answer += '\t\t\t\t\t</label>\n';
        src_question_answer += '\t\t\t\t</td>\n';
        src_question_answer += '\t\t\t\t<td class="allaAnswerContents">\n';
        src_question_answer += '\t\t\t\t\t<label for="radio-'+number+'-4">\n';
        src_question_answer += '\t\t\t\t\t\t'+answer_4+'\n';
        src_question_answer += '\t\t\t\t\t</label>\n';
        src_question_answer += '\t\t\t\t</td>\n';
        src_question_answer += '\t\t\t</tr>\n';
        src_question_answer += '\t\t\t<!-- 객관식 5번 -->\n';
        src_question_answer += '\t\t\t<tr class="allaAnswerLine">\n';
        src_question_answer += '\t\t\t\t<td class="allaAnswerRadioImg">\n';
        src_question_answer += '\t\t\t\t\t<label for="radio-'+number+'-5">\n';
        src_question_answer += '\t\t\t\t\t\t<input type="radio" id="radio-'+number+'-5" name="question-'+number+'" value="5">\n';
        src_question_answer += '\t\t\t\t\t\t<img>\n';
        src_question_answer += '\t\t\t\t\t</label>\n';
        src_question_answer += '\t\t\t\t</td>\n';
        src_question_answer += '\t\t\t\t<td class="allaAnswerContents">\n';
        src_question_answer += '\t\t\t\t\t<label for="radio-'+number+'-5">\n';
        src_question_answer += '\t\t\t\t\t\t모름\n';
        src_question_answer += '\t\t\t\t\t</label>\n';
        src_question_answer += '\t\t\t\t</td>\n';
        src_question_answer += '\t\t\t</tr>\n';
        src_question_answer += '\t\t\t<!-- 메인 문제 채점 -->\n';
        src_question_answer += '\t\t\t<tr class="allaCheckLine">\n';
        src_question_answer += '\t\t\t\t<td colspan="2">\n';
        src_question_answer += '\t\t\t\t\t<button type="button">다시채점</button>\n';
        src_question_answer += '\t\t\t\t</td>\n';
        src_question_answer += '\t\t\t</tr>\n';
        src_question_answer += '\t\t</tbody>\n';
        src_question_answer += '\t</table>\n';
        src_question_answer += '</form>\n';
        src_question_answer += '<!-- //문제 : '+number+' -->\n';
        src_question_answer += '<!-- ------------------------------------------------------------------------------------ -->\n\n';
        fnl.value += src_question_answer;
    }
}

// html_question_check
function html_question_check(){
    src_question_check = '';
    src_question_check += '<!-- 채점 버튼 영역 -->\n';
    src_question_check += '<form>\n';
    src_question_check += '\t<table class="allaCheckWrap">\n';
    src_question_check += '\t\t<tbody>\n';
    src_question_check += '\t\t\t<tr>\n';
    src_question_check += '\t\t\t\t<td>\n';
    src_question_check += '\t\t\t\t\t<label>각 문제마다 채점을 해줍니다.</label>\n';
    src_question_check += '\t\t\t\t\t<button type="button">채점하기</button><br>\n';
    src_question_check += '\t\t\t\t\t<label>모든 답안을 초기화합니다.</label>\n';
    src_question_check += '\t\t\t\t\t<button type="button">다시풀기</button>\n';
    src_question_check += '\t\t\t\t</td>\n';
    src_question_check += '\t\t\t</tr>\n';
    src_question_check += '\t\t</tbody>\n';
    src_question_check += '\t</table>\n';
    src_question_check += '</form>\n';
    src_question_check += '<!-- // 채점 버튼 영역 -->\n';
    src_question_check += '<!-- ------------------------------------------------------------------------------------ -->\n\n';
    fnl.value += src_question_check;
}

// html_answer_table_header
function html_answer_table_header(){
    src_answer_table_header = '';
    src_answer_table_header += '<!-- 정답지 영역 -->\n';
    src_answer_table_header += '<div class="allaAnswerGuideWrap">\n';
    src_answer_table_header += '\t<table>\n';
    src_answer_table_header += '\t\t<tbody>\n';
    src_answer_table_header += '\t\t\t<colgroup><col style="width:11.3%"><col style="width:22%"><col style="width:11.3%"><col style="width:22%"><col style="width:11.4%"><col style="width:22%"></colgroup>\n';
    src_answer_table_header += '\t\t\t<tr><th colspan="6">중복답안 가이드</th></tr>\n';
    src_answer_table_header += '\t\t\t<tr><td>A</td><td>1, 2</td><td>E</td><td>2, 4</td><td>I</td><td>1, 3, 4</td></tr>\n';
    src_answer_table_header += '\t\t\t<tr><td>B</td><td>1, 3</td><td>F</td><td>3, 4</td><td>J</td><td>2, 3, 4</td></tr>\n';
    src_answer_table_header += '\t\t\t<tr><td>C</td><td>1, 4</td><td>G</td><td>1, 2, 3</td><td>K</td><td>1, 2, 3, 4</td></tr>\n';
    src_answer_table_header += '\t\t\t<tr><td>D</td><td>2, 3</td><td>H</td><td>1, 2, 4</td><td></td><td></td></tr>\n';
    src_answer_table_header += '\t\t</tbody>\n';
    src_answer_table_header += '\t</table><br>\n';
    src_answer_table_header += '</div>\n';
    src_answer_table_header += '<div class="allaAnswerTableWrap">\n';
    src_answer_table_header += '\t<table>\n';
    src_answer_table_header += '\t\t<tbody>\n';
    src_answer_table_header += '\t\t\t<colgroup><col style="width:11.3%"><col style="width:27.65%"><col style="width:27.65%"><col style="width:16.7%"><col style="width:16.7%"></colgroup>\n';
    src_answer_table_header += '\t\t\t<tr><th>No</th><th>정답</th><th>선택</th><th>채점</th><th>바로가기</th></tr>\n';
    fnl.value += src_answer_table_header;
}

// html_answer_table_input
function html_answer_table_input(){
    for(var i=0; i<=(parseInt(txt_count.value))-1; i++){
        array_answer[i] = txt_answer.value.substring(i, i+1);
    }
}

// html_answer_table_contents
function html_answer_table_contents(){
    for(var i=0; i<=(parseInt(txt_count.value))-1; i++){
        var question_num = i + parseInt(txt_snum.value);
        if(question_num<10){
            src_answer_table_contents = '\t\t\t<tr><td>0'+question_num+'</td><td>'+array_answer[i]+'</td><td></td><td><img src="" width="26px"></td><td><img src="" id="shortcut-0'+question_num+'" width="26px"></td></tr>\n';
            fnl.value += src_answer_table_contents;
        }else{
            src_answer_table_contents = '\t\t\t<tr><td>'+question_num+'</td><td>'+array_answer[i]+'</td><td></td><td><img src="" width="26px"></td><td><img src="" id="shortcut-'+question_num+'" width="26px"></td></tr>\n';
            fnl.value += src_answer_table_contents;
        }   
    }
}

// html_answer_table_footer
function html_answer_table_footer(){
    src_answer_table_footer = '';
    src_answer_table_footer += '\t\t</tbody>\n';
    src_answer_table_footer += '\t</table>\n';
    src_answer_table_footer += '</div>\n';
    src_answer_table_footer += '<!-- // 정답지 영역 -->\n';
    src_answer_table_footer += '<!-- ------------------------------------------------------------------------------------ -->\n\n';
    fnl.value += src_answer_table_footer;
}

// html_shortcut
function html_shortcut(){
    src_shortcut = '';
    src_shortcut += '<!-- 타년도 문제 바로가기 영역 -->\n';
    src_shortcut += '<div class="allaOtherExamWrap">\n';
    /*
    src_shortcut += '\t<a href="https://allaclass.com/tag/'+txt_object.value+'%20'+txt_kind.value+'시험" target="_top">\n';
    src_shortcut += '\t\t<div>\n';
    src_shortcut += '\t\t\t<span class="allaOtherTitle">\''+txt_object.value+' '+txt_kind.value+'시험\'</span> 타년도 모의고사\n';
    src_shortcut += '\t\t</div>\n';
    src_shortcut += '\t\t<div>\n';
    src_shortcut += '\t\t\t방송대 '+txt_object.value+' 기말시험 2019년도 / 올에이클래스 모의고사<br>\n';
    src_shortcut += '\t\t\t방송대 '+txt_object.value+' 기말시험 2018년도 / 올에이클래스 모의고사<br>\n';
    src_shortcut += '\t\t\t방송대 '+txt_object.value+' 기말시험 2017년도 / 올에이클래스 모의고사<br>\n';
    src_shortcut += '\t\t\t방송대 '+txt_object.value+' 기말시험 2016년도 / 올에이클래스 모의고사<br>\n';
    src_shortcut += '\t\t\t방송대 '+txt_object.value+' 기말시험 2015년도 / 올에이클래스 모의고사<br>\n';
    src_shortcut += '\t\t\t방송대 '+txt_object.value+' 기말시험 2014년도 / 올에이클래스 모의고사<br>\n';
    src_shortcut += '\t\t\t방송대 '+txt_object.value+' 기말시험 2013년도 / 올에이클래스 모의고사<br>\n';
    src_shortcut += '\t\t</div>\n';
    src_shortcut += '\t</a>\n';
    */
    src_shortcut += '</div>\n';
    src_shortcut += '<!-- // 타년도 문제 바로가기 영역 -->\n';
    src_shortcut += '<!-- ------------------------------------------------------------------------------------ -->\n\n';
    fnl.value += src_shortcut;
}

// html_notice_footer
function html_notice_footer(){
    src_notice_footer = '';
    src_notice_footer += '<!-- 공지사항 Footer 영역 -->\n';
    src_notice_footer += '<div class="allaNoticeFooterWrap">\n';
    src_notice_footer += '</div>\n';
    src_notice_footer += '<!-- ------------------------------------------------------------------------------------ -->\n\n';
    fnl.value += src_notice_footer;
}

function post_view(){
    div_postView.innerHTML = '';
    div_postView.innerHTML = fnl.value;
}


/* -------------------------------------------- */
/* 종  료 : alla-input-common-3.0.1.js          */
/* -------------------------------------------- */