export class AppError extends Error {
    public readonly statusCode: number;
    public readonly isOperational: boolean;
    public readonly details?: any;

    constructor(message: string, 
        statusCode: number, 
        isOperational = true, 
        details?: any) {
        super(message);
        this.statusCode = statusCode;
        this.isOperational = isOperational;
        this.details = details;
        Error.captureStackTrace(this);
    }

   
}   

 export class NotFoundError extends AppError {
        constructor(message: string = 'Resource not found', details?: any) {
            super(message, 404,);
        }
    }

 // validation error
 export class ValidationError extends AppError {
    constructor(message: string = 'Invalid request data', details?: any) {
        super(message, 400, true, details);
    }
} 

// authentication error
export class AuthenticationError extends AppError {
    constructor(message: string = 'Authentication failed') {
        super(message, 401,);
    }
}
// Forbidden error
export class ForbiddenError extends AppError {
    constructor(message: string = 'Access denied') {
        super(message, 403,);
    }
}
// database error
export class DatabaseError extends AppError {
    constructor(message = 'Database error', details?: any) {
        super(message, 500, true, details);
    }
}

//Rate limit error
export class RateLimitError extends AppError {
    constructor(message = 'Too many requests,Please try again later') {
        super(message, 429,);
    }   
}

