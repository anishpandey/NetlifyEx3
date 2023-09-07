export default async (request, context) =>
{
    return new Response("Hello World Example 3", 
    {
        headers:
        {
            "content-type" : "text/hrml",
        },
    });
};