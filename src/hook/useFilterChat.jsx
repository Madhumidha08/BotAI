import data from '../data.json'

export const useFilterChat = () => {

    const onFilter = (qus) => {
        return data.filter((ele) => ele.question.toLowerCase().includes(qus.toLowerCase()))
    }

    return {onFilter}
}