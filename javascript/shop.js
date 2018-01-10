window.onload = function () {
    init();

    function init() {
        console.log('init fired');
    }
}

function loadLocalCart() {
    //we use json.parse to return the stringified object back to a complex object.
    cartShop = JSON.parse(localStorage.getItem("cartSession"));
    if (!cartShop) cartShop = [];
};
$(window).on("load", function () {
    var itemCount;

    if (localStorage && localStorage.getItem("itemCount")) {
        itemCount = localStorage.getItem("itemCount")
        $('#itemCount').html(itemCount).css('display', 'block');
    } else {
        itemCount = 0;
    }

    $('.add').click(function () {
        itemCount++;
        $('#itemCount').html(itemCount).css('display', 'block');
        localStorage.setItem("itemCount", itemCount)
    });

    $('.clear').click(function () {
        itemCount = 0;
        $('#itemCount').html('').css('display', 'none');
        $('#cartItems').html('');
        localStorage.setItem("itemCount", 0)
    })
});
