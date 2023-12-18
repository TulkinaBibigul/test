// let userName="Bibigul";
//userName="Bibigul";
//console.log(userName);
//let number=6
//let string="";
//let boolean=true;
//console.log(userName);
//let cars=70;
//let trucks=cars+90;
//let combains=trucks/4;
//let summa= cars+trucks+combains;
//console.log("всего в совхозе "+ summa+" техники");
// let summa=385;
//let day1=95;
//let day2=day1*2;
//let day3=summa-day1-day2;
//console.log("на 3 день "+ day3 +" человек");

//let summa:number=385;
//let day1:number=95;
//let day2:number=day1*2;
//////let day3:number=summa-day1-day2;
//console.log(true==1);
//console.log("на 3 день "+ day3 +" человек");
//let a:number=1;
//let b:number=2;
//if (a>b){
//console.log(a +" больше " +b)
//}
//else if(a==b){
// console.log(a +" равно " +b)
//}
//else {
// console.log(a +" меньше " +b)
//}
// let bread1:string="московский";
// let bread2:string="бородинский";
// // оператор и
// if (bread1=="московский" && bread2== "бородинский") {
//     console.log("Молодец")
// }
// // оператор или
// if (bread1=="московский" || bread2== "бородинский") {
//     console.log("Молодец")
// }
// // оператор не
// if (bread1 !="московский" ) {
//     console.log("Молодец")
// }
// let experience:number = 10;
// let projects:number = 50;
// let qualityofworking:number = projects/experience;
// if (qualityofworking>=4){
//     console.log("Сотрудник эффективен")
// }
// else if (qualityofworking>=3){//дополнительное условие
//     console.log("Сотрудник должен улучшить результаты")
// }
// else {
//     console.log("Сотрудник необходимо пройти переквалификацию")
// }

//13.11.23
// z1
// type TStudent= "collage"|"School"

// let student:TStudent="collage"
// let resultExam:number=200

// if (resultExam>=200){
//     if (student=="collage"){
//         console.log("Вы поступите на 2 курс")
//     }
//     else {
//         console.log("Вы поступите на 1 курс")
//     }
// }
// else {
//     console.log("Вы не набрали роходной балл")
// }
//z2
// function getName(humanName:string){//humanName параметр
//     console.log(humanName)
// }
// getName("Bibigul")
// getName ("name")
// getName ("какое-то слово")

//z3 произведение и деление двух чисел
// function getName(num1:number,num2:number){
//     console.log("произведение двух чисел " + num1*num2)
//     console.log("деление двух чисел " + num1/num2)
// }
// getName (50,5)

//z3
// function getName(num1:number,num2:number){
//     if (num2==0) {
//         return "Ошибка. На ноль делить нельзя"
//     }
//     else {
//         return num1/num2
//     }
// }
// console.log(getName (50,5))

//z4 Выдача премии сотруднику в зависимости от его оклада
// function getBonus(sallary:number){
//     if(sallary>400){
//         return sallary+0.1*sallary
//         }
//         else if (sallary>300){
//             return sallary+0.15*sallary
//         }
//         else{
//             return sallary+0.2*sallary
//         }
//     }
// console.log(getBonus(250))

// 20.11.23
//z1
// enum EColors {
//   black,
//   red,
//   green,
// }
// const color = EColors.black;
// function getColorText(color: EColors) {
//   switch (color) {
//     case EColors.black:
//       return "черный";
//     case EColors.red:
//       return "красный";
//     case EColors.green:
//       return "зеленый";
//     default:
//       return "такого цвета нет";
//   }
// }
// console.log(getColorText(EColors.black));
// console.log(getColorText(EColors.red));
// console.log(getColorText(EColors.green));

//z2
// function getName(callback:(name:string) => void ){
//     let name:string ="Бибигуль"
//     callback(name);
// }
// function sayHi(name:string){
//     console.log("Привет"+name)
// }    
// function sayBye(name:string){
//     console.log("Пока"+name)
// }
// getName(sayBye)
// getName(sayHi)

//z3
// enum EOperators{
//     Tele2="Теле2",
//     Beeline="Beeline",
//     Kcell="Kcell",
//     Activ="Activ"
// }
// function getPrice(operatorName:EOperators){
//     switch(operatorName){
//         case EOperators.Kcell:
//             return 0;
//         case EOperators.Beeline:
//             return 2400;
//         case EOperators.Activ:
//             return 1000;
//         case EOperators.Tele2:
//             return 1800;
//     }
// }
// let operatorName:EOperators=EOperators.Tele2
// console.log(`цена подключения тарифа для оператора ${operatorName} - составляет ${getPrice operatorName}тенге`)

