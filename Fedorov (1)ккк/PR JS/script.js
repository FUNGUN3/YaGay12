const form = document.getElementById('userForm');
const nameInput = document.getElementById('nameInput');
const emailInput = document.getElementById('emailInput');
const ageInput = document.getElementById('ageInput');
const submitBtn = document.getElementById('submitBtn');
const resetFormBtn = document.getElementById('resetFormBtn');
const formStatus = document.getElementById('formStatus');

// Состояния формы
const FORM_STATES = {
    EMPTY: 'empty',
    FILLING: 'filling',
    VALID: 'valid',
    SUBMITTED: 'submitted',
    ERROR: 'error'
};

let formState = FORM_STATES.EMPTY;
let formData = {};

console.log('=== Задание 1: Контекст выполнения ===');

// 1.1 Обычная функция
const button1 = document.getElementById('btn1');
button1.addEventListener('click', function() {
    console.log('Обычная функция: this =', this);
    // this ссылается на элемент, вызвавший событие
    console.log('Текст кнопки:', this.textContent);
});

// 1.2 Стрелочная функция
const button2 = document.getElementById('btn2');
button2.addEventListener('click', () => {
    console.log('Стрелочная функция: this =', this);
    // this берется из внешней области (window или undefined в строгом режиме)
    console.log('Текст кнопки:', button2.textContent); // Приходится использовать переменную
});

// 1.3 Использование bind для привязки контекста
const button3 = document.getElementById('btn3');
const user = {
    name: 'Алексей',
    sayHello: function() {
        console.log(`Привет, я ${this.name}`);
        console.log('Кнопка:', this === button3 ? 'кнопка' : 'не кнопка');
    }
};

// Привязываем метод объекта к контексту кнопки
button3.addEventListener('click', user.sayHello.bind(button3));
// Сравните с:
// button3.addEventListener('click', user.sayHello.bind(user));
// ЗАДАНИЕ 2: Машина состояний
console.log('=== Задание 2: Машина состояний ===');

// Состояния
const STATES = {
    OFF: 'off',
    ON: 'on',
    PAUSED: 'paused'
};

// Текущее состояние
let currentState = STATES.OFF;
const statusDisplay = document.getElementById('statusDisplay');
const stateBtn = document.getElementById('stateBtn');
const resetBtn = document.getElementById('resetBtn');

// Функция перехода между состояниями
function transition(newState) {
    console.log(`Переход: ${currentState} -> ${newState}`);

    // Проверка допустимости перехода
    const validTransitions = {
        [STATES.OFF]: [STATES.ON],
        [STATES.ON]: [STATES.PAUSED, STATES.OFF],
        [STATES.PAUSED]: [STATES.ON, STATES.OFF]
    };

    if (!validTransitions[currentState].includes(newState)) {
        console.warn(`Недопустимый переход из ${currentState} в ${newState}`);
        return false;
    }

    // Выполняем переход
    currentState = newState;
    updateUI();
    return true;
}

// Обработчики событий
stateBtn.addEventListener('click', function() {
    const transitions = {
        [STATES.OFF]: STATES.ON,
        [STATES.ON]: STATES.PAUSED,
        [STATES.PAUSED]: STATES.ON
    };
    transition(transitions[currentState]);
});

resetBtn.addEventListener('click', function() {
    transition(STATES.OFF);
});

// Инициализация
updateUI();
console.log('Текущий контекст:', this);

console.log('=== Задание 3: Делегирование ===');

const todoList = document.getElementById('todoList');
const addTodoBtn = document.getElementById('addTodoBtn');
let taskCounter = 4;

