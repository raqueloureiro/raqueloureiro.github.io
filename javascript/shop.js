window.onload = function () {       //I use this onload event to check the console and make sure my javascript has linked correctly
    init();

    function init() {
        console.log('init fired');
    }                               //This types in the console that init was fired, confirming that everything is linked and the DOM is loaded and ready to recieve my next functions
}

function loadLocalCart() {          //This fuction calls for my local cart
//using json.parse returns the stringified object back to a complex object
    cartShop = JSON.parse(localStorage.getItem("cartSession"));         //saves my data within local storage
    if (!cartShop) cartShop = [];
};
$(window).on("load", function () {          //This is a jQuery event that is fired when DOM is loaded, allowing me to access local storage when teh docuemnt strucure is ready
    var itemCount;

    if (localStorage && localStorage.getItem("itemCount")) {        //checks if there is anything stored
        itemCount = localStorage.getItem("itemCount")
        $('#itemCount').html(itemCount).css('display', 'block');
    } else {
        itemCount = 0;                                              //if nothing is stored and the user hasnt added anything to the cart then it remains empty
    }

    $('.add').click(function () {
        itemCount++;                                                //this adds on an item each time the user clicks to add to their cart and then stores this
        $('#itemCount').html(itemCount).css('display', 'block');
        localStorage.setItem("itemCount", itemCount)
    });

    $('.clear').click(function () {                     //clears the storage and reverts the cart back to 0 items
        itemCount = 0;
        $('#itemCount').html('').css('display', 'block');
        $('#cartItems').html('');
        localStorage.setItem("itemCount", 0)
    })
});
