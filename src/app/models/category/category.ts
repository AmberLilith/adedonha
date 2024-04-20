import { Answer } from "../answer/answer"

export class Category {
    name: string
    answers: Answer[] = []
    score: number = 0

    constructor(name: string, categoriesQuantity: number) {
        this.name = name
        this.answers = this.setDefaultAnswerList(categoriesQuantity)
    }

    setDefaultAnswerList(categoriesQuantity: number): Answer[] {
        const answers: Answer[] = []
        for (let i = 0; i < categoriesQuantity; i++) {
            answers.push(new Answer())
        }
        return answers
    }



}
