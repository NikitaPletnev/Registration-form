"use strict";
(function() {
  /*Создание счетчика для операции с массивами*/
  let i = 0;
  /*Создание массива , в который будет записываться входная информация*/
  let arr = [];
  /*Объявление основного обьекта */
  let object = {
    /*Функция-конструктор данных о пользователе*/
    User : function User(components){
      this.firstName = components.firstName;
      this.lastName = components.lastName;
      this.regDate = new Date();
    },
    /*Функция-конструктор-хранилище данных о пользователе*/
   UserList :function UserList(){
    this.users = [];
    this.add = function(user){
      this.users.push(user);
    };
    this.getAllUsers = function(){
       return this.users;
    }
   },
   promptName : 'nope'
  }
  let UserList = new object.UserList();
  /*Цикл взаимодействия с пользователем*/
  while(object.promptName !== null){
    /*Ввод информации пользователем*/
    object.promptName = prompt('Введите имя и фамилию пользователя,пожалуйста!');
    /*Внесение данных в массив*/
    arr.push(object.promptName);
    /*Отбор уникальных данных и помещение их в новый массив*/
    let unique = arr.filter((v, i, a) => a.indexOf(v) === i); 
   /* Проверка на число*/
    let CheckNum = isNaN(parseInt(object.promptName));
    /*Проверка входных данных*/
    if(unique[i] !== undefined && CheckNum === true && object.promptName !== null && (object.promptName.trim() !== '' && object.promptName.split(' ').length === 2)){
    
      /*Добавление данных*/
      UserList.add(new object.User({
        firstName: object.promptName.trim().split(' ')[0],
        lastName: object.promptName.trim().split(' ')[1],
      }));
      /*Увеличение счетчика*/
      i++;
    }
  }
  /*Вывод данных в консоль*/
  UserList.getAllUsers().forEach(function(e, i) {
    console.log(i + 1 + '. ' + e.lastName + ' ' + e.firstName + ' ' + e.regDate)
  });
})();
