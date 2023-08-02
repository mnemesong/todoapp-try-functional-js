import * as todo from "../../todo-domain"
import * as abstr from "../../abstracts"
import {v4 as uuid} from "uuid"

export type T = abstr.record.T<Omit<todo.resp.T, 'tasks'>>

export const createNew = (name: string): T => ({
    id: uuid(),
    name: name, 
})

export const toTodoResponsible = (
    t: T, 
    tasks: todo.resp.task.T[] = []
): todo.resp.T => ({
    id: t.id,
    name: t.name,
    tasks: tasks,
})