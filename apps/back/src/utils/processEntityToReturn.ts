type InputEntity = {
    id: number,
} & Record<string, unknown>;

type OutputEntity = {
    data: {
        id: number,
        attributes: Record<string, unknown>,
    }
}

export const processEntityToReturn = (data: InputEntity): OutputEntity => {
    return {
        data: {
            id: data.id,
            attributes: {
                ...data,
            },
        }
    }
}