// Делегирование - один обработчик на родителе
todoList.addEventListener('click', function(event) {
    // this - это todoList (контекст)
    console.log('Контекст (this):', this);
    console.log('Цель события (event.target):', event.target);

    // Находим LI элемент
    const li = event.target.closest('li');
    if (!li) return;

    // Проверяем, что клик был по LI
    if (li === event.target || li.contains(event.target)) {
        const taskId = li.dataset.id;
        console.log(`Клик по задаче ${taskId}:`, li.textContent);

        // Переключение состояния задачи
        li.style.textDecoration = li.style.textDecoration === 'line-through'
            ? 'none'
            : 'line-through';
        li.style.color = li.style.textDecoration === 'line-through'
            ? '#999'
            : '#000';

        // Логирование с привязкой контекста
        const logTask = function(taskText) {
            console.log(`[${new Date().toLocaleTimeString()}] ${this.id}: ${taskText}`);
        };
        logTask.call(todoList, li.textContent);
    }
});

// Добавление новых задач
addTodoBtn.addEventListener('click', function() {
    const newLi = document.createElement('li');
    newLi.dataset.id = taskCounter++;
    newLi.textContent = `Задача ${newLi.dataset.id}`;
    todoList.appendChild(newLi);
    console.log(`Добавлена новая задача с id=${newLi.dataset.id}`);
});

// Дополнительно: обработка двойного клика
todoList.addEventListener('dblclick', function(event) {
    const li = event.target.closest('li');
    if (!li) return;

    console.log(`Двойной клик по задаче ${li.dataset.id}:`, li.textContent);
    // Удаляем задачу при двойном клике
    li.remove();
});

// ЗАДАНИЕ 4: Состояние формы
console.log('=== Задание 4: Состояние формы ===');

// const form = document.getElementById('userForm');
// const nameInput = document.getElementById('nameInput');
// const emailInput = document.getElementById('emailInput');
// const ageInput = document.getElementById('ageInput');
// const submitBtn = document.getElementById('submitBtn');
// const resetFormBtn = document.getElementById('resetFormBtn');
// const formStatus = document.getElementById('formStatus');
//
// // Состояния формы
// const FORM_STATES = {
//     EMPTY: 'empty',
//     FILLING: 'filling',
//     VALID: 'valid',
//     SUBMITTED: 'submitted',
//     ERROR: 'error'
// };
//
// let formState = FORM_STATES.EMPTY;
// let formData = {};

// Функция валидации с контекстом
function validateForm(context) {
    console.log('Валидация, контекст:', context);

    const errors = [];
    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const age = ageInput.value.trim();

    if (!name) errors.push('Имя обязательно');
    if (!email) errors.push('Email обязателен');
    if (email && !email.includes('@')) errors.push('Неверный формат email');
    if (age && (isNaN(age) || age < 0 || age > 150)) errors.push('Неверный возраст');

    return {
        isValid: errors.length === 0,
        errors: errors,
        data: { name, email, age: age || null }
    };
}

// Обновление состояния формы
function updateFormState() {
    const validation = validateForm(this);
    const hasData = Object.values(validation.data).some(v => v && v !== '');

    if (formState === FORM_STATES.SUBMITTED) return;

    if (!hasData) {
        formState = FORM_STATES.EMPTY;
    } else if (validation.isValid) {
        formState = FORM_STATES.VALID;
    } else {
        formState = FORM_STATES.FILLING;
    }

    updateUI();
}

// Обновление интерфейса
function updateUI() {
    const stateMap = {
        [STATES.OFF]: { text: 'Выключено', btnText: 'Включить' },
        [STATES.ON]: { text: 'Включено', btnText: 'Приостановить' },
        [STATES.PAUSED]: { text: 'Приостановлено', btnText: 'Возобновить' }
    };

    statusDisplay.textContent = `Статус: ${stateMap[currentState].text}`;
    stateBtn.textContent = stateMap[currentState].btnText;

    // Дополнительные эффекты для наглядности
    document.body.style.backgroundColor =
        currentState === STATES.OFF ? '#f0f0f0' :
        currentState === STATES.ON ? '#90ee90' :
        '#ffd700';

    const stateMessages = {
        [FORM_STATES.EMPTY]: 'Заполните форму',
        [FORM_STATES.FILLING]: 'Заполните все поля правильно',
        [FORM_STATES.VALID]: '✓ Форма готова к отправке',
        [FORM_STATES.SUBMITTED]: '✓ Отправлено!',
        [FORM_STATES.ERROR]: '✗ Ошибка при отправке'
    };

    formStatus.textContent = stateMessages[formState] || '';
    formStatus.style.color =
        formState === FORM_STATES.VALID ? 'green' :
        formState === FORM_STATES.ERROR ? 'red' :
        formState === FORM_STATES.SUBMITTED ? 'blue' :
        'black';

    submitBtn.disabled = formState !== FORM_STATES.VALID;
}

