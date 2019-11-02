$(function () {
    
    function first() {
        let first = $('p:first');
        let last = $('p:last');
        last.prependTo(last.parent());
    }

    function last() {
        let first = $('p:first');
        let last = $('p:last');
        first.appendTo(first.parent());
    }

    $('#first').click(first)
    $('#last').click(last)
});