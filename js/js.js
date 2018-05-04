$(function() {
    $('.J-editor-start').on('click', function() {
        var _this = $(this);
        $('.J-editor-tool').removeClass('disnone');
        _this.remove();
    });

    //
    var num = 0;
    $('.J-editor-tool ul').on('click', 'li', function() {

        var _this = $(this);
        var datatype = _this.attr('data-type');
        var parentobj = $('.J-editor-content');
        var _html = '';

        if (datatype == 'text') {
          
            parentobj.load('../template/type-text/text.html')
            // inntedtor();

            editorInit();


        }
    });

    //初始化所有的编辑器 --使用ID

    function inntedtor() {

        $('.J-edtor-item').each(function(index, item) {
            var _this = $(item);
            //已初始化的不能再重复初始化
            if (!_this.hasClass('cke_editable')) {
                var id = _this.attr('id');
                CKEDITOR.inline(id);
            }
        });
    }

    //初始化所有的编辑器 --使用class
    function editorInit() {

        $(".J-edtor-item").each(function() {

            var obj = $(this);

            obj.attr("contenteditable", true);

            var itemeditor = obj.ckeditor({

                toolbar: "inline",

                on: {
                    blur: function(event) {
                        var data = event.editor.getData();
                    },
                    instanceReady: function(event) {
                        //    event.editor.setData("");       
                    },
                    dataReady: function(event) {}
                }

            })
        });

    }




});