// Обработчики событий с разными контекстами
function handleInput(event) {
    // this - элемент input
    console.log(`Ввод в ${this.id}, контекст:`, this);

    // Привязываем метод updateFormState к форме
    updateFormState.call(form);
}

// Привязываем обработчики к каждому input
[nameInput, emailInput, ageInput].forEach(input => {
    input.addEventListener('input', handleInput);
});

// Отправка формы
form.addEventListener('submit', function(event) {
    event.preventDefault();
    // this - форма

    const validation = validateForm(this);
    if (!validation.isValid) {
        formState = FORM_STATES.ERROR;
        formStatus.textContent = `Ошибки: ${validation.errors.join(', ')}`;
        formStatus.style.color = 'red';
        return;
    }

    formState = FORM_STATES.SUBMITTED;
    formData = validation.data;
    updateUI.call(this);

    console.log('Данные формы:', formData);
    console.log('Контекст submit:', this);
});

// Сброс формы
resetFormBtn.addEventListener('click', function() {
    // this - кнопка сброса
    formState = FORM_STATES.EMPTY;
    formData = {};
    updateUI.call(form);
    console.log('Форма сброшена');
});

// Инициализация
updateUI();

// ЗАДАНИЕ 5: Множественные события
console.log('=== Задание 5: Множественные события ===');

const eventDisplay = document.getElementById('eventDisplay');
const multiArea = document.getElementById('multiEventArea');
const clearBtn = document.getElementById('clearBtn');

// Машина состояний для событий мыши
const MOUSE_STATES = {
    IDLE: 'idle',
    HOVER: 'hover',
    MOVE: 'move',
    CLICK: 'click'
};

let mouseState = MOUSE_STATES.IDLE;
let keyState = { shift: false, ctrl: false, alt: false };

// Функция логирования с контекстом
function logEvent(eventType, context) {
    const timestamp = new Date().toLocaleTimeString();
    const message = `[${timestamp}] ${eventType} (контекст: ${context.tagName || context})`;
    console.log(message);
    return message;
}

// Обработчики событий мыши
multiArea.addEventListener('mouseenter', function(event) {
    mouseState = MOUSE_STATES.HOVER;
    const msg = logEvent('Наведение мыши', this);
    eventDisplay.textContent = `🐭 ${msg}`;
    this.style.backgroundColor = '#e8f4f8';
});

multiArea.addEventListener('mouseleave', function(event) {
    mouseState = MOUSE_STATES.IDLE;
    const msg = logEvent('Уход мыши', this);
    eventDisplay.textContent = `🐭 ${msg}`;
    this.style.backgroundColor = '#f9f9f9';
});

multiArea.addEventListener('mousemove', function(event) {
    if (mouseState !== MOUSE_STATES.HOVER) return;
    mouseState = MOUSE_STATES.MOVE;
    // Используем event для получения координат
    const coords = `(${event.offsetX}, ${event.offsetY})`;
    const msg = logEvent(`Движение мыши ${coords}`, this);
    // Обновляем display только если не было клика
    if (mouseState !== MOUSE_STATES.CLICK) {
        eventDisplay.textContent = `🐭 ${msg}`;
    }
});

