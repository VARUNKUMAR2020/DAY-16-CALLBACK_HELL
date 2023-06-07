window.onload = function () {
  var countdownElement = document.getElementById("countdown");

  var seconds = 10;
  countdownElement.textContent = seconds;

  setTimeout(function () {
    seconds--;
    countdownElement.textContent = seconds;

    setTimeout(function () {
      seconds--;
      countdownElement.textContent = seconds;

      setTimeout(function () {
        seconds--;
        countdownElement.textContent = seconds;

        setTimeout(function () {
          seconds--;
          countdownElement.textContent = seconds;

          setTimeout(function () {
            seconds--;
            countdownElement.textContent = seconds;

            setTimeout(function () {
              seconds--;
              countdownElement.textContent = seconds;

              setTimeout(function () {
                seconds--;
                countdownElement.textContent = seconds;

                setTimeout(function () {
                  seconds--;
                  countdownElement.textContent = seconds;

                  setTimeout(function () {
                    seconds--;
                    countdownElement.textContent = seconds;

                    setTimeout(function () {
                      countdownElement.textContent = "Happy Independence Day";
                    }, 1000);
                  }, 1000);
                }, 1000);
              }, 1000);
            }, 1000);
          }, 1000);
        }, 1000);
      }, 1000);
    }, 1000);
  }, 1000);
};
