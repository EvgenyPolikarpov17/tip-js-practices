"use strict";

const totalTasks = 12;
const completedTasks = 5;
const dailyLimit = 3;

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

const isDailyLimitValid =
  Number.isFinite(dailyLimit) &&
  Number.isInteger(dailyLimit) &&
  dailyLimit >= 1 &&
  dailyLimit <= 1000;

if (!isTotalTasksValid || !isCompletedTasksValid || !isDailyLimitValid) {
  console.log("Ошибка: некорректные входные данные");
} else {
  let remainingTasks = totalTasks - completedTasks;
  let day = 0;

  if (remainingTasks === 0) {
    console.log("Все задачи уже выполнены");
    console.log("Потребуется дней: 0");
  } else {
    console.log(`Осталось задач: ${remainingTasks}`);

    while (remainingTasks > 0) {
      day += 1;

      const tasksToday = Math.min(dailyLimit, remainingTasks);
      remainingTasks -= tasksToday;

      console.log(
        `День ${day}: выполнено ${tasksToday}, осталось ${remainingTasks}`
      );
    }

    console.log(`Потребуется дней: ${day}`);
  }
}