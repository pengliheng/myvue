/**
 * Created by L on 2017/12/5.
 */
//    出生日期下拉框
function DateSelector(selYear, selMonth, selDay) {
    this.selYear = selYear;
    this.selMonth = selMonth;
    this.selDay = selDay;
    this.selYear.Group = this;
    this.selMonth.Group = this;
    // 给年份、月份下拉菜单添加处理onchange事件的函数
    if (window.document.all != null) // IE
    {
        this.selYear.attachEvent("onchange", DateSelector.Onchange);
        this.selMonth.attachEvent("onchange", DateSelector.Onchange);
    } else // Firefox
    {
        this.selYear.addEventListener("change", DateSelector.Onchange, false);
        this.selMonth.addEventListener("change", DateSelector.Onchange, false);
    }
    if (arguments.length == 4) // 如果传入参数个数为4，最后一个参数必须为Date对象
        this.InitSelector(arguments[3].getFullYear(), arguments[3].getMonth() + 1, arguments[3].getDate());
    else if (arguments.length == 6) // 如果传入参数个数为6，最后三个参数必须为初始的年月日数值
        this.InitSelector(arguments[3], arguments[4], arguments[5]);
    else // 默认使用当前日期
    {
        var dt = new Date();
        this.InitSelector(dt.getFullYear(), dt.getMonth() + 1, dt.getDate());
    }
}
// 增加一个最大年份的属性
DateSelector.prototype.MinYear = 1900;
// 增加一个最大年份的属性
DateSelector.prototype.MaxYear = (new Date()).getFullYear();
// 初始化年份
DateSelector.prototype.InitYearSelect = function() {
    // 循环添加OPION元素到年份select对象中
    for (var i = this.MaxYear; i >= this.MinYear; i--) {
        // 新建一个OPTION对象
        var op = window.document.createElement("OPTION");
        // 设置OPTION对象的值
        op.value = i;
        // 设置OPTION对象的内容
        op.innerHTML = i;
        // 添加到年份select对象
        this.selYear.appendChild(op);
    }
};
// 初始化月份
DateSelector.prototype.InitMonthSelect = function() {
    // 循环添加OPION元素到月份select对象中
    for (var i = 1; i < 13; i++) {
        if(i<10){
            i= "0"+i;
        }else{
            i=i;
        }
        // 新建一个OPTION对象
        var op = window.document.createElement("OPTION");
        // 设置OPTION对象的值
        op.value = i;
        // 设置OPTION对象的内容
        op.innerHTML = i;
        // 添加到月份select对象

        this.selMonth.appendChild(op);
    }
};
// 根据年份与月份获取当月的天数
DateSelector.DaysInMonth = function(year, month) {
    var date = new Date(year, month, 0);
    return date.getDate();
};
// 初始化天数
DateSelector.prototype.InitDaySelect = function() {
    // 使用parseInt函数获取当前的年份和月份
    var year = parseInt(this.selYear.value);
    var month = parseInt(this.selMonth.value);
    // 获取当月的天数
    var daysInMonth = DateSelector.DaysInMonth(year, month);
    // 清空原有的选项
    this.selDay.options.length = 0;
    // 循环添加OPION元素到天数select对象中
    for (var i = 1; i <= daysInMonth; i++) {
        if(i<10){
            i= "0"+i;
        }else{
            i=i;
        }
        // 新建一个OPTION对象
        var op = window.document.createElement("OPTION");
        // 设置OPTION对象的值
        op.value = i;
        // 设置OPTION对象的内容
        op.innerHTML = i;
        // 添加到天数select对象
        this.selDay.appendChild(op);
    }
};
// 处理年份和月份onchange事件的方法，它获取事件来源对象（即selYear或selMonth）
// 并调用它的Group对象（即DateSelector实例，请见构造函数）提供的InitDaySelect方法重新初始化天数
// 参数e为event对象
DateSelector.Onchange = function(e) {
    var selector = window.document.all != null ? e.srcElement: e.target;
    selector.Group.InitDaySelect();
};
// 根据参数初始化下拉菜单选项
DateSelector.prototype.InitSelector = function(year, month, day) {
    // 由于外部是可以调用这个方法，因此我们在这里也要将selYear和selMonth的选项清空掉
    // 另外因为InitDaySelect方法已经有清空天数下拉菜单，因此这里就不用重复工作了
    this.selYear.options.length = 0;
    this.selMonth.options.length = 0;
    // 初始化年、月
    this.InitYearSelect();
    this.InitMonthSelect();
    // 设置年、月初始值
    this.selYear.selectedIndex = this.MaxYear - year;
    this.selMonth.selectedIndex = month - 1;
    // 初始化天数
    this.InitDaySelect();
    // 设置天数初始值
    this.selDay.selectedIndex = day - 1;
};
var selYear = window.document.getElementById("selYear");
var selMonth = window.document.getElementById("selMonth");
var selDay = window.document.getElementById("selDay");
new DateSelector(selYear, selMonth, selDay, 2004, 2, 29);

//更换头像
$('.u-pic.aa').mouseover(function () {
    $('.u-pic-mask').removeClass('hidden');
});
$('.u-pic-mask').mouseleave(function () {
    $('.u-pic-mask').addClass('hidden');

});

