Execution context:
- Variable env
- Scope chain
- this keyword

1. Variable environment

Hoisting - дозволяє використовувати деякі змінні до їх декларування в коді.
( насправді при парсингу спочатку виявляються всі задекларовані змінні і створюються нові параметри в 
variable environment object - знаходиться в об'єкті window )

Hoisting тільки для декларованих функій та var (але в сучасному коді його не використовують)

let, const, function expression - uninitialized, до їх декларування знаходяться в TDZ (Temporal Dead Zone) 
- отримаємо ReferenceError при спробі доступу (cannot access before init)
- Для прикладу, якщо в коді взагалі нема такої змінної, отримаємо помилку variable is not defined 

2. Scope chain
 - Global scope
 - Function scope
 - Block scope

3. this keyword

- this - спеціальна змінна яка створюється для кожного execution context (функції)
- Вона вказує на власника функції (наприклад об'єкт який викликає цю функцію)
- Якщо викликається поза межами об'єкту то this=undefined в strict mode або window якщо без strict
- this створюється лише коли функцію викликаємо
- arrow functions не мають this, тому this буде взятий батьківської функції чи об'єкту
- event listener - this вказує на DOM елемент для якого створено eventListener
- THIS НЕ ВКАЗУЄ НА САМУ ФУНКЦІЮ ДЕ ВИКОРИСТОВУЄТЬСЯ І НЕ ВКАЗУЄ НА VARIABLE ENVIRONMENT