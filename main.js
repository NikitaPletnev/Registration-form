"use strict";
(function() {
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
    /*Проверка входных данных*/
    if(object.promptName !== null && (object.promptName.trim() !== '' && object.promptName.split(' ').length === 2)){
      /*Добавление данных*/
      UserList.add(new object.User({
        firstName: object.promptName.trim().split(' ')[0],
        lastName: object.promptName.trim().split(' ')[1],
      }));
    }
  }
  /*Вывод данных в консоль*/
  UserList.getAllUsers().forEach(function(e, i) {
    console.log(i + 1 + '. ' + e.lastName + ' ' + e.firstName + ' ' + e.regDate)
  });
})();