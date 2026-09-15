"use strict";

const totalTasks = 12;
const completedTasks = 5;

const isTotalTasksValid =
  Number.isFinite(totalTasks) &&
  Number.isInteger(totalTasks) &&
  totalTasks >= 0 &&
  totalTasks <= 1000;

const isCompletedTasksValid =
  Number.isFinite(completedTasks) &&
  Number.isInteger(completedTasks) &&
  completedTasks >= 0 &&
  completedTasks <= totalTasks;

if (!isTotalTasksValid || !isCompletedTasksValid) {
  console.log("Ошибка: некорректные данные о количестве задач");
} else if (totalTasks === 0 && completedTasks === 0) {
  console.log("Задач пока нет");
} else {
  const remainingTasks = totalTasks - completedTasks;
  const percentage = completedTasks / totalTasks * 100;

  let status;

  if (completedTasks === 0) {
    status = "Не начато";
  } else if (completedTasks === totalTasks) {
    status = "Завершено";
  } else {
    status = "В работе";
  }

  console.log(`Всего задач: ${totalTasks}`);
  console.log(`Выполнено: ${completedTasks}`);
  console.log(`Осталось: ${remainingTasks}`);
  console.log(`Прогресс: ${percentage.toFixed(1)}%`);
  console.log(`Статус: ${status}`);
}