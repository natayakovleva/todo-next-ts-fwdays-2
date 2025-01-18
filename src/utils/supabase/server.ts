
import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";

export const createClient = async () => {
  const cookieStore = await cookies(); 

  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        
        getAll() {
          return cookieStore.getAll();
        },
        
        async setAll(cookiesToSet) {
          try {
            const mutableCookies = await cookies();  
            cookiesToSet.forEach(({ name, value, options }) => {
              mutableCookies.set(name, value, options);  
            });
          } catch (error) {
            console.error("Error setting cookies:", error);
          }
        },
      },
    }
  );
};
