window.onload = function () {
    var stroka = $(".card").clone(true)[0];
    //$(function () {
        $(".card").on("click", ".octicon-pencil", function (e) {
            var t = e.target || e.srcElement;
            var elm_name = t.tagName.toLowerCase();
            if (elm_name == 'input') { return false; }
            var val = $(e.target).parent().parent().next().html(); /*$(e.target).parent().next()*/
            var code = '<input type="text" id="edit" value="' + val + '"/>';
            $(e.target).parent().parent().next().empty().append(code);
            $('#edit').focus();
            $('#edit').blur(function () {	
                var val = $(this).val();	
                $(this).parent().empty().html(val);
            });
    });

    $(".card").on("click", ".octicon-trashcan", function (e) {
        var list1 = $(e.target).parent().parent().parent();
        while (list1.attr("class") != "card") {
            list1 = $(e.target).parent().parent().parent().parent();
        }
        if (list1.attr("class") == "card") {
            list1.remove();
        }
    });

    $(".octicon-plus").click(function (e) {
        var list = $(e.target).parent().parent();
        while (list.attr("class") != "container")
        {
           list = $(e.target).parent();
        }
        if (list.attr("class") == "container") {
            list.append($(".card").clone(true)[0]);
        } 
    });

    $(".card").on("click", ".octicon-chevron-down", function (e) {
        var a = $(e.target).parent().parent().parent();
        while (a.attr("class") != "card") {
            a = $(e.target).parent().parent().parent().parent();
        }
        var b = a.next();
        a.before(b);
    });

    $(".card").on("click", ".octicon-chevron-up", function (e) {
        var a = $(e.target).parent().parent().parent();
        while (a.attr("class") != "card") {
            a = $(e.target).parent().parent().parent().parent();
        }
        var b = a.prev();
        if (b.attr("class") == "card")
        a.after(b);
    });

    $(".card").on("click", ".octicon-chevron-right", function (e) {
        var a = $(e.target).parent().parent().parent();
        
        var a1 = $(e.target).parent().parent().parent().parent().parent();
        while (a1.attr("class") != "col-3") {
            a1 = $(e.target).parent().parent().parent().parent().parent().parent();
        }
        while (a.attr("class") != "card") {
            a = $(e.target).parent().parent().parent().parent();
        }
        var b1 = a1.next();
        var b = b1.children().children().last();
        if (b1.attr("class") == "col-3")
            b.after(a);
    });

    $(".card").on("click", ".octicon-chevron-left", function (e) {
        var a = $(e.target).parent().parent().parent();
        var a1 = $(e.target).parent().parent().parent().parent().parent();
        while (a1.attr("class") != "col-3") {
            a1 = $(e.target).parent().parent().parent().parent().parent().parent();
        }
        while (a.attr("class") != "card") {
            a = $(e.target).parent().parent().parent().parent();
        }
        var b1 = a1.prev();
        var b = b1.children().children().last();;
        if (b1.attr("class") == "col-3")
            b.after(a);
    });
    //При нажатии на текст
    //$(".card").on("click", ".card-text", function (e) {
    //    var t = e.target || e.srcElement;
    //    var elm_name = t.tagName.toLowerCase();
    //    if (elm_name == 'input') { return false; }
    //    var val = $(this).html(); /*$(e.target).parent().next()*/
    //    var code = '<input type="text" id="edit" value="' + val + '"/>';
    //    $(this).empty().append(code);
    //    $('#edit').focus();
    //    $('#edit').blur(function () {
    //        var val = $(this).val();
    //        $(this).parent().empty().html(val);
    //    });
    //});
    //});
}