import { createAPIFileRoute } from '@tanstack/react-start/api';
import * as fs from 'fs';
import * as path from 'path';

export const APIRoute = createAPIFileRoute('/api/download')({
  POST: async ({ request }) => {
    try {
      const body = await request.json();
      const { signature, publicKey } = body;

      if (!signature || !publicKey) {
        return new Response(JSON.stringify({ error: "Unauthorized" }), { 
            status: 401,
            headers: { 'Content-Type': 'application/json' }
        });
      }

      const filePath = path.join(process.cwd(), 'private', 'RecallOS_Complete_Documentation.pdf');
      
      if (!fs.existsSync(filePath)) {
        return new Response(JSON.stringify({ error: "File not found" }), { 
            status: 404,
            headers: { 'Content-Type': 'application/json' }
        });
      }

      const fileBuffer = fs.readFileSync(filePath);

      return new Response(fileBuffer, {
        status: 200,
        headers: {
          'Content-Type': 'application/pdf',
          'Content-Disposition': 'attachment; filename="RecallOS_Complete_Documentation.pdf"'
        }
      });
    } catch (e) {
      return new Response(JSON.stringify({ error: "Internal Server Error" }), { 
          status: 500,
          headers: { 'Content-Type': 'application/json' }
      });
    }
  }
});
