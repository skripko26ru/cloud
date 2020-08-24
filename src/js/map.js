ymaps.ready(init);

function init() {
  // Создание карты: https://tech.yandex.ru/maps/doc/jsapi/2.1/dg/concepts/map-docpage/
  var myMap = new ymaps.Map("map", {
    // Координаты центра карты (широта, долгота).
    center: [55.814, 37.695],
    // Уровень масштабирования. Допустимые значения: от 0 (весь мир) до 19.    
    zoom: 16,

    // Элементы управления: https://tech.yandex.ru/maps/doc/jsapi/2.1/dg/concepts/controls/standard-docpage/
    controls: [
      'zoomControl', // Ползунок масштаба
      // 'rulerControl', // Линейка
      // 'routeButtonControl', // Панель маршрутизации
      // 'trafficControl', // Пробки
      // 'typeSelector', // Переключатель слоев карты
      // 'fullscreenControl', // Полноэкранный режим

      // Поисковая строка
      // new ymaps.control.SearchControl({
      //   options: {
      //     // вид - поисковая строка
      //     size: 'large',
      //     // Включаем возможность искать не только топонимы, но и организации.
      //     provider: 'yandex#search'
      //   }
      // })
    ]
  });

  // Добавление метки: https://tech.yandex.ru/maps/doc/jsapi/2.1/ref/reference/Placemark-docpage/
  var myPlacemark = new ymaps.Placemark([55.814, 37.695], {
    // Хинт показывается при наведении мышкой на иконку метки.
    hintContent: 'Вам сюда!',
    // Балун откроется при клике по метке.
    balloonContent: 'Москва, Краснобогатырская улица, 6'
  });

  // После того как метка была создана, добавляем её на карту.
  myMap.geoObjects.add(myPlacemark);
}