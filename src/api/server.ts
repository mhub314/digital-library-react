const token = '983c77b8fd4726a7d9c465d1b6ce109c5ebf0171b6704d45'

export const server_calls = {
    get: async () => {
        const response = await fetch(`https://digital-library-assignment.onrender.com/api/books`,
        {
            method: 'GET',
            headers: {
                'Content-Type': 'applicatoin/json',
                'Access-Control-Allow-Origin': '*',
                // 'User-Agent':'insomnia/8.6.1',
                'x-access-token': `Bearer ${token}`
            }
        });

        if (!response.ok){
            throw new Error('Failed to fetch data from server')
        }

        return await response.json()
    },

    create: async ( data: any = {}) => {
        const response = await fetch(`https://digital-library-assignment.onrender.com/api/books`,
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                // 'User-Agent':'insomnia/8.6.1',
                'x-access-token': `Bearer ${token}`
            },
            body: JSON.stringify(data)
        })

        if (!response.ok) {
            throw new Error('Failed to create new data on the server')
        }

        return await response.json()
    },

    update: async (id: string, data: any = {}) => {
        const response = await fetch(`https://digital-library-assignment.onrender.com/api/books/${id}`,
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                // 'User-Agent':'insomnia/8.6.1',
                'x-access-token': `Bearer ${token}`
            },
            body: JSON.stringify(data)
        })

        if (!response.ok) {
            throw new Error('Failed to update new data on the server')
        }

        return await response.json()
    },

    delete: async (id: string) => {
        const response = await fetch(`https://digital-library-assignment.onrender.com/api/books/${id}`,
        {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                // 'User-Agent':'insomnia/8.6.1',
                'x-access-token': `Bearer ${token}`
            },

        })

        if (!response.ok) {
            throw new Error('Failed to delete data on the server')
        }

        return;
    },
}