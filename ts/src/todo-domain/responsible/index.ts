import * as task from "./task"
export * as task from "./task"

export type T = {
    id: string,
    name: string,
    tasks: task.T[]
}

export const clone = (u: T) => ({...u})

export const withNewTask = (t: T, task: task.T) => ({
    id: t.id,
    name: t.name,
    tasks: [...t.tasks, task]
})

export const switchTask = (t: T, taskId: string) => ({
    id: t.id,
    name: t.name,
    tasks: t.tasks.map(el => (el.id === taskId) ? task.switchTask(el) : el)
})

export const switchManyTasks = (t: T, taskIds: string[]) => taskIds
    .reduce((acc: T, tId: string) => switchTask(t, tId), t)