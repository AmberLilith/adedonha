import { Category } from "../category/category"

export class Player {
    nickName: string
    categories: Category[]
    totalScore: number
    active: boolean

    constructor(nickName: string, categoriesNames: string[], totalScore: number, active: boolean) {
        this.nickName = nickName
        this.totalScore = totalScore
        this.categories = this.setDefaultCategoriesList(categoriesNames)
        this.active = active
    }

    setDefaultCategoriesList(categories: string[]) {
        const categoriesList: Category[] = []
        for (const category of categories) {
            categoriesList.push(new Category(category, categories.length))
        }
        return categoriesList
    }

}
