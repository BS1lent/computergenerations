  function prepareResultDiv() {
      let container = document.querySelector('.container');
      let existingDiv = document.getElementById('result');
      if (!existingDiv) {
          let resultDiv = document.createElement('div');
          resultDiv.id = 'result';
          resultDiv.textContent = 'Результат будет здесь...';
          container.appendChild(resultDiv);
      }
  }
  function checkModel() {
  const model = document.getElementById("model").value.toLowerCase();
  let result = "";

  switch (model) {
  case "eniac":
  case "edvac":
  case "univac i":
    result = "Первое поколение (1946-1956) <br>" +
            "Годы выпуска: 1946-1956 <br>" +
            "Элементная база: Электронные лампы <br>";
    break;
  case "ibm 1401":
  case "ibm 7090":
    result = "Второе поколение (1956-1964) <br>" +
            "Годы выпуска: 1956-1964 <br>" +
            "Элементная база: Транзисторы <br>";
    break;
  case "ibm 360":
  case "pdp-11":
    result = "Третье поколение (1964-1971) <br>" +
            "Годы выпуска: 1964-1971 <br>" +
            "Элементная база: Интегральные схемы (ИС) <br>";
    break;
  case "ibm pc":
  case "apple ii":
    result = "Четвертое поколение (1971-1981) <br>" +
            "Годы выпуска: 1971-1981 <br>" +
            "Элементная база: Большие интегральные схемы (БИС) <br>";
    break;
  case "ibm pc/at":
  case "apple macintosh":
    result = "Пятое поколение (1981-настоящее время) <br>" +
            "Годы выпуска: 1981-настоящее время <br>" +
            "Элементная база: Сверхбольшие интегральные схемы (СБИС) <br>";
    break;
  default:
    result = "Не удалось определить поколение ЭВМ.<br>Проверьте правильность ввода модели.";
  }

  document.getElementById("result").innerHTML = result;
  }

  function showIBMInfo() {

  alert("Автор: Михайлов Александр\n\nIBM - американская транснациональная корпорация, занимающаяся технологиями. Основана в 1911 году. Известна разработкой персональных компьютеров IBM PC и многими другими технологическими достижениями.");
  }
