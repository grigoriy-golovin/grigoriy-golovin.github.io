

    var pricesWindows =document.querySelector('.prices__table-windows');
    var pricesList =document.querySelector('.prices__list');
    var _stepTouch2 = 50 ;

    var pricesTogg1 =document.getElementById('pricesTogg1');
    var pricesTogg2 =document.getElementById('pricesTogg2');
    var pricesTogg3 =document.getElementById('pricesTogg3');

 // prices__list--base
 // prices__list--standard
 // prices__list--unlimited

         var _isTouchDevice2 = function () {
          return !!('ontouchstart' in window || navigator.maxTouchPoints);
        };

   // функция, осуществляющая установку обработчиков для событий
        var setUpListeners2 = function () {
          var _startX = 0;
          if (_isTouchDevice2()) {
            pricesWindows.addEventListener('touchstart', function (e) {
              _startX = e.changedTouches[0].clientX;

            });
            pricesWindows.addEventListener('touchend', function (e) {
              let
                _endX = e.changedTouches[0].clientX,
                _deltaX = _endX - _startX;
              if (_deltaX > _stepTouch2) {

                if (pricesList.classList.contains('prices__list--unlimited')) {
                  pricesList.classList.remove('prices__list--unlimited');
                  pricesList.classList.add('prices__list--standard');
                  pricesTogg2.classList.add('prices__toggle--active');
                  pricesTogg1.classList.remove('prices__toggle--active');
                  pricesTogg3.classList.remove('prices__toggle--active');
                } else if (pricesList.classList.contains('prices__list--standard')) {
                  pricesList.classList.remove('prices__list--standard');
                  pricesList.classList.add('prices__list--base');
                  pricesTogg1.classList.add('prices__toggle--active');
                  pricesTogg2.classList.remove('prices__toggle--active');
                  pricesTogg3.classList.remove('prices__toggle--active');
                }
              } else if (_deltaX < -_stepTouch2) {

                if (pricesList.classList.contains('prices__list--base')) {
                  pricesList.classList.remove('prices__list--base');
                  pricesList.classList.add('prices__list--standard');
                  pricesTogg2.classList.add('prices__toggle--active');
                  pricesTogg1.classList.remove('prices__toggle--active');
                  pricesTogg3.classList.remove('prices__toggle--active');

                } else if (pricesList.classList.contains('prices__list--standard')) {
                  pricesList.classList.remove('prices__list--standard');
                  pricesList.classList.add('prices__list--unlimited');
                  pricesTogg3.classList.add('prices__toggle--active');
                  pricesTogg1.classList.remove('prices__toggle--active');
                  pricesTogg2.classList.remove('prices__toggle--active');

                }
              }
            });
          }
        };

        setUpListeners2();

        pricesTogg1.addEventListener('click' , function() {
          pricesList.classList.remove('prices__list--standard');
          pricesList.classList.remove('prices__list--unlimited');
          pricesList.classList.add('prices__list--base');
          pricesTogg1.classList.add('prices__toggle--active');
          pricesTogg2.classList.remove('prices__toggle--active');
          pricesTogg3.classList.remove('prices__toggle--active');
        });
        pricesTogg2.addEventListener('click' , function() {
          pricesList.classList.add('prices__list--standard');
          pricesList.classList.remove('prices__list--unlimited');
          pricesList.classList.remove('prices__list--base');
          pricesTogg1.classList.remove('prices__toggle--active');
          pricesTogg2.classList.add('prices__toggle--active');
          pricesTogg3.classList.remove('prices__toggle--active');
        });
        pricesTogg3.addEventListener('click' , function() {
          pricesList.classList.remove('prices__list--standard');
          pricesList.classList.add('prices__list--unlimited');
          pricesList.classList.remove('prices__list--base');
          pricesTogg1.classList.remove('prices__toggle--active');
          pricesTogg2.classList.remove('prices__toggle--active');
          pricesTogg3.classList.add('prices__toggle--active');
        });
