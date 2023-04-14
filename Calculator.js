(function () {

    let screen = document.querySelector('.screen');
    let buttons = document.querySelectorAll('.btn');
    let clear = document.querySelector('.btn-ac');
    let Equal = document.querySelector('.btn-Equal');
    let delete1 = document.querySelector('.btn-de');

    // to find which buttons was press

    buttons.forEach(function (btn) {
        btn.addEventListener('click', function (e) {
            let value = e.target.dataset.num;
            screen.value += value;
        })
    });

    // Equal button

    try {
        eval(screen.value);
    } catch (e) {
        if (e instanceof SyntaxError) {
            alert(e.message);
        }
    }

    Equal.addEventListener('click', function (e) {
        if (screen.value != '') {
            let answer = eval(screen.value);
            screen.value = answer;
        }
        else {
            screen.value = "Please Enter";
        }
    })

    clear.addEventListener('click', function (e) {
        screen.value = " ";
    })

    delete1.addEventListener('click', function (e) {
        screen.value = screen.value.slice(0, -1);
    })

})();