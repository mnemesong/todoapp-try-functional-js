import * as taskR from "./task"

export type T = {
    id: string,
    name: string,
    tasks: taskR.T[]
}

export const clone = (u: T) => ({...u})

export const withNewTask = (t: T, task: taskR.T) => ({
    id: t.id,
    name: t.name,
    tasks: [...t.tasks, task]
})

export const switchTasks = (t: T, taskId: string) => ({
    id: t.id,
    name: t.name,
    tasks: t.tasks.map(el => (el.id === taskId) ? taskR.switchTask(el) : el)
})

export const switchManyTasks = (t: T, taskIds: string[]) => taskIds
    .reduce((acc: T, tId: string) => switchTasks(t, tId), t)