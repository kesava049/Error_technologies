const { z } = require('zod');


function validateInput({name, email, company, message}){
    
    const schema = z.object({
        name: z.string().min(1, { message: 'Name is required' }),
        email: z.string().email({ message: 'Invalid email address' }),
        company: z.string().optional(),
        message: z.string().optional(),
    })

    return schema.safeParse({name, email, company, message});
}



module.exports = { validateInput };

