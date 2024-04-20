import { Category } from "../category/category"

export class Player {
    nickName: string
    categories: Category[]
    totalScore: number

    constructor(nickName: string, categoriesNames: string[], totalScore: number) {
        this.nickName = nickName
        this.totalScore = totalScore
        this.categories = this.setDefaultCategoriesList(categoriesNames)
    }

    setDefaultCategoriesList(categories: string[]) {
        const categoriesList: Category[] = []
        for (const category of categories) {
            categoriesList.push(new Category(category, categories.length))
        }
        return categoriesList
    }

}