multiArea.addEventListener('click', function(event) {
    mouseState = MOUSE_STATES.CLICK;
    const msg = logEvent('Клик мышью', this);
    eventDisplay.textContent = `🖱️ ${msg}`;
    this.style.backgroundColor = '#d4edda';

    // Возврат в состояние hover через секунду
    setTimeout(() => {
        if (this.matches(':hover')) {
            mouseState = MOUSE_STATES.HOVER;
            this.style.backgroundColor = '#e8f4f8';
            eventDisplay.textContent = `🐭 Наведение мыши (возврат)`;
        }
    }, 1000);
});

// Обработчики клавиш с контекстом
document.addEventListener('keydown', function(event) {
    // this - document
    const key = event.key;
    const isModifier = ['Shift', 'Control', 'Alt'].includes(key);

    if (isModifier) {
        const keyMap = {
            'Shift': 'shift',
            'Control': 'ctrl',
            'Alt': 'alt'
        };
        keyState[keyMap[key]] = true;
        const msg = logEvent(`Нажата клавиша ${key} (модификатор)`, this);
        eventDisplay.textContent = `⌨️ ${msg}`;
        return;
    }

    // Обычные клавиши
    const msg = logEvent(`Нажата клавиша "${key}"`, this);
    const stateInfo = Object.keys(keyState)
        .filter(k => keyState[k])
        .join('+');

    const displayText = stateInfo
        ? `⌨️ ${msg} (${stateInfo})`
        : `⌨️ ${msg}`;
    eventDisplay.textContent = displayText;
});

document.addEventListener('keyup', function(event) {
    const key = event.key;
    if (['Shift', 'Control', 'Alt'].includes(key)) {
        const keyMap = {
            'Shift': 'shift',
            'Control': 'ctrl',
            'Alt': 'alt'
        };
        keyState[keyMap[key]] = false;
        const msg = logEvent(`Отпущена клавиша ${key}`, this);
        eventDisplay.textContent = `⌨️ ${msg}`;
    }
});

// Очистка
clearBtn.addEventListener('click', function() {
    // this - кнопка
    eventDisplay.textContent = 'Очищено';
    console.log('События очищены');

    // Сброс состояний
    mouseState = MOUSE_STATES.IDLE;
    Object.keys(keyState).forEach(k => keyState[k] = false);
    multiArea.style.backgroundColor = '#f9f9f9';

    setTimeout(() => {
        eventDisplay.textContent = 'Ожидание события...';
    }, 1000);
});

// Отображение текущего состояния (для отладки)
function showState() {
    console.log(`Состояние мыши: ${mouseState}`);
    console.log(`Состояние клавиш:`, keyState);
}

// Показываем состояние каждые 5 секунд
setInterval(showState, 5000);

// ЗАДАНИЕ 6: Комплексная машина состояний
console.log('=== Задание 6: Комплексная машина состояний ===');

const machineDisplay = document.getElementById('machineDisplay');
const historyDisplay = document.getElementById('historyDisplay');
const nextBtn = document.getElementById('nextBtn');
const prevBtn = document.getElementById('prevBtn');
const resetMachineBtn = document.getElementById('resetMachineBtn');

// Определение состояний
const MACHINE_STATES = {
    INIT: 'init',
    STEP1: 'step1',
    STEP2: 'step2',
    STEP3: 'step3',
    COMPLETE: 'complete'
};

// Транзиции
const TRANSITIONS = {
    [MACHINE_STATES.INIT]: {
        next: MACHINE_STATES.STEP1,
        back: null,
        reset: MACHINE_STATES.INIT
    },
    [MACHINE_STATES.STEP1]: {
        next: MACHINE_STATES.STEP2,
        back: MACHINE_STATES.INIT,
        reset: MACHINE_STATES.INIT
    },
    [MACHINE_STATES.STEP2]: {
        next: MACHINE_STATES.STEP3,
        back: MACHINE_STATES.STEP1,
        reset: MACHINE_STATES.INIT
    },
    [MACHINE_STATES.STEP3]: {
        next: MACHINE_STATES.COMPLETE,
        back: MACHINE_STATES.STEP2,
        reset: MACHINE_STATES.INIT
    },
    [MACHINE_STATES.COMPLETE]: {
        next: null,
        back: MACHINE_STATES.STEP3,
        reset: MACHINE_STATES.INIT
    }
};

