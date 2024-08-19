import { neon } from '@neondatabase/serverless';

export async function POST(req: Request) {
    const sql = neon(process.env.DATABASE_URL!);
    try {
        const { name, email, clerkId } = await req.json();

        if (!name || !email || !clerkId) {
            return Response.json(
                { error: "Missing required fields" },
                { status: 400 }
            )
        };

        const user = await sql`
            INSERT INTO users (
                name, 
                email, 
                clerk_id
            ) VALUES (
             ${name}, 
             ${email}, 
             ${clerkId}
            ) RETURNING *
        `;

        return new Response(JSON.stringify(
            { data: user }),
            { status: 201 }
        );
    } catch (err) {
        console.error(err);
        return Response.json(
            { error: err },
            { status: 500 }
        )
    }
}