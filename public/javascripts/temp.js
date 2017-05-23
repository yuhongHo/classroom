
// 所有模块都通过 define 来定义
define(function(require, exports, module) {
    var temp = {
    	m1:'<p><span class="middle_col">{{userName}}</span>'+
            '<span class="large_col">{{uid}}</span>'+
            '<span class="small_col">{{sex}}</span>'+
            '<span class="large_col">{{tel}}</span>'+
            '<span class="small_col">{{sTime}}</span>'+
            '<span class="large_col">{{class}}</span>'+
            '<span class="large_col">{{beginTime}}</span>'+
            '<span class="middle_col">{{first_score}}</span>'+
            '<span class="middle_col">{{last_score}}</span></p>',
        m2:'<p><span class="large_col">姓名</span><span class="stu_name large_col">{{userName}}</span></p>'+
            '<p><span class="large_col">学号</span><span class="stu_uid large_col">{{uid}}</span></p>'+
            '<p><span class="large_col">专业班级</span><span class="stu_class large_col">{{class}}</span></p>'+
            '<p><span class="large_col">性别</span><span class="large_col">{{sex}}</span></p>'+
            '<p><span class="large_col">手机号码</span><span class="large_col">{{tel}}</span></p>',
        m3:'<p><span class="small_col">{{userName}}</span><span class="uid large_col">{{uid}}</span><span class="large_col">{{class}}</span></p>',
        m4:'<section class="item_block video_section">'+
            '<a href="http://hyh.liveclass.com:3000/videoWatching/{{vid}}.html?vid={{vid}}" target="_blank">'+
                '<div class="item_img"><img src="/video/cover/{{cover}}"></div>'+
                '<section class="cover_penal"></section></a>'+
            '<div class="item_title">{{vname}}</div>'
    };
    // 或者通过 module.exports 提供整个接口
    module.exports = temp;

});