//z4 Бухгалтер ведет учет доходов по 5 компаниям. Вывести зарплату
// бухгалтера за месяц, с учетом что он получает 30% от общих доходов
// каждой компании. Если доход бухгалтера с компании меньше 120 000, то
// учитывать доход с этой компании как 120 000.
// enum Company{
//     ACompany,
//     BCompany, 
//     CCompany,
//     DCompany,
//     ECompany,
// }
// function getCompany(CompanyName:Company)
// switch(operatorName){
//             case Company.ACompany:
//                 return ;
//             c  доработать
// 27.11.23 Объекты
//z1 
// type TCompany={
//     income:number,
//     employees:number,
//     NEmployees:number,
//     QEmployees:number,
//     }
// let company:TCompany={
//     income:3200000,
//     employees:416,
//     NEmployees:45,
//     QEmployees:60,
// }
// console.log("Доход за год  " +company.income + " количество сотрудников "+ company.employees + " количество сотрудников уволилось  "+company.NEmployees + " уволилось новые сотрудники")

// z2
// type TPerson = {
//     name:string,
//     age:number
// }

// let people:TPerson[] = [
//     {
//         name:"string",
//         age:32
//     },
//     {
//         name:"string",
//         age:32
//     },
//     {
//         name:"string",
//         age:32
//     }
// ]
// z3
// type Tyers={
//     year:number,
//     seanson:string, разобраться

// let  year:number[]=[2019,2020,2021,2022,2023,2024]
// let seanson:string[] =["осень", "зима"," весна"," лето"]
//  console.log (year)
// //  console.log (seanson)
// //  console.log (seanson[2])

// z4 цикл

let monthes=[
    {
        title:"Январь",
        dayes:26
    }, 
    {
        title:"Февраль",
        dayes:23
    }, 
    {
        title:"Март",
        dayes:31
    }, 
    {
        title:"Апраль",
        dayes:23
    }, 
    {
        title:"Май",
        dayes:23
    }, 
]
monthes.push({
title: "Июнь",
dayes:31
})
// найти месяца, где меньше 30 дней
// let sumOfDayes=0
// let minOfDayes=monthes[0].dayes
// let maxOfDayes=monthes[0].dayes
// for (let i=0; i<monthes.length; i++){
//     if (monthes[i].dayes<30){
//         console.log(monthes[i])
//     }
//     sumOfDayes+=monthes[i].dayes
// }
// console.log("Сумма всех дней в месяцах "+sumOfDayes)
// // поиск минимума
// if (monthes[i].dayes<minOfDayes){
//     minOfDayes=monthes[i].dayes
// }

// // поиск минимума
// if (monthes[i].dayes.maxOfDayes){
//     maxOfDayes=monthes[i].dayes
// }

// console.log(minOfDayes)
// console.log(maxOfDayes)

// 4.12.2023
let ages=["2","30","20","4","5","6","7"]
// метод map
let agesToNumber=ages.map((e) =>parseInt(e))
agesToNumber.sort((a,b)=>{
    return b-a
})
console.log(agesToNumber)

// объединение массивов
// let newArray=[...ages, ...agesToNumber] //1 вариант
// let newArray2= ages.concat(ages) //2 вариант

// let arr=[1,2,3];
// arr.push(4)
// z2
type Tcategory="smartphone"|"Laptop"

type TProduct={
    category:Tcategory,
    price:number
    count:number
    
}

let product:TProduct[]=[
    {
        category:"smartphone",
        price: 200000,
        count:3
    }, 
    {
        category:"Laptop",
        price: 500000,
        count:5
    }, 
    {
        category:"Laptop",
        price: 400000,
        count:6
    }, 
    {
        category:"smartphone",
        price: 300000,
        count:10
    }, 
    {
        category:"Laptop",
        price: 600000,
        count:50
    } 
]
// создать массивы с категориями (отфильтровать исходный массив) 

let smartphone=product.filter((e)=>e.category==="smartphone")
let Laptop=product.filter((e)=>e.category==="Laptop")

//отсортировать массивы по убыванию(по цене)
smartphone.sort((a,b)=>{
    return b.price-a.price
})
Laptop.sort((a,b)=>{
    return b.price-a.price
})
console.log(Laptop)
console.log(smartphone)

// создать функцию по добавлению товара в каждую категрию
 // 18.12.23
 