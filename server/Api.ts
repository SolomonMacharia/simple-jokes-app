
type Joke = {
    id: string
    url: string
    value: string
    icon_url: string
    created_at: string
    updated_at: string
    categoryies: string[]
}

export const getCategories = async () => {
    const res = await fetch('https://api.chucknorris.io/jokes/categories')
    const resJson = await res.json() as string[]
    return resJson.map((name: string) => ({ name }))
}

export const getRandomJoke = async (category: string) => {
    const res = await fetch(`https://api.chucknorris.io/jokes/random?category=${category}`);
    const resJson = await res.json() as Promise<Joke>
    return resJson
}