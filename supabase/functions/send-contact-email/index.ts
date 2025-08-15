import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.53.1';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

interface ContactEmailRequest {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface NewsletterRequest {
  email: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const supabase = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_ANON_KEY') ?? ''
    );

    const url = new URL(req.url);
    const path = url.pathname;

    if (path.endsWith('/contact')) {
      // Handle contact form submission
      const { name, email, subject, message }: ContactEmailRequest = await req.json();

      if (!name || !email || !subject || !message) {
        return new Response(
          JSON.stringify({ error: 'All fields are required' }),
          { status: 400, headers: { "Content-Type": "application/json", ...corsHeaders } }
        );
      }

      // Store submission in database
      const { error: dbError } = await supabase
        .from('contact_submissions')
        .insert([{
          name,
          email,
          subject,
          message
        }]);

      if (dbError) {
        console.error('Database error:', dbError);
        return new Response(
          JSON.stringify({ error: 'Failed to store submission' }),
          { status: 500, headers: { "Content-Type": "application/json", ...corsHeaders } }
        );
      }

      // Send email using SMTP (simulated for now since we can't use Nodemailer directly)
      console.log('Contact form submission received:', {
        name,
        email,
        subject,
        message,
        timestamp: new Date().toISOString()
      });

      // In a real implementation, you would use a service like Resend or SendGrid here
      // For now, we'll log the email details and simulate success
      const emailBody = `
        New Contact Form Submission:
        
        Name: ${name}
        Email: ${email}
        Subject: ${subject}
        
        Message:
        ${message}
        
        Submitted at: ${new Date().toISOString()}
      `;

      console.log('Email to be sent to bilgatesowuor@gmail.com:', emailBody);

      return new Response(
        JSON.stringify({ 
          success: true, 
          message: 'Thank you! Your message has been sent successfully.' 
        }),
        {
          status: 200,
          headers: { "Content-Type": "application/json", ...corsHeaders }
        }
      );

    } else if (path.endsWith('/newsletter')) {
      // Handle newsletter subscription
      const { email }: NewsletterRequest = await req.json();

      if (!email) {
        return new Response(
          JSON.stringify({ error: 'Email is required' }),
          { status: 400, headers: { "Content-Type": "application/json", ...corsHeaders } }
        );
      }

      // Store subscription in database
      const { error: dbError } = await supabase
        .from('newsletter_subscriptions')
        .insert([{ email }]);

      if (dbError) {
        if (dbError.code === '23505') { // Unique constraint violation
          return new Response(
            JSON.stringify({ message: 'Thanks for subscribing!' }),
            { status: 200, headers: { "Content-Type": "application/json", ...corsHeaders } }
          );
        }
        console.error('Database error:', dbError);
        return new Response(
          JSON.stringify({ error: 'Failed to store subscription' }),
          { status: 500, headers: { "Content-Type": "application/json", ...corsHeaders } }
        );
      }

      // Send notification email (simulated)
      console.log('Newsletter subscription received:', {
        email,
        timestamp: new Date().toISOString()
      });

      const emailBody = `
        New Newsletter Subscriber:
        
        Email: ${email}
        Subscribed at: ${new Date().toISOString()}
      `;

      console.log('Email to be sent to bilgatesowuor@gmail.com with subject "New Newsletter Subscriber":', emailBody);

      return new Response(
        JSON.stringify({ 
          success: true, 
          message: 'Thanks for subscribing!' 
        }),
        {
          status: 200,
          headers: { "Content-Type": "application/json", ...corsHeaders }
        }
      );
    }

    return new Response(
      JSON.stringify({ error: 'Invalid endpoint' }),
      { status: 404, headers: { "Content-Type": "application/json", ...corsHeaders } }
    );

  } catch (error: any) {
    console.error('Error in send-contact-email function:', error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders }
      }
    );
  }
};

serve(handler);