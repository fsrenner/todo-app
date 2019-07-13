$(document).ready(function(){

    $('#addTodo').on('click', function (e) {
        e.preventDefault();
        var todoItem = $('#todo').val();
        addTodo(todoItem);
    });

    $('body').on('click', 'li', function () {
        markAsRead($(this));
    });
});

function addTodo(item) {
    var jsonItem = {
      item: item
    };
    $.ajax({
        type: "POST",
        url: 'addItem',
        data: jsonItem,
        success: function (data) {
                var read = (!data.read) ? 'unread' : '';
                var itemLi = `<li class="${read}"><span>${data.id}</span> ${data.item}</li>`;
                $('.list-group').append(itemLi);
        },
        dataType: 'json'
    });

}

function markAsRead(item) {
    item.removeClass('unread');
}