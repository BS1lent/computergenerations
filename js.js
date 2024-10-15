function getModelComputer(evmModel) {
    switch (evmModel) {
      case "ENIAC":
        return {
          generation: "1 поколение",
          years: "1946 - 1959",
          base: "Электронные лампы",
        };
      case "IBM 1401":
      case "IBM 7090":
        return {
          generation: "2 поколение",
          years: "1959 - 1965",
          base: "Транзисторы",
        };
      case "IBM 360":
      case "DEC PDP-8":
        return {
          generation: "3 поколение",
          years: "1965 - 1971",
          base: "Интегральная микросхема",
        };
      case "IBM PC":
      case "Apple II":
        return {
          generation: "4 поколение",
          years: "1971 - 1980",
          base: "Микропроцессоры",
        };
      case "IBM 5170":
      case "Macintosh 128K":
        return {
          generation: "5 поколение",
          years: "1980",
          base: "Сверхбольшомасштабная интеграция",
        };
    }
  }
  console.log(`Доступные модели ЭВМ: ENIAC, IBM 1401, IBM 7090, IBM 360, DEC PDP-8, IBM PC, Apple II, IBM 5170,Macintosh 128K`)
  let evmModel = prompt("Введите название ЭВМ:");
  let evmInfo = getModelComputer(evmModel);
  if (evmInfo) {
    console.log(`Модель: ${evmModel}`);
    console.log(`Поколение: ${evmInfo.generation}`);
    console.log(`Годы выпуска: ${evmInfo.years}`);
    console.log(`Элементная база: ${evmInfo.base}`);
  } else {
    console.log("Неверно введено название ЭВМ.");
  }
  //adadad/