//关闭弹出框
$('.pb-x-pop').click(function(){
    $('#edit_address').css('display','none');
    $('#pb-mask').css('display','none');
});
//关闭提示框
$('.pb-x-prompt').click(function(){
    $('#pbDialog').css('display','none');
    $('#pb-mask').css('z-index','100002')
});



//取消
$('.pb-btn.pb-cl').click(function(){
    $('#edit_address').css('display','none');
    $('#pb-mask').css('display','none');
});

$('.cs-w-item').click(function(){
    console.log(this);
    $('.cs-w-item').removeClass('cs-selected');
    $(this).addClass('cs-selected');
});

function get_user_address() {
    $.ajax({
        type: 'POST',
        async: true,
        url: ctx + '/admin/common/queryTableRows',
        data: {
            edu_user_id: user_id,
            corp_pri: '0',
            nopage: 1,
            pageSize: 15,
            _extfn: 'get_user_address'
        },
        dataType: 'json',
        success: function (data) {
            var html = '';
            var address = data.rows;
            $('#addressNum_top').text(data.total);
            for (i = 0; i < data.total; i++) {
                var selected_icon = address[i].status == "是" ? "<span class='ftx-04 ml10'>默认地址</span>" : "";
                var selected_txt = address[i].status == "是" ? "":'<a class="ml10 ftx-05" href="javascript:void(0)" onclick="select_address(' + address[i].id + ')">设为默认</a>';
                var address_detail = eval("("+address[i].address+")");
                html +=  '<div class="md" id="list' + address[i].id + '" data-id= "' + address[i].id + '">' +
                    '<div class="sm easebuy-m " id="addresssDiv-191648493">'+
                    '<div class="smt">'+
                    '<h3>法塞特</h3>'+
                    // '<div class="extra del_addr" data-id="' + address[i].id + '">' +
                    // '<a class="del-btn">删除</a>'+
                    // '</div>'+
                    '<a onclick=" " id="alias-edit-191648493" class="alias-edit" href="javascript:;"></a>'+selected_icon+
                    '<input type="hidden" id="hid_upArea_191648493" addressid="191648493" isoldaddress="false" ismapping="false" newprovinceid="0" newcityid="0" newcountyid="0" newtownid="0" newprovincename="" newcityname="" newcountyname="" newtownname="">'+
                    '</div>'+
                    '<div class="smc">'+
                    '<div class="items new-items">'+
                    '<div class="item-lcol">'+
                    '<div class="item">'+
                    '<span class="label">收货人：</span>'+
                    '<div class="fl">' + address[i].name +
                    '</div>'+
                    '<div class="clr"></div>'+
                    '</div>'+
                    '<div class="item">'+
                    '<span class="label">所在地区：</span>'+
                    '<div class="fl">'+ address_detail.s_province + address_detail.s_city + address_detail.s_county +
                    '</div>'+
                    '<div class="clr"></div>'+
                    '</div>'+
                    '<div class="item">'+
                    '<span class="label">地址：</span>'+
                    '<div class="fl">'+ address_detail.consignee_address +
                    '</div>'+
                    '<div class="clr"></div>'+
                    '</div>'+
                    '<div class="item">'+
                    '<span class="label">手机：</span>'+
                    '<div class="fl">'+ address[i].mobile +
                    '</div>'+
                    '<div class="clr"></div>'+
                    '</div>'+
                    '<div class="item">'+
                    '<span class="label">固定电话：</span>'+
                    '<div class="fl">'+ address[i].tel +
                    '</div>'+
                    '<div class="clr"></div>'+
                    '</div>'+
                    '<div class="item">'+
                    '<span class="label">电子邮箱：</span>'+
                    '<div class="fl">'+ address[i].email +
                    '</div>'+
                    '<div class="clr"></div>'+
                    '</div>'+
                    '</div>'+
                    '<div class="item-rcol">'+
                    '<div class="extra">'+selected_txt+
                    '<a class="ml10 ftx-05" href="javascript:void(0)" onclick="change_address(' + address[i].id + ')">编辑</a>'+
                    '<a class="ml10 ftx-05 del_addr" href="javascript:void(0)" data-id="(' + address[i].id + ')">删除</a>'+
                    '</div>'+
                    '</div>'+
                    '<div class="clr"></div>'+
                    '</div>'+
                    '</div>'+
                    '</div>'+
                    '</div>';
            }
            console.log(data);
            $('.addressItems').html(html);
        }
    });
}
//删除地址
$('#addressList').on('click', '.del_addr', function () {
    var address = $(this);
    $.ajax({
        type: 'POST',
        async: false,
        url: mall_domain + '/delete_address',
        data: {
            id: $(this).attr('data-id')
        },
        dataType: 'json',
        success: function (data) {

            if (data.code == 1) {
                console.log(data);
                address.parents('.md').remove();
                get_user_address();
            }
        }
    })
});
//设为默认
function select_address(id) {
    $.ajax({
        type: 'POST',
        async: false,
        url: mall_domain + '/select_address',
        data: {
            id: id
        },
        dataType: 'json',
        success: function (data) {
            sessionStorage.setItem("addressId",id);
            console.log(data);
            if (data.code == 1) {
                get_user_address();
            }
        }
    })
}

