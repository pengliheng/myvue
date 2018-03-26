"use strict";

function loadScript(file, callbackFn) {
    var script = document.createElement('script');
    script.src= ctx.replace('/a','')+`/static/embed/react-canvas/${file}?v=${Math.random()}`;
    script.type='text/javascript';
    // 监听onload时间，当前js文件加载完成后，再加载下一个
    script.onload = callbackFn;
    script.id = file.split('.')[0];
    document.body.appendChild(script)
}

function load_react() {
    if (!user_id) {
        alert("请登录");
        window.location.href = mall_domain + "/login";
        return false;
    }
    var myNode = document.getElementsByClassName('details_container')[0];
    children_node_operate(myNode, {
        display:'none'
    });
    document.getElementsByClassName("w1000")[0].style.width = '1200px';
    var react_dom = document.createElement("div");
    react_dom.style.height = '690px';
    react_dom.id = 'react-root-canvas';
    document.getElementsByClassName('details_container')[0].append(react_dom);
    fetch(ctx.replace('/a','')+`/static/embed/react-canvas/manifest.json?v=${Math.random()}`,{
        cache:"no-store"
    })
        .then(res=>res.json())
        .then(json=>{
            loadScript(json['vender.js'], () => {
                loadScript(json['app.js'],() => {
                    document.getElementsByClassName('btn-2d')[0].addEventListener('click',(e)=>{
                        setTimeout(() => {

                            ///////////添加第一张图片,不需熬展示，发送给后台
                            var formData = new FormData();
                            formData.append("image", __canvas_image_blob__, Math.random()*100000 + ".jpg");
                            $.ajax({
                                url: ctx + '/file/upload',
                                type: 'POST',
                                contentType: "multipart/form-data",
                                dataType: 'JSON',
                                async:false,
                                data: formData,
                                processData: false,
                                contentType: false,
                                success: function (obj) {
                                    var image_url = '/' + ctx.split('/')[1] + '/' + obj.files[0].url;
                                    // var image_url = obj.files[0].url;
                                    var myNode = document.getElementsByClassName('details_container')[0];
                                    children_node_operate(myNode, {
                                        display:'block'
                                    });
                                    //如果样式定制完成，记得删除引入的script标签，防止文件一直增大。。
                                    react_dom.remove();
                                    document.getElementsByClassName("w1000")[0].style.width = '1000px';
                                    document.getElementById('app').remove();
                                    document.getElementById('vender').remove();
                                    sessionStorage.setItem(goods_id, obj.files[0].url);
                                }
                            });

                            ///////////添加第二张图片，不用发给后台，只提供展示
                            var _formData = new FormData();
                            _formData.append("image", canvas_image_blob, Math.random()*100000 + ".jpg");
                            $.ajax({
                                url: ctx + '/file/upload',
                                type: 'POST',
                                contentType: "multipart/form-data",
                                dataType: 'JSON',
                                async:false,
                                data: _formData,
                                processData: false,
                                contentType: false,
                                success: function (obj) {
                                    var image_url = '/' + ctx.split('/')[1] + '/' + obj.files[0].url;
                                    sessionStorage.setItem('show_'+goods_id, obj.files[0].url);
                                    new_funciton();
                                    document.getElementById('preview').childNodes[1].childNodes[0].src = image_url;
                                    document.getElementById('preview').childNodes[1].childNodes[0].jqimg = image_url
                                }
                            });
        },300)
    })
    })
    }
)
})
}



function load_react_mobile() {
    if (!user_id) {
        alert("请登录");
        window.location.href = mall_domain + "/login";
        return false;
    }
    var myNode = document.getElementById('p-hidde-for-react');
    //处理所有子节点样式
    children_node_operate(document.body,{
        display:'none'
    });
    var react_dom = document.createElement("div");
    react_dom.id = 'react-root-canvas';
    var await_dom = await_dom_func('span',{
        display:"block",
        position: "fixed",
        color: "red",
        zIndex: 9,
        top: "50vw",
        width: '100vw',
        textAlign: "center"
    },'等一下');
    document.body.appendChild(react_dom);
    $.ajax({
        url:ctx.replace('/a','')+`/static/embed/react-canvas/manifest.json?v=${Math.random()}`,
        type:'get',
        dataType:'JSON',
        error:function(error){},
        success:function(json){
            loadScript(json['vender.js'], () => {
                loadScript(json['app.js'], () => {
                    await_dom.remove();
                    document.getElementsByClassName('content-footer')[0].children[3].addEventListener('click',(e)=>{
                        setTimeout( time => {

                            ///////////添加第一张图片,发送给后台
                            var formData = new FormData()
                            formData.append("image", canvas_image_blob, Math.random()*100000 + ".jpg");
                            $.ajax({
                                url: ctx + '/file/upload',
                                type: 'POST',
                                contentType: "multipart/form-data",
                                dataType: 'JSON',
                                async:false,
                                data: formData,
                                processData: false,
                                contentType: false,
                                success: function (obj) {
                                    var image_url = '/' + ctx.split('/')[1] + '/' + obj.files[0].url;
                                    //如果样式定制完成，记得删除引入的script标签，防止文件一直增大。。
                                    react_dom.remove();
                                    document.getElementById('app').remove();
                                    document.getElementById('vender').remove();
                                    sessionStorage.setItem(goods_id, obj.files[0].url);
                                    children_node_operate(document.body,{
                                        display:'block'
                                    });
                                    get_goods()
                                }
                            });


                            ///////////添加第二张图片,展示
                            var _formData = new FormData();
                            _formData.append("image", canvas_image_blob, Math.random()*100000 + ".jpg");
                            $.ajax({
                                url: ctx + '/file/upload',
                                type: 'POST',
                                contentType: "multipart/form-data",
                                dataType: 'JSON',
                                async:false,
                                data: _formData,
                                processData: false,
                                contentType: false,
                                success: function (obj) {
                                    var image_url = '/' + ctx.split('/')[1] + '/' + obj.files[0].url;
                                    //如果样式定制完成，记得删除引入的script标签，防止文件一直增大。。
                                    sessionStorage.setItem('show_'+goods_id, obj.files[0].url);
                                    get_goods()
                                }
                            });


            },500)
            })
            }
        )
        })
        }
    })
}


//修改所有子节点style
var children_node_operate = (DOM,style) => {
    for (var i = 0; i < DOM.children.length; i++) {
        var ele = DOM.children[i];
        if(ele.localName=='script') continue;
        for(var s in style){
            ele.style[s] = style[s]
        }
    }
}

var await_dom_func = (dom,style,value) => {
    var ele = document.createElement(dom);
    for(var s in style){
        ele.style[s] = style[s]
    }
    ele.innerText = value;
    document.body.appendChild(ele);
    var time = 0;
    var tail = '';
    setInterval(()=>{
        time ++;
        tail+="。";
        ele.innerText = value + tail;
        if(time == 5) time=0
    },300)
    return ele
}