// Класс машины состояний
class StateMachine {
    constructor(initialState) {
        this.state = initialState;
        this.history = [initialState];
        this.listeners = [];
        this.context = this; // Сохраняем контекст
    }

    // Переход в новое состояние
    transition(newState, action) {
        if (!newState) {
            console.warn('Невозможный переход');
            return false;
        }

        console.log(`Переход: ${this.state} -> ${newState} (действие: ${action})`);

        // Выполняем действие перед переходом
        if (action && typeof action === 'function') {
            action.call(this.context, this.state, newState);
        }

        this.state = newState;
        this.history.push(newState);
        this.notifyListeners();
        this.updateDisplay();
        return true;
    }

    // Выполнение действия
    dispatch(action) {
        const transitions = TRANSITIONS[this.state];
        const newState = transitions[action];

        if (newState === undefined || newState === null) {
            console.warn(`Действие "${action}" недоступно в состоянии "${this.state}"`);
            return false;
        }

        return this.transition(newState, action);
    }

    // Подписка на изменения
    subscribe(listener) {
        this.listeners.push(listener);
        return () => {
            this.listeners = this.listeners.filter(l => l !== listener);
        };
    }

    // Уведомление слушателей
    notifyListeners() {
        this.listeners.forEach(listener => {
            listener.call(this.context, this.state, this.history);
        });
    }

    // Обновление отображения
    updateDisplay() {
        const stateNames = {
            [MACHINE_STATES.INIT]: 'Начало',
            [MACHINE_STATES.STEP1]: 'Шаг 1',
            [MACHINE_STATES.STEP2]: 'Шаг 2',
            [MACHINE_STATES.STEP3]: 'Шаг 3',
            [MACHINE_STATES.COMPLETE]: 'Завершено'
        };

        const colors = {
            [MACHINE_STATES.INIT]: '#f0f0f0',
            [MACHINE_STATES.STEP1]: '#e3f2fd',
            [MACHINE_STATES.STEP2]: '#e8f5e9',
            [MACHINE_STATES.STEP3]: '#fff3e0',
            [MACHINE_STATES.COMPLETE]: '#f3e5f5'
        };

        machineDisplay.textContent = `Состояние: ${stateNames[this.state]}`;
        machineDisplay.style.backgroundColor = colors[this.state];
        machineDisplay.style.padding = '10px';
        machineDisplay.style.borderRadius = '5px';

        // Обновляем историю
        const historyText = this.history.map(s => stateNames[s]).join(' → ');
        historyDisplay.textContent = `История: ${historyText}`;
    }
}

// Создаем экземпляр
const machine = new StateMachine(MACHINE_STATES.INIT);

// Подписываемся на изменения
machine.subscribe(function(state, history) {
    console.log(`[${new Date().toISOString()}] Состояние изменено на: ${state}`);
    console.log('История:', history);
    console.log('Контекст:', this);
});

// Обработчики с привязкой контекста
function handleNext() {
    // this - кнопка
    console.log('Нажата кнопка "Далее", контекст:', this);
    machine.dispatch('next');
}

function handlePrev() {
    console.log('Нажата кнопка "Назад", контекст:', this);
    machine.dispatch('back');
}

function handleReset() {
    console.log('Нажата кнопка "Сброс", контекст:', this);
    machine.dispatch('reset');
}

// Привязываем обработчики с сохранением контекста кнопки
nextBtn.addEventListener('click', handleNext);
prevBtn.addEventListener('click', handlePrev);
resetMachineBtn.addEventListener('click', handleReset);

// Инициализация отображения
machine.updateDisplay();

// Дополнительно: обработка клавиш для управления
document.addEventListener('keydown', function(event) {
    if (event.key === 'ArrowRight') {
        machine.dispatch('next');
    } else if (event.key === 'ArrowLeft') {
        machine.dispatch('back');
    } else if (event.key === 'r') {
        machine.dispatch('reset');
    }
});
