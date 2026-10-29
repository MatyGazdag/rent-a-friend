
export const API_ROUTES = {
    AUTH: {
        LOGIN: '/api/v1/auth/login',
        REGISTER: 'api/v1/auth/register'
    },
    BOOKING: {
        BOOK: '/api/v1/booking/',
        REMOVE: '/api/v1/booking/remove',
        ADD: '/api/v1/booking/add'
    }